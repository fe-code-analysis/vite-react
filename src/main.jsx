import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'; 
import './index.css'
import App from './App'
import {Provider} from 'mobx-react'
import rootStore from './store'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
