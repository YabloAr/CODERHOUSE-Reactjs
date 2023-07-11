
import ItemListContainer from './../components/page/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './../components/page/ItemDetailContainer/ItemDetailContainer';
import Checkout from './../components/common/Checkout/Checkout';

const routes = [
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
        Element: Checkout
    },
    {
        id: "home",
        path: "*",
        Element: ItemListContainer
    }
]

export default routes