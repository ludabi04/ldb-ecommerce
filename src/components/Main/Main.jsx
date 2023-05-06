import { useState } from 'react'
import foto from './assets/img/foto1.jpg'
import './Main.css'
import Swal from 'sweetalert2';




const Main = ({ modificar, agregarCarrito }) => {
    const [modificarCarrito, setModificarCarrito] = useState(0);
    const [actualizarCarrito, setActualizarCarrito] = useState(0)


    const sumar = () => {
        setModificarCarrito(modificarCarrito + 1);
    }

    const restar = () => {
        if (modificarCarrito > 0) {
            setModificarCarrito(modificarCarrito - 1);
        } else {
            Swal.fire(
                'Has llegado a 0!',
                'Tu carrito está vacío'
            )
    }
    }

    const agregar = () => {
        setActualizarCarrito(modificarCarrito)
    }

    console.log(agregar);
    return (
        <div className='cards'>
            <div className='card'>
                <img src={ foto } alt="" />
                <p>descripcion</p>
                <div className='botonesAgregar'>
                    <button className='botonSuma' onClick={sumar}>+</button>
                    <p>{modificarCarrito }</p>
                    <button className='botonSuma' onClick={ restar }>-</button>
                </div>
                <div>
                    <button onClick={agregar}>Agregar</button>
                </div>
                
            </div>
            <div className='card'>
                <img src={foto} alt="" />
                <p>descripcion</p>
                <div className='botonesAgregar'>
                    <button className='botonSuma' onClick={ sumar }>+</button>
                    <p>{modificarCarrito}</p>
                    <button className='botonSuma' onClick={ restar }>-</button>
                </div>
                <div>
                    <button onClick={agregar}>Agregar</button>
                </div>
            </div>
            <div className='card'>
                <img src={foto} alt="" />
                <p>descripcion</p>
                <div className='botonesAgregar'>
                    <button className='botonSuma' onClick={ sumar }>+</button>
                    <p>0</p>
                    <button className='botonSuma' onClick={ restar }>-</button>
                </div>
                <div>
                    <button>Agregar</button>
                </div>
            </div>
            <div className='card'>
                <img src={foto} alt="" />
                <p>descripcion</p>
                <div className='botonesAgregar'>
                    <button className='botonSuma' onClick={ sumar }>+</button>
                    <p>0</p>
                    <button className='botonSuma' onClick={ restar }>-</button>
                </div>
                <div>
                    <button onClick={agregar}>Agregar</button>
                </div>
            </div>
            <div className='contadorCarrito'>
                <div>{ actualizarCarrito }</div>
                <img src="" alt="carrito" className='carritoImg' />
            </div>
        </div>
    )
}

export default Main;