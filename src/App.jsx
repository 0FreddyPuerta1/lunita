import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import flower from './assets/flores.jpg'
import aromatica from './assets/aromatica.jpg'
import huevos from './assets/huevos.jpg'
function App() {
  const [count, setCount] = useState(0)
  const [pass, setPass] = useState(false)
  const setPassword = e => {
    setPass(e.target.value)
  }

  const validate = ()  => {
    if(pass == '13/10/2023'){
      setCount(1)
      console.log(pass)
    }else{
      alert("contraseña incorrecta, Vinyeth. Concentrate, tu puedes :)")
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
        <p>Agradezco a la vida el dia/mes/año en el que nos conocimos.</p>
      </>
    )
  }

  if(count == 1){
    return(
      <>
      <h3>Titulo</h3>
      <p>No se como empezar a redactar esto. Llevo casi una hora escribiendo y borrando, borrando y escribiendo.</p>
      <p>Se siente tan bien, que ni siquiera se como explicarlo, es que simplemente es increible.</p>
      <p>hace mucho no me pasaba que alguien me hiciera sentir tanto, lo peor de todo es que no has hecho nada, solo existes y eres y me encanta como eres
        <br /> y disfruto cada momento, cada palabra, cada risa... Cada suspiro.
        <br />
        Es bonito verte y compartir contigo. 
        <br />
        Es bonito abrazarte y sentirte.
        <br />
        Realmente solo el hecho de que existas es bonito.
        <br />
        No se como estés hoy, pero espero que bien. No se si para cuando lees esto aun sostenemos conversaciones por WhatsApp, pero espero que si.
        <br />
        No se si para este momento ya me habrás mandado a la mierda, pero espero que no. Me estoy enredando, es raro, estoy nervioso de solo escribir esto.
        <br />
        Gracias, Vinyeth. Por la inspiracion, por la energia, por todo, por ti.
        <br />
        Dato curioso: La canción Luna Menguante, se llama asi porque:
        <br />
        1. Tu nombre, obviamente, Lunita.
        <br />
        2. Luna menguante quiere decir cambio.
        <br />
        Y pues, resulta que fuiste tu la inspiracion que dio ese 'giro' que tanto estaba buscando artisticamente hablando
        <br />
        disfruto mucho la musica, no se si para este momento ya logras dimensionar que tanto, pero tu me diste algo valioso para disfrutarlo aun mas
        <br />
        me encanta hacer lo que se me da la gana con mi musica, y tu me has dado la llave para ello
        <br />
        agradecido eternamente con Daniela, porque ella ha traido muchisima felicidad a mi vida. Ella te trajo a ti.
        <br />
        Espero que te quedes mucho tiempo, y si ya no estás, gracias por tanto, gracias por existir
        <br />
        Por favor nunca dejes de ser tu, de brillar asi de bonito, de transmitir tu alegria al mundo...
        <br />
        <h3>Te necesitamos, Vinyeth. El mundo necesita gente bonita, como tu. El mundo necesita una luna que lo equilibre.</h3>

      </p>
      <p></p>
      </>
    )
  }
  
}

export default App
