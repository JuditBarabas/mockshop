import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 200,
    float: "left",
    margin: "5%",
    display: "inline"
  },
  media: {
    height: 160,
    backgroundSize: "contain"
  }
});

function CategoriesList() {
  const products = useSelector((state) => state.products);
  console.dir(products);
  const categoriesArr = Object.keys(products);
  const getFirstImage = (category) => products[category][0].image;

  const classes = useStyles();

  return (
    <div>
      {categoriesArr.map((category, index) => {
        return (
          <Card className={classes.root} key={index}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={getFirstImage(category)}
                title="category img"
              />
              <CardContent>
                <Typography align="center" gutterBottom variant="h5">
                  {category}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}

export default CategoriesList;
