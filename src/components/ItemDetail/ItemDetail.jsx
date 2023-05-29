import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(producto);
    }, [producto]);


    return (
        <div className="container my-5 ">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={ item.imagen } alt={ item.titulo } className="img-fluid" />
                </div>
                <div className="col-md-5 py-6">
                    <h1 className="text-center">{ item.titulo }</h1>
                    <h3 className="text-center">{ item.descripcion }</h3>
                    <p className="text-center"><b>${ item.precio }</b></p>
                    <ItemCount stock={item.stock} className="text-center" />
                    <Link to={"/"} className="text-dark text-decoration-none">
                        <div className="text-center"><button>volver</button></div>
                    </Link>
                </div>
            </div>
        </div>
    )
} 

export default ItemDetail;