MyGame.menuState = function(game){
  this.game = game;
};

    MyGame.menuState.prototype = {
        create: function(){
            console.log(game.state.getCurrentState());
			var background;
			var left;
			var right;
			var play;
			var exit;
			var place;
			var frame;
		    var c = Phaser.Color.getRandomColor(50, 255, 255);
   		 	game.stage.backgroundColor = c;
		 
			place = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 50, 'pc1');
			frame = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 50, 'frame');

			right = this.game.add.button(this.game.world.centerX + 130, this.game.world.centerY - 50, 'arrow', this.rightClick, this, 2, 1, 0);
				
			left = this.game.add.button(this.game.world.centerX - 130, this.game.world.centerY - 50, 'arrow', this.leftClick, this, 2, 1, 0);

			play = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 120, 'play', this.playClick, this, 2, 1, 0);
				
			exit = this.game.add.button(10, 10, 'exit', this.exitClick, this, 2, 1, 0);

		// 		//set anchor
			place.anchor.setTo(0.5);
			frame.anchor.setTo(0.5);
			left.anchor.setTo(0.5);
			right.anchor.setTo(0.5);
			play.anchor.setTo(0.5);

				//set scale
			place.scale.setTo(0.18, 0.26);
			left.scale.setTo(-0.1, 0.1);
			frame.scale.setTo(0.25);
			right.scale.setTo(0.1);
			play.scale.setTo(0.1);
			exit.scale.setTo(0.1);

           
        },

		leftClick: function(index, place) {
			if(index != 1){
				index--;
			}
			place.loadTexture('pc' + index);
			console.log("left")
		},

		rightClick: function(index, place) {
			if(index != 4){
				index++;
			}
			place.loadTexture('pc' + index);
			console.log("right");
		},

		playClick: function() {
 			this.state.start('Play');
		},

		exitClick: function() {

		},

		render: function () {

		}

    }
