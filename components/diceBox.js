import DiceBox from "@3d-dice/dice-box";
import { modelsDefault } from "../src/dice-box/index";

/*  --------------- DICE BOX -------------- */
// Note the dice-box assets in the public folder.
// Those files are all necessary for the web workers to function properly
// create new DiceBox class

  const diceDiv = document.createElement('div');
  diceDiv.setAttribute("id", "dice-box")
  document.body.appendChild(diceDiv) 


const Dice = new DiceBox(
  "#dice-box", // target DOM element to inject the canvas for rendering
  {
    id: "dice-canvas", // canvas element id
    assetPath: "/src/dice-box/",
    startingHeight: 8,
    throwForce: 6,
    spinForce: 5,
    lightIntensity: 0.9
  }
);

export { Dice };
 