import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import './ItemCount.css';
import { Link } from "react-router-dom";

const ItemCount = ({ stock, inicio, onAdd }) => {
    
    const [items, setItems] = useState(inicio);
    const [itemsStock, setItemsStock] = useState(stock);
    const [itemAdded, setItemAdded ] = useState(false);
    const [carrito, setCarrito] = useState(0)

    const sumar = () => {
        if (items < itemsStock) {
            setItems(items+ 1)
        } else {
            Swal.fire('no hay mas stock')
        }   
    }
    const restar = () => {
        if(items > 1){
            setItems(items - 1)
        } else {
            Swal.fire('no podes bajar mas')
        }
    }

    

    const addToCart = () => {
        if (items <= itemsStock) {
            setItemsStock(itemsStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
            console.log("Seleccionaste: " + items + " Productos al Carrito!\nTe quedan: " + itemsStock + " Productos disponibles!");

        };
    }

    useEffect(() => {
        if (carrito + items > itemsStock) {
            Swal.fire("no podes agregar mas ")
            setItems(items - 1)
        } 
    }, [items])

    useEffect(() => {
        setItems(1);
    }, [carrito])


    

    return (
        <div className="botonesAgregar">
            {<p className="textoCarrito">Carrito : { carrito }  </p>  }
            <div className="botones">
                <button onClick={sumar} className="botonOperar">+</button>
                <p>{ items }</p>
                <button onClick={ restar } className="botonOperar">-</button>
            </div>
            <div className="agregarCarrito text-center" >
                { itemAdded ? <Link to={"/cart"} className="btn btn-light">Finalizar Compra</Link> : <Link onClick={ addToCart } disabled={ items < -1 } className="btn btn-light">Agregar</Link> } 
            </div>
        </div>
    )
}

export default ItemCount;