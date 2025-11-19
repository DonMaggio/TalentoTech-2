import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext/useAuthContext"
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom" 

import "./Login.css"

export const Login = () => {
    const [userForm, setUserForm] = useState({name:"", password:""})
    const { user, login } = useAuthContext()

    const navigate = useNavigate()
        if(user) {
            return <Navigate to="/admin/alta-product" />
        }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setUserForm({...userForm, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const sucess = login(userForm.name, userForm.password)
        if (sucess) {
            navigate("/admin/alta-product")
        } else {
            alert("Credenciales Incorrectas")
            setUserForm({name:"", password:""})
        }

        return 
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-form-h2">Iniciar Sesión</h2>
            <div className="login-form-div">
                <label className="login-form-label">Usuario</label>
                <input className="login-form-input" type="text" name="name" value={userForm.name} onChange={handleChange}/>
            </div>
            <div className="login-form-div">
                <label className="login-form-label">Contraseña</label>
                <input className="login-form-input" type="password" name="password" value={userForm.password} onChange={handleChange}/>
            </div>
            <div className="login-form-div">
                <button className="login-form-button" type="submit">Iniciar Sesión</button>
            </div>
        </form>
    )
}