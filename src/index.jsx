import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

// import './scss/index.scss'
import AppContainer from './AppContainer'
// import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration'
// import reportWebVitals from './utils/reportWebVitals'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <h1>INDEX JS</h1>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
