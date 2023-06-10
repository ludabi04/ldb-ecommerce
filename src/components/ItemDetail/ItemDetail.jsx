import { useContext, useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ producto, precio, volver }) => {
    const { addItem } = useContext(CartContext);
    const [item, setItem] = useState({});

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }


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
                    <h1 className="text-center">{ item.titulo } </h1>
                    <h3 className="text-center">{ item.descripcion }</h3>
                    <p className="text-center"><span><b>{ precio }{ item.precio }</b></span></p>
                    <ItemCount stock={ item.stock } onAdd={ onAdd} />

                </div>
            </div>
        </div>
    )
} 

export default ItemDetail;