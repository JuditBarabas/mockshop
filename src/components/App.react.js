import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../actions/productsActions";
import CategoriesList from "./CategoriesList.react";
import ProductsInCategory from "./ProductsInCategory";
import Product from "./Product";
import AppBarSearch from "./AppBar";

export default function App(props) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.productsInCategory.selectedCategory);
  const activePage = useSelector(state => state.productsInCategory.activePage);

  useEffect(() => {
    dispatch(getProducts);
  }, []);

  const displayedPage = () => {
    switch(activePage) {

      case "HOME":  
        return <CategoriesList />
            
      case "CATEGORY": 
        return <ProductsInCategory selectedCategory={selectedCategory}/>;
          
      case "PRODUCT":
        return < Product />
          
      default:
        return <CategoriesList />
    }
  }

  return (
    <>
      <AppBarSearch />
      <>
      {displayedPage()}
      </>
    </>
  )
}
