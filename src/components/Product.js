import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


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
  select: {
    marginBottom: 20,
    marginRight: 10,
    width: 60
  }
});

function Product() {
  const productId = useSelector(state => state.productsInCategory.selectedProductID);
  const productsObj = useSelector(state => state.products.productsByID);
  const selectedCategory = useSelector(state => state.productsInCategory.selectedCategory);

  const [ size, setSize ] = useState('M');

  const classes = useStyles();

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

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
          <TextField type="number" label="Quantity" shrink defaultValue={1} className={classes.select}/>
          
          <div>
            <Button variant="contained" color="primary" size="large" className={classes.button}>
              ADD TO CART
            </Button>
          </div>
        
        </CardContent>
      </div> 

    </Card>
  )
}

export default Product