import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { addToCart } from "../actions/cartActions";


const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 100
  },
  media: {
    height: 300,
    width: 200,
    backgroundSize: 'contain',
    marginRight: 20
  },
  marginBottom: {
    marginBottom: 10 
  },
  detailsContainer: {
    maxWidth: 800,
    marginLeft: 10
  },
  discription: {
    color: '#9e9e9e',
    marginBottom: 10,
    marginTop: 10
  },
  quantity: {
    marginBottom: 20,
    marginLeft: 10,
    width: 50
  }
});

function Product() {
  const productId = useSelector(state => state.productsInCategory.selectedProductID);
  const productsObj = useSelector(state => state.products.productsByID);
  const enableSizeSelector = productsObj[productId].category === "men clothing" || productsObj[productId].category === "women clothing";
  
  const dispatch = useDispatch()

  const [ size, setSize ] = useState(enableSizeSelector ? 'M' : null);
  const [quantity, setQuantity] = useState(1)
  
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
      <CardMedia className={classes.media} image={productsObj[productId].image} />
      </div>

      <div className={classes.detailsContainer}>

          <Typography variant="h4">
            {productsObj[productId].title}
          </Typography>

          <Typography variant="h6" className={ classes.discription}>
            {productsObj[productId].description}
          </Typography>

          <Typography variant="h6">
            Price: ${productsObj[productId].price}
          </Typography>

          {
            enableSizeSelector && 
              <FormControl className={classes.marginBottom}>
                <InputLabel>
                  Size
                </InputLabel>
                <Select
                  value={size}
                  onChange={event => setSize(event.target.value)}
                >
                  <MenuItem value="S">S</MenuItem>
                  <MenuItem value="M">M</MenuItem>
                  <MenuItem value="L">L</MenuItem>
                  <MenuItem value="XL">XL</MenuItem>
                </Select>
              </FormControl>
          }
          <FormControl className={classes.quantity}>
            <InputLabel shrink >
              Quantity
            </InputLabel>
            <Input
              type="number" 
              id="quantity" 
              defaultValue={1}
              onChange={event => setQuantity(Number(event.target.value))}
              />
          </FormControl>
          <div>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => dispatch(addToCart(productId, size, quantity))}
            >
              ADD TO CART
            </Button>
          </div>
        
      </div> 

    </div>
  )
}

export default Product