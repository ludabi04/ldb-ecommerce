import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import Loading from "../Loading/Loading";
import { getFirestore, query, where, collection, getDocs } from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

      useEffect(() => {
          const db = getFirestore();
          const itemsCollection = collection(db, "items");
          const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

          getDocs(q).then(resultado => {
              setItems(resultado.docs.map((producto) => ({ id: producto.id, ...producto.data() })));
              setLoading(false)
          });
      }, [id]);


    return (

        <div className="listContainer">
            { loading ? <Loading /> :
                <ItemList productos={ items } /> }
        </div>

    )
}

export default ItemListContainer;

