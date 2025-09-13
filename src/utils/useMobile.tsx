import { useEffect, useState } from "react";

// Hook para detectar si el dispositivo es móvil
export function useIsMobile() {
      const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
            const handleResize = () => {
                  setIsMobile(window.innerWidth < 768);
            };

            handleResize(); // Ejecutar una vez al cargar
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
      }, []);

      return isMobile;
}