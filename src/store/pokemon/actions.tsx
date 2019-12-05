import { CATCH_POKEMON, CatchPokemonAction } from "./types";
import { Pokemon } from "../../types/Pokemon";

export function catchPokemon(newPokemon: Pokemon): CatchPokemonAction {
  return {
    type: CATCH_POKEMON,
    payload: newPokemon
  };
}
