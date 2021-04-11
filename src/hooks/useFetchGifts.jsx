import { useEffect, useState } from "react";
import { gifGrid } from "../helpers/getGifs";

const useFetchGifts = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    //   esto se dispara una unica vez cuando el componente ya este renderizado por primera vez
    async function fetch() {
      //// debe ser sincrona, los efectos no pueden ser async
      const img = await gifGrid(category);
      setstate({
        data: img,
        loading: false,
      });
    }
    fetch();
    // si la category cambia vuelve a ejecutar este efecto []
  }, [category]); // esto se dispara una unica vez cuando el componente ya este renderizado por primera vez

  return state; // {data:[], loading:true}
};

export default useFetchGifts;
