class View {
  constructor(newGame, $el) {
    this.game = newGame; 
    const board = this.setupBoard();
    this.bindEvents();
  }
  
  bindEvents() {
    const $listItems = $('li');
    
    $listItems.on("click", event => {
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      // alert($currentTarget.text());
      this.makeMove($currentTarget);
    }); 
  }
  
  
  
  makeMove($square) {
    // ($square).removeClass('incomplete'); 
    // ($square).addClass('complete'); 
    $square.toggleClass('complete incomplete');
        
    if (this.game.currentPlayer === 'x') {
      $(".complete").text("X");
      
    } else {
      $(".complete").text("O");
    }

    //if validMove? background = white (x or o)
    // alert('Your move is INVALID!');
    // if isValidPosition && incomplete? = turn cell to complete (change color and view x or y)
  }

  setupBoard() {
    
  }
}

module.exports = View;


//when event listener hears the click, toggle to complete!