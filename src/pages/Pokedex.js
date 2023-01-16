import React from "react";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { Link } from "react-router-dom";
import PokeList from "../components/PokeList";
import PokeCard from "../components/PokeCard";
import '../css/pokedex.css'

const Pokedex = () => {
  const { value, value2 } = useContext(PokeContext);
  const [data] = value;
  const [isLoading] = value2;

  console.log(data);

  return (
    <>
      <h1 className='pokedex'>Pokedex</h1>

      <div className="pokelist">
        <PokeList />
      </div>

      <div className="pokecard">
        <PokeCard />
      </div>

      <Link to="/game" className="game">
        Game
      </Link>
    </>
  );
};

export default Pokedex;
