// Scene Container
const sceneContainer = document.querySelector(".scene");
const canvasWidth = sceneContainer.offsetWidth;
const canvasHeight = sceneContainer.offsetHeight;

/*--------------------------
Pixi
--------------------------*/

// Setup Pixi renderer to match the same size as the Matter world.
const app = new PIXI.Application({
    transparent: true,
    resizeTo: sceneContainer
  });
  
// Put the pixi apps canvas into the scene container.
document.querySelector(".scene").appendChild(app.view);

let FPSText = "none";

const FPS = new PIXI.Text(FPSText,{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'left'});
app.stage.addChild(FPS);



//ticker
app.ticker.add((delta)=>{
    //FPS
    FPSText=`FPS: ${app.ticker.FPS.toFixed(2)}`;
    FPS.text = FPSText;
    //
    



});
