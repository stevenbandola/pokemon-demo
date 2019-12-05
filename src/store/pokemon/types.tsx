import { IPokemon } from "../../types/IPokemon";
import { Pokemon } from "../../types/Pokemon";
export const CATCH_POKEMON = "CATCH_POKEMON";

export interface CatchPokemonAction {
  type: typeof CATCH_POKEMON;
  payload: IPokemon;
}

export interface PokemonState {
  list: Pokemon[];
}
