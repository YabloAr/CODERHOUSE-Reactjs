/* eslint-disable no-unused-vars */
import {useContext, useState} from "react";
import {CartContext} from "./../../../context/CartContext";
import db from "../../../firebaseConfig";
import {addDoc, collection, updateDoc, doc} from "firebase/firestore";

//clase 10, eventos.
const Checkout = () => {
  const [data, setData] = useState({nombre: "", apellido: ""});
  const [orderId, setOrderId] = useState("");
  const {cart, getTotalPrice} = useContext(CartContext); //traemos los datos de contexto

  //evento del submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Se envio");

    //AXIOS.POST(URL, DATOS)
    console.log(data);

    //clase 14

    //definimos los datos del comprador en el comprar
    let order = {
      buyer: data,
      items: cart,
      //total,
    };

    //CREAMOS una coleccion de ordenes de compra en fb
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((res) => setOrderId(res.id));

    //modificar stock de acuerdo a la compra (firebase internamente usa patch)

    //UPDATE DOC
    //escritura segun ch diapos
    // let refDoc = doc(db, "products", id); //(firebaseConfig, nombre de coleccion, dato para encontrarlo)
    // updateDoc(refDoc, {stock: 200});

    //escritura mejorada por Jorge
    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {stock: product.stock - product.quantity});
    });

    //DELETE no lo vemos, porque no tenemos dashboard de CRUD en el curso. (buscar alguna tabal en MUI)
    // import { deleteDoc } from "firebase/firestore";
  };

  //funcion campo Nombre y Apellido
  const handleChange = (evt) => {
    console.log("escribi en el nombre");
    setData({...data, [evt.target.name]: evt.target.value});
  };

  return (
    <div>
      <h1>Checkout</h1>;
      {orderId ? (
        <div>
          <h3>Gracias por su compra.</h3>
          <h4>Su numero de seguimiento es {orderId}</h4>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Ingrese su nombre" name="nombre" onChange={handleChange} />
          <input type="text" placeholder="Ingrese su apellido" name="apellido" onChange={handleChange} />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
