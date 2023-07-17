/* eslint-disable react/prop-types */
import {useState} from "react";
import Counter from "./Counter";

const CounterContainer = ({stock, onAdd}) => {
  const [counter, setCounter] = useState(0);

  const suma = () => {
    counter < stock ? setCounter(counter + 1) : alert("Out of Stock.");
  };
  const resta = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return <Counter contador={counter} sumar={suma} restar={resta} onAdd={onAdd} />;
};

export default CounterContainer;
