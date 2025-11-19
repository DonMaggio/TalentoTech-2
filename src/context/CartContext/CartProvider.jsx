import { useState } from "react"
import { CartContext } from "./CartContext"

// Proveedor del contexto con funcionalidades
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const exists = (id) => {
        const exist = cart.some((prod) => prod.id === id)
        return exist
    };

    const addItem = (item) => {
        if (exists(item.id)) {
            // Uso MAP para cuidar la mutación a nivel del array
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    // Cuido la mutacion a nivel del objeto
                    return { ...prod, quantity: prod.quantity + item.quantity }
                } else {
                    return prod
                }
            })
            setCart(updatedCart)
            alert(`Producto agregado`)
        } else {
            setCart([...cart, item])
            alert(`${item.name} agregado`)
        }
    };


    const deleteItem = (id) => {
        const filtered = cart.filter((p) => p.id !== id)
        setCart(filtered)
        alert("Producto Eliminado")
    }


    const clearCart = () => {
        setCart([])
    }

    const getTotalItem = () => {
        //if (cart.length) {
        //    return cart.length
        //}

        const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0)
            return totalItems
    }

    const total = () => {
        const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0)

        return Math.round(total*100) / 100
    }

    const checkout =() => {
        const ok = confirm("¿Desea finalizar la compra?")

        if(ok) {
            alert("Compra realizada con éxito!")
            clearCart()
        }
    }

    console.log(cart)
    const value = {cart, addItem, clearCart, getTotalItem, deleteItem, total, checkout}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}