/* eslint-disable no-unused-vars */
import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader"; //react spinners for the loading time, y tambein el skeleton de mui.
import {Skeleton} from "@mui/material";

//estilo del spinner
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const apiURL = "https://fakestoreapi.com/products";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("No error");
  const [loading, setLoading] = useState(false);
  const {category} = useParams();

  useEffect(() => {
    fetch(apiURL).then((res) => res.json());
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        if (category !== undefined) {
          const productosFiltrados = data.filter((prod) => prod.category === category);

          setData(productosFiltrados);
        } else {
          setData(data);
        }
      })
      .catch((err) => setError(err));
  }, [category]);

  if (ItemList.length === 0) {
    return <ClipLoader color="blue" cssOverride={override} size={150} aria-label="Loading Spinner" data-testid="loader" />;
  }

  return <ItemList data={data} />;
};

export default ItemListContainer;
