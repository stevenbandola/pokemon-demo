import React from "react";
import { Pokemon } from "./Pokemon";

import { RouteComponentProps } from "react-router";
import { Link, Route } from "react-router-dom";

import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from "react-redux";
import { RootState } from "../../store";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  }
}));

interface Props extends RouteComponentProps<{ id: string }> {}
const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const PokemonList: React.FC<Props> = ({ match }) => {
  //   console.log(match);
  const classes = useStyles();

  const list = useSelector(state => state.list);
  //   const products = useSelector(state => state.products);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h3 className="pokemon-list-title">My Pokemon</h3>
            <ul className="pokemon-list">
              {list.map(pokemon => (
                <Link key={pokemon.id} to={"/list/" + pokemon.id}>
                  <li>{pokemon.name}</li>
                </Link>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Route path="/list/:id" component={Pokemon} />
      </Grid>
    </div>
  );
};
