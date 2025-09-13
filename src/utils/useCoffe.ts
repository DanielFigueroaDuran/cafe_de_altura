import { useContext } from "react";
import { CoffeContext } from "../context/Context";

export const useCoffe = () => {
      const context = useContext(CoffeContext);
      if (!context) {
            throw new Error("useCoffe debe usarse dentro de CoffeProvider");
      }
      return context;
};