import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import '../assets/css/style.css'

export const Footer = (params) => {
    return (
        <footer className="footer_widgets">
            {/*newsletter area start*/}
            <div className="newsletter_area">
                <div className="container">
                    <div className="newsletter_inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-5">
                                <div className="newsletter_sing_up">
                                    <h3>Newsletter Sign Up</h3>
                                    <p>(Get <span>30% OFF</span> coupon today subscibers)</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-7">
                                <div className="subscribe_content">
                                    <p><strong>Join 226.000+ subscribers</strong> and get a new discount coupon on every Monday.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="subscribe_form">
                                    <form id="mc-form" className="mc-form footer-newsletter">
                                        <input id="mc-email" type="email" autoComplete="off" placeholder="Your email address..." />
                                        <button id="mc-submit">Subscribe</button>
                                    </form>
                                    {/* mailchimp-alerts Start */}
                                    <div className="mailchimp-alerts text-centre">
                                        <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                                        <div className="mailchimp-success" />{/* mailchimp-success end */}
                                        <div className="mailchimp-error" />{/* mailchimp-error end */}
                                    </div>{/* mailchimp-alerts end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*newsletter area end*/}
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-5 col-sm-7">
                            <div className="widgets_container contact_us">
                                <h3>GET THE APP</h3>
                                <div className="aff_content">
                                    <p><strong>Microdata</strong> App is now available on Google Play &amp; App Store. Get it now.</p>
                                </div>
                                <div className="app_img">
                                    <figure className="app_img">
                                        <a href="index-4.html#"><img src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/icon-appstore.png" alt="" /></a>
                                    </figure>
                                    <figure className="app_img">
                                        <a href="index-4.html#"><img src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/icon-googleplay.png" alt="" /></a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5">
                            <div className="widgets_container widget_menu">
                                <h3>Information</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="index-4.html#">Delivery Information</a></li>
                                        <li><a href="index-4.html#">Delivery Information</a></li>
                                        <li><a href="index-4.html#">New products</a></li>
                                        <li><a href="index-4.html#">Best sales</a></li>
                                        <li><a href="index-4.html#">My Account</a></li>
                                        <li><a href="index-4.html#">Order History</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="widgets_container widget_menu">
                                <h3>My Account</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="cart.html">Shopping Cart</a></li>
                                        <li><a href="wishlist.html">Wish List</a></li>
                                        <li><a href="index-4.html#">Prices drop</a></li>
                                        <li><a href="index-4.html#">Order History</a></li>
                                        <li><a href="index-4.html#">International Orders</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-5 col-sm-6">
                            <div className="widgets_container widget_menu">
                                <h3>Customer Service</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="index-4.html#">Sitemap</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="index-4.html#">Delivery Information</a></li>
                                        <li><a href="index-4.html#">Order History</a></li>
                                        <li><a href="wishlist.html">Wish List</a></li>
                                        <li><a href="index-4.html#">Specials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-7 col-sm-12">
                            <div className="widgets_container">
                                <h3>CONTACT INFO</h3>
                                <div className="footer_contact">
                                    <div className="footer_contact_inner">
                                        <div className="contact_icone">
                                            <img src="assets/img/icon/icon-phone.png" alt="" />
                                        </div>
                                        <div className="contact_text">
                                            <p>Hotline Free 24/24: <br /> <strong>(+800) 123 456 789</strong></p>
                                        </div>
                                    </div>
                                    <p>The Barn, Henley in Arden B578. England. Support@eCommerce</p>
                                </div>
                                <div className="footer_social">
                                    <ul>
                                        <li><a className="facebook" href="index-4.html#"><i className="fa fa-facebook" /></a></li>
                                        <li><a className="twitter" href="index-4.html#"><i className="fa fa-twitter" /></a></li>
                                        <li><a className="instagram" href="index-4.html#"><i className="fa fa-instagram" /></a></li>
                                        <li><a className="linkedin" href="index-4.html#"><i className="fa fa-linkedin" /></a></li>
                                        <li><a className="rss" href="index-4.html#"><i className="fa fa-rss" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="copyright_area">
                                <p><span style={{ color: 'red', fontWeight: 'bolder' }}>Beta</span> Version - Copyright © 2021 <a href="http://microdataindonesia.co.id/">Microdata Indonesia</a> All Right Reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="footer_payment text-right">
                                <img src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/payment.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;