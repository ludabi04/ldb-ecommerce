import { useParams, Link } from "react-router-dom";

const Gracias = () => {

    const { orderId, nombre } = useParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1 className="fs-2 text-center ">Gracias por tu compra { nombre }!</h1>
                    <p className="fs-6 text-center align-middle">Tu número de orden de compra es: <b>{ orderId }</b></p>
                </div>
            <div className="row">
                <div className="text-center col">
                    <Link className="btn btn-primary" to="/">Ir al inicio</Link>
                </div>
            </div>
            </div>
        </div>
)}

export default Gracias;