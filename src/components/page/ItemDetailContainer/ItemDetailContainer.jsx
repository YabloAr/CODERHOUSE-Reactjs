import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {Container} from "@mui/material";

const apiURL = "https://fakestoreapi.com/products";

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((prod) => prod.id === parseInt(id));
        setItem(foundProduct);
        console.log(foundProduct);
      });
  }, [id]);

  return <Container maxWidth="sm">{item ? <ItemDetail itemDetail={item} /> : null}</Container>;
};

export default ItemDetailContainer;
