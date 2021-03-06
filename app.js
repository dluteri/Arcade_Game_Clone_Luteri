// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Hero {
  constructor() {
    this.sprite = 'images/char-horn-girl.png';
    this.x = 0;
    this.y = 0;
  }
  }


// draw hero sprite on current x and y coordinate position (MC Walkthrough)

render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

// Direction of travel
/*
handleInput(input) {
  switch(input) {
    case 'left':
      this.x -= 20;
      break;
    case 'up':
      this.y -=20;
      break;
    case 'right';
      this.x +=20;
      break;
    case 'down':
      this.y += 20;
      break;
  }
}
*/


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Hero();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
