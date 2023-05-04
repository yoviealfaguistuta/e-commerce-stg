import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home";
import List from "../pages/produk/list";
import Keranjang from "../pages/produk/keranjang";
import Profile from "../pages/produk/profile";
import Checkout from "../pages/produk/checkout";
import About from "../pages/produk/list/about";
import Contact from "../pages/produk/list/contact";
import Detail from "../pages/produk/detail";
import Login from "../pages/produk/login/login";
import Register from "../pages/produk/login/register";
import Penawaran from "../components/Penawaran";
import Pembayaran from "../components/Pembayaran";



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
    {
        path: "/keranjang",
        element: <Keranjang />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/penawaran",
        element: <Penawaran />,
    },
    {
        path: "/pembayaran",
        element: <Pembayaran />,
    },
]);

export default router;