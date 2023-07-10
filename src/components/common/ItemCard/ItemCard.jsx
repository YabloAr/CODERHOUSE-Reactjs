/* eslint-disable react/prop-types */
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const ItemCard = ({product: item}) => {
  return (
    <Card sx={{maxWidth: 345}}>
      <CardMedia component="img" alt={item.title} height="140" image={item.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${item.id}`}>
          <Button size="small">Detalle</Button>
        </Link>
        <Button size="small">Agregar</Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
