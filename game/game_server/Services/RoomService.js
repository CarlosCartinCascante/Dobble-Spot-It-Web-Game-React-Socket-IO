
function searchRoomById(roomsList, roomId){
    return roomsList.filter(room=> {room.id === roomId });
}

module.exports = {searchRoomById}