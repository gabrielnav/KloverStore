import ItemDetail from "./ItemDetail";
import { useState } from "react";
import Data from "../data.json";
import { useParams } from "react-router";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [prendas, setPrendas] = useState([]);
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const prendaFilter = Data.filter((prenda) => prenda.id == id);
        resolve(prendaFilter);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      setPrendas(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();
  return <ItemDetail prendas={Data} />;
};

export default ItemDetailContainer;