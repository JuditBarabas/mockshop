import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { setCategory } from "../actions/AppActions";
import CardItem from "./CardItem";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center"
  }
});

function CategoriesList() {
  const products = useSelector((state) => state.products.orderedByCategory);
  const getFirstImage = (category) => products[category][0].image;
  const dispatch = useDispatch();
  
  const classes = useStyles();

const categoryClickHandler = category => {
  dispatch(setCategory(category))
};

  return (
    <div className={classes.container}>
        {products ? (
          Object.keys(products).map((category, index) => {
            return (
              <CardItem
                key={index}
                label={category}
                imgUrl={getFirstImage(category)}
                clickHandler={() => categoryClickHandler(category)}
              />
            );
          }) ) : (
            <CircularProgress />
          )
        } 
    </div>
  );
}

export default CategoriesList;
