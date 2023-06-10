import { Link } from "react-router-dom";
import './Item.css'
import ItemCount from "../ItemCount/ItemCount";



const Item = ({ producto, stock }) => {

    return (
        <div className="cardContainer"> 
            <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
            <div className="cardBody">
                <img src={ producto.imagen } className="imgCard" alt={ producto.titulo } />
                <h3 className="tituloCard">{ producto.titulo }</h3>
                    <p className="descripcionCard">{ producto.descripcion }</p>
                    
            </div>
        </Link>
                   
        </div>
    )
}

export default Item;



