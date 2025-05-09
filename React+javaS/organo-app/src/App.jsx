import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  // const [count, setCount] = useState(0)

  return (
  <div className= "App">
    <Banner/>
    <Formulario />
  </div>
  )
}

export default App
