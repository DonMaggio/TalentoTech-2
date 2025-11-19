import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/useCartContext"
import { Item } from "../Item/Item"

import "./Cart.css"

export const Cart = () => {
    const {cart, clearCart, getTotalItem, deleteItem, total, checkout } = useCartContext()

    return (
        <section className="item-list-container">
        <h2>Carrito de compras</h2>

        {cart.length ? (cart.map((prod) => (
            <Item key={prod.id} {...prod}>
                <div className="span-1">
                    <span>Cantidad: {prod.quantity}</span>
                    <button onClick={() => deleteItem(prod.id)}>Eliminar</button>
                </div>
            </Item> ))
        ) : (
            <p>Tu carrito está vacio.</p>
        )}

        {cart.length ? ( 
        <div className="btn-div">
            <div className="total-pagar">
                <p>Total a pagar: ${total()}</p>
            </div>
            <button className="btn-btn ok-buy" onClick={checkout}>Finalizar compra</button>
            <button className="btn-btn ok-clear" onClick={clearCart}>Vaciar carrito</button>
        </div>
        ) : (
            <Link className="btn-container" to="/">Volver al inicio</Link>
        )}

        </section>
    )
}