import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getCategory } from "../actions/AppActions";

const useStyles = makeStyles((theme) => createStyles({
  card: {
    marginTop: theme.spacing(3),
    width: 220
  },
  media: {
    height: 160,
    backgroundSize: "contain"
  },
  typography: {
    textTransform: "capitalize",
    textAlign: "center"
  }
}));

function CategoriesList() {
  const products = useSelector((state) => state.products.orderedByCategory);
  const getFirstImage = (category) => products[category][0].image;
  const dispatch = useDispatch();
  
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={3}
      >
        {products ? (
          Object.keys(products).map((category, index) => {
            return (
              <Grid item key={index}>
                <Card className={classes.card} key={index}>
                  <CardActionArea onClick={() => dispatch(getCategory(category))} >
                    <CardMedia
                      className={classes.media}
                      image={getFirstImage(category)}
                      title="category img"
                    />
                    <CardContent>
                      <Typography className={classes.typography} gutterBottom variant="h5">
                        {category}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          }) ) : (
            <CircularProgress />
          )
        } 
      </Grid>
    </div>
  );
}

export default CategoriesList;
