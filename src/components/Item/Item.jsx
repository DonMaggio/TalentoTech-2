import "./Item.css"

//Manejo de cada Card individual
export const Item = ({name, price, description, category, imageUrl, children}) => {
    return (
        <article className="card">
            <img src={imageUrl} alt={description} />
            <h3 className="product-title">{name}</h3>
            <p className="product-category">{category}</p>
            <p className="product-description">Descripción: {description}</p>
            <p className="product-price">Precio: ${price}</p>
            {children}
        </article>
    )
}