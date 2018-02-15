    game = new Phaser.Game(330,550,Phaser.CANVAS,'gameContainer');

// var PIECE_WIDTH = 200,
//     PIECE_HEIGHT = 200,
//     BOARD_COLS,
//     BOARD_ROWS;

// var piecesGroup,
//     piecesAmount,
//     socketGroup;


// 	//Add all states
    game.state.add("Boot", MyGame.bootState);
    game.state.add("Preload", MyGame.loadState);
    game.state.add("Menu", MyGame.menuState);
    game.state.add("Help", MyGame.helpState);
    game.state.add("Credit", MyGame.creditState);
    game.state.add("Play", MyGame.playState);

//     //define global var
    game.global = {
        score: 0,
        sound: null,
        piecesGroup: null,
        piecesAmount: null,
        socketGroup: null,
        index: 1
    }

//         //Start the first state
    game.state.start("Boot",true,false);
