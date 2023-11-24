import './App.css'
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import Products from "../src/components/Products/Products"
function App() {
  return (
    <>
     <ProductsProvider>
      <Products/>
     </ProductsProvider>
    </>
  )
}

export default App
