import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext"
import './Nav.css'

export const Nav = () => {
    const { getTotalItem } = useCartContext()
    const total = getTotalItem()

    return (
    <nav className="nav-bar">
            <ul className="nav">
                <li className="nav-home"><Link className="nav-link" to={"/"}>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/category/carpa"}>Carpas</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/category/cocina"}>Cocina</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/category/calzado"}>Calzado</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/category/accesorio"}>Accesorios</Link></li>
                <li className="nav-item-cart">
                    <Link className="nav-link-cart" to={"/cart"} aria-label="Carrito">🛒</Link>
                    {total > 0 && (
                        <span className="in-cart" aria-live="polite">{total}</span>
                    )}
                </li>
            </ul>
    </nav>
    ); 
}