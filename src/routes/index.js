import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home";
import List from "../pages/produk/list";
import Detail from "../pages/produk/detail";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/list",
        element: <List />,
    },
    {
        path: "/detail/:id_barang",
        element: <Detail />,
    },
]);

export default router;