import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({producto, precio}) => {
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
                <div className="col">
                    <div className="row">
                        <h1 className="text-center">{ item.titulo } </h1>
                        <h3 className="text-center">{ item.descripcion }</h3>
                        <p className="text-center">{ precio }{ item.precio }</p>
                        <p>{ item.stock}</p>
                        <ItemCount stock={ item.stock }  inicio={ item.stock } />
                    </div>
                </div>
                </div>
            </div>
    )
} 

export default ItemDetail;