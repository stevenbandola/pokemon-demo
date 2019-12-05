import React, { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";
import { IPokemon } from "../../types/IPokemon";
import { Pokemon } from "../../types/Pokemon";
import { catchPokemon } from "../../store/pokemon/actions";
import { useDispatch } from "react-redux";
interface Props {}

export const ExplorePage: React.FC<Props> = () => {
  const [isLoading, setIsLoading] = useState(true);
  let [newPokemon, setNewPokemon] = useState<IPokemon>({
    id: 0,
    name: "",
    img: "",
    exp: 0
  });

  useEffect(() => {
    setIsLoading(true);
    getNewPokemon();
    setIsLoading(false);
  }, []);

  const getNewPokemon = () => {
    const newPokemonId: number = Math.floor(Math.random() * 807) + 1;
    fetch("https://pokeapi.co/api/v2/pokemon/" + newPokemonId)
      .then(res => res.json())
      .then(data => {
        setNewPokemon(
          new Pokemon(
            data.id,
            data.name,
            data.sprites.front_default,
            data.base_experience
          )
        );
      });
  };
  const dispatch = useDispatch();
  const onCatchPokemon = () => {
    dispatch(catchPokemon(newPokemon));
    getNewPokemon();
    // console.log(RootState);
  };

  if (!isLoading) {
    return (
      <div>
        <PokemonCard
          pokemon={newPokemon}
          getNewPokemon={() => getNewPokemon}
          catchPokemon={() => onCatchPokemon}
        />
      </div>
    );
  }

  return <div></div>;
};
