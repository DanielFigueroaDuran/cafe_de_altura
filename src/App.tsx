import { BrowserRouter, Route, Routes } from "react-router-dom"
//import CoffePages from "./components/pages/CoffePages"
import Navbar from "./components/Navbar"
import CoffeProvider from "./context/Context";

function App() {
  const isMobile = window.innerWidth < 768;

  return (
    <CoffeProvider isMobile={isMobile}>
      <BrowserRouter>
        <Navbar />
        {/* <Routes> */}
        {/* <Route path="/" element={<CoffePages />} /> */}
        {/* <Route path='/tienda' element={<Tienda />} />
                <Route path='/cesta' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/success' element={<Success />} /> */}
        {/* </Routes> */}
      </BrowserRouter >


    </CoffeProvider>

  )
}

export default App
