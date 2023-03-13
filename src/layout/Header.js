import { Link } from "react-router-dom";
import logo from "../assets/img/logo/logo.svg";
import React, { useState, useEffect } from 'react';




export const Header = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const showHeader = scrollPosition <= 0;
    const hideHeader = scrollPosition > 0;

    // bar
    const [visible, setVisible] = useState(false);
    const [visibleWish, setVisibleWish] = useState(false);
    const [visibleCart, setVisibleCart] = useState(false);




    const toggleVisibility = () => {
        setVisible(!visible);
    };

    ///wish
    const toggleVisibilityWish = () => {
        setVisibleWish(!visibleWish);

    };
    const handleCloseModalWish = () => {
        setVisibleWish(false);
    };

    ///cart
    const toggleVisibilityCart = () => {
        setVisibleCart(!visibleCart);

    };
    const handleCloseModalCart = () => {
        setVisibleCart(false);
    };


    return (
        <>
            <div className="Offcanvas_menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="canvas_open canvas4_open">
                                <a href="javascript:void(0)">
                                    <i className="ion-navicon" />
                                </a>
                            </div>
                            <div className="Offcanvas_menu_wrapper">
                                <div className="canvas_close">
                                    <a href="javascript:void(0)">
                                        <i className="ion-android-close" />
                                    </a>
                                </div>
                                <div className="antomi_message">
                                    <p>Get free shipping – Free 30 day money back guarantee</p>
                                </div>
                                <div className="header_top_settings text-right">
                                    <ul>
                                        <li>
                                            <a href="https://www.google.co.id/maps/place/PT.MICRODATA+INDONESIA+%7C+SOFTWARE+DEVELOPER/@-5.3832723,105.2941434,17z/data=!3m1!4b1!4m5!3m4!1s0x2e40dac03d097843:0x6bb59f4ba9a84e8c!8m2!3d-5.3832723!4d105.2963321" target="__blank">Store Locations</a>
                                        </li>
                                        <li>
                                            <a href="https://www.jne.co.id/en/tracking/trace" target="__blank">Track Your Order</a>
                                        </li>
                                        <li>Hotline: <a href="tel:+628118880853">+62 8118 8808 53</a>
                                        </li>
                                        <li>Quality Guarantee Of Products</li>
                                    </ul>
                                </div>

                                <div className="search_container">
                                    <form action="#">
                                        <div className="hover_category">
                                            <select className="select_option" name="select" id="categori1">
                                                <option selected value={1}>SEMUA JENIS BARANG</option>
                                                <option value={2}>Accessories</option>
                                                <option value={3}>Accessories &amp; More</option>
                                                <option value={4}>Butters &amp; Eggs</option>
                                                <option value={5}>Camera &amp; Video </option>
                                                <option value={6}>Mornitors</option>
                                                <option value={7}>Tablets</option>
                                                <option value={8}>Laptops</option>
                                                <option value={9}>Handbags</option>
                                                <option value={10}>Headphone &amp; Speaker</option>
                                                <option value={11}>Herbs &amp; botanicals</option>
                                                <option value={12}>Vegetables</option>
                                                <option value={13}>Shop</option>
                                                <option value={14}>Laptops &amp; Desktops</option>
                                                <option value={15}>Watchs</option>
                                                <option value={16}>Electronic</option>
                                            </select>
                                        </div>
                                        <div className="search_box">
                                            <input placeholder="Search product..." type="text" />
                                            <button type="submit">Search</button>
                                        </div>
                                    </form>
                                </div>
                                <div id="menu" className="text-left ">
                                    <ul className="offcanvas_main_menu">
                                        <li className="menu-item-has-children active">
                                            <a href="index-4.html#">Home</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="index.html">Home 1</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Home 2</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Home 3</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">Home 4</a>
                                                </li>
                                                <li>
                                                    <a href="index-5.html">Home 5</a>
                                                </li>
                                                <li>
                                                    <a href="index-6.html">Home 6</a>
                                                </li>
                                                <li>
                                                    <a href="index-7.html">Home 7</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="index-4.html#">Shop</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children">
                                                    <a href="index-4.html#">Shop Layouts</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="shop.html">shop</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-fullwidth.html">Full Width</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-fullwidth-list.html">Full Width list</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-right-sidebar.html">Right Sidebar </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-right-sidebar-list.html"> Right Sidebar list</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-list.html">List View</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="index-4.html#">other Pages</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="cart.html">cart</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">Wishlist</a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Checkout</a>
                                                        </li>
                                                        <li>
                                                            <a href="my-account.html">my account</a>
                                                        </li>
                                                        <li>
                                                            <a href="404.html">Error 404</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="index-4.html#">Product Types</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="product-details.html">product details</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-sidebar.html">product sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-grouped.html">product grouped</a>
                                                        </li>
                                                        <li>
                                                            <a href="variable-product.html">product variable</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-countdown.html">product countdown</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="index-4.html#">blog</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog.html">blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">blog details</a>
                                                </li>
                                                <li>
                                                    <a href="blog-fullwidth.html">blog fullwidth</a>
                                                </li>
                                                <li>
                                                    <a href="blog-sidebar.html">blog sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-no-sidebar.html">blog no sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="index-4.html#">pages </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="about.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="faq.html">Frequently Questions</a>
                                                </li>
                                                <li>
                                                    <a href="privacy-policy.html">privacy policy</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">contact</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">login</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">Error 404</a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">compare</a>
                                                </li>
                                                <li>
                                                    <a href="coming-soon.html">coming soon</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="my-account.html">my account</a>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="contact.html"> Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="Offcanvas_footer">
                                    <span>
                                        <a href="index-4.html#">
                                            <i className="fa fa-envelope-o" /> info@yourdomain.com </a>
                                    </span>
                                    <ul>
                                        <li className="facebook">
                                            <a href="index-4.html#">
                                                <i className="fa fa-facebook" />
                                            </a>
                                        </li>
                                        <li className="twitter">
                                            <a href="index-4.html#">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="pinterest">
                                            <a href="index-4.html#">
                                                <i className="fa fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li className="google-plus">
                                            <a href="index-4.html#">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                        </li>
                                        <li className="linkedin">
                                            <a href="index-4.html#">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header">
                <div className="main_header header_four">
                    <div className="container">
                        <div className="header_top">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-5">
                                    <div className="antomi_message">
                                        <p>Get free shipping – Free 30 day money back guarantee</p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div class="header_top_settings text-right">
                                        <ul>
                                            <li>
                                                <a style={{ color: "white" }} href="https://www.google.co.id/maps/place/PT.MICRODATA+INDONESIA+%7C+SOFTWARE+DEVELOPER/@-5.3832723,105.2941434,17z/data=!3m1!4b1!4m5!3m4!1s0x2e40dac03d097843:0x6bb59f4ba9a84e8c!8m2!3d-5.3832723!4d105.2963321" target="__blank">Store Locations</a>
                                            </li>
                                            <li>
                                                <a style={{ color: "white" }} href="https://www.jne.co.id/en/tracking/trace" target="__blank">Track Your Order</a>
                                            </li>
                                            <li>Hotline: <a style={{ color: "white" }} href="tel:+628118880853">+62 8118 8808 53</a>
                                            </li>
                                            <li>Quality Guarantee Of Products</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header_middle header_middle_style4">
                            <div className="row align-items-center">
                                <div className="column1 col-lg-3 col-md-3 col-4">
                                    <div className="logo">
                                        <a href="/">
                                            <img src={logo} alt="" />

                                        </a>
                                    </div>
                                </div>
                                <div className="column2 col-lg-6 col-md-12">
                                    <div className="search_container">
                                        <form action="#">
                                            <div className="hover_category">
                                            </div>
                                            <div className="search_box">
                                                <input placeholder="Search product..." type="text" />
                                                <button type="submit">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="column3 col-lg-3 col-md-7 col-6">
                                    <div className="header_configure_area header_configure_four">
                                        <div onClick={toggleVisibilityWish} className="header_wishlist">
                                            <a href="javascript:void(0)">
                                                <i className="ion-android-favorite-outline" />
                                                <span className="wishlist_count">0</span>
                                            </a>
                                        </div>
                                        <div onClick={toggleVisibilityCart} className="mini_cart_wrapper">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-shopping-bag" />
                                                <span className="cart_count">0</span>
                                            </a>
                                            <div className="mini_cart">
                                                <div className="cart_close">
                                                    <div className="cart_text">
                                                        <h3>cart</h3>
                                                    </div>
                                                    <div className="mini_cart_close">
                                                        <a href="javascript:void(0)">
                                                            <i className="ion-android-close" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="cart_item">
                                                    <div className="cart_img">
                                                        <a href="index-4.html#">
                                                            <img src="assets/img/s-product/product.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="cart_info">
                                                        <a href="index-4.html#">Primis In Faucibus</a>
                                                        <p>Qty: 1 X <span> $60.00 </span>
                                                        </p>
                                                    </div>
                                                    <div className="cart_remove">
                                                        <a href="index-4.html#">
                                                            <i className="ion-android-close" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="cart_item">
                                                    <div className="cart_img">
                                                        <a href="index-4.html#">
                                                            <img src="assets/img/s-product/product2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="cart_info">
                                                        <a href="index-4.html#">Letraset Sheets</a>
                                                        <p>Qty: 1 X <span> $60.00 </span>
                                                        </p>
                                                    </div>
                                                    <div className="cart_remove">
                                                        <a href="index-4.html#">
                                                            <i className="ion-android-close" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mini_cart_table">
                                                    <div className="cart_total">
                                                        <span>Sub total:</span>
                                                        <span className="price">$138.00</span>
                                                    </div>
                                                    <div className="cart_total mt-10">
                                                        <span>total:</span>
                                                        <span className="price">$138.00</span>
                                                    </div>
                                                </div>
                                                <div className="mini_cart_footer">
                                                    <div className="cart_button">
                                                        <a href="cart.html">View cart</a>
                                                    </div>
                                                    <div className="cart_button">
                                                        <a className="active" href="checkout.html">Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sticki */}
                        <div className={`sticky-header ${hideHeader ? 'show' : ''} ${showHeader ? 'hide' : ''}`}>
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-6">
                                    <div className="logo-sticky-main">
                                        <a href="http://onlinestore.microdataindonesia.co.id"><img className="logo-dark-main-login" src="http://onlinestore.microdataindonesia.co.id/assets/img/logo/logo-dark.svg" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="main_menu menu_position text-center">
                                        <nav>
                                            <ul>
                                                <li><a href="http://microdataindonesia.co.id/" target="__blank">MICRODATA
                                                    INDONESIA</a></li>
                                                <li className="mega_items"><a href="shop.html">all kategories<i className="fa fa-angle-down" /></a>
                                                    <div className="mega_menu">
                                                        <ul className="mega_menu_inner" id="generateJenisBarangHover"><li><a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty">Digital Product</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/1">Pulsa Prabayar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/2">Paket Data</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                            <li>
                                                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty">Office Supplies</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/3">Printer</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/4">Scanner</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty">Gadget</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/5">External Storage</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/6">Monitor</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty">Elektronik</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/7">Audio Video</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/8">Televisi</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty">Kosmetik</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/9">Facial Wash</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/10">Facial Cleanser</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li><a href="http://onlinestore.microdataindonesia.co.id/login">LOGIN</a></li>
                                                <li><a href="http://onlinestore.microdataindonesia.co.id/about">About Us</a></li>
                                                <li><a href="http://onlinestore.microdataindonesia.co.id/contact"> Contact Us</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="header_configure_area">
                                        <div onClick={toggleVisibilityWish} className="header_wishlist">
                                            <a onclick="openFavoriteItem()"><i className="ion-android-favorite-outline" />
                                                <span className="wishlist_count" id="favorite-count-second">0</span>
                                            </a>
                                        </div>
                                        <div onClick={toggleVisibilityCart} className="mini_cart_wrapper">
                                            <a onclick="opencartItem()">
                                                <i className="fa fa-shopping-bag" />
                                                <span className="cart_price"> </span>
                                                <span className="cart_count_sticky" id="cart-count-second">0</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="header_bottom">
                            <div className="row align-items-center">
                                {/* <div className="column1 col-lg-3 col-md-6">
                                    <div className="categories_menu categories_four">
                                        <div className="categories_title">
                                            <h2 className="categori_toggle">SEMUA JENIS BARANG</h2>
                                        </div>
                                        <div className="categories_menu_toggle">
                                            <ul>
                                                <li className="menu_item_children">
                                                    <a href="index-4.html#">Brake Parts <i className="fa fa-angle-right" />
                                                    </a>
                                                    <ul className="categories_mega_menu">
                                                        <li className="menu_item_children">
                                                            <a href="index-4.html#">Dresses</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href>Sweater</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Evening</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Day</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Sports</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="index-4.html#">Handbags</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href>Shoulder</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Satchels</a>
                                                                </li>
                                                                <li>
                                                                    <a href>kids</a>
                                                                </li>
                                                                <li>
                                                                    <a href>coats</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="index-4.html#">shoes</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href>Ankle Boots</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Clog sandals </a>
                                                                </li>
                                                                <li>
                                                                    <a href>run</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Books</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="index-4.html#">Clothing</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href>Coats Jackets </a>
                                                                </li>
                                                                <li>
                                                                    <a href>Raincoats</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Jackets</a>
                                                                </li>
                                                                <li>
                                                                    <a href>T-shirts</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu_item_children">
                                                    <a href="index-4.html#"> Wheels &amp; Tires <i className="fa fa-angle-right" />
                                                    </a>
                                                    <ul className="categories_mega_menu column_3">
                                                        <li className="menu_item_children">
                                                            <a href="index-4.html#">Chair</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href>Dining room</a>
                                                                </li>
                                                                <li>
                                                                    <a href>bedroom</a>
                                                                </li>
                                                                <li>
                                                                    <a href> Home &amp; Office</a>
                                                                </li>
                                                                <li>
                                                                    <a href>living room</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="index-4.html#">Lighting</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href>Ceiling Lighting</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Wall Lighting</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Outdoor Lighting</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Smart Lighting</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="index-4.html#">Sofa</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href>Fabric Sofas</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Leather Sofas</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Corner Sofas</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Sofa Beds</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu_item_children">
                                                    <a href="index-4.html#"> Furnitured &amp; Decor <i className="fa fa-angle-right" />
                                                    </a>
                                                    <ul className="categories_mega_menu column_2">
                                                        <li className="menu_item_children">
                                                            <a href="index-4.html#">Brake Tools</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href>Driveshafts</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Spools</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Diesel </a>
                                                                </li>
                                                                <li>
                                                                    <a href>Gasoline</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="index-4.html#">Emergency Brake</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href>Dolls for Girls</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Girls' Learning Toys</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Arts and Crafts for Girls</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Video Games for Girls</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu_item_children">
                                                    <a href="index-4.html#"> Turbo System <i className="fa fa-angle-right" />
                                                    </a>
                                                    <ul className="categories_mega_menu column_2">
                                                        <li className="menu_item_children">
                                                            <a href="index-4.html#">Check Trousers</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href>Building</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Electronics</a>
                                                                </li>
                                                                <li>
                                                                    <a href>action figures </a>
                                                                </li>
                                                                <li>
                                                                    <a href>specialty &amp; boutique toy</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="index-4.html#">Calculators</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href>Dolls for Girls</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Girls' Learning Toys</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Arts and Crafts for Girls</a>
                                                                </li>
                                                                <li>
                                                                    <a href>Video Games for Girls</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="index-4.html#"> Lighting</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html#"> Accessories</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html#">Body Parts</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html#">Networking</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html#">Perfomance Filters</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html#"> Engine Parts</a>
                                                </li>
                                                <li className="hidden">
                                                    <a href="index-4.html#">New Sofas</a>
                                                </li>
                                                <li className="hidden">
                                                    <a href="index-4.html#">Sleight Sofas</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html#" id="more-btn">
                                                        <i className="fa fa-plus" aria-hidden="true" /> More Categories </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="column1 col-lg-3 col-md-6">
                                    <div className="categories_menu categories_four">
                                        <div className="categories_title active">
                                            <h2 onClick={toggleVisibility} className="categori_toggle">SEMUA JENIS BARANG</h2>
                                        </div>
                                        {visible && <div className="categories_menu_toggle" style={{ display: 'block' }} >
                                            <ul id="generateJenisBarang">
                                                <li className="menu_item_children">
                                                    <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty"><img className="image-jenis-barang" src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/1" alt="" />Digital Product <i className="fa fa-angle-right" /></a>
                                                    <ul className="categories_mega_menu column_3">
                                                        <ul className="categorie_sub_menu">
                                                            <li className="wrapper-kategori-child">
                                                                <img className="image-kategori-hover" src="https://microdatastoreapi.cooljarsoft.com/image-kategori/thumb/1" alt="" /><a className="link-kategori-hover" href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/1">Pulsa Prabayar</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="categorie_sub_menu">
                                                            <li className="wrapper-kategori-child">
                                                                <img className="image-kategori-hover" src="https://microdatastoreapi.cooljarsoft.com/image-kategori/thumb/2" alt="" /><a className="link-kategori-hover" href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/2">Paket Data</a>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </li>
                                                <li className="menu_item_children">
                                                    <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty"><img className="image-jenis-barang" src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/2" alt="" />Office Supplies <i className="fa fa-angle-right" /></a>
                                                    <ul className="categories_mega_menu column_3">
                                                        <ul className="categorie_sub_menu">
                                                            <li className="wrapper-kategori-child">
                                                                <img className="image-kategori-hover" src="https://microdatastoreapi.cooljarsoft.com/image-kategori/thumb/3" alt="" /><a className="link-kategori-hover" href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/3">Printer</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="categorie_sub_menu">
                                                            <li className="wrapper-kategori-child">
                                                                <img className="image-kategori-hover" src="https://microdatastoreapi.cooljarsoft.com/image-kategori/thumb/4" alt="" /><a className="link-kategori-hover" href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/4">Scanner</a>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </li>
                                                <li className="menu_item_children">
                                                    <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty"><img className="image-jenis-barang" src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/3" alt="" />Gadget <i className="fa fa-angle-right" /></a>
                                                    <ul className="categories_mega_menu column_3">
                                                        <ul className="categorie_sub_menu">
                                                            <li className="wrapper-kategori-child">
                                                                <img className="image-kategori-hover" src="https://microdatastoreapi.cooljarsoft.com/image-kategori/thumb/5" alt="" /><a className="link-kategori-hover" href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/5">External Storage</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="categorie_sub_menu">
                                                            <li className="wrapper-kategori-child">
                                                                <img className="image-kategori-hover" src="https://microdatastoreapi.cooljarsoft.com/image-kategori/thumb/6" alt="" /><a className="link-kategori-hover" href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/6">Monitor</a>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </li>
                                                <li className="menu_item_children">
                                                    <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty"><img className="image-jenis-barang" src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/4" alt="" />Elektronik <i className="fa fa-angle-right" /></a>
                                                    <ul className="categories_mega_menu column_3">
                                                        <ul className="categorie_sub_menu">
                                                            <li className="wrapper-kategori-child">
                                                                <img className="image-kategori-hover" src="https://microdatastoreapi.cooljarsoft.com/image-kategori/thumb/7" alt="" /><a className="link-kategori-hover" href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/7">Audio Video</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="categorie_sub_menu">
                                                            <li className="wrapper-kategori-child">
                                                                <img className="image-kategori-hover" src="https://microdatastoreapi.cooljarsoft.com/image-kategori/thumb/8" alt="" /><a className="link-kategori-hover" href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/8">Televisi</a>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </li>
                                                <li className="menu_item_children">
                                                    <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"><img className="image-jenis-barang" src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/10" alt="" />Kosmetik <i className="fa fa-angle-right" /></a>
                                                    <ul className="categories_mega_menu column_3">
                                                        <ul className="categorie_sub_menu">
                                                            <li className="wrapper-kategori-child">
                                                                <img className="image-kategori-hover" src="https://microdatastoreapi.cooljarsoft.com/image-kategori/thumb/9" alt="" /><a className="link-kategori-hover" href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/9">Facial Wash</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="categorie_sub_menu">
                                                            <li className="wrapper-kategori-child">
                                                                <img className="image-kategori-hover" src="https://microdatastoreapi.cooljarsoft.com/image-kategori/thumb/10" alt="" /><a className="link-kategori-hover" href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/10">Facial Cleanser</a>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>}
                                    </div>
                                </div>

                                <div className="column2 col-lg-6 ">
                                    <div className="main_menu menu_four menu_position text-center">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a href="http://microdataindonesia.co.id/" className="" target="__blank">MICRODATA INDONESIA</a>
                                                </li>

                                                <li>
                                                    <Link to="/login" className="">LOGIN</Link>
                                                </li>

                                                <li>
                                                    <Link to="/about" className="">ABOUT US</Link>
                                                </li>

                                                <li>
                                                    <Link to="/contact" className="">CONTACT US</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="column3 col-lg-3 col-md-6">
                                    <div className="bigsale">
                                        <a >BIG SALE BLACK FRIDAY</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* wish */}
            {visibleWish && <div className="modal fade show" id="modal_favorite_item" tabIndex={-1} role="dialog" style={{ paddingLeft: '160px', paddingRight: '17px', display: 'block' }} aria-modal="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button onClick={handleCloseModalWish} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal_body">
                            <div className="container">
                                <span>Daftar Wishlist</span>
                                <div className="row">
                                    <div className="col-lg-12 col-md-7 col-sm-12">
                                        <div className="modal_right" id="generateFavorite">
                                            <div className="container_not_found">
                                                <img className="not_found_item" src="http://onlinestore.microdataindonesia.co.id/assets/img/notfound/notfound.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            {/* cart */}
            {visibleCart && <div class="mini_cart active" id="mini_cart">
                <div class="cart_close">
                    <div class="cart_text">
                        <h3>cart</h3>
                    </div>
                    <div onClick={handleCloseModalCart} class="mini_cart_close">
                        <a href="javascript:void(0)">
                            <i class="ion-android-close"></i>
                        </a>
                    </div>
                </div>
                <div id="generateCartItems">
                    <div class="container_not_found">
                        <img class="not_found_item" src="http://onlinestore.microdataindonesia.co.id/assets/img/notfound/notfound.svg" alt="" />
                    </div>
                </div>
                <div class="mini_cart_table">
                    <div class="cart_total mt-10">
                        <span>total:</span>
                        <span class="price" id="totalCartFirst"></span>
                    </div>
                </div>
                <div class="mini_cart_footer">
                    <div class="cart_button">
                        <a href="cart.html">View cart</a>
                    </div>
                    <div class="cart_button">
                        <a class="active" href="checkout.html">Checkout</a>
                    </div>
                </div>
            </div>}



        </>
    )
};