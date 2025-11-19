import { useContext } from "react"
import { AuthContext } from "./AuthContext"

/* Custom hook para usar el contexto de autenticación */
export const useAuthContext = () => {
    return useContext(AuthContext) 
}