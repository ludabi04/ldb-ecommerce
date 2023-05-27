import { useEffect } from "react";
import { useState } from "react";
import productos from '../productos.json'
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        promesa.then(data => {
            setItems(data);
        });
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <ItemList productos={ items } />
            </div>
        </div>
    )
}

export default ItemListContainer;

