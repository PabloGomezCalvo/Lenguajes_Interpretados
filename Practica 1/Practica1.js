function Shot(position, velocity) {
  this._position = position;
  this._velocity = velocity;
}

// El prototipo ya existe, pero le añadimos el método advance()
Shot.prototype.advance = function () {
  this._position.y += this._velocity;
};
newShot.api = {
  advance: function () {
    this._position.y += this._velocity;
  }
};
var shotAPI = {
  advance: function () {
    this._position.y += this._velocity;
  }
};
function Point(x, y) {
  this.x = x;
  this.y = y;
}
//Parcial AllySpaceShip for practising while watching instructions.
var spaceship={
	_life: 100,
	_position: { x: 10, y:10},
	_graphic : 'SpaceShip1.png',

	moveLeft: function () { this._position.x -=1;};
	moveRight: function () { this._pposition.x +=1;};
	advance: function () { this._position.y+=2;};
	shoot: var allyShot = new Shot (new Point(15,585),-2);
	
}
//Creating Ally
function Ally(position) {
  this._graphic = 'ally.png';
  this._position = position;
}

Ally.prototype.moveLeft = function () { this._position.x -= 2; };
Ally.prototype.moveRight = function () { this._position.x += 2; };
Ally.prototype.shoot = function () {
  var firePosition = new Position(this._position.x, this._position.y - 10);
  var shot = new Shot(firePosition, -2);
  return shot;
};
// Creating enemy
function Enemy(graphic, position, score) {
  this._graphic = graphic;
  this._currentDirection = 'right';
  this._position = position;
  this._score = score;
}

Enemy.prototype.moveLeft = function () { this._position.x -= 2; };
Enemy.prototype.moveRight = function () { this._position.x += 2; };
Enemy.prototype.advance = function () { this._position.y += 2; };
Enemy.prototype.shoot = function () {
  var firePosition = new Position(this._position.x, this._position.y + 10);
  var shot = new Shot(firePosition, 2);
  return shot;
};

