import { useContext, useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ producto, precio, volver }) => {
    const { addItem } = useContext(CartContext);
    const [item, setItem] = useState({});

    const onAdd = (quantity) => {
        console.log("cantidad: " + quantity)
        addItem(item, quantity);
    }


    useEffect(() => {
        setItem(producto);
    }, [producto]);


    return (
        <div className="container my-5 ">
            <div className="row ">
                <div className="col-md-5 ">
                    <img src={ item.imagen } alt={ item.titulo } className="img-fluid" width={300} />
                </div>
                <div className="col-md-5 offset-md-1 my-2">
                    <h1 className="text-center fs-2 my-5">{ item.titulo } </h1>
                    <h3 className="text-center fs-4 my-5">{ item.descripcion }</h3>
                    <p className="text-center my-5"><span><b>{ precio }{ item.precio }</b></span></p>
                    <ItemCount stock={ item.stock } onAdd={ onAdd } inicio={ 1} />

                </div>
            </div>
        </div>
    )
} 

export default ItemDetail;