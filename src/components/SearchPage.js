import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { searchProduct, setProduct } from "../actions/appActions";
import CardItem from "./CardItem";
import { CallReceived } from "@material-ui/icons";


const useStyles = makeStyles({
  container: {
    backgroundColor: 'white',
    zIndex: 10,
    height: 'calc(100% - 64px)',
    position: 'fixed',
    left: 0,
    right: 0
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 20
  },
  button: {
    padding: 10,
    fontSize: 12
  },
  searchTerm: {
    margin: 20
  },
  products: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflowY: 'scroll'
  }
})

function SearchPage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const searchTerm = useSelector(state => state.productsInCategory.searchInput);
  const allProducts = useSelector(state => state.products.productsByID);
  const allProductsArray = [];
  for (const id in allProducts) {
    allProductsArray.push(allProducts[id])
  }
  const searchResult = allProductsArray.filter(product => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleClick = searchTerm => {
    dispatch(searchProduct(searchTerm))
  };

  const productClickHandler = productId => {
    dispatch(setProduct(productId))
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>

        <Typography variant="h3">
          Search Results for:
        </Typography>

        <Button variant="contained" color="primary" size="small" onClick={() => handleClick('')} className={classes.button}>
          CLEAR SEARCH
        </Button>

      </div>

      <Typography variant="h5" className={classes.searchTerm}>
        "{searchTerm}"
      </Typography>

      <div className={classes.products}>
        {searchTerm.length >= 3 &&
          searchResult.map((product, index) => {
            return (
              <CardItem
                key={index}
                label={product.title}
                imgUrl={product.image}
                clickHandler={() => {productClickHandler(product.id)}}
              />
            );
          })
        }
      </div>
    </div> 
  )
}

export default SearchPage