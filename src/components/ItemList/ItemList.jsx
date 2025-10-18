import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css"

// se recibe la prop "list" desde ItemListContainer
// Itero para mostrar todos los productos 
export const ItemList = ({ list }) => {
    return (
    <div className="product-grid">
        {list.length ? 
            (list.map((prod) => (
                <Link to={`/detail/${prod.id}`} key={prod.id}>
                    <Item {...prod}/>
                </Link>))     
            ): 
            (<p>"No se encontraron productos"</p>)}
    </div>
    );
}