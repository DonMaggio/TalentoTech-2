import { useState } from "react"
import { AuthContext } from "./AuthContext"

/* Componente proveedor del contexto de autenticación */
/* Provee el estado de autenticación y funciones para login y logout */
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const saved = sessionStorage.getItem("session")
        if(saved){
            return JSON.parse(saved)
        }

        return null
    })

    const login = (name, password) => {
        if(name === "admin" && password === "1234") {
            const session = { name: name }
            setUser(session)
            sessionStorage.setItem("session", JSON.stringify(session))
            return true
        }
        return false 
    }

    const logout = () => {
        sessionStorage.removeItem("session")
        setUser(null)
        alert("Sesión cerrada")
    }

    return (
    <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
    )
}