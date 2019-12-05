import { CATCH_POKEMON, PokemonState, CatchPokemonAction } from "./types";

export const initialState: PokemonState = {
  list: []
};

export function pokemonReducer(
  state = initialState,
  action: CatchPokemonAction
): PokemonState {
  switch (action.type) {
    case CATCH_POKEMON:
      return {
        list: [action.payload, ...state.list]
      };
    default:
      return state;
  }
}
