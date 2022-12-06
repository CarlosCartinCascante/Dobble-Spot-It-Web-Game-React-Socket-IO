//player class with all the properties of the player
class Player {
    constructor(id, namee, card, score) {
        this.id = id;
        this.namee = namee;
        this.card = card;
        this.score = score;
        this.room = "";
    };
}
module.exports = Player;
