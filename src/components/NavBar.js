import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { navigateToHome, searchProduct } from "../actions/appActions";
import { toggleCartTab } from "../actions/cartActions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  searchField: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  input: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 50,
    transition: theme.transitions.create('width'),
    width: 100,
    '&:focus': {
      width: 150,
    }, 
  }
}));

export default function AppBarSearch() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const searchTerm = useSelector(state => state.productsInCategory.searchInput);
  const inputChange = searchTerm => {
    dispatch(searchProduct(searchTerm))
  };

  return (
    <div className={classes.appBar}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.homeButton}
            color="inherit"
            onClick={() => dispatch(navigateToHome())}
          >
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Jude's Online Store
          </Typography>
          <div className={classes.searchField}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.input
              }}
              value={searchTerm}
              onChange={e => inputChange(e.target.value)}
            />
          </div>
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => dispatch(toggleCartTab())}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}