import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/coffepage/Navbar";
import CoffeProvider from "./context/Context";
import CoffePages from "./components/pages/CoffePages";
import Footer from "./components/coffepage/Footer";
import Tienda from "./components/pages/Tienda";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";

function App() {

  return (
    <CoffeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CoffePages />} />
          <Route path='/tienda' element={<Tienda />} />
          <Route path='/cesta' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          {/* <Route path='/success' element={<Success />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter >


    </CoffeProvider>

  )
}

export default App
