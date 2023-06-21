import CartWidget from "../CartWidget/CartWidget";

const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Running</a>
        </li>
        <li>
          <a>Soccer</a>
        </li>
        <li>
          <a>Basket</a>
        </li>
        <li>
          <a>Swimming</a>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
};
export default navbar;
