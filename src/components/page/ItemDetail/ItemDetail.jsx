import {Grid, Paper, Typography, styled} from "@mui/material";
import {CartContext} from "../../../context/CartContext";
import {useContext} from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

//Item tiene que estar definido para mui, sino tira error, a explorar el styled property.
const Item = styled(Paper)(({theme}) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

/* eslint-disable react/prop-types */
const ItemDetail = ({itemDetail}) => {
  console.log("ItemDetail: prop que llega es:");
  console.log(itemDetail);
  //esto es contexto
  const {addToCart} = useContext(CartContext);

  //boton añadir al carrito
  const onAdd = (cantidad) => {
    let productCart = {...itemDetail, quantity: cantidad};
    addToCart(productCart);
  };

  //trabajar los estilos de presentacion, por ahora quedara asi.
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>
          <Typography variant="h4">{itemDetail.title}</Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <img src={itemDetail.image} alt="Item Image" width="200" />
        </Item>
        <Item>
          <Typography variant="body1">{itemDetail.description}</Typography>
          <Typography variant="h4"> $ {itemDetail.price} </Typography>
          {/* <Typography variant="h6"> Valoracion: {itemDetail.rating.rate} </Typography> */}

          {/* la siguiente linea es una validacion del counter en relacion al stock disponible
           y los productos actualmente en el carrito. Tal cual el profe, adaptar a mi codigo. */}
          {/* {(typeof totalQuantity === "undefined" || itemDetail.stock > totalQuantity) && itemDetail.stock > 0 && <CounterContainer stock={itemDetail.stock} onAdd={onAdd} initial={totalQuantity} />} */}

          {/* Si hay stock */}
          {itemDetail.stock > 0 && (
            <Button variant="contained" endIcon={<AddIcon />} onClick={onAdd}>
              Add to Cart
            </Button>
          )}
          {/* Si no hay stock */}
          {itemDetail.stock === 0 && <Typography variant="h6">No stock!</Typography>}
          {/* Referido al stock y al carrito */}
          {/* {typeof totalQuantity !== "undefined" &&
           totalQuantity === itemDetail.stock &&
           (<Typography variant="h6">Maximum quantity in cart!</Typography>)} */}
        </Item>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
