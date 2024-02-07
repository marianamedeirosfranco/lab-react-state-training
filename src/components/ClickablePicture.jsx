import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceglasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [click, setClick] = useState(false);

  const currentImage = click ? maxenceglasses : maxence;

  return (
    <div>
      <img onClick={() => setClick(!click)} src={currentImage} />
    </div>
  );
}

export default ClickablePicture;
