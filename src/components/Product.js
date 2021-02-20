import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  container: {
    display: "flex",
    margin: 50,
    boxShadow: "none"
  },
  containerMedia: {
    width: 400
  },
  media: {
    height: 400,
    backgroundSize: "contain"
  },
  marginBottom: {
    marginBottom: 20 
  },
  discription: {
    color: "#9e9e9e",
    marginBottom: 20
  },
});

function Product() {
  const productId = useSelector(state => state.productsInCategory.selectedProductID);
  const productsObj = useSelector(state => state.products.productsByID);

  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <div className={classes.containerMedia}>
      <CardMedia className={classes.media} image={productsObj[productId].image} />
      </div>
      <div >
        <CardContent>
        <Typography variant="h3" className={classes.marginBottom}>
          {productsObj[productId].title}
        </Typography>
        <Typography variant="h5" className={ classes.discription}>
          {productsObj[productId].description}
        </Typography>
        <Typography variant="h5" className={classes.marginBottom}>
          Price: ${productsObj[productId].price}
        </Typography>
        <Button variant="contained" color="primary" size="large" className={classes.button}>
        ADD TO CART
        </Button>
      </CardContent>
      
      </div>
      
    </Card>
  )
}

export default Product