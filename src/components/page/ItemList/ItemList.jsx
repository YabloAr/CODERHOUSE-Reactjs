/* eslint-disable react/prop-types */
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//desparramar los items en forma de cards
import ItemCard from "../../common/ItemCard/ItemCard";

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemList = ({data}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {data.map((x) => {
            return (
              <Item key={x.id}>
                <ItemCard product={x} />
              </Item>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemList;
