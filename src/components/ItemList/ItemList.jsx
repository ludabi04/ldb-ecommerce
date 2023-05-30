import Item from "../Item/Item";


const ItemList = ({ productos }) => {
    return (
        <>
            { productos.map(producto => <Item key={ producto.id } producto={ producto } className="contenedorItem"/>) }
        </>
    )
}

export default ItemList;