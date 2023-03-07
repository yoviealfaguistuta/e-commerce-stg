import React, { Fragment } from 'react';
import { Layout } from '../../../layout';
import '../../../assets/css/style.css';
import '../../../assets/css/plugins.css';
import '../../../assets/css/custom.css';




const List = () => {
    return (
        <Layout>
            <div>
                <div className="breadcrumbs_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <ul id="title_breadcumb">
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shop_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-12">
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <div className="container-breadcumb">
                                        <img src="http://127.0.0.1:8000/assets/img/product/kategori-banner.png" alt="Snow" className="image_breadcumb" />
                                            <div className="top-left-breadcumb">ALL PRODUCT IS 100% ORIGINAL</div>
                                            <div className="top-left-breadcumb-hint">Feel free to get what you want</div>
                                            <div className="start_lottie">
                                                <lottie-player id="lottie-player" src="https://assets9.lottiefiles.com/packages/lf20_oCWIv0.json" background="white" speed={1} style={{ position: 'absolute', width: '100%', height: '228px' }} loop autoPlay>
                                                </lottie-player>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop_toolbar_wrapper">
                                    <div className="shop_toolbar_btn">
                                        <button data-role="grid_4" id="buttonResetLayoutGrid" type="button" className=" active btn-grid-4" data-toggle="tooltip" title={4} />
                                        <button data-role="grid_list" id="buttonResetLayoutList" type="button" className="btn-list" data-toggle="tooltip" title="List" />
                                    </div>
                                    <select className="select_costum_kategori" onchange="sortirAscDesc()" id="sortir-barang">
                                        <option value selected disabled hidden>Urutkan nama barang</option>
                                        <option value="name">Urut berdasarkan A ke Z</option>
                                        <option value="-name">Urut berdasarkan Z ke A</option>
                                    </select>
                                    <div className="page_amount" id="page-count-kategori">
                                    </div>
                                </div>
                                <div className="row no-gutters shop_wrapper" id="generateBarang">
                                </div>
                                <div className="row">
                                    <div className="product-layout product-grid product-style-1 col-lg-3 col-md-3 col-sm-3 col-xs-6 product-items">
                                        <div className="product-thumb">
                                            <div className="product-item">
                                                <div className="image swatches-image-container">
                                                    <div className="inner">
                                                        <div className="box-label">
                                                            <div><span className="pro-label sale">-33%</span></div>
                                                        </div>
                                                        <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=42">
                                                            <img src="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/1-600x600.jpg" alt="Apple Cinema 30-inch HD Flat-Panel Display" title="Apple Cinema 30-inch HD Flat-Panel Display" className="img-cate-42 img-responsive" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/1-600x600.jpg" className="img-default-42" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/4-600x600.jpg" className="img-swatch-42-17" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/1-600x600.jpg" className="img-swatch-42-2" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/3-600x600.jpg" className="img-swatch-42-4" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/2-600x600.jpg" className="img-swatch-42-3" />
                                                        </a>
                                                        <div className="button-group">
                                                            <div className="inner">
                                                                <button className="button-quickview" type="button" title="Quick View" onclick="ptquickview.ajaxView('http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=42')"><span>Quick View</span></button>
                                                                <button type="button" className="button-wishlist" title="Add to Wish List" onclick="wishlist.add('42');"><span>Add to Wish List</span></button>
                                                                <button type="button" className="button-compare" title="Compare this Product" onclick="compare.add('42');"><span>Compare this Product</span></button>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="caption">
                                                    <div className="inner">
                                                        <p className="manufacture-product">
                                                            <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/manufacturer/info&manufacturer_id=8">Apple</a>
                                                        </p>
                                                        <div className="category-options">
                                                            <ul className="ul-swatches-colors">
                                                                <li className="swatches-options">
                                                                    <a href="javascript:void(0);" onclick="swatches.changeSwatchInCategory($(this));" title="Black" style={{ width: '12px', height: '12px', backgroundImage: 'url("http://antomi4.demo.towerthemes.com/image/cache/catalog/color-option/Black-12x12.jpg")' }} data-product-id={42} data-product-option-value-id={17} />
                                                                </li>
                                                                <li className="swatches-options">
                                                                    <a href="javascript:void(0);" onclick="swatches.changeSwatchInCategory($(this));" title="Purple" style={{ width: '12px', height: '12px', backgroundImage: 'url("http://antomi4.demo.towerthemes.com/image/cache/catalog/color-option/Purple-12x12.jpg")' }} data-product-id={42} data-product-option-value-id={3} />
                                                                </li>
                                                                <li className="swatches-options">
                                                                    <a href="javascript:void(0);" onclick="swatches.changeSwatchInCategory($(this));" title="Blue" style={{ width: '12px', height: '12px', backgroundImage: 'url("http://antomi4.demo.towerthemes.com/image/cache/catalog/color-option/Blue-12x12.jpg")' }} data-product-id={42} data-product-option-value-id={4} />
                                                                </li>
                                                                <li className="swatches-options">
                                                                    <a href="javascript:void(0);" onclick="swatches.changeSwatchInCategory($(this));" title="Yellow" style={{ width: '12px', height: '12px', backgroundImage: 'url("http://antomi4.demo.towerthemes.com/image/cache/catalog/color-option/Yellow-12x12.jpg")' }} data-product-id={42} data-product-option-value-id={2} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h4><a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=42">Apple Cinema 30-inch HD Flat-Panel Display</a></h4>
                                                        <div className="rating">
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                        </div>
                                                        <p className="price">  <span className="price-new">$80.00</span> <span className="price-old">$120.00</span> 														 </p>
                                                        <p className="product-description">The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed specifically for the creative professional, this display provides more space for easi..</p>
                                                        <div className="box-cart">
                                                            <button type="button" className="button-cart" title="Add to Cart" onclick="cart.add('42', '2');"><span>Add to Cart</span></button>
                                                        </div></div>
                                                </div>
                                                <div className="box-list">
                                                    <div className="inner">
                                                        <p className="text-available">Availability:<span>In Stock</span></p>
                                                        <div className="box-cart-list" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="product-layout product-grid product-style-1 col-lg-3 col-md-3 col-sm-3 col-xs-6 product-items">
                                        <div className="product-thumb">
                                            <div className="product-item">
                                                <div className="image swatches-image-container">
                                                    <div className="inner">
                                                        <div className="box-label">
                                                        </div>
                                                        <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=36">
                                                            <img src="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/7-600x600.jpg" alt="Apple iPod Nano 2nd Generation 8GB - Black" title="Apple iPod Nano 2nd Generation 8GB - Black" className="img-responsive img-cate-36" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/7-600x600.jpg" className="img-default-36" />
                                                        </a>
                                                        <div className="button-group">
                                                            <div className="inner">
                                                                <button className="button-quickview" type="button" title="Quick View" onclick="ptquickview.ajaxView('http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=36')"><span>Quick View</span></button>
                                                                <button type="button" className="button-wishlist" title="Add to Wish List" onclick="wishlist.add('36');"><span>Add to Wish List</span></button>
                                                                <button type="button" className="button-compare" title="Compare this Product" onclick="compare.add('36');"><span>Compare this Product</span></button>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="caption">
                                                    <div className="inner">
                                                        <p className="manufacture-product">
                                                            <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/manufacturer/info&manufacturer_id=8">Apple</a>
                                                        </p>
                                                        <h4><a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=36">Apple iPod Nano 2nd Generation 8GB - Black</a></h4>
                                                        <div className="rating">
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                        </div>
                                                        <p className="price"> 															$100.00
                                                        </p>
                                                        <p className="product-description">Video in your pocket.
                                                            Its the small iPod with one very big idea: video. The worlds most popular music player now lets you enjoy movies, TV shows, and more on a two-inch displ..</p>
                                                        <div className="box-cart">
                                                            <button type="button" className="button-cart" title="Add to Cart" onclick="cart.add('36', '1');"><span>Add to Cart</span></button>
                                                        </div></div>
                                                </div>
                                                <div className="box-list">
                                                    <div className="inner">
                                                        <p className="text-available">Availability:<span>In Stock</span></p>
                                                        <div className="box-cart-list" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout product-grid product-style-1 col-lg-3 col-md-3 col-sm-3 col-xs-6 product-items">
                                        <div className="product-thumb">
                                            <div className="product-item">
                                                <div className="image swatches-image-container">
                                                    <div className="inner">
                                                        <div className="box-label">
                                                        </div>
                                                        <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=34">
                                                            <img src="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/2-600x600.jpg" alt="Apple iPod shuffle 2 GB Black (3rd Generation)" title="Apple iPod shuffle 2 GB Black (3rd Generation)" className="img-responsive img-cate-34" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/2-600x600.jpg" className="img-default-34" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/1-600x600.jpg" className="img-swatch-34-238" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/13-600x600.jpg" className="img-swatch-34-237" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/3-600x600.jpg" className="img-swatch-34-236" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/2-600x600.jpg" className="img-swatch-34-235" />
                                                        </a>
                                                        <div className="button-group">
                                                            <div className="inner">
                                                                <button className="button-quickview" type="button" title="Quick View" onclick="ptquickview.ajaxView('http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=34')"><span>Quick View</span></button>
                                                                <button type="button" className="button-wishlist" title="Add to Wish List" onclick="wishlist.add('34');"><span>Add to Wish List</span></button>
                                                                <button type="button" className="button-compare" title="Compare this Product" onclick="compare.add('34');"><span>Compare this Product</span></button>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="caption">
                                                    <div className="inner">
                                                        <p className="manufacture-product">
                                                            <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/manufacturer/info&manufacturer_id=8">Apple</a>
                                                        </p>
                                                        <div className="category-options">
                                                            <ul className="ul-swatches-colors">
                                                                <li className="swatches-options">
                                                                    <a href="javascript:void(0);" onclick="swatches.changeSwatchInCategory($(this));" title="Purple" style={{ width: '12px', height: '12px', backgroundImage: 'url("http://antomi4.demo.towerthemes.com/image/cache/catalog/color-option/Purple-12x12.jpg")' }} data-product-id={34} data-product-option-value-id={235} />
                                                                </li>
                                                                <li className="swatches-options">
                                                                    <a href="javascript:void(0);" onclick="swatches.changeSwatchInCategory($(this));" title="White" style={{ width: '12px', height: '12px', backgroundImage: 'url("http://antomi4.demo.towerthemes.com/image/cache/catalog/color-option/White-12x12.jpg")' }} data-product-id={34} data-product-option-value-id={237} />
                                                                </li>
                                                                <li className="swatches-options">
                                                                    <a href="javascript:void(0);" onclick="swatches.changeSwatchInCategory($(this));" title="Blue" style={{ width: '12px', height: '12px', backgroundImage: 'url("http://antomi4.demo.towerthemes.com/image/cache/catalog/color-option/Blue-12x12.jpg")' }} data-product-id={34} data-product-option-value-id={236} />
                                                                </li>
                                                                <li className="swatches-options">
                                                                    <a href="javascript:void(0);" onclick="swatches.changeSwatchInCategory($(this));" title="Yellow" style={{ width: '12px', height: '12px', backgroundImage: 'url("http://antomi4.demo.towerthemes.com/image/cache/catalog/color-option/Yellow-12x12.jpg")' }} data-product-id={34} data-product-option-value-id={238} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h4><a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=34">Apple iPod shuffle 2 GB Black (3rd Generation)</a></h4>
                                                        <div className="rating">
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                        </div>
                                                        <p className="price"> 															$100.00
                                                        </p>
                                                        <p className="product-description">Born to be worn.
                                                            Clip on the worlds most wearable music player and take up to 240 songs with you anywhere. Choose from five colors including four new hues to make your musica..</p>
                                                        <div className="box-cart">
                                                            <button type="button" className="button-cart" title="Add to Cart" onclick="cart.add('34', '1');"><span>Add to Cart</span></button>
                                                        </div></div>
                                                </div>
                                                <div className="box-list">
                                                    <div className="inner">
                                                        <p className="text-available">Availability:<span>In Stock</span></p>
                                                        <div className="box-cart-list" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout product-grid product-style-1 col-lg-3 col-md-3 col-sm-3 col-xs-6 product-items">
                                        <div className="product-thumb">
                                            <div className="product-item">
                                                <div className="image swatches-image-container">
                                                    <div className="inner">
                                                        <div className="box-label">
                                                        </div>
                                                        <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=32">
                                                            <img src="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/3-600x600.jpg" alt="Apple iPod Touch 6th Generation Tested All Colors" title="Apple iPod Touch 6th Generation Tested All Colors" className="img-responsive img-cate-32" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/3-600x600.jpg" className="img-default-32" />
                                                        </a>
                                                        <div className="button-group">
                                                            <div className="inner">
                                                                <button className="button-quickview" type="button" title="Quick View" onclick="ptquickview.ajaxView('http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=32')"><span>Quick View</span></button>
                                                                <button type="button" className="button-wishlist" title="Add to Wish List" onclick="wishlist.add('32');"><span>Add to Wish List</span></button>
                                                                <button type="button" className="button-compare" title="Compare this Product" onclick="compare.add('32');"><span>Compare this Product</span></button>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="caption">
                                                    <div className="inner">
                                                        <p className="manufacture-product">
                                                            <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/manufacturer/info&manufacturer_id=8">Apple</a>
                                                        </p>
                                                        <h4><a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=32">Apple iPod Touch 6th Generation Tested All Colors</a></h4>
                                                        <div className="rating">
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                        </div>
                                                        <p className="price"> 															$100.00
                                                        </p>
                                                        <p className="product-description">Revolutionary multi-touch interface.
                                                            iPod touch features the same multi-touch screen technology as iPhone. Pinch to zoom in on a photo. Scroll through your songs and videos with ..</p>
                                                        <div className="box-cart">
                                                            <button type="button" className="button-cart" title="Add to Cart" onclick="cart.add('32', '1');"><span>Add to Cart</span></button>
                                                        </div></div>
                                                </div>
                                                <div className="box-list">
                                                    <div className="inner">
                                                        <p className="text-available">Availability:<span>In Stock</span></p>
                                                        <div className="box-cart-list" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout product-grid product-style-1 col-lg-3 col-md-3 col-sm-3 col-xs-6 product-items">
                                        <div className="product-thumb">
                                            <div className="product-item">
                                                <div className="image swatches-image-container">
                                                    <div className="inner">
                                                        <div className="box-label">
                                                        </div>
                                                        <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=47">
                                                            <img src="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/13-600x600.jpg" alt="HP LP3065 LCD Monitor 30 - 2560 x 1600 @ 60 Hz" title="HP LP3065 LCD Monitor 30 - 2560 x 1600 @ 60 Hz" className="img-responsive img-cate-47" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/13-600x600.jpg" className="img-default-47" />
                                                        </a>
                                                        <div className="button-group">
                                                            <div className="inner">
                                                                <button className="button-quickview" type="button" title="Quick View" onclick="ptquickview.ajaxView('http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=47')"><span>Quick View</span></button>
                                                                <button type="button" className="button-wishlist" title="Add to Wish List" onclick="wishlist.add('47');"><span>Add to Wish List</span></button>
                                                                <button type="button" className="button-compare" title="Compare this Product" onclick="compare.add('47');"><span>Compare this Product</span></button>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="caption">
                                                    <div className="inner">
                                                        <p className="manufacture-product">
                                                            <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/manufacturer/info&manufacturer_id=7">Hewlett-Packard</a>
                                                        </p>
                                                        <h4><a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=47">HP LP3065 LCD Monitor 30 - 2560 x 1600 @ 60 Hz</a></h4>
                                                        <div className="rating">
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                        </div>
                                                        <p className="price"> 															$100.00
                                                        </p>
                                                        <p className="product-description">Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel Monitor. This flagship monitor features best-in-class performance and presentation ..</p>
                                                        <div className="box-cart">
                                                            <button type="button" className="button-cart" title="Add to Cart" onclick="cart.add('47', '1');"><span>Add to Cart</span></button>
                                                        </div></div>
                                                </div>
                                                <div className="box-list">
                                                    <div className="inner">
                                                        <p className="text-available">Availability:<span>In Stock</span></p>
                                                        <div className="box-cart-list" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout product-grid product-style-1 col-lg-3 col-md-3 col-sm-3 col-xs-6 product-items">
                                        <div className="product-thumb">
                                            <div className="product-item">
                                                <div className="image swatches-image-container">
                                                    <div className="inner">
                                                        <div className="box-label">
                                                        </div>
                                                        <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=28">
                                                            <img src="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/5-600x600.jpg" alt="HTC Touch HD Windows Mobile smartphone" title="HTC Touch HD Windows Mobile smartphone" className="img-responsive img-cate-28" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/5-600x600.jpg" className="img-default-28" />
                                                        </a>
                                                        <div className="button-group">
                                                            <div className="inner">
                                                                <button className="button-quickview" type="button" title="Quick View" onclick="ptquickview.ajaxView('http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=28')"><span>Quick View</span></button>
                                                                <button type="button" className="button-wishlist" title="Add to Wish List" onclick="wishlist.add('28');"><span>Add to Wish List</span></button>
                                                                <button type="button" className="button-compare" title="Compare this Product" onclick="compare.add('28');"><span>Compare this Product</span></button>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="caption">
                                                    <div className="inner">
                                                        <p className="manufacture-product">
                                                            <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/manufacturer/info&manufacturer_id=5">HTC</a>
                                                        </p>
                                                        <h4><a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=28">HTC Touch HD Windows Mobile smartphone</a></h4>
                                                        <div className="rating">
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                        </div>
                                                        <p className="price"> 															$100.00
                                                        </p>
                                                        <p className="product-description">HTC Touch - in High Definition. Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience you never thought possible. Seductively sl..</p>
                                                        <div className="box-cart">
                                                            <button type="button" className="button-cart" title="Add to Cart" onclick="cart.add('28', '1');"><span>Add to Cart</span></button>
                                                        </div></div>
                                                </div>
                                                <div className="box-list">
                                                    <div className="inner">
                                                        <p className="text-available">Availability:<span>In Stock</span></p>
                                                        <div className="box-cart-list" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout product-grid product-style-1 col-lg-3 col-md-3 col-sm-3 col-xs-6 product-items">
                                        <div className="product-thumb">
                                            <div className="product-item">
                                                <div className="image swatches-image-container">
                                                    <div className="inner">
                                                        <div className="box-label">
                                                            <div><span className="pro-label sale">-10%</span></div>
                                                        </div>
                                                        <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=41">
                                                            <img src="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/8-600x600.jpg" alt="iMac 4K 21.5-inch, 3.0GHz Processor 1TB Storage" title="iMac 4K 21.5-inch, 3.0GHz Processor 1TB Storage" className="img-responsive img-cate-41" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/8-600x600.jpg" className="img-default-41" />
                                                        </a>
                                                        <div className="button-group">
                                                            <div className="inner">
                                                                <button className="button-quickview" type="button" title="Quick View" onclick="ptquickview.ajaxView('http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=41')"><span>Quick View</span></button>
                                                                <button type="button" className="button-wishlist" title="Add to Wish List" onclick="wishlist.add('41');"><span>Add to Wish List</span></button>
                                                                <button type="button" className="button-compare" title="Compare this Product" onclick="compare.add('41');"><span>Compare this Product</span></button>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="caption">
                                                    <div className="inner">
                                                        <p className="manufacture-product">
                                                            <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/manufacturer/info&manufacturer_id=8">Apple</a>
                                                        </p>
                                                        <h4><a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=41">iMac 4K 21.5-inch, 3.0GHz Processor 1TB Storage</a></h4>
                                                        <div className="rating">
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                        </div>
                                                        <p className="price">  <span className="price-new">$90.00</span> <span className="price-old">$100.00</span> 														 </p>
                                                        <p className="product-description">Just when you thought iMac had everything, now there´s even more. More powerful Intel Core 2 Duo processors. And more memory standard. Combine this with Mac OS X Leopard and iLife ..</p>
                                                        <div className="box-cart">
                                                            <button type="button" className="button-cart" title="Add to Cart" onclick="cart.add('41', '1');"><span>Add to Cart</span></button>
                                                        </div></div>
                                                </div>
                                                <div className="box-list">
                                                    <div className="inner">
                                                        <p className="text-available">Availability:<span>In Stock</span></p>
                                                        <div className="box-cart-list" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout product-grid product-style-1 col-lg-3 col-md-3 col-sm-3 col-xs-6 product-items">
                                        <div className="product-thumb">
                                            <div className="product-item">
                                                <div className="image swatches-image-container">
                                                    <div className="inner">
                                                        <div className="box-label">
                                                        </div>
                                                        <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=40">
                                                            <img src="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/9-600x600.jpg" alt="iPhone 8 Plus features a 5.5-inch Retina HD display" title="iPhone 8 Plus features a 5.5-inch Retina HD display" className="img-responsive img-cate-40" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/9-600x600.jpg" className="img-default-40" />
                                                        </a>
                                                        <div className="button-group">
                                                            <div className="inner">
                                                                <button className="button-quickview" type="button" title="Quick View" onclick="ptquickview.ajaxView('http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=40')"><span>Quick View</span></button>
                                                                <button type="button" className="button-wishlist" title="Add to Wish List" onclick="wishlist.add('40');"><span>Add to Wish List</span></button>
                                                                <button type="button" className="button-compare" title="Compare this Product" onclick="compare.add('40');"><span>Compare this Product</span></button>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="caption">
                                                    <div className="inner">
                                                        <p className="manufacture-product">
                                                            <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/manufacturer/info&manufacturer_id=8">Apple</a>
                                                        </p>
                                                        <h4><a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=40">iPhone 8 Plus features a 5.5-inch Retina HD display</a></h4>
                                                        <div className="rating">
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                        </div>
                                                        <p className="price"> 															$101.00
                                                        </p>
                                                        <p className="product-description">iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automati..</p>
                                                        <div className="box-cart">
                                                            <button type="button" className="button-cart" title="Add to Cart" onclick="cart.add('40', '1');"><span>Add to Cart</span></button>
                                                        </div></div>
                                                </div>
                                                <div className="box-list">
                                                    <div className="inner">
                                                        <p className="text-available">Availability:<span>In Stock</span></p>
                                                        <div className="box-cart-list" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout product-grid product-style-1 col-lg-3 col-md-3 col-sm-3 col-xs-6 product-items">
                                        <div className="product-thumb">
                                            <div className="product-item">
                                                <div className="image swatches-image-container">
                                                    <div className="inner">
                                                        <div className="box-label">
                                                        </div>
                                                        <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=44">
                                                            <img src="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/10-600x600.jpg" alt="MacBook Air - 13.3&quot; Retina Display - Intel Core i5" title="MacBook Air - 13.3&quot; Retina Display - Intel Core i5" className="img-responsive img-cate-44" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/10-600x600.jpg" className="img-default-44" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/11-600x600.jpg" className="img-swatch-44-234" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/10-600x600.jpg" className="img-swatch-44-233" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/6-600x600.jpg" className="img-swatch-44-232" />
                                                        </a>
                                                        <div className="button-group">
                                                            <div className="inner">
                                                                <button className="button-quickview" type="button" title="Quick View" onclick="ptquickview.ajaxView('http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=44')"><span>Quick View</span></button>
                                                                <button type="button" className="button-wishlist" title="Add to Wish List" onclick="wishlist.add('44');"><span>Add to Wish List</span></button>
                                                                <button type="button" className="button-compare" title="Compare this Product" onclick="compare.add('44');"><span>Compare this Product</span></button>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="caption">
                                                    <div className="inner">
                                                        <p className="manufacture-product">
                                                            <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/manufacturer/info&manufacturer_id=8">Apple</a>
                                                        </p>
                                                        <div className="category-options">
                                                            <ul className="ul-swatches-colors">
                                                                <li className="swatches-options">
                                                                    <a href="javascript:void(0);" onclick="swatches.changeSwatchInCategory($(this));" title="Black" style={{ width: '12px', height: '12px', backgroundImage: 'url("http://antomi4.demo.towerthemes.com/image/cache/catalog/color-option/Black-12x12.jpg")' }} data-product-id={44} data-product-option-value-id={232} />
                                                                </li>
                                                                <li className="swatches-options">
                                                                    <a href="javascript:void(0);" onclick="swatches.changeSwatchInCategory($(this));" title="Blue" style={{ width: '12px', height: '12px', backgroundImage: 'url("http://antomi4.demo.towerthemes.com/image/cache/catalog/color-option/Blue-12x12.jpg")' }} data-product-id={44} data-product-option-value-id={233} />
                                                                </li>
                                                                <li className="swatches-options">
                                                                    <a href="javascript:void(0);" onclick="swatches.changeSwatchInCategory($(this));" title="DarkTan" style={{ width: '12px', height: '12px', backgroundImage: 'url("http://antomi4.demo.towerthemes.com/image/cache/catalog/color-option/DarkTan-12x12.jpg")' }} data-product-id={44} data-product-option-value-id={234} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h4><a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=44">MacBook Air - 13.3" Retina Display - Intel Core i5</a></h4>
                                                        <div className="rating">
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                        </div>
                                                        <p className="price"> 															$1,000.00
                                                        </p>
                                                        <p className="product-description">MacBook Air is ultrathin, ultraportable, and ultra unlike anything else. But you don’t lose inches and pounds overnight. It’s the result of rethinking conventions. Of m..</p>
                                                        <div className="box-cart">
                                                            <button type="button" className="button-cart" title="Add to Cart" onclick="cart.add('44', '1');"><span>Add to Cart</span></button>
                                                        </div></div>
                                                </div>
                                                <div className="box-list">
                                                    <div className="inner">
                                                        <p className="text-available">Availability:<span>In Stock</span></p>
                                                        <div className="box-cart-list" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout product-grid product-style-1 col-lg-3 col-md-3 col-sm-3 col-xs-6 product-items">
                                        <div className="product-thumb">
                                            <div className="product-item">
                                                <div className="image swatches-image-container">
                                                    <div className="inner">
                                                        <div className="box-label">
                                                            <div><span className="pro-label sale">-5%</span></div>
                                                        </div>
                                                        <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=45">
                                                            <img src="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/12-600x600.jpg" alt="MacBook Pro - 15&quot; Display with Touch Bar - Intel Core i7" title="MacBook Pro - 15&quot; Display with Touch Bar - Intel Core i7" className="img-responsive img-cate-45" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/12-600x600.jpg" className="img-default-45" />
                                                        </a>
                                                        <div className="button-group">
                                                            <div className="inner">
                                                                <button className="button-quickview" type="button" title="Quick View" onclick="ptquickview.ajaxView('http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=45')"><span>Quick View</span></button>
                                                                <button type="button" className="button-wishlist" title="Add to Wish List" onclick="wishlist.add('45');"><span>Add to Wish List</span></button>
                                                                <button type="button" className="button-compare" title="Compare this Product" onclick="compare.add('45');"><span>Compare this Product</span></button>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="caption">
                                                    <div className="inner">
                                                        <p className="manufacture-product">
                                                            <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/manufacturer/info&manufacturer_id=8">Apple</a>
                                                        </p>
                                                        <h4><a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=45">MacBook Pro - 15" Display with Touch Bar - Intel Core i7</a></h4>
                                                        <div className="rating">
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                        </div>
                                                        <p className="price">  <span className="price-new">$1,900.00</span> <span className="price-old">$2,000.00</span> 														 </p>
                                                        <p className="product-description">Latest Intel mobile architecture
                                                            Powered by the most advanced mobile processors from Intel, the new Core 2 Duo MacBook Pro is over 50% faster than the original Core Duo Mac..</p>
                                                        <div className="box-cart">
                                                            <button type="button" className="button-cart" title="Add to Cart" onclick="cart.add('45', '1');"><span>Add to Cart</span></button>
                                                        </div></div>
                                                </div>
                                                <div className="box-list">
                                                    <div className="inner">
                                                        <p className="text-available">Availability:<span>In Stock</span></p>
                                                        <div className="box-cart-list" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout product-grid product-style-1 col-lg-3 col-md-3 col-sm-3 col-xs-6 product-items">
                                        <div className="product-thumb">
                                            <div className="product-item">
                                                <div className="image swatches-image-container">
                                                    <div className="inner">
                                                        <div className="box-label">
                                                        </div>
                                                        <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=30">
                                                            <img src="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/4-600x600.jpg" alt="Canon EOS 5D 12.8 MP Digital SLR Camera" title="Canon EOS 5D 12.8 MP Digital SLR Camera" className="img-responsive img-cate-30" />
                                                            <input type="hidden" defaultValue="http://antomi4.demo.towerthemes.com/image/cache/catalog/products/4-600x600.jpg" className="img-default-30" />
                                                        </a>
                                                        <div className="button-group">
                                                            <div className="inner">
                                                                <button className="button-quickview" type="button" title="Quick View" onclick="ptquickview.ajaxView('http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=30')"><span>Quick View</span></button>
                                                                <button type="button" className="button-wishlist" title="Add to Wish List" onclick="wishlist.add('30');"><span>Add to Wish List</span></button>
                                                                <button type="button" className="button-compare" title="Compare this Product" onclick="compare.add('30');"><span>Compare this Product</span></button>
                                                            </div>
                                                        </div></div>
                                                </div>
                                                <div className="caption">
                                                    <div className="inner">
                                                        <p className="manufacture-product">
                                                            <a href="http://antomi4.demo.towerthemes.com/index.php?route=product/manufacturer/info&manufacturer_id=9">Canon</a>
                                                        </p>
                                                        <h4><a href="http://antomi4.demo.towerthemes.com/index.php?route=product/product&path=297&product_id=30">Canon EOS 5D 12.8 MP Digital SLR Camera</a></h4>
                                                        <div className="rating">
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-x" /></span>
                                                            <span className="icon-ratings"><i className="icon-rating icon-rating-o" /></span>
                                                        </div>
                                                        <p className="price"> 															$100.00
                                                        </p>
                                                        <p className="product-description">Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're not typically too concerned with marketing talk this particular statement is clea..</p>
                                                        <div className="box-cart">
                                                            <button type="button" className="button-cart" title="Add to Cart" onclick="cart.add('30', '1');"><span>Add to Cart</span></button>
                                                        </div></div>
                                                </div>
                                                <div className="box-list">
                                                    <div className="inner">
                                                        <p className="text-available">Availability:<span>In Stock</span></p>
                                                        <div className="box-cart-list" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-12">
                                <aside className="sidebar_widget">
                                    <div className="widget_list widget_categories">
                                        <h3>Product categories</h3>
                                        <ul id="generateKategori">
                                        </ul>
                                    </div>
                                    <div className="widget_list widget_filter">
                                        <h3>Filter by price</h3>
                                        <form action="#">
                                            <div id="slider-range" />
                                            <button type="submit">Filter</button>
                                            <input type="text" name="text" id="amount" />
                                        </form>
                                    </div>
                                    <div className="widget_list tags_widget">
                                        <h3>Product tags</h3>
                                        <div className="tag_cloud">
                                            <a href="shop-right-sidebar.html#">blouse</a>
                                            <a href="shop-right-sidebar.html#">clothes</a>
                                            <a href="shop-right-sidebar.html#">fashion</a>
                                            <a href="shop-right-sidebar.html#">handbag</a>
                                            <a href="shop-right-sidebar.html#">laptop</a>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
};

export default List;