const addToDB = (id) => {
    const players = getPlayersDB();
    players.push(id);
    localStorage.setItem('players', JSON.stringify(players))
}

const getPlayersDB = () => {
    const getPlayers = localStorage.getItem('players');
    return getPlayers ? JSON.parse(getPlayers) : [];
}

const deleteDB = () => {
    localStorage.removeItem('players');
}

export { addToDB, getPlayersDB, deleteDB }