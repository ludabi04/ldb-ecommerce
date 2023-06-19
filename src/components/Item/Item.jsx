import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './Item.css'



const Item = ({ producto }) => {

    return (
        <div className="row text-center"> 
            <div className="col col-lg-2 justify-content-md-center card border border-0 ">
            <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
                    <div className="card-body">
                        <img src={ producto.imagen } className="card-img-top " alt={ producto.titulo } />
                <h3>{ producto.titulo }</h3>
                        <p className="card-text"><span className="text-secondary">{ producto.descripcion }</span></p>
            </div>
                </Link>    
            </div>        
        </div>
    )
}

export default Item;



