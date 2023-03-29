import React from "react";
import { deleteDB } from "../utilities/utilities";

const Cart = ({ deletePlayer, addPlayer }) => {
  const totalConst = addPlayer.reduce((p, c) => p + c.price, 0);
  return (
    <>
      <h3 className="text-center text-2xl font-semibold mt-5">Order Players</h3>
      <div className="mt-6 px-2 text-lg space-y-2">
        <p className="font-semibold">Selected Players: {addPlayer.length}</p>
        <p className="text-xl font-semibold">Player Name:</p>
        <div className="pl-3">
          {addPlayer.map((player, index) => (
            <p key={index}>
              {++index}. {player?.name}
            </p>
          ))}
        </div>
        <p className="text-xl font-semibold pb-8">Total Price: ${totalConst}</p>
        <button
          onClick={() => {
            deleteDB();
            deletePlayer([]);
          }}
          className="w-full btn btn-info"
        >
          Remove Players
        </button>
      </div>
    </>
  );
};

export default Cart;
