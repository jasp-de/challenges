import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPokemon() {
      const offset = (page - 1) * 20;
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
      console.log(offset);
    }

    loadPokemon();
  }, [page]);

  return (
    <main>
      <button
        onClick={() => {
          setPage(page - 1);
          console.log("page-1");
        }}
        type="button"
        className="button"
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
          console.log("page+1");
        }}
        type="button"
        className="button"
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
