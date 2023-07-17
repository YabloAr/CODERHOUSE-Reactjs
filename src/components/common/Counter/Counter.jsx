/* eslint-disable react/prop-types */
//useState
import {Button} from "@mui/material";
import {Typography} from "@mui/material";

const Counter = ({counter, sumar, restar, onAdd}) => {
  return (
    <div>
      <Button variant="outlined" size="small" onClick={sumar}>
        Add
      </Button>
      <Button variant="outlined" size="small" onClick={restar}>
        Subtract
      </Button>
      <Typography variant="h6"> {counter} </Typography>
      <Button variant="outlined" size="small" onClick={onAdd}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Counter;
