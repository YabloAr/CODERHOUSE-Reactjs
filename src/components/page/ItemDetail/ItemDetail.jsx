import {Grid, Paper, Typography, styled} from "@mui/material";
import {CartContext} from "../../../context/CartContext";
import {useContext} from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Send";

//Item tiene que estar definido para mui, sino tira error, a explorar el styled property.
const Item = styled(Paper)(({theme}) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

/* eslint-disable react/prop-types */
const ItemDetail = ({itemDetail}) => {
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
          <Typography variant="h6"> Valoracion: {itemDetail.rating.rate} </Typography>
          <Button variant="contained" endIcon={<AddIcon />} onClick={onAdd}>
            Add to Cart
          </Button>
        </Item>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
