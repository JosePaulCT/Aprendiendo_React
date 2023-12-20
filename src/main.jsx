import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

/*Primera nota:
Los componentes deben ser PascalKeys, es porque no es capaz de
diferenciar entre el elemento html a un componente*/
const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <App/>
)