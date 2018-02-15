MyGame.creditState = function(game){
  this.game = game;
};

    MyGame.creditState.prototype = {

        create: function(){
            console.log(game.state.getCurrentState());

        }

    }
