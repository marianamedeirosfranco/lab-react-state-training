import { useState } from "react";

function Carousel(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={setCount(count - 1)}>Left</button>
      <img src={props.images[count + 1]} />
      <button onClick={setCount(count + 1)}>Right</button>
    </div>
  );
}

export default Carousel;
