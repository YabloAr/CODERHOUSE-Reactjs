/* eslint-disable no-unused-vars */
import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader"; //react spinners for the loading time, y tambein el skeleton de mui.
import {db} from "../../../firebaseConfig";
import {getDoc, getDocs, addDoc, deleteDoc, updateDoc, collection, query, where} from "firebase/firestore";

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
    let itemCollection = collection(db, "productos");
    let consulta;

    if (category) {
      consulta = query(itemCollection, where("category", "==", category));
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta).then((res) => {
      //getDocs, devuelve array de productos, pero en cada producto solo recibo en una propiedad
      //el id generado por firebase. El resto del obj viene encriptado (ej: res.docs)
      console.log(`ItemListContainer: Firebase 'res.docs[0].id' id is ${res.docs[0].id}`);

      //para poder encontrar el objeto con la data que conociamos, usamos el metodo .data
      console.log(`ItemListContainer: Firebase 'res.docs[0].data' is:`);
      console.log(res.docs[0].data());

      let products = res.docs.map((doc) => {
        return {...doc.data(), id: doc.id};
      });
      console.log(`ItemListContainer: Lista de productos que se va es:`);
      console.log(products);
      setData(products); //seteamos el useState con la data de firebase
    });
  }, [category]);

  if (ItemList.length === 0) {
    return <ClipLoader color="blue" cssOverride={override} size={150} aria-label="Loading Spinner" data-testid="loader" />;
  }

  return (
    <>
      <h3>Trabajando con Firebase</h3>
      <ItemList data={data} />;
    </>
  );
};

export default ItemListContainer;
