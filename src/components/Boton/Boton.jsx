export const Boton = ({texto, color}) => {
    const estilos = {
        backgroundColor: color,
        color: "black",
    }
    return <button style={estilos} onClick={() => alert('Inicia sesión para agregar productos al carrito')}>{texto}</button>
}