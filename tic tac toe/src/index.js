const View = require ('./ttt-view');
const Game = require ('../../tictactoesolution/game.js');

const Board = require ('../../tictactoesolution/board.js'); 

  $(() => {
    const tttEles = $('figure'); 
    const newGame = new Game();

    new View(newGame, tttEles);
    // $('figure.ttt').find(tttEles); 
    const board = new Board();
 
  });








