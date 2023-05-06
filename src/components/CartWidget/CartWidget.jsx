import carrito from './assets/img/carrito.png'

const CartWidget = () => {
    return (
        <div className='contadorCarrito'>
            <div>0</div>
            <img src={ carrito } alt="carrito" className='carritoImg'/>
        </div>
    )
}

export default CartWidget;