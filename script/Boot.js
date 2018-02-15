var MyGame = {};

MyGame.bootState = function (game) {
  // body...
  this.game = game;
}

    MyGame.bootState.prototype = {

        init: function(){

            console.log(this.game.state.getCurrentState());

                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.setMinMax(100,250,330,550);
            //    this.scale.forceOrientation(false,true);//(landscape,portrait)
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.updateLayout(true);
                this.scale.refresh();

        },

        preload: function(){
            
        },

        create: function(){
            this.state.start('Preload');
        }

    }
