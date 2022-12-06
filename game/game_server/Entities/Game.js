module.exports = class Game{
    rooms = [];

    addRoom = (room) => {
        this.rooms.push(room);
    }

    removeRoom = (roomId) => {
        this.rooms = this.rooms.filter(room => {return room.id !== roomID});
    }
}
