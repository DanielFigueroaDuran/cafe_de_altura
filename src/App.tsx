import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CoffeProvider from "./context/Context";

function App() {

  return (
    <CoffeProvider>
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
