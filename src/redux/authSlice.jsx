import { createSlice } from '@reduxjs/toolkit'
import userAPI from '../api/userAPI'
import { getRoleFromToken } from '../utils/helpers'

const authReducerInit = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('auth'))
      return {
        isLoggedIn: true,
        loginErrorMsg: null,
        email: stored.email,
        token: stored.token,
        user: stored.user,
        role: getRoleFromToken()
      }
    } catch {
      return {
        isLoggedIn: false,
        loginErrorMsg: null,
        email: null,
        token: null,
        user: null,
        role: 'ANON'
      }
    }
}

const initialState = authReducerInit();

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state) {
            const stored = JSON.parse(localStorage.getItem('auth'));
            state.isLoggedIn = true;
            state.loginErrorMsg = null;
            state.email = stored.email;
            state.token = stored.token;
            state.user = stored.user;
            state.role = getRoleFromToken()
        },
        loginError(state) {
            state.isLoggedIn = false;
            // state.loginErrorMsg = action.payload.errorMsg;
            state.loginErrorMsg = "Erreur au cours de la connexion";
            state.email = null;
            state.token = null;
            state.user = null
            state.role = 'ANON'
        },
        logout(state) {
            localStorage.removeItem('auth');
            state.isLoggedIn = false;
            state.loginErrorMsg = null;
            state.email = null;
            state.token = null;
            state.user = null
            state.role = 'ANON'
        },
        signinSuccess(state, action) {
            // state = state,
        },
        signinError(state, action) {
            // state = state,
        }
    }
})

// Get token then use it to access profile
export const login = (action) => {
    return async (dispatch) => {

        // Fetching
        const fetchData = async (action) => {
            const resp = await userAPI.getToken(action.email, action.password);
            const profileResp = await userAPI.getProfile(resp.data.token);
            localStorage.setItem('auth', JSON.stringify({
                email: action.email,
                token: resp.data.token,
                user: profileResp.data,
            }))
            return [ action.email, resp.data.token, profileResp.data ];
        }

        let respData;
        // Dispatching
        try {
            respData = await fetchData(action);
            dispatch(authSlice.actions.loginSuccess())
        } catch (error) {
            dispatch(authSlice.actions.loginError());
        } finally {
            return respData;
        }

    }
}

// Create a new User entity in API
export const signin = (action) => {
    return async (dispatch) => {

        // Fetching
        const fetchData = async (action) => {
            const resp = await userAPI.signin(action.firstname, action.lastname, action.email, action.password)
            return resp;
        }

        // Dispatching
        let respData;
        try {
            respData = await fetchData(action);
            return true;
            // dispatch(authSlice.actions.signinSuccess(...respData)) // si jamais un dispatch n??cessaire
            // dispatch snackMSG
            // un message dans l'UI
        } catch (error) {
            return false;
            // dispatch(authSlive.actions.signinError(...respData)) // si jamais un dispatch n??cessaire
            // dispatch snackMSG
            // un message dans l'UI
        }

    }
}

export const authActions = authSlice.actions

export default authSlice.reducer