import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ExplorePage } from "./components/Explore/ExplorePage";
import { PokemonList } from "./components/PokemonList/PokemonList";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  a: {
    textDecoration: "none"
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <BrowserRouter>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <Link to="/explore">
                  <Button variant="contained" color="primary">
                    Explore
                  </Button>
                </Link>{" "}
                <Link to="/list">
                  <Button variant="contained" color="secondary">
                    My Pokemon
                  </Button>
                </Link>
              </Paper>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Route path="/explore" exact component={ExplorePage} />
                <Route path="/list" component={PokemonList} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
