import { useContext } from "react";
import { CoffeContext } from "./Context";
//import { CoffeContext } from "./CoffeContext";

export const useCoffe = () => {
      const context = useContext(CoffeContext);
      if (!context) {
            throw new Error("useCoffe debe usarse dentro de CoffeProvider");
      }
      return context;
};