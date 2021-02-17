import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardItem from "./CardItem";

const useStyles = makeStyles({
  container: {
    maxWidth: 500,
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    flexWrap: "wrap"
  },
  
  titleCategory: {
    textTransform: "capitalize",
    textAlign: "center"
  },
});


function ProductsInCategory({selectedCategory}) {
  const products = useSelector((state) => state.products.orderedByCategory);

  const classes = useStyles();

  return (
    <>
      <div>
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
                  clickHandler={() => {}}
                />
              )
            })
          }
      </div>
    </>
  )
}

export default ProductsInCategory