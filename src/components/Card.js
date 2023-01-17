import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";

const Card = ({ pokemon, loading, infoPokemon }) => {
  const { value9 } = useContext(PokeContext);
  const [stat2, setStat2] = value9;

  

  const uniquePokemon = Array.from(new Set(pokemon.map((p) => p.id))).map(
    (id) => {
      return pokemon.find((p) => p.id === id);
    }
  );

  const randomIndex = Math.floor(Math.random() * uniquePokemon.length);
  const randomCPU = uniquePokemon[randomIndex];

  useEffect(() => {
    setStat2(randomCPU);
  }, [randomCPU]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Carousel
          className="caroussel"
          style={{
            width: "200px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {uniquePokemon.map((item) => {
            return (
              <Carousel.Item key={item.id}>
                <img
                  className="imgcaroussel"
                  src={item.sprites.front_default}
                  alt=""
                />
                <Carousel.Caption>
                  <h3>{item.name}</h3>
                  <p>{item.id}</p>
                  <p>
                    <button
                      className="buttoncaroussel"
                      onClick={() => infoPokemon(item)}
                    >
                      Info
                    </button>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </>
  );
};
export default Card;
