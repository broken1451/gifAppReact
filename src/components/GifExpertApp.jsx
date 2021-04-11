import React, { useState } from "react";
import AddCategoty from "./AddCategoty";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Dragon Ball",
  ]);

  //   const add = () => {
  //     // agregar al estado asi se cambia el estado
  //     //  setCategories([...categories, 'GT'])
  //      setCategories((cat)=> {
  //          console.log(cat);
  //          return [...cat, 'GT']
  //      })
  //   };

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategoty setCategories={setCategories} />
      <hr />
      {/* <button onClick={add}>Agregar</button> */}
      <ol>
        {categories.map((categories, i) => {
          // return <li key={categories}> {categories} </li>;
          // return <li key={categories}> {categories} </li>;
          return <GifGrid key={categories} category={categories} />
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
