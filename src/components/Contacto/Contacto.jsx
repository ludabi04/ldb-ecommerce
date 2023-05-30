import Swal from 'sweetalert2'
import './Contacto.css'
import { useEffect, useState } from 'react'

const Contacto = () => {
    const [formulario, setFormulario] = useState(true);

    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            resolve(formulario ? <div className="contacto">
                <div>
                    <label for="exampleFormControlInput1" ClassName="dato">Email </label>
                    <input type="email" ClassName="form-control" id="exampleFormControlInput1" placeholder="nombre@mail.com" />
                </div>
                <div>
                    <label for="exampleFormControlTextarea1" ClassName="dato">Mensaje</label>
                    <textarea ClassName="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='boton'>
                    <button type='sumbit' onClick={alerta}>Enviar</button>
                </div>
            </div> : <div>Formulario Enviado</div>    )
        });
        promesa.then(data=> 
            setFormulario(data))
    },[])
    const alerta = () =>{
        Swal.fire("formulario enviado")
        setFormulario(false)
        console.log(formulario)
    }
    

    return (
       
        <div> {formulario} </div>
    )
}


export default Contacto;