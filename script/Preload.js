MyGame.loadState = function (game) {
  // body...
  this.game = game;
};

  MyGame.loadState.prototype = {

      preload: function(){
        console.log(game.state.getCurrentState());
        this.load.image("socket", "Assets/mobile/socket.png");
        this.load.spritesheet("pic1", "Assets/mobile/fujiyamaCastle.png", 55, 55);
        this.load.spritesheet("pic2", "Assets/mobile/fujiyamaJapan.png", 55, 55);
        this.load.spritesheet("pic3", "Assets/mobile/sapporoCity.png", 55, 55);
        this.load.spritesheet("pic4", "Assets/mobile/sapporoDome.png", 55, 55);
        this.load.spritesheet("pic5", "Assets/mobile/tokyo.png", 55, 55);
        this.load.image('pc1',"Assets/fujiyamaCastle.jpg");
        this.load.image('pc2',"Assets/fujiyamaJapan.jpg");
        this.load.image('pc3',"Assets/sapporoCity.jpg");
        this.load.image('pc4',"Assets/sapporoDome.jpg");
        this.load.image('pc5',"Assets/tokyo.jpg");
        this.load.image('arrow',"Assets/arrow.png");
        this.load.image('frame',"Assets/frame.png");
        this.load.image('exit',"Assets/exit.png");
        this.load.image('play',"Assets/play.png");
          // load assets here
      },

      create: function(){
            // testing
          this.state.start('Menu');
      }

  }
