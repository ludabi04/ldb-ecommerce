import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import './ItemCount.css';
import suma from '../img/suma.svg'
import resta from '../img/resta.svg'
import { Link } from "react-router-dom";

const ItemCount = ({ producto, stock, inicio }) => {
    
    const [items, setItems] = useState(inicio);
    const [itemsStock, setItemsStock] = useState(stock);
    const [itemsAdded, setItemsAdded] = useState(false);
    const [carrito, setCarrito] = useState(0);


    const onAdd = () => {
        setItems(items)
        console.log(items)
    }

    


    

    return (

        <div className="container my-5">
            <div className="row text-center justify-content-center py-5">
                <div className="col">
                        {/* <img src={ suma } alt="sumar" onClick={ sumar } className="btn " width={ 24 } />  */}
                </div>
                <div className="col">
                    <p>{ itemsStock }</p>
                </div>
                <div className="col">
                    {/* <img src={ resta } alt="sumar" onClick={ restar } className="btn" width={ 24 } />  */}
                </div>
                    
            </div>
            <div className="row text-center justify-content-center ">
                <div className="col">
                    
                    <button onClick={onAdd}>al</button>
                    {/* { itemsAdded ? <Link to="/cart" className="btn btn-light my-3">Finalizar Compra</Link> : <Link onClick={ onAdd } disabled={ items < 1 } className="btn btn-light my-3" >Agregar</Link> } */}
                        
                    </div>
                </div>
        </div>
    )
}

export default ItemCount;