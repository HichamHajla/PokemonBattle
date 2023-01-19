import React, {useState, useContext, useEffect} from "react";
import {PokeContext} from "../context/PokeContext";
import {Link} from "react-router-dom";
import PlayerHuman from "../components/PlayerHuman";
import PlayerCpu from "../components/PlayerCpu";
import Winner from "../components/Winner";
import Loser from "../components/Loser";
import decor from "../asset/decor2.png";
import nintendo from "../asset/nintendo.webp";
import sasha from "../asset/sasha.png";
import poke1 from "../asset/poke1.png";

import "../css/game.css";

const Game = () => {
  const {value, value2, value8, value9} = useContext(PokeContext);
  const [data] = value;
  const [isLoading, setIsLoading] = value2;
  const [showGame, setShowGame] = useState(false);

  const [stat] = value8;
  const [stat2] = value9;

  const [className, setClassName] = useState("cpu");
  const [classNameHuman, setClassNameHuman] = useState("human");
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);

  const [playerHuman, setPlayerHuman] = useState({
    name: stat.name,
    image: stat.sprites.back_default,
    hp: stat.stats[0].base_stat,
    attack: stat.stats[1].base_stat,
    defense: stat.stats[2].base_stat,
    specialAttack: stat.stats[3].base_stat,
    specialDefense: stat.stats[4].base_stat,
    speed: stat.stats[5].base_stat,
  });
  const [playerCpu, setPlayerCpu] = useState({
    name: stat2.name,
    image: stat2.sprites.front_default,
    hp: stat2.stats[0].base_stat,
    attack: stat2.stats[1].base_stat,
    defense: stat2.stats[2].base_stat,
    specialAttack: stat2.stats[3].base_stat,
    specialDefense: stat2.stats[4].base_stat,
    speed: stat2.stats[5].base_stat,
  });

  const handleClick = (e) => {
    attack(); 
    if (playerCpu.hp > 0) {   
    setTimeout(() => {
      setClassNameHuman("human-move");
    });
    setTimeout(() => {
      setClassName("blink-cpu");
    },1000); 
    setTimeout(() => {
      setClassNameHuman("human");
    },3000);setTimeout(() => {
      setClassName("cpu");
    },2500);              
  }
    
};
  const attack = () => {
    let newDefense = playerCpu.defense - 100;
    setPlayerCpu({...playerCpu, defense: newDefense});
    setTimeout(() => {
      if (playerCpu.hp > 0)
      counterAttack();      
    },4000);
    if (newDefense <= 0) {
      setPlayerCpu({...playerCpu, defense: 0});
      if (playerCpu.defense <= 0) {
      let newHp = playerCpu.hp - 50;
      setPlayerCpu({...playerCpu, hp: newHp})
      if (newHp <= 0) {        
        setPlayerCpu({...playerCpu, hp: 0});}      
      }
    }
    // if (newDefense <= 0) {
    //setPlayerCpu({...playerCpu, hp: newHp, defense: newDefense});
    //   let newHp = playerCpu.hp - 10;
    //   if (newDefense <= 0) {
    //     newDefense = 0;
    //     counterAttack();
    //   }
    //   setPlayerCpu({...playerCpu, hp: newHp, defense: newDefense});
    //   if (newHp > 0) {
    //     setClassName("blink");
    //     setTimeout(() => {
    //       if (playerHuman.hp > 0) {
    //         counterAttack();
    //       }
    //     }, 0);
    //   }
    //   setTimeout(() => {
    //     if (newHp <= 0) {
    //       setClassName("dead");
    //       setTimeout(() => {
    //         setWinner(true);
    //       }, 1000);
    //     }
    //   });
    // }
  };

  const counterAttack = () => {
    // setTimeout(() => {
      let newDefense = playerHuman.defense - 100;
    setPlayerHuman({...playerHuman, defense: newDefense});
    setTimeout(() => {
      setClassName("cpu-move");
    });
    setTimeout(() => {
      setClassNameHuman("blink-human");
    },500); 
    setTimeout(() => {
      setClassName("cpu");
    },3000);
    setTimeout(() => {
      setClassNameHuman("human");
    },3000);   
    if (newDefense <= 0) {
      setPlayerHuman({...playerHuman, defense: 0});
      if (playerHuman.defense <= 0) {
        let newHp = playerHuman.hp - 50;
        setPlayerHuman({...playerHuman, hp: newHp})
        if (newHp <= 0) {
          setPlayerHuman({...playerHuman, hp: 0});}        
        }
    }      
    
    // let newHp = playerHuman.hp - 20;
      // if (newHp <= 0) {
      //   newHp = 0;
      // }

    //   setPlayerHuman({...playerHuman, hp: newHp});
    //   if (newHp <= 0) {
    //     setClassNameHuman("deadhuman");
    //     setTimeout(() => {
    //       setLoser(true);
    //     }, 100);//     playerHuman.hp = 0;    //   } else {
    //     counterAttack(null);
    //   }
    // }, 4000
    // );
  };

  return (
    <>
      <div className="decorciel">
        {data.result}
        {isLoading && (
          <div className="game">
            <img src={sasha} alt="sasha" className="sasha" />
            <img src={poke1} alt="sasha2" className="sasha2" />
            <Link to="/" className="home-switch">
              <button></button>
            </Link>
            <div className="switch">
              <img
                src={nintendo}
                alt="switch"
                style={{width: "1115px", height: "755px"}}
              />
            </div>

            <div className="decor-game">
              {!loser && !winner && (
                <button className="attack-btn" onClick={handleClick}></button>
              )}

              <img
                src={decor}
                alt="decor"
                style={{width: "100%", height: "100%", borderRadius: "12px"}}
              />
            </div>
            <div className="game2">
              <div className="player">
                <div className="blockFight">
                  <PlayerHuman {...playerHuman} className={classNameHuman} />
                </div>
                {winner && <Winner winner={winner} />}
                {loser && <Loser loser={loser} />}

                <div>
                  <PlayerCpu {...playerCpu} className={className} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Game;
