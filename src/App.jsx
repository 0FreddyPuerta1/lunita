import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import flower from './assets/flores.jpg'
import aromatica from './assets/aromatica.jpg'
import huevos from './assets/huevos.jpg'
import img from './assets/img.gif'
function App() {
  const [count, setCount] = useState(0)
  const [pass, setPass] = useState(false)
  const setPassword = e => {
    setPass(e.target.value)
  }

  const validate = ()  => {
    if(pass == 'noa'){
      setCount(1)
      console.log(pass)
    }else{
      alert("contraseña incorrecta, Dani hermosa. Concentrate, tu puedes :). Me lo dijiste por WhatsApp!")
    }
  }
  if(count === 0){
    return(
      <>
        <h4>Digite la contraseña para ingresar a la app</h4>
        <div className='ingreso'>
          <input type="text" name="" id="" onChange={setPassword}/>
          <button onClick={validate}>Ingresar</button>
        </div>
        <p>¿me recuerdas cual es el nombre de tu mascota?</p>
      </>
    )
  }

  if(count == 1){
    return(
      <>
      <h3>No se que poner aqui xD</h3>
      <p>Hola, Dani hermosa. Solo queria mandarte un besito.</p>
      <img src={img}></img>
      </>
    )
  }
  
}

export default App
