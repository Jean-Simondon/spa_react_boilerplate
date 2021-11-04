import React from 'react'

import withSnackbar from "../wrappers/withSnackbar";

const Home = (props) => {

  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
      <main>
          <h1>This is Home</h1>
        {/* {props.role === 'SUPER_ADMIN' &&
          <Switch>
            <Route exact path={'/'} render={() => ( <AdminDashboard/> )}/>
          </Switch>
        }
        {props.role === 'ADMIN' &&
          <Switch>
            <Route exact path={'/'} render={() => ( <AdminDashboard/> )}/>
          </Switch>
        }
        {props.role === 'USER' &&
          <Switch>
            <Route path={'/'} render={() => ( <UserDashboard/> )}/>
          </Switch>
        }
        {props.role === 'ANON' &&
          <Switch>
            <Route exact path={'/login'} render={() => <Login mode="login"/>}/>
            <Route exact path={'/signin'} render={() => <Login mode="signin"/>}/>
            <Route path={'/'} render={() => isLoggedIn ? ( <h1>ANONYME</h1> ) : <Redirect to={'/login'}/>}/>
          </Switch>
        } */}
      </main>
  )

  // if (props.isLoggedIn) {
  //   return <Redirect push to="/" />
  // }


}


export default withSnackbar(Home)