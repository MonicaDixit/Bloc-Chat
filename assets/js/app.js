io.socket.on('connect' ,  function socketConnected() {
 console.log('a user connected');

 
 
 io.socket.on('hello', function(data) {
      window.me = data;
      console.log('data-->'+ data.id);
    });
      

io.socket.on('room' , function messsageReceived(message){

  switch(message.verb){
  	case 'created':
  	addRoom(message.data);
  	break;


  	case 'messaged':
  	 receiveRoomMessage(message.data);


  	 default:
  	 break;


  }

});



io.socket.get('/room'  , updateRoomList);

$('#join-room').click(joinRoom);
$('#new-room').click(newRoom);

console.log('socket is now connected');



});