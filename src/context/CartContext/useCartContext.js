import { useContext } from "react";
import { CartContext } from "./CartContext";

// Exportación del contexto para utilizarlo en el "custom hook"
// useCartContext es el hook customizando (combina el useContext y el CartContext)
export const useCartContext = () => {
    return useContext(CartContext)
}