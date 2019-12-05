import { pokemonReducer, initialState } from "./pokemon/reducers";
import { createStore } from "redux";

const rootReducer = pokemonReducer;

// const rootReducer = combineReducers({
//     pokemon: pokemonReducer,
//     other: otherRedcuer
// });

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
