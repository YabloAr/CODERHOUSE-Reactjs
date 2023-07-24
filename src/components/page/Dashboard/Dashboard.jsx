import {db} from "../../../firebaseConfig";
import {products} from "./../../../productsMock";
import {addDoc, collection} from "firebase/firestore";

const Dashboard = () => {
  const rellenar = () => {
    products.forEach((product) => {
      let refCollection = collection(db, "products");
      addDoc(refCollection, product); //antes de activar esto hay que borrar los id
    });
  };
  return (
    <>
      <div>Dashboard</div>
      <button onClick={rellenar}>Rellenar base de datos</button>
    </>
  );
};

export default Dashboard;
