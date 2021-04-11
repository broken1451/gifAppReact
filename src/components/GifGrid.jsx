import React from "react";
import useFetchGifts from "../hooks/useFetchGifts";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifts(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      <div className="cardGrid">
        {/* {loading ? <p>Loading</p> : null} */}
        {loading && <p className='animate__animated animate__flash'>Loading</p>} {/* si esto es true, si no no hagas nada */}
        {/* <ol>
        {images.map(({id, title}) => {
          return <li key={id}>{title}</li>;
        })}
      </ol> */}
        {/* {images.map((img) => {
          una manera 
        //   return <GifGridItem key={img.id} img={img} />
          return <GifGridItem key={img.id} {...img} />
        })} */}
        {images.map((img) => {
          //   otra manera
          //   return <GifGridItem key={img.id} img={img} />
          return <GifGridItem key={img.id} img={img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;

/////////

// import React, { useState, useEffect } from "react";
// import { gifGrid } from "../helpers/getGifs";
// import GifGridItem from "./GifGridItem";

// const GifGrid = ({ category }) => {
//   //   const [count, setCount] = useState(0);
//   const [images, setimages] = useState([]);

//   //   useEffect((funcion q quuiero ejecutar) => {
//   //     gifGrid();
//   //   }, arreglo de dependencias)
//   //   useEffect( () => {
//   //     //   esto se dispara una unica vez cuando el componente ya este renderizado por primera vez
//   //     const img = gifGrid(category).then(img=> setimages(img));
//   //     // si la category cambia vuelve a ejecutar este efecto []
//   //   }, [category]); // esto se dispara una unica vez cuando el componente ya este renderizado por primera vez

//   useEffect(() => {
//     //   esto se dispara una unica vez cuando el componente ya este renderizado por primera vez
//     async function fetch() {
//       const img = await gifGrid(category);
//       setimages(img);
//     }
//     fetch();
//     // si la category cambia vuelve a ejecutar este efecto []
//   }, [category]); // esto se dispara una unica vez cuando el componente ya este renderizado por primera vez

//   return (
//     <>
//       <h3>{category}</h3>
//       <div className="cardGrid">
//         {/* <ol>
//         {images.map(({id, title}) => {
//           return <li key={id}>{title}</li>;
//         })}
//       </ol> */}

//         {/* {images.map((img) => {
//           una manera
//         //   return <GifGridItem key={img.id} img={img} />
//           return <GifGridItem key={img.id} {...img} />
//         })} */}

//         {images.map((img) => {
//           //   otra manera
//           //   return <GifGridItem key={img.id} img={img} />
//           return <GifGridItem key={img.id} img={img} />;
//         })}
//       </div>
//     </>
//   );
// };

// export default GifGrid;
