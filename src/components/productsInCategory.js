import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardItem from "./CardItem";
import { setProduct } from "../actions/appActions";

const useStyles = makeStyles({
  pageTitle: {
    marginTop: 64,
    padding: 10,
    position: 'sticky',
    top: 64,
    zIndex: 5,
    backgroundColor: 'white'
  },
  container: {
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    flexWrap: 'wrap'
  },
  
  titleCategory: {
    textTransform: 'capitalize',
    textAlign: 'center'
  },
});


function ProductsInCategory({selectedCategory}) {
  const products = useSelector((state) => state.products.orderedByCategory);
  const dispatch = useDispatch();
  const classes = useStyles();

  const productClickHandler = productId => {
    dispatch(setProduct(productId))
  };

  return (
    <>
      <div className={classes.pageTitle}>
        <Typography variant="h3" className={classes.titleCategory}>{selectedCategory}</Typography>
      </div>
      <div className={classes.container}>
          {
            products[selectedCategory].map((product, index) => {
              return (
                <CardItem
                  key={index}
                  label={product.title}
                  imgUrl={product.image}
                  clickHandler={() => {productClickHandler(product.id)}}
                />
              )
            })
          }
      </div>
    </>
  )
}

export default ProductsInCategory