import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import './ItemCount.css';

const ItemCount = ({ stock, inicio }) => {
    
    const [items, setItems] = useState(inicio);
    const [itemsStock, setItemsStock] = useState(stock);
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

    

    const onAdd = () => {
        setCarrito(carrito + items)
        console.log(items)
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
        <div className="botonesAgregar p-5">
            {<p className="text-center">Carrito : { carrito }  </p>  }
            <div className="botones">
                <button onClick={sumar} className="botonOperar">+</button>
                <p>{ items }</p>
                <button onClick={ restar } className="botonOperar">-</button>
            </div>
            <div className="agregarCarrito text-center" >
                <button onClick={ onAdd } disabled={ items < 1 }>Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount;