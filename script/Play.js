MyGame.playState = function (game) {
  // body...
  this.game = game;
};

    MyGame.playState.prototype = {

        create: function(){
            console.log(game.state.getCurrentState());
            
            this.prepareBoard();
            
        },

        gameOver: function(){
        //    this.state.start('Menu');
        },

        prepareBoard: function() {
            var piecesIndex = 0,
                i, j,
                piece, socket,
                PIECE_WIDTH = 55,
                PIECE_HEIGHT = 55,
                BOARD_COLS,
                BOARD_ROWS;

            this.game.world.setBounds(0,0,330,550);
            BOARD_COLS = Math.floor(this.game.world.width / PIECE_WIDTH);
            BOARD_ROWS = Math.floor((this.game.world.height/2) / PIECE_HEIGHT);
            console.log('width= '+ this.game.world.width+' height= '+this.game.world.height);
            console.log('rows= ' + BOARD_ROWS +' cols= '+ BOARD_COLS);
            piecesAmount = BOARD_COLS * BOARD_ROWS;
            console.log('pieces= '+piecesAmount);

            piecesGroup = this.game.add.group();
            socketGroup = this.game.add.group();

            var bmd = this.game.add.bitmapData(PIECE_WIDTH, PIECE_HEIGHT);
            // draw to the canvas context like normal
            bmd.ctx.beginPath();
            bmd.ctx.rect(0,0,PIECE_WIDTH, PIECE_HEIGHT);
            bmd.ctx.fillStyle = '#ff0000';
            bmd.ctx.fill();

            for (i = 0; i < BOARD_ROWS; i++)
            {

                for (j = 0; j < BOARD_COLS; j++)
                {
                    piece = piecesGroup.create(j * PIECE_WIDTH, i * PIECE_HEIGHT, "pic5", piecesIndex);
                    socket = socketGroup.create(j * PIECE_WIDTH, i * PIECE_HEIGHT, "socket", piecesIndex);
                                
                    piece.inputEnabled = true;
                    // piece.events.onInputDown.add(selectPiece, this);
                    bounds = new Phaser.Rectangle(0,0,330,550);
                    piece.input.enableDrag();
                    piece.input.enableSnap(PIECE_WIDTH, PIECE_HEIGHT, false, true);
                    piece.posX = j;
                    piece.posY = i;
                    piece.input.boundsRect = bounds;
                    piecesIndex++;
                    socket.scale.set(1,0.17);
                }
            }
            this.game.world.swap(piecesGroup, socketGroup);
            this.shuffle(piecesGroup.children);
        },


        showFinishedText: function() {

            var style = { font: "40px Arial", fill: "#000", align: "center"};

            var text = this.game.add.text(game.world.centerX, game.world.centerY + 100, "Congratulations! \nYou did it!", style);

            text.anchor.set(0.5);
        },

        shuffle: function(spriteX) {

            var counter = spriteX.length,
                tempX, tempY,
                index;

            while (counter > 0)
            {
                index = Math.floor(Math.random() * counter);

                counter--;

                tempX = spriteX[counter].x;
                spriteX[counter].x = spriteX[index].x;
                spriteX[index].x = tempX;

                tempY = spriteX[counter].y;
                spriteX[counter].y= spriteX[index].y;
                spriteX[index].y = tempY;
            }
            for (var i = 0; i < piecesAmount; i++) {
                spriteX[i].y += (this.game.world.height/2);
            }
        },

        update: function() {
            this.checkPos(piecesGroup.children, socketGroup.children);
        },

        checkPos: function(spriteA, spriteB){
            var isFinished = true;

            for (var i = 0; i < piecesAmount; i++) {
                if(spriteA[i].x != spriteB[i].x || spriteA[i].y != spriteB[i].y){   
                    isFinished = false;
                    continue;
                }   
            }
            
            if(isFinished){
                this.showFinishedText();
            }
        }

    }
