import "../ProductFormUI/ProductFormUI.css"

/*componente presentacional*/

export const ProductFormUI = ({product, errors, loading, onChange, onFileChange, onSubmit}) => {
    return (
        <section className="product-form-container">
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Agregar producto</h2>
                <div className="form-group">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" name="name" value={product.name} onChange={onChange} required/>
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Precio:</label>
                    <input type="number" name="price" value={product.price} onChange={onChange} required/>
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Categoría:</label>
                    <select name="category" id="category" value={product.category} onChange={onChange} required>
                        <option value="" disabled>Seleccione una categoría</option>
                        <option value="carpa">Carpa</option>
                        <option value="cocina">Cocina</option>
                        <option value="calzado">Calzado</option>
                        <option value="accesorio">Accesorio</option>
                    </select>
                    {errors.category && <p className="error">{errors.category}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Descipción:</label>
                    <textarea name="description" value={product.description} onChange={onChange} required></textarea>
                    {errors.description && <p className="error">{errors.description}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Imagen:</label>
                    <input type="file" accept="image/*" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} />
                    {errors.file && <p className="error">{errors.file}</p>}
                </div>
                <button className="btn-form" type="submit" disabled={loading}>
                    {loading ? "Guardando" : "Guardar"}
                </button>
            </form>
        </section>
    )
}