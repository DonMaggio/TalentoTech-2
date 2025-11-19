import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from "./context/CartContext/CartProvider"
import { Cart } from "./components/Cart/Cart"
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer"
import { Login } from "./components/Login/Login"
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida"

import { AdminLayout } from "./layout/AdminLayout"
import { MainLayout } from "./layout/MainLayout"

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className="app">
            <Routes>
              <Route element={<MainLayout/>}>
                <Route path ="/" element={<ItemListContainer titulo={"Todo lo que necesitas para tu próxima aventura está acá!"}/>}/>
                <Route path ="/category/:category" element={<ItemListContainer titulo={"Todo lo que necesitas para tu próxima aventura está acá!"}/>}/>
                <Route path ="/detail/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
              </Route>

              <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={ <Login/> }/>
                <Route path="alta-product" element={
                  <RutaProtegida>
                    <ProductFormContainer/>
                  </RutaProtegida>
                }/>
              </Route>

            </Routes>

          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
