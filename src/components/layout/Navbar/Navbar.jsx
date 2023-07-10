/* eslint-disable react/no-unescaped-entities */
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import CartWidget from "../../common/CartWidget/CartWidget";
import {Link} from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}>
      <ButtonGroup variant="text" aria-label="text button group">
        <Link to="/">
          <Button>
            <Avatar alt="Logo" src="https://res.cloudinary.com/dfrvbm0im/image/upload/v1688975040/market-app-logo_xggumk.svg" />
          </Button>
        </Link>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/category/jewelery">
          <Button>Jewelery</Button>
        </Link>
        <Link to="/category/electronics">
          <Button>Electronics</Button>
        </Link>
        <Link to="/category/men's clothing">
          <Button>Men's Clothing</Button>
        </Link>
        <Link to="/category/women's clothing">
          <Button>Women's Clothing</Button>
        </Link>
        <CartWidget />
      </ButtonGroup>
    </Box>
  );
};
export default navbar;
