import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {Container} from "@mui/material";
import {db} from "../../../firebaseConfig";
import {getDoc, collection, doc} from "firebase/firestore";

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    let itemCollection = collection(db, "productos");
    // console.log("ItemDetailContainer: ItemCollection is:");
    console.log(itemCollection);
    let thisItem = doc(itemCollection, id);
    // console.log("ItemDetailContainer: This Item (doc()) is:");
    // console.log(thisItem);
    getDoc(thisItem).then((res) => {
      // let foundItem = {id: res.id, ...res.data()};
      setItem({id: res.id, ...res.data()}); //seteamos el item con la data recibida.
      // console.log("ItemDetailContainer: El item que se guarda en el useState item es:");
      // console.log(foundItem);
    });
  }, [id]);

  return <Container maxWidth="sm">{item ? <ItemDetail itemDetail={item} /> : null}</Container>;
};

export default ItemDetailContainer;
