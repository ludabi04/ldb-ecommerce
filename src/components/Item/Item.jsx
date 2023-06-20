import { Link } from "react-router-dom";
import './Item.css'



const Item = ({ producto }) => {

    return (
        <>
            <div className="col-md-3 text-center py-3" >
                <div className="card border border-1" >
                    <Link to={ "/item/" + producto.id } className="text-dark text-decoration-none">
                        <img src={ producto.imagen } className="card-img-top" height={350} alt={producto.titulo} />
                        <div className="card-body " >
                            <h3 className="align-middle titulo fs-5 align-middle">{ producto.titulo } </h3>
                            <p className="card-text desc ">{ producto.descripcion } ${ producto.precio }</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item;



