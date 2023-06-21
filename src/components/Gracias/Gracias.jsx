import { useParams, Link } from "react-router-dom";


const Gracias = () => {

    const { orderId} = useParams();
   
    return (
        <div className="container vh-100 py-5 m-5">
            <div className="row">
                <div className="col text-center">
                    <img src={ "https://i.pinimg.com/originals/5e/f9/d7/5ef9d70b03d22b1acd145b9422d3a33f.gif" } width={200 } alt="" />
                    <h1 className="fs-2 text-center ">Gracias por tu compra</h1>
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