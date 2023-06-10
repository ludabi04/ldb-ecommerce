import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from '../productos.json'
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(item => item.id === parseInt(id)));
            }, );
        });

        promesa.then(datos => {
            setItem(datos);
        });
    }, [id]);

    return (
        <>
            <ItemDetail producto={ item } precio={ "$" } />
            

        </>
    )
}

export default ItemDetailContainer;