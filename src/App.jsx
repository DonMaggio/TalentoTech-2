import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ScrollTopButton } from './components/ScrollTopButton/ScrollTopButton'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from "./context/CartContext/CartProvider"
import { Cart } from "./components/Cart/Cart"


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
            <Header/>
            <Routes>
              <Route path ="/" element={<ItemListContainer titulo={"Bienvenidos a Mi pagina"}/>}/>
              <Route path ="/detail/:id" element={<ItemDetailContainer/>}/>
            </Routes>
            <ScrollTopButton/>
            <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
