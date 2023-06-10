import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import './ItemCount.css';
import { Link } from "react-router-dom";

const ItemCount = ({ stock, inicio, onAdd }) => {
    
    const [items, setItems] = useState(inicio);
    const [itemsStock, setItemsStock] = useState(stock);
    const [itemAdded, setItemAdded ] = useState(false);

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
        setItemsStock(stock);
    }, [stock])


    

    return (
        <div className="botonesAgregar">
            {<p className="textoCarrito">Carrito : { items }  </p>  }
            <div className="botones">
                <button onClick={sumar} className="botonOperar">+</button>
                <p>{ items }</p>
                <button onClick={ restar } className="botonOperar">-</button>
            </div>
            <div className="agregarCarrito text-center" >
                { itemAdded ? <Link to={ "/cart" } className="btn btn-light">Finalizar Compra</Link> : <button type="button" className="btn btn-light" onClick={ addToCart }>Agregar al Carrito</button> }
            </div>
        </div>
    )
}

export default ItemCount;