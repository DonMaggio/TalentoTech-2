import { useCartContext } from "../../context/CartContext/useCartContext"
import { Item } from "../Item/Item"

export const Cart = () => {
    const {cart, clearCart, getTotalItem} = useCartContext()

    return (<Cart>
    <div>
        <h1>Carrito de compras</h1>

        {getTotalItem() > 0 ? (
            <ul>
                {cart.map((prod) => (
                    <li key={id}>{prod.name} - {prod.price}</li>
                ))}
            </ul>
        ) : (<p>El carrito está vacio</p>)}
    </div>
    </Cart>)
}