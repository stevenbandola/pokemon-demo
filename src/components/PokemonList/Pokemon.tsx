import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from "react-redux";
import { RootState } from "../../store";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

interface Props extends RouteComponentProps<{ id: string }> {}
const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "left",
    color: theme.palette.text.secondary
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  card: {
    maxWidth: "100%",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    height: "50vh"
  },
  media: {
    height: "100%",
    paddingTop: "300px" // 16:9
  }
}));

export const Pokemon: React.FC<Props> = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  //   console.log(match);
  useEffect(() => {
    setIsLoading(true);
    // getNewPokemon();
    setIsLoading(false);
  }, []);

  const classes = useStyles();

  const selectedPokemon = useSelector(state => state.list).find(
    pokemon => pokemon.id === parseInt(match.params.id)
  );

  if (selectedPokemon) {
    return (
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Container component="main" maxWidth="xs">
            <Card className={classes.card}>
              <CardHeader title={selectedPokemon.name} />
              <CardMedia
                className={classes.media}
                image={selectedPokemon.img}
                title="Paella dish"
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component="h1"
                  style={{ justifyContent: "center" }}
                >
                  Base Experience: {selectedPokemon.exp}
                </Typography>
              </CardMedia>
              <CardContent></CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                {/* <Button
                variant="contained"
                color="primary"
                // onClick={selectedPatchPokemon()}
              >
                Catch
              </Button> */}
              </CardActions>
            </Card>
          </Container>
        </Paper>
      </Grid>
    );
  }
  return <div></div>;
};
