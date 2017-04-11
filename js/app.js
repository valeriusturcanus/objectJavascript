// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.render;
    // console.log(dt);
    // console.log(hurray);
    this.x += dt*this.speed
    if (this.x > 600){
      this.x=-100;

    };

    if (Math.abs(this.x-player.x)<80 & Math.abs(this.y-player.y)<80)
    {
      lives.num -= 1;
      player.x = 200;
      player.y = 400;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x,y) {
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
  this.speed = 300;

};

Player.prototype.update = function (dt) {
  if (this.y <=0)
  {
    score.num +=10;
    this.y = 400;
    this.x = 200;
  }
  this.render;
};
Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
};
Player.prototype.handleInput = function (key) {
  console.log(key);
  if (key == 'left'){
    if ( this.x > 30){

      this.x = this.x -50;
    };
  };
  if (key == 'right'){
    if ( this.x < 400){

      this.x = this.x +50;
    };
  };
  if (key == 'up'){
    if ( this.y > 10){

      this.y = this.y -50;
    };
  };
  if (key == 'down'){
    if ( this.y < 400){

      this.y = this.y +50;
    };
  };

};
var Textt = function (name,num,x,y){
  this.num = num;
  this.name = name;
  this.x = x;
  this.y = y;
}

Textt.prototype.render = function () {
  // console.log('canvas');
  ctx.fillStyle = 'black';
  ctx.font = '25px serif';
  ctx.fillText(this.name+' '+ this.num,this.x,this.y);
}
var score = new Textt('SCORE:',0,350,90);
var lives = new Textt('LIVES:',3,40,90);
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(-100,70,120),new Enemy(-200,150,150),new Enemy (-400,230,180)];
var player = new Player(200,400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
// var Player = 'I made it up';
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
