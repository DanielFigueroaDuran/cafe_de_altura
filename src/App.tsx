import { BrowserRouter, Route, Routes } from "react-router-dom"
import CoffePages from "./components/pages/CoffePages"
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CoffePages />} />
        {/* <Route path='/tienda' element={<Tienda />} />
                <Route path='/cesta' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/success' element={<Success />} /> */}
      </Routes>
    </BrowserRouter >
  )
}

export default App
