import React from "react";
import { getPlayersDB } from "../utilities/utilities";

const Player = ({ player, hirePlayer, removePlayer }) => {
  const { id, name, image, price } = player;
  const previousId = getPlayersDB();
  let isAdded = previousId.find((pId) => pId == id);

  return (
    <>
      <div className="card border border-primary/30">
        <figure className="p-2">
          <img src={image} alt={name} className="rounded-xl w-full h-44" />
        </figure>
        <div className="card-body items-center text-center pt-3">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg">Price: ${price}</p>
          <div className="card-actions mt-4">
            {isAdded ? (
              <button
                className="border border-gray-500/50 py-2 px-3 rounded-md text-lg font-semibold"
                onClick={() => removePlayer(id)}
              >
                Remove Now
              </button>
            ) : (
              <button
                className="border border-primary/50 py-2 px-3 rounded-md text-lg font-semibold"
                onClick={() => hirePlayer(player)}
              >
                Hire Now
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
