import React from "react";
import { IPokemon } from "../../types/IPokemon";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  card: {
    maxWidth: "100%",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

type PokemonCardProps = {
  pokemon: IPokemon;
  getNewPokemon: Function;
  catchPokemon: Function;
};

export const PokemonCard: React.FC<PokemonCardProps> = props => {
  const classes = useStyles();
  //   console.log(props.pokemon);
  return (
    <Container component="main" maxWidth="xs">
      <Button
        variant="contained"
        color="primary"
        onClick={props.getNewPokemon()}
      >
        Explore New Pokemon
      </Button>
      <Card className={classes.card}>
        <CardHeader title={props.pokemon.name} />
        <CardMedia
          className={classes.media}
          image={props.pokemon.img}
          title="Paella dish"
        >
          <Typography variant="body1" color="textPrimary" component="h1">
            Base Experience: {props.pokemon.exp}
          </Typography>
        </CardMedia>
        <CardContent></CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={props.catchPokemon()}
          >
            Catch
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
