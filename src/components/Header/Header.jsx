import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-primary/90">
      <div className="w-[96%] max-w-[1440px] mx-auto h-20 flex justify-between items-center">
        <a href="/">
          <h2 className="text-3xl font-bold text-secondary hover:text-success cursor-pointer">
            Hire Player
          </h2>
        </a>
        <p className="text-xl text-white font-semibold">Player</p>
      </div>
    </header>
  );
};

export default Header;
