import {Grid, Paper, Typography, styled} from "@mui/material";

/* eslint-disable react/prop-types */
const ItemDetail = ({itemDetail}) => {
  //Item tiene que estar definido, sino tira error, a explorar el styled property.
  const Item = styled(Paper)(({theme}) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  //trabajar los estilos de presentacion, por ahora quedara asi.
  return (
    <Grid container spacing={2}>
      <Grid Item xs={12}>
        <Item>
          <Typography variant="h4">{itemDetail.title}</Typography>
        </Item>
      </Grid>
      <Grid Item xs={4}>
        <Item>
          <img src={itemDetail.image} alt="Item Image" width="200" />
        </Item>
        <Item>
          <Typography variant="body1">{itemDetail.description}</Typography>
          <Typography variant="h4"> $ {itemDetail.price} </Typography>
          <Typography variant="h6"> Valoracion: {itemDetail.rating.rate} </Typography>
        </Item>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
