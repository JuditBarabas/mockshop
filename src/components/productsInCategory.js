import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../index.css";

const useStyles = makeStyles((theme) => createStyles({
  title: {
    textTransform: "capitalize",
    fontSize: 40,
    textAlign: "center"
  },
  card: {
    marginTop: theme.spacing(3),
    width: 220
  },
  media: {
    height: 200,
    backgroundSize: "contain"
  },
  typography: {
    textAlign: "center",
    color: "#00008B",
    fontSize: 16
  }
}));


function ProductsInCategory({selectedCategory}) {
  const products = useSelector((state) => state.products.orderedByCategory);

  const classes = useStyles();

  return (
    <div>
      <div className={classes.title}>{selectedCategory}</div>
      <div className="product-container">
        <Grid
          container
          direction="row"
          justify="center"
          spacing={3}
          
        >
          {
            products[selectedCategory].map((product, index) => {
              return (
                <Grid item key={index}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={product.image}
                        title="product img"
                      />
                      <CardContent>
                        <Typography noWrap className={classes.typography} gutterBottom variant="h5">
                          {product.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            })
          }   
        </Grid>
      </div>
    </div>
  )
}

export default ProductsInCategory