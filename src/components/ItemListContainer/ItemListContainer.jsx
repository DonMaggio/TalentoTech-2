import { useEffect, useState } from "react"; // useState para guardar el estado, useEffect para la petición
import { ItemList } from "../ItemList/ItemList"; 
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/productsServices";

import "./ItemListContainer.css"

//Conexion con API y solicitud de datos
export const ItemListContainer = ({ titulo }) => {
    // estado
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        getProducts(category)
        .then((data) => {setProducts(data);})
        .catch((err) => {console.log(err);});
    },[category]);

    return (
    <section className="item-list-container">
        <h2>{titulo}</h2>
        <div>
            <ItemList list={products} />
        </div>
    </section>);
}
