import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from '../productos.json'
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
 

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(item => item.id === parseInt(id)));
            }, );
        });

        promesa.then(data => {
            setItem(data);
            setLoading(false)
        });
    }, [id]);

    return (
        <>
            {loading ? <Loading/> :
                <ItemDetail producto={ item } precio={ "$" } /> }
            

        </>
    )
}

export default ItemDetailContainer;