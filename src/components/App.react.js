import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import getProducts from "../actions/productsActions";
import CategoriesList from "./CategoriesList.react";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts);
  }, []);

  return (
    <div>
      <CategoriesList />
    </div>
  );
}

export default App;
