import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => createStyles({
  card: {
    width: 220,
    margin: theme.spacing(1.5),
    marginTop: theme.spacing(10),
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

export default function CardItem ({label, imgUrl, clickHandler}) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Card>
        <CardActionArea onClick={clickHandler}>
          <CardMedia className={classes.media} image={imgUrl} />
          <CardContent>
            <Typography noWrap variant="h5" color="primary" className={classes.typography}>
              {label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}