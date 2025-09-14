import { BrowserRouter, Route, Routes } from "react-router-dom"
//import CoffePages from "./components/pages/CoffePages"
import Navbar from "./components/Navbar"
import CoffeProvider from "./context/Context";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  //const isMobile = window.innerWidth < 768;

  const useIsMobile = () => {

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      handleResize(); // Ejecutar una vez al cargar
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
  };

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
