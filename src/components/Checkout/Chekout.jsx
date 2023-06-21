import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Loading/Loading";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const { cart, sumTotal } = useContext(CartContext);

   


    const generarOrden = () => {
        if (nombre.length === 0) {
            return (toast.error('Falta completar el nombre!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            }))
        }

        if (email.length === 0) {
            return (toast.error('Falta completar el EMAIL!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            }))
        }

        if (telefono.length === 0) {
            return (toast.error('Falta completar el Teléfono!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            }))
        }

        const buyer = {
            name: nombre, phone: telefono, email: email
        }
        const items = cart.map(item => ({ id: item.id, title: item.titulo, price: item.precio }))
        
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumTotal();
        const order = { buyer: buyer, items: items, date: date, total: total };
        console.log(order)

        const db = getFirestore();
        const OrdersCollection = collection(db, "ordenes");
        addDoc(OrdersCollection, order).then(resultado => {
            setOrderId(resultado.id);
        })
            .catch(resultado => {
                console.log('no se pudo completar la operación')
            })
    };

    return (
        <div className="container my-5 vh-100">
            <div className="row">
                <div className="col-md-4 offset-md-1 align-middle text-center">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={ (e) => { setNombre(e.target.value) } } />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={ (e) => { setEmail(e.target.value) } } />
                        </div>
                        <div className="mb-3">
                            <label for="nombre" className="form-label" >Telefono</label>
                            <input type="number" className="form-control" onInput={ (e) => { setTelefono(e.target.value) } } />
                        </div>
                        <button type="button" onClick={ generarOrden } className="btn btn-primary">Generar orden</button>
                    </form>
                </div>
                <div className="col-md-4 offset-md-1 align-middle text-center">
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr className="" key={ item.id }>
                                        <td className="align-middle"><img src={ item.imagen } alt={ item.titulo } width={ 60 } /></td>
                                        <td className="align-middle">{ item.titulo }</td>
                                        <td className="align-middle">{ item.cantidad } x ${ item.precio }</td>
                                        <td className="text-center align-middle">${ item.cantidad * item.precio }</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={ 3 } className="text-end align-middle">Total a Pagar</td>
                                <td className="text-center align-middle">${ sumTotal() }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center"   >
                    { orderId ? <Navigate to={ "/gracias/" + orderId }  />

                        : "" }
                </div>
            </div>

        </div>
    )
}

export default Checkout;