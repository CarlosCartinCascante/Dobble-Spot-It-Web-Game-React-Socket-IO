module.exports = class Player{
    constructor(id, name, card, roomId){
        this.id = id;
        this.card = card;
        this.name = name;
        this.host = false;
        this.score = 0;
        this.roomId = roomId;
    }
}

