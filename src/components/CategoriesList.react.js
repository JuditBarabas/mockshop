import React from "react";
import { useSelector } from "react-redux";

function CategoriesList() {
  const products = useSelector((state) => state.products);
  console.dir(products);
  const categoriesArr = Object.keys(products);
  const getFirstImage = (category) => products[category][0].image;

  return (
    <div>
      {categoriesArr.map((category, index) => {
        return (
          <div key={index}>
            <img src={getFirstImage(category)} alt="" width="100" />
            <p>{category}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CategoriesList;
