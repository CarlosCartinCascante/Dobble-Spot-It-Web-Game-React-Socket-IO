module.exports = class Room{
    players = [];    constructor(id, gameTime, maxPlayerNumber){
        this.id = id;
        this.playerList = [];
        this.gameTime = gameTime;
        this.maxPlayerNumber = maxPlayerNumber;
        this.gameStarted = false;
    }
    addPlayer = (player) =>{
        this.playerList.push(player)
    }
    removePlayer = (playerId) => {
        this.playerList = this.playerList.filter(player => {return player.id !== playerId});
    }
}
