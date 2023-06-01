import Swal from 'sweetalert2'
import './Contacto.css'
import { useEffect, useState } from 'react'

const Contacto = () => {
    const [form, setForm] = useState(false);
    const alerta = () => {
        Swal.fire("formulario enviado")
        setForm(true)
        console.log(form)
    }
    const formulario = <div className="contacto">
        <div>
            <label for="exampleFormControlInput1" ClassName="dato">Email </label>
            <input type="email" ClassName="form-control" id="exampleFormControlInput1" placeholder="nombre@mail.com" />
        </div>
        <div>
            <label for="exampleFormControlTextarea1" ClassName="dato">Mensaje</label>
            <textarea ClassName="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className='boton'>
            <button type='sumbit' onClick={ alerta }>Enviar</button>
        </div>
    </div>
    
    const mensajeEnviado = <div className='mensajeEnviado'> Tu mensajes ha sido enviado con exito!</div>



    const resultado = 
        form ? mensajeEnviado : formulario 
    
    

    return (
        <div className="vh-100"> {resultado} </div>
    )
}


export default Contacto;