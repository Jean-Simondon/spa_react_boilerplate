import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration'
import reportWebVitals from './utils/reportWebVitals'

import store from './redux/store'

import App from './components/App'
import './scss/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister()
reportWebVitals()
