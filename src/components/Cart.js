import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { setProduct } from "../actions/appActions";
import { removeFromCart } from "../actions/cartActions";

const useStyles = makeStyles({
  container: {
    marginTop: 90,
    width: 300
  },
  cardActionArea: {
    display: 'flex'
  },
  img: {
    height: 100,
    width: 100,
    backgroundSize: 'contain'
  },
  button: {
    position: 'fixed',
    bottom: 10
  }
})

function Cart() {

  const cartItems = useSelector(state => state.cart.itemsInCart);
  const products = useSelector(state => state.products.productsByID);
  const cartItemsArr = Object.entries(cartItems);

  const classes = useStyles();
  const dispatch = useDispatch();

  const cartItemClickHandler = (productID) => {
    dispatch(setProduct(productID));
  };

  return (
    <div className={classes.container}>
      
        {cartItemsArr.length === 0 ? 
          "Your cart is empty" :
          cartItemsArr.map(([cartItemID, qty], index) => {
            const [productID, size] = cartItemID.split('_', 2);
            return (
              <div>

                <Card className={classes.card} key={index}>
                  <CardActionArea className={classes.cardActionArea} onClick={() => cartItemClickHandler(productID)}>
                      <div className={classes.imgContainer}>
                        <CardMedia className={classes.img} image={products[productID].image}/>
                      </div>
                      
                      <CardContent>
                        <Typography>
                          {qty} * {products[productID].title}
                        </Typography>

                        <Typography>
                          Size: {size}
                        </Typography>
                        <Link
                          component="button"
                          variant="body2"
                        >
                          Remove
                        </Link>
                      </CardContent>
                  </CardActionArea>
                </Card>

              </div>

            );
          })
        }
      

      <Button 
        variant="contained" 
        color="primary"
        className={classes.button}
      >
        CHECKOUT
      </Button>
      
    </div>
  )
}

export default Cart