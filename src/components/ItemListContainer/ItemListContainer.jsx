import { useEffect } from "react";
import { useState } from "react";
import productos from '../productos.json'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const [loading, setLoading ] = useState(true)

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos);;
            }, 2000);
        });
        
        promesa.then(data => {
            setItems(data);
            setLoading(false)
        });
    }, [id]);

    return (
        
            <div className="listContainer">
            {loading ? <Loading/> :
                <ItemList productos={ items } /> }
            </div>
        
    )
}

export default ItemListContainer;

