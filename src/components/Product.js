import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 100,
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
    marginRight: 10,
    width: 60
  }
});

function Product() {
  const productId = useSelector(state => state.productsInCategory.selectedProductID);
  const productsObj = useSelector(state => state.products.productsByID);
  const enableSizeSelector = productsObj[productId].category === "men clothing" || productsObj[productId].category === "women clothing";
  
  const [ size, setSize ] = useState('M');

  const classes = useStyles();

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className={classes.container}>

      <div>
        <CardMedia className={classes.media} image={productsObj[productId].image} />
      </div>

      <div className={classes.detailsContainer}>

          <Typography variant="h4" className={classes.marginBottom}>
            {productsObj[productId].title}
          </Typography>

          <Typography variant="h6" className={ classes.discription}>
            {productsObj[productId].description}
          </Typography>

          <Typography variant="h6" className={classes.marginBottom}>
            Price: ${productsObj[productId].price}
          </Typography>

          {
            enableSizeSelector && 
              <FormControl className={classes.select}>
                <InputLabel shrink>
                  Size
                </InputLabel>
                <Select
                  value={size}
                  onChange={handleChangeSize}
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
            <Input type="number" id="quantity" defaultValue={1} InputProps={{ inputProps: { min: 1} }} />
          </FormControl>
          
          <div>
            <Button variant="contained" color="primary" size="large" className={classes.button}>
              ADD TO CART
            </Button>
          </div>
        
      </div> 

    </div>
  )
}

export default Product