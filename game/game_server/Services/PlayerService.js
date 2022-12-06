function searchPlayerById(playersList, playerId){
    for(i = 0; i< playersList.length ; i++){
        if(playersList[i].id === playerId){
            return playersList[i];
        }
    }
}

module.exports = {searchPlayerById}