//useState
import {useState} from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const suma = () => {
    setCounter(counter + 1);
  };
  const resta = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h3>Contador</h3>
      <h3>El contador esta en {counter} </h3>
      <button onClick={suma}>Suma</button>
      <button onClick={resta}>Resta</button>
    </>
  );
};

export default Counter;
