/**
 * RoomController
 *
 * @description :: Server-side logic for managing Rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	join: function(req, res,next){

      var roomId = req.param('roomId');
      Room.subscribe(req, roomId , ['message']);
      return next();


	}, 

	leave: function(req, res,next){
		var roomId = req.param('roomId');
		Room.unsubscribe(req, roomId, ['message']);
		return next();



	}
};

