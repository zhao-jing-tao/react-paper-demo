import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './route'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { BrowserRouter, HashRouter, useRoutes } from 'react-router-dom'
import './style/global.scss'
const App = () => <>{useRoutes(routes)}</>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider locale={zhCN}>
    {window.location.host.indexOf('localhost') > -1 ? (
      <HashRouter>
        <App />
      </HashRouter>
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </ConfigProvider>
)
