import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { searchProduct, setProduct } from "../actions/appActions";
import CardItem from "./CardItem";


const useStyles = makeStyles({
  searchContainer: {
    backgroundColor: 'white',
    zIndex: 10,
    height: 'calc(100% - 64px)',
    position: 'fixed',
    left: 0,
    right: 0,
    overflow: 'scroll'
  },
  searchSticky: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 20,
    margin: 20,
    zIndex: 5
  },
  search: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  button: {
    padding: 10,
    fontSize: 12,
    height: 40
  },
  searchTerm: {
    margin: 20
  },
  products: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
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
  const searchResult = allProductsArray.filter((product) => {
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
    <div className={classes.searchContainer}>
      <div className={classes.searchSticky}>

        <div className={classes.search}>
          <Typography variant="h3">
            Search Results for:
          </Typography>

          <Typography variant="h5" className={classes.searchTerm}>
            "{searchTerm}"
          </Typography>
        </div>

        <Button variant="contained" 
          color="primary" size="small" 
          onClick={() => handleClick('')} 
          className={classes.button}
        >
          CLEAR SEARCH
        </Button>
        
      </div>

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