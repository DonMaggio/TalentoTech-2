import { useEffect, useState } from "react"; // useState para guardar el estado, useEffect para la petición
import { ItemList } from "../ItemList/ItemList"; 
import "./ItemListContainer.css"

//Conexion con API y solicitud de datos
export const ItemListContainer = ({ titulo }) => {
    // estado
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
        .then((response) => {
            if(!response.ok){
                throw new Error("Hubo un problema al buscar los productos");
            }
            return response.json();
        })
        .then((data) => {
            setProducts(data)
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);

    // llamada

    return (
    <section className="item-list-container">
        <h2>{titulo}</h2>
        <div>
            <ItemList list={products} />
        </div>
    </section>);
}
