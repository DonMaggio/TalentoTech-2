import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext"
import './Nav.css'

export const Nav = () => {
    const {getTotalItem} = useCartContext()

    return (
    <nav>
        <h2>LOGO</h2>
        <ul>
            <li>
                <a href={"/"}>Home</a>
            </li>
            <li>
                <Link to={"/category/carpas"}>Carpas</Link>
            </li>
            <li>
                <Link to={"/category/bolsasdedormir"}>Bolsas de dormir</Link>
            </li>
            <li>
                <Link to={"/cart"}>Carrito</Link>
                {getTotalItem() > 0 && (
                    <span className="in-cart">{getTotalItem()}</span>
                )}
            </li>
        </ul>
    </nav>
    ); 
}