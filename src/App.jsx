import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import flower from './assets/flores.jpg'
import aromatica from './assets/aromatica.jpg'
import huevos from './assets/huevos.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Homla Premciosam</h1>
      <img src={flower} alt="" />
      <p>Oye... te traje estas flores, porque te las mereces, porque si</p>
      <p>Aqui tambien te dejo una aromatica de manzanilla</p>
      <img src={aromatica} alt="" />
      <p>Y los huevos que te faltan para admitir que te gusto</p>
      <img src={huevos} alt="" />
      <p>Oye, realmente solo queria hacerte reir un poco... Espero te esté yendo bien con tu trabajo de la U. Besos.</p>
    </>
  )
}

export default App
