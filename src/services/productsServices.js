const BASE_URL = "https://690b7e096ad3beba00f531f4.mockapi.io/products"

// Crear un nuevo producto
export const createProduct = async (product) => {
    const resp = await fetch(BASE_URL,{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(product),
    })

    if(!resp.ok) {
        throw new Error("No se pudo crear el producto")
    }

    const result = await resp.json()

    return result
}

// Obtener productos (todos o por categoría)
export const getProducts = async (category) => {
    let url = BASE_URL
    if(category) {
        url += `?category=${category}`
    }

    const resp = await fetch (url)
    if(!resp.ok) {
        throw new Error("No se pudieron obtener los productos")
    }
    
    const result = await resp.json()   
    return result
}

// Obtener un producto por ID
export const getProductById = async (id) => {
    const resp = await fetch(`${BASE_URL}/${id}`)
    if(!resp.ok) {
        throw new Error("No se pudo obtener el producto")
    }

    console.log(resp)
    console.log(id)

    const result = await resp.json()
    return result
}

// Actualizar un producto por ID (a revisar)
export const updateProduct = async (id, updatedProduct) => {
    const resp = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(updatedProduct),
    })
    if(!resp.ok) {
        throw new Error("No se pudo actualizar el producto")
    }
    return await resp.json()
}