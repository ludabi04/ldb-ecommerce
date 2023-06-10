import { useEffect } from "react";
import { useState } from "react";
import productos from '../productos.json'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos);;
            }, 2000);
        });

        promesa.then(data => {
            setItems(data);
        });
    }, [id]);

    return (
        
            <div className="listContainer">
            <ItemList productos={ items } /> 
            </div>
        
    )
}

export default ItemListContainer;

