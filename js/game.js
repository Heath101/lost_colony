$(window).load(function() {
  game.init();
});
  
var game = {
    // Start preloading assets
    init: function(){
        loader.init();
         
        $('.gamelayer').hide();
        $('#gamestartscreen').show();
  
        game.backgroundCanvas = document.getElementById('gamebackgroundcanvas');
        game.backgroundContext = game.backgroundCanvas.getContext('2d');
         
        game.foregroundCanvas = document.getElementById('gameforegroundcanvas');
        game.foregroundContext = game.foregroundCanvas.getContext('2d');
         
        game.canvasWidth = game.backgroundCanvas.width;
        game.canvasHeight = game.backgroundCanvas.height;
    },
    start:function(){
        $('.gamelayer').hide();
        $('#gameinterfacescreen').show();
        game.running = true;
        game.refreshBackground= true;
         
        game.drawingLoop();
    },
     
    // The map is broken into square tiles of this size (20 pixels x 20 pixels)
    gridSize:20,
     
    // Store whether or not the background moved and needs to be redrawn
    backgroundChanged:true,
         
    // A control loop that runs at a fixed period of time
    animationTimeout:100, // 100 milliseconds or 10 times a second
    offsetX:0,    // X & Y panning offsets for the map
    offsetY:0,
    animationLoop:function(){
   
        // Animate each of the elements within the game
    },
    drawingLoop:function(){
        // Handle Panning the Map
        // Since drawing the background map is a fairly large operation,
        // we only redraw the background if it changes (due to panning)
        if (game.refreshBackground){
            game.backgroundContext.drawImage(game.currentMapImage,game.offsetX,game.offsetY, game.canvasWidth,game.canvasHeight, 0,0,game.canvasWidth,game.canvasHeight);
            game.refreshBackground = false;
        }
         
        // Call the drawing loop for the next frame using request animation frame
        if (game.running){
            requestAnimationFrame(game.drawingLoop);
        }
    },
}