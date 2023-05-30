import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


const Item = ({ producto }) => {

    return (
        <>
            <div className="col-md-4 my-3">
                <div className="card border border-0">
                    <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
                        <img src={ producto.imagen } className="card-img-top" alt={ producto.titulo } />
                        <div className="card-body">
                            <h3>{ producto.titulo }</h3>
                            <p className="card-text"><span className="text-secondary">{ producto.descripcion }</span><span>${ producto.precio }</span></p>
                    <ItemCount stock={ producto.stock} />
                    </div>
                </Link>
                </div>
            </div>
        </>
    )
}

export default Item;