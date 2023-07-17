
import ItemListContainer from './../components/page/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './../components/page/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './../components/page/Cart/CartContainer';
import CounterContainer from '../components/common/Counter/CounterContainer';

const routes = [
    {
        id: "home",
        path: "*",
        Element: ItemListContainer
    },
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "home",
        path: "/category/:category",
        Element: ItemListContainer
    },
    {
        id: "home",
        path: "/item/:id",
        Element: ItemDetailContainer
    },
    {
        id: "home",
        path: "/carrito",
        Element: CartContainer
    },
    {
        id: "counter",
        path: "/counter",
        Element: CounterContainer
    }
]

export default routes