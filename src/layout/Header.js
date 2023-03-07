export const Header = () => {
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
                                            <a href="index-4.html#">Store Locations</a>
                                        </li>
                                        <li>
                                            <a href="index-4.html#">Track Your Order</a>
                                        </li>
                                        <li>Hotline: <a href="tel:+(012)800456789">(012) 800 456 789 </a>
                                        </li>
                                        <li>Quality Guarantee Of Products</li>
                                    </ul>
                                </div>
                                <div className="search_container">
                                    <form action="#">
                                        <div className="hover_category">
                                            <select className="select_option" name="select" id="categori1">
                                                <option selected value={1}>All Categories</option>
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
            <header>
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
                                    <div className="header_top_settings text-right">
                                        <ul>
                                            <li>
                                                <a href="index-4.html#">Store Locations</a>
                                            </li>
                                            <li>
                                                <a href="index-4.html#">Track Your Order</a>
                                            </li>
                                            <li>Hotline: <a href="tel:+(012)800456789">(012) 800 456 789 </a>
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
                                        <a href="index.html">
                                        <img src="http://127.0.0.1:8000/assets/img/logo/logo.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="column2 col-lg-6 col-md-12">
                                    <div className="search_container">
                                        <form action="#">
                                            <div className="hover_category">
                                                <select className="select_option" name="select" id="categori2">
                                                    <option selected value={1}>All Categories</option>
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
                                </div>
                                <div className="column3 col-lg-3 col-md-7 col-6">
                                    <div className="header_configure_area header_configure_four">
                                        <div className="header_wishlist">
                                            <a href="wishlist.html">
                                                <i className="ion-android-favorite-outline" />
                                                <span className="wishlist_count">3</span>
                                            </a>
                                        </div>
                                        <div className="mini_cart_wrapper">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-shopping-bag" />
                                                <span className="cart_price">$152.00 <i className="ion-ios-arrow-down" />
                                                </span>
                                                <span className="cart_count">2</span>
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
                        <div className="header_middle sticky_header_four sticky-header">
                            <div className="row align-items-center">
                                <div className="col-lg-2 col-md-6">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="assets/img/logo/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12">
                                    <div className="main_menu menu_position text-center">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a className="active" href="index.html">home <i className="fa fa-angle-down" />
                                                    </a>
                                                    <ul className="sub_menu">
                                                        <li>
                                                            <a href="index.html">Home shop 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">Home shop 2</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-3.html">Home shop 3</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-4.html">Home shop 4</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-5.html">Home shop 5</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-6.html">Home shop 6</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-7.html">Home shop 7</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega_items">
                                                    <a href="shop.html">shop <i className="fa fa-angle-down" />
                                                    </a>
                                                    <div className="mega_menu">
                                                        <ul className="mega_menu_inner">
                                                            <li>
                                                                <a href="index-4.html#">Shop Layouts</a>
                                                                <ul>
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
                                                            <li>
                                                                <a href="index-4.html#">other Pages</a>
                                                                <ul>
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
                                                            <li>
                                                                <a href="index-4.html#">Product Types</a>
                                                                <ul>
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
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="blog.html">blog <i className="fa fa-angle-down" />
                                                    </a>
                                                    <ul className="sub_menu pages">
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
                                                <li>
                                                    <a href="index-4.html#">pages <i className="fa fa-angle-down" />
                                                    </a>
                                                    <ul className="sub_menu pages">
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
                                                <li>
                                                    <a href="about.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html"> Contact Us</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="header_configure_area">
                                        <div className="header_wishlist">
                                            <a href="wishlist.html">
                                                <i className="ion-android-favorite-outline" />
                                                <span className="wishlist_count">3</span>
                                            </a>
                                        </div>
                                        <div className="mini_cart_wrapper">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-shopping-bag" />
                                                <span className="cart_price">$152.00 <i className="ion-ios-arrow-down" />
                                                </span>
                                                <span className="cart_count">2</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header_bottom">
                            <div className="row align-items-center">
                                <div className="column1 col-lg-3 col-md-6">
                                    <div className="categories_menu categories_four">
                                        <div className="categories_title">
                                            <h2 className="categori_toggle">ALL CATEGORIES</h2>
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
                                </div>
                                <div className="column2 col-lg-6 ">
                                    <div className="main_menu menu_four menu_position text-center">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a className="active" href="index.html">home <i className="fa fa-angle-down" />
                                                    </a>
                                                    <ul className="sub_menu">
                                                        <li>
                                                            <a href="index.html">Home shop 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">Home shop 2</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-3.html">Home shop 3</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-4.html">Home shop 4</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-5.html">Home shop 5</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-6.html">Home shop 6</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-7.html">Home shop 7</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega_items">
                                                    <a href="shop.html">shop <i className="fa fa-angle-down" />
                                                    </a>
                                                    <div className="mega_menu">
                                                        <ul className="mega_menu_inner">
                                                            <li>
                                                                <a href="index-4.html#">Shop Layouts</a>
                                                                <ul>
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
                                                            <li>
                                                                <a href="index-4.html#">other Pages</a>
                                                                <ul>
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
                                                            <li>
                                                                <a href="index-4.html#">Product Types</a>
                                                                <ul>
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
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="blog.html">blog <i className="fa fa-angle-down" />
                                                    </a>
                                                    <ul className="sub_menu pages">
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
                                                <li>
                                                    <a href="index-4.html#">pages <i className="fa fa-angle-down" />
                                                    </a>
                                                    <ul className="sub_menu pages">
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
                                                <li>
                                                    <a href="about.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html"> Contact Us</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="column3 col-lg-3 col-md-6">
                                    <div className="header_bigsale h_bigsale_four">
                                        <a href="index-4.html#">BIG SALE BLACK FRIDAY</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};