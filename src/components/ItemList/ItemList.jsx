import Item from "../Item/Item";


const ItemList = ({ productos }) => {
    return (
        <>
            { productos.map(prod => <Item key={ prod.id } producto={ prod } className="contenedorItem"/>) }
        </>
    )
}

export default ItemList;