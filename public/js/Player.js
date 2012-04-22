(function(exports) {

	var Player = function(id) {
		this.id = id || -1;
		this.nick = 'Guest'+ this.id;
		
		this.x = 10.5;			// current x, y position
		this.y = 6.5;
		this.dir = 0;			// the direction that the player is turning, either -1 for left or 1 for right.
		this.rotDeg = 0;		// the current angle of rotation 
		this.rot = 0;			// rotation in radians
		this.speed = 0;			// is the playing moving forward (speed = 1) or backwards (speed = -1).
		this.moveSpeed = 0.10;	// how far (in map units) does the player move each step/update
		this.rotSpeed = 3;		// how much does the player rotate each step/update (in degrees)
	};

	Player.prototype.toString = function() { 
		return '('+ this.id +') '+ this.nick;
	};

	exports.Player = Player;
})(typeof global === "undefined" ? window : exports);