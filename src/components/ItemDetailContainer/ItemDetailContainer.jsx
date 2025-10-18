import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});

    const {id} = useParams()

    useEffect(() => {
        fetch("/data/products.json").then((response) => {
                if(!response.ok){
                    throw new Error("No se encontró el producto")
                }
                return response.json();
        }).then((data) => {
                const found = data.find((prod) => prod.id === id)
                if(found){
                    setDetail(found)} 
                else {
                    throw new Error("Producto no encontrado")}
        }).catch(() => {
            console.log(err)
        });
    },[id]);

    return (
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail} />
            ) : (
                <p>Cargando...</p>
            )}
        </main>
)}