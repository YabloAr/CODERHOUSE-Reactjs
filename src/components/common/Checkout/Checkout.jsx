import {useState} from "react";

//clase 10, eventos.
const Checkout = () => {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
  });

  //evento del submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Se envio");

    //AXIOS.POST(URL, DATOS)
    console.log(data);
  };

  //funcion campo Nombre y Apellido
  const handleChange = (evt) => {
    console.log("escribi en el nombre");
    setData({...data, [evt.target.name]: evt.target.value});
  };

  return (
    <div>
      <h1>Checkout</h1>;
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre" name="nombre" onChange={handleChange} />
        <input type="text" placeholder="Ingrese su apellido" name="apellido" onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
