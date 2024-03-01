import { useState, useEffect } from "react;";

// Frontend 70

const usePokemons = () => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    // fetch pokemons and set up state
  }, []);

  return [pokemons];
};

export default usePokemons;
