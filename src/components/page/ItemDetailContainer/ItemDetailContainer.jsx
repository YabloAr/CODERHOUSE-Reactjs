import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const {productoid} = useParams();
  const [item, setItem] = useState();
  const apiURL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        const productosFind = data.find((prod) => prod.id === parseInt(productoid));
        setItem(productosFind);
        console.log(productosFind);
      });
  }, [productoid]);

  return <div className="itemDetailContainer">{item ? <ItemDetail itemDetail={item} /> : null}</div>;
};

export default ItemDetailContainer;
