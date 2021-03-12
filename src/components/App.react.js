import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import getProducts from "../actions/productsActions";
import CategoriesList from "./CategoriesList.react";
import ProductsInCategory from "./ProductsInCategory";
import Product from "./Product";
import NavBar from "./NavBar";
import SearchPage from "./SearchPage";
import Cart from "./Cart";

export default function App(props) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.productsInCategory.selectedCategory);
  const activePage = useSelector(state => state.productsInCategory.activePage);
  const searchAction = useSelector(state => state.productsInCategory.searchInput);

  const useStyles = makeStyles({
    container: {
      display: 'flex'
    }
  });

  const classes = useStyles();

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
      <NavBar />
      <div className={classes.container}>

        <div>
          {searchAction && <SearchPage />}
          {displayedPage()}
        </div>
        
        <Cart />
        
      </div>
    </>
  )
}
