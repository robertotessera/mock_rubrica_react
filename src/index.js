import 'jaf-react/dist/index.css'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'prismjs/themes/prism-coy.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { PJTemplate } from 'jaf-react'

import App from './App/App'

import * as serviceWorker from './serviceWorker'
import './index.css'

const renderApp = () => {
  const main = <App />

  const menu = [
    { label: 'HOME', icon: 'pi pi-fw pi-home', to: '/' }
  ]

  ReactDOM.render(
    <PJTemplate
      main={main}
      menu={menu}
      changeLanguage
      changeProfile
      linkAssistenza
      linkManuale
    />,
    document.getElementById('root')
  )
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
