import { useState } from "react";
import noDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [dice, setDice] = useState(noDice);

  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

  let randomDiceIndex = Math.floor(Math.random() * dices.length);

  const rollDice = () => {
    setDice(noDice);
    setTimeout(() => {
      setDice(dices[randomDiceIndex]);
    }, 1000);
  };
  return (
    <div>
      <img
        onClick={() => setDice(rollDice)}
        style={{ height: "100px" }}
        src={dice}
        alt="dice"
      />
    </div>
  );
}

export default Dice;
