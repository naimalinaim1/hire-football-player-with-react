import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Player from "../Player/Player";
import { addToDB, getPlayersDB } from "../utilities/utilities";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [addPlayer, setAddPlayer] = useState([]);

  // load player information
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // load previous player
  useEffect(() => {
    const previousID = getPlayersDB();
    let previousPlayer = [];
    players[0] &&
      previousID.forEach((id) => {
        let getPlayer = players.find((player) => player.id == id);
        previousPlayer.push(getPlayer);
      });
    setAddPlayer(previousPlayer);
  }, [players]);

  // hire player
  const hirePlayer = (newPlayer) => {
    const isPlayerExists = addPlayer.find(
      (player) => player.id === newPlayer.id
    );
    if (!isPlayerExists) {
      setAddPlayer([...addPlayer, newPlayer]);
      addToDB(newPlayer.id);
    } else {
      alert("Player already exists");
    }
  };

  const removePlayer = (id) => {
    const player = addPlayer.filter((player) => player.id !== id);
    setAddPlayer(player);
    const removeId = getPlayersDB().filter((pId) => pId !== id);
    localStorage.setItem("players", JSON.stringify(removeId));
  };

  return (
    <div className="relative grid gap-2 md:grid-cols-[1fr_290px] w-full max-w-[1400px] mx-auto">
      <div className="my-10 pl-4 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            hirePlayer={hirePlayer}
            removePlayer={removePlayer}
          />
        ))}
      </div>
      <div className="bg-orange-300 max-h-screen sticky top-0">
        <Cart deletePlayer={setAddPlayer} addPlayer={addPlayer} />
      </div>
    </div>
  );
};

export default Players;
