import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className= "App">
    <Banner/>
    <CampoTexto label="Nome"/>
    <CampoTexto label="Cargo"/>
    <CampoTexto label="Imagem"/>
  </div>
  )
}

export default App
