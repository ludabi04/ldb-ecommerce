import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './Item.css'



const Item = ({ producto }) => {

    return (
        <div className="cardContainer"> 
            <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
            <div className="cardBody">
                <img src={ producto.imagen } className="imgCard" alt={ producto.titulo } />
                <h3 className="tituloCard">{ producto.titulo }</h3>
                <p className="descripcionCard">{ producto.descripcion }</p>
                <p className="precioCard">${producto.precio}</p>
            </div>
        </Link>
            <div className="itemCount">
                    <ItemCount stock={ producto.stock} />
            </div>          
        </div>
    )
}

export default Item;



