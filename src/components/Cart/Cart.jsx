import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import trash from '../Img/trash.svg'
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, cartTotal, sumTotal } = useContext(CartContext);
    

    if (cartTotal() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">
                            No se encontraron productos!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
 
    return ( 
        <div className="container vh-100">
            <div className="row">
                <div className="col">
                    <h1>Tus productos</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={ 4 }>&nbsp;</td>
                                <td className="text-end"><button className="btn btn-danger .bg-gradiant" onClick={ () => { clear() } } title="Vaciar Carrito">Vaciar Carrito</button></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={ item.id }>
                                        <td className="align-middle"><img src={ item.imagen } alt={ item.titulo } width={ 80 } /></td>
                                        <td className="align-middle">{ item.titulo }</td>
                                        <td className="align-middle">{ item.cantidad } x ${ item.precio }</td>
                                        <td className="text-center align-middle">${ item.cantidad * item.precio }</td>
                                        <td className="text-end align-middle"><button className="btn" onClick={ () => { removeItem(item.id) } } title="Eliminar Producto"><img src={ trash } alt="Eliminar Producto" /></button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={ 3 } className="text-end align-middle text-decoration-underline">Total a Pagar</td>
                                <td className="text-center align-middle">${ sumTotal() }</td>
                            </tr>
                            <tr>
                                <td className="text-end" colSpan={ 5 }><Link className="btn btn-info .bt-gradient align-middle" to={ "/checkout" }>Finalizar compra</Link></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
</div>


        
    )
}

export default Cart;