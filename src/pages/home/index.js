import React, { Fragment,useState } from 'react'
import { Layout } from '../../layout';
import Row from 'react-bootstrap/Row';


const Home = () => {
    return (
        <Layout >
            <div className='home_selection_bg'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="slider_area slider2_carousel owl-carousel owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <div
                                    className="owl-stage"
                                    style={{
                                        transform: "translate3d(-1610px, 0px, 0px)",
                                        transition: "all 0s ease 0s",
                                        width: 5635
                                    }}
                                >
                                    <div className="owl-item cloned" style={{ width: 805,paddingTop:'50px'}}>
                                        <div
                                            className="single_slider d-flex align-items-center"
                                            data-bgimg="http://onlinestore.microdataindonesia.co.id/assets/img/slider/wallpapersden.com_astronaut-art-4k_3840x2274.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("http://onlinestore.microdataindonesia.co.id/assets/img/slider/wallpapersden.com_astronaut-art-4k_3840x2274.jpg")'
                                            }}
                                        >
                                            <div className="slider_content slider_c_four color_white">
                                                <h3>popular products</h3>
                                                <h1>
                                                    chellphone <br /> new model 2019
                                                </h1>
                                                <p>
                                                    discount <span> -30% off</span> this week
                                                </p>
                                                <a
                                                    className="button"
                                                    href='http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty'
                                                >
                                                    DISCOVER NOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{ width: 805 }}>
                                        <div
                                            className="single_slider d-flex align-items-center"
                                            data-bgimg="http://onlinestore.microdataindonesia.co.id/assets/img/slider/slide3.png"
                                            style={{
                                                backgroundImage:
                                                    'url("http://onlinestore.microdataindonesia.co.id/assets/img/slider/slide3.png")'
                                            }}
                                        >
                                            <div className="slider_content slider_c_four">
                                                <h3>big sale products</h3>
                                                <h1>
                                                    wooden minimalist <br /> chair 2019
                                                </h1>
                                                <p>
                                                    discount <span> -30% off</span> this week
                                                </p>
                                                <a
                                                    className="button"
                                                    href='http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty'
                                                >
                                                    DISCOVER NOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item active" style={{ width: 805 }}>
                                        <div
                                            className="single_slider d-flex align-items-center"
                                            style={{
                                                background:
                                                    'url("http://onlinestore.microdataindonesia.co.id/assets/img/slider/valley-pine-trees-river-fox-wallpaper-preview.jpg") rgb(235, 235, 235)'
                                            }}
                                            data-bgimg='http://onlinestore.microdataindonesia.co.id/assets/img/slider/valley-pine-trees-river-fox-wallpaper-preview.jpg'
                                        >
                                            <div className="slider_content slider_c_four color_white">
                                                <h3>new Arrivals</h3>
                                                <h1>
                                                    summer <br /> collection 2019
                                                </h1>
                                                <p>
                                                    discount <span> -30% off</span> this week
                                                </p>
                                                <a
                                                    className="button"
                                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty"
                                                >
                                                    DISCOVER NOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{ width: 805 }}>
                                        <div
                                            className="single_slider d-flex align-items-center"
                                            data-bgimg="http://onlinestore.microdataindonesia.co.id/assets/img/slider/wallpapersden.com_astronaut-art-4k_3840x2274.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("http://onlinestore.microdataindonesia.co.id/assets/img/slider/wallpapersden.com_astronaut-art-4k_3840x2274.jpg")'
                                            }}
                                        >
                                            <div className="slider_content slider_c_four color_white">
                                                <h3>popular products</h3>
                                                <h1>
                                                    chellphone <br /> new model 2019
                                                </h1>
                                                <p>
                                                    discount <span> -30% off</span> this week
                                                </p>
                                                <a
                                                    className="button"
                                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty"
                                                >
                                                    DISCOVER NOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{ width: 805 }}>
                                        <div
                                            className="single_slider d-flex align-items-center"
                                            data-bgimg="http://onlinestore.microdataindonesia.co.id/assets/img/slider/slide3.png"
                                            style={{
                                                backgroundImage:
                                                    'url("http://onlinestore.microdataindonesia.co.id/assets/img/slider/slide3.png")'
                                            }}
                                        >
                                            <div className="slider_content slider_c_four">
                                                <h3>big sale products</h3>
                                                <h1>
                                                    wooden minimalist <br /> chair 2019
                                                </h1>
                                                <p>
                                                    discount <span> -30% off</span> this week
                                                </p>
                                                <a
                                                    className="button"
                                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty"
                                                >
                                                    DISCOVER NOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{ width: 805 }}>
                                        <div
                                            className="single_slider d-flex align-items-center"
                                            style={{
                                                background:
                                                    'url("http://onlinestore.microdataindonesia.co.id/assets/img/slider/valley-pine-trees-river-fox-wallpaper-preview.jpg") rgb(235, 235, 235)'
                                            }}
                                            data-bgimg="http://onlinestore.microdataindonesia.co.id/assets/img/slider/valley-pine-trees-river-fox-wallpaper-preview.jpg"
                                        >
                                            <div className="slider_content slider_c_four color_white">
                                                <h3>new Arrivals</h3>
                                                <h1>
                                                    summer <br /> collection 2019
                                                </h1>
                                                <p>
                                                    discount <span> -30% off</span> this week
                                                </p>
                                                <a
                                                    className="button"
                                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty"
                                                >
                                                    DISCOVER NOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{ width: 805 }}>
                                        <div
                                            className="single_slider d-flex align-items-center"
                                            data-bgimg="http://onlinestore.microdataindonesia.co.id/assets/img/slider/wallpapersden.com_astronaut-art-4k_3840x2274.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("http://onlinestore.microdataindonesia.co.id/assets/img/slider/wallpapersden.com_astronaut-art-4k_3840x2274.jpg")'
                                            }}
                                        >
                                            <div className="slider_content slider_c_four color_white">
                                                <h3>popular products</h3>
                                                <h1>
                                                    chellphone <br /> new model 2019
                                                </h1>
                                                <p>
                                                    discount <span> -30% off</span> this week
                                                </p>
                                                <a
                                                    className="button"
                                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty"
                                                >
                                                    DISCOVER NOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-nav disabled">
                                <div className="owl-prev">prev</div>
                                <div className="owl-next">next</div>
                            </div>
                            <div className="owl-dots">
                                <div className="owl-dot active">
                                    <span />
                                </div>
                                <div className="owl-dot">
                                    <span />
                                </div>
                                <div className="owl-dot">
                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-2">
                        <figure className="single_banner">
                            <div className="banner_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/394"><img style={{width:'800px'}} src="http://onlinestore.microdataindonesia.co.id/assets/img/product/lenovo.svg" alt="" /></a>
                            </div>
                        </figure>
                    </div>
                    <div className="col-lg-2">
                        <figure className="single_banner mb-30">
                            <div className="banner_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9"><img src="http://onlinestore.microdataindonesia.co.id/assets/img/product/sony.svg" alt="" /></a>
                            </div>
                        </figure>
                        <figure className="single_banner">
                            <div className="banner_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/178"><img src="http://onlinestore.microdataindonesia.co.id/assets/img/product/plantronic.svg" alt="" /></a>
                            </div>
                        </figure>
                    </div>
                </div>
                <div className="banner_area banner_style2 banner_style4 mb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <figure className="single_banner">
                                    <div className="banner_thumb">
                                        <a  href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty">
                                            <img
                                                src="http://onlinestore.microdataindonesia.co.id/assets/img/product/pc.svg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-lg-6 col-md-3">
                                <figure className="single_banner">
                                    <div className="banner_thumb">
                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty">
                                            <img style={{padding:20}}
                                                  src="http://onlinestore.microdataindonesia.co.id/assets/img/product/middleimage.svg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <figure className="single_banner">
                                    <div className="banner_thumb">
                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty">
                                            <img
                                                src="http://onlinestore.microdataindonesia.co.id/assets/img/product/server.svg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="generatekategoriBarangUtama">
                    <div className="col-md-3">
                        <a
                            className="go-to-jenisbarang"
                            href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty"
                        />
                        <div className="single_categories_product-costum">
                            <a
                                className="go-to-jenisbarang"
                                href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty"
                            />
                            <div className="categories_product_content">
                                <a
                                    className="go-to-jenisbarang"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty"
                                />
                                <h4>
                                    <a style={{color: 'white'}}
                                        className="go-to-jenisbarang"
                                        href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty"
                                    >
                                        Digital Product
                                    </a>
                                </h4>
                                <a
                                    className="go-to-jenisbarang-deskripsi"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty"
                                >
                                    <p />
                                </a>
                            </div>
                            <div className="categories_product_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty">
                                    <img
                                        className="image-icon-dashboard"
                                        src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/1"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <a
                            className="go-to-jenisbarang"
                            href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty"
                        />
                        <div className="single_categories_product-costum">
                            <a
                                className="go-to-jenisbarang"
                                href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty"
                            />
                            <div className="categories_product_content">
                                <a
                                    className="go-to-jenisbarang"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty"
                                />
                                <h4 >
                                    <a style={{color: 'white'}}
                                        className="go-to-jenisbarang"
                                        href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty"
                                    >
                                        Office Supplies
                                    </a>
                                </h4>
                                <a
                                    className="go-to-jenisbarang-deskripsi"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty"
                                >
                                    <p />
                                </a>
                            </div>
                            <div className="categories_product_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty">
                                    <img
                                        className="image-icon-dashboard"
                                        src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/2"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <a
                            className="go-to-jenisbarang"
                            href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty"
                        />
                        <div className="single_categories_product-costum">
                            <a
                                className="go-to-jenisbarang"
                                href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty"
                            />
                            <div className="categories_product_content">
                                <a
                                    className="go-to-jenisbarang"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty"
                                />
                                <h4>
                                    <a style={{color: 'white'}}
                                        className="go-to-jenisbarang"
                                        href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty"
                                    >
                                        Gadget
                                    </a>
                                </h4>
                                <a
                                    className="go-to-jenisbarang-deskripsi"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty"
                                >
                                    <p />
                                </a>
                            </div>
                            <div className="categories_product_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty">
                                    <img
                                        className="image-icon-dashboard"
                                        src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/3"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <a
                            className="go-to-jenisbarang"
                            href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty"
                        />
                        <div className="single_categories_product-costum">
                            <a
                                className="go-to-jenisbarang"
                                href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty"
                            />
                            <div className="categories_product_content">
                                <a
                                    className="go-to-jenisbarang"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty"
                                />
                                <h4>
                                    <a style={{color: 'white'}}
                                        className="go-to-jenisbarang"
                                        href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty"
                                    >
                                        Elektronik
                                    </a>
                                </h4>
                                <a
                                    className="go-to-jenisbarang-deskripsi"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty"
                                >
                                    <p />
                                </a>
                            </div>
                            <div className="categories_product_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty">
                                    <img
                                        className="image-icon-dashboard"
                                        src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/4"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <a
                            className="go-to-jenisbarang"
                            href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"
                        />
                        <div className="single_categories_product-costum">
                            <a
                                className="go-to-jenisbarang"
                                href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"
                            />
                            <div className="categories_product_content">
                                <a
                                    className="go-to-jenisbarang"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"
                                />
                                <h4>
                                    <a style={{color: 'white'}}
                                        className="go-to-jenisbarang"
                                        href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"
                                    >
                                        Kosmetik
                                    </a>
                                </h4>
                                <a style={{color: 'white'}}
                                    className="go-to-jenisbarang-deskripsi"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"
                                >
                                    <p>Kosmetik</p>
                                </a>
                            </div>
                            <div className="categories_product_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty">
                                    <img
                                        className="image-icon-dashboard"
                                        src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/10"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product_header">
                                <div className="section_title">
                                    <h2>PENAWARAN TERBATAS</h2>

                                </div>
                                <div className="product_tab_btn">
                                    <ul className="nav" role="tablist" id="nav-tab">
                                        <li>
                                            <span className="active" data-toggle="tab" role="tab" aria-controls="Fashion" aria-selected="true">
                                                Dapatkan sebelum waktu yang ditentukan habis
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className='owl-item firstActiveItem active test-row'>
                    <article className="single_product">
                        <figure>
                            <div className="product_thumb"><a className="primary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/7"><img src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/11" alt="" /></a><a className="secondary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/7"><img src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/12" alt="" /></a>
                                <div className="label_product"><span className="label_sale">Sale</span></div>
                                <div className="action_links">
                                    <ul>
                                        <li className="wishlist"><input defaultValue={7} id="data-favorite-6252" type="hidden" name={6252} /><a id="click-favorite-6252" onclick="favorite(this)" data="[object Object]" className="click-favorites"><img  style={{width:'500px'}}className="icon-item-costum-like-home image-favorite-6252" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/like-hover.svg" alt="like" /></a></li>
                                        <li className="compare"><a><img style={{width:'500px'}} className="icon-item-costum-compare-home" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare-hover.svg" alt="compare" /></a></li>
                                        <li className="quick_button"><input defaultValue={7} id="data-cart-6252" type="hidden" name={6252} /><a id="click-cart-6252" onclick="cart(this)" data="[object Object]" className="click-cart"><img style={{width:'500px'}} className="icon-item-costum-cart-home image-cart-6252" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg" alt="like" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_content">
                                <div className="product_content_inner">
                                    <h4 className="product_name" style={{ height: '50px' }} >MSI Optix MPG341CQR Monitor 34 Inch</h4>
                                    <div className="price_box"><span className="old_price">Rp. 18.164.000</span><span className="current_price">Rp.
                                        18.064.000</span></div>
                                    <div className="countdown_text">
                                        <p><span>Hurry Up!</span> Offers ends in: </p>
                                    </div>
                                    <div className="product_timing">
                                        <div data-countdown="2021/12/15">
                                            <div className="countdown_area">
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">days</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">hours</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">mins</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">secs</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add_to_cart"><a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty" title="Checkout">Checkout</a></div>
                            </div>
                        </figure>
                    </article>
                    <article className="single_product">
                        <figure>
                            <div className="product_thumb"><a className="primary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/7"><img src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/11" alt="" /></a><a className="secondary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/7"><img src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/12" alt="" /></a>
                                <div className="label_product"><span className="label_sale">Sale</span></div>
                                <div className="action_links">
                                    <ul>
                                        <li className="wishlist"><input defaultValue={7} id="data-favorite-6252" type="hidden" name={6252} /><a id="click-favorite-6252" onclick="favorite(this)" data="[object Object]" className="click-favorites"><img  style={{width:'500px'}}className="icon-item-costum-like-home image-favorite-6252" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/like-hover.svg" alt="like" /></a></li>
                                        <li className="compare"><a><img style={{width:'500px'}} className="icon-item-costum-compare-home" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare-hover.svg" alt="compare" /></a></li>
                                        <li className="quick_button"><input defaultValue={7} id="data-cart-6252" type="hidden" name={6252} /><a id="click-cart-6252" onclick="cart(this)" data="[object Object]" className="click-cart"><img style={{width:'500px'}} className="icon-item-costum-cart-home image-cart-6252" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg" alt="like" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_content">
                                <div className="product_content_inner">
                                    <h4 className="product_name" style={{ height: '50px' }} >MSI Optix MPG341CQR Monitor 34 Inch</h4>
                                    <div className="price_box"><span className="old_price">Rp. 18.164.000</span><span className="current_price">Rp.
                                        18.064.000</span></div>
                                    <div className="countdown_text">
                                        <p><span>Hurry Up!</span> Offers ends in: </p>
                                    </div>
                                    <div className="product_timing">
                                        <div data-countdown="2021/12/15">
                                            <div className="countdown_area">
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">days</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">hours</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">mins</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">secs</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add_to_cart"><a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty" title="Checkout">Checkout</a></div>
                            </div>
                        </figure>
                    </article>
                    <article className="single_product">
                        <figure>
                            <div className="product_thumb">
                                <a className="primary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9">
                                    <img style={{ width: 800 }}src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/16" alt="" />
                                </a>
                                <a className="secondary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9">
                                    <img style={{ width: 800 }}src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/17" alt="" />
                                </a>
                                <div className="label_product">
                                    <span className="label_sale">Sale
                                    </span>
                                </div>
                                <div className="action_links">
                                    <ul>
                                        <li className="wishlist">
                                            <input value="9" id="data-favorite-2795" type="hidden" name="2795" />
                                            <a id="click-favorite-2795" onclick="favorite(this)" data="[object Object]" className="click-favorites">
                                                <img style={{width:'500px'}} className="icon-item-costum-like-home image-favorite-2795" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/like-hover.svg" alt="like" />
                                            </a>
                                        </li>
                                        <li className="compare">
                                            <a>
                                                <img style={{width:'500px'}}className="icon-item-costum-compare-home" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare-hover.svg" alt="compare" />
                                            </a>
                                        </li>
                                        <li className="quick_button">
                                            <input value="9" id="data-cart-2795" type="hidden" name="2795" />
                                            <a id="click-cart-2795" onclick="cart(this)" data="[object Object]" className="click-cart">
                                                <img style={{width:'500px'}} className="icon-item-costum-cart-home image-cart-2795" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg" alt="like" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_content">
                                <div className="product_content_inner">
                                    <h4 className="product_name" style={{ height: '50px' }} >Wardah - Facial Cleanshe</h4>
                                    <div className="price_box"><span className="old_price">Rp. 31.500</span><span className="current_price">Rp. 68.500</span></div>
                                    <div className="countdown_text">
                                        <p><span>Hurry Up!</span> Offers ends in: </p>
                                    </div>
                                    <div className="product_timing">
                                        <div data-countdown="2021/12/15">
                                            <div className="countdown_area">
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">days</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">hours</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">mins</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">secs</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </article>
                    <article className="single_product">
                        <figure>
                            <div className="product_thumb"><a className="primary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/7"><img src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/11" alt="" /></a><a className="secondary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/7"><img src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/12" alt="" /></a>
                                <div className="label_product"><span className="label_sale">Sale</span></div>
                                <div className="action_links">
                                    <ul>
                                        <li className="wishlist"><input defaultValue={7} id="data-favorite-6252" type="hidden" name={6252} /><a id="click-favorite-6252" onclick="favorite(this)" data="[object Object]" className="click-favorites"><img  style={{width:'500px'}}className="icon-item-costum-like-home image-favorite-6252" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/like-hover.svg" alt="like" /></a></li>
                                        <li className="compare"><a><img style={{width:'500px'}} className="icon-item-costum-compare-home" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare-hover.svg" alt="compare" /></a></li>
                                        <li className="quick_button"><input defaultValue={7} id="data-cart-6252" type="hidden" name={6252} /><a id="click-cart-6252" onclick="cart(this)" data="[object Object]" className="click-cart"><img style={{width:'500px'}} className="icon-item-costum-cart-home image-cart-6252" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg" alt="like" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_content">
                                <div className="product_content_inner">
                                    <h4 className="product_name" style={{ height: '50px' }} >MSI Optix MPG341CQR Monitor 34 Inch</h4>
                                    <div className="price_box"><span className="old_price">Rp. 18.164.000</span><span className="current_price">Rp.
                                        18.064.000</span></div>
                                    <div className="countdown_text">
                                        <p><span>Hurry Up!</span> Offers ends in: </p>
                                    </div>
                                    <div className="product_timing">
                                        <div data-countdown="2021/12/15">
                                            <div className="countdown_area">
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">days</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">hours</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">mins</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">secs</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add_to_cart"><a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty" title="Checkout">Checkout</a></div>
                            </div>
                        </figure>
                    </article>
                    <article className="single_product">
                        <figure>
                            <div className="product_thumb"><a className="primary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/7"><img src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/11" alt="" /></a><a className="secondary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/7"><img src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/12" alt="" /></a>
                                <div className="label_product"><span className="label_sale">Sale</span></div>
                                <div className="action_links">
                                    <ul>
                                        <li className="wishlist"><input defaultValue={7} id="data-favorite-6252" type="hidden" name={6252} /><a id="click-favorite-6252" onclick="favorite(this)" data="[object Object]" className="click-favorites"><img  style={{width:'500px'}}className="icon-item-costum-like-home image-favorite-6252" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/like-hover.svg" alt="like" /></a></li>
                                        <li className="compare"><a><img style={{width:'500px'}} className="icon-item-costum-compare-home" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare-hover.svg" alt="compare" /></a></li>
                                        <li className="quick_button"><input defaultValue={7} id="data-cart-6252" type="hidden" name={6252} /><a id="click-cart-6252" onclick="cart(this)" data="[object Object]" className="click-cart"><img style={{width:'500px'}} className="icon-item-costum-cart-home image-cart-6252" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg" alt="like" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product_content">
                                <div className="product_content_inner">
                                    <h4 className="product_name" style={{ height: '50px' }} >MSI Optix MPG341CQR Monitor 34 Inch</h4>
                                    <div className="price_box"><span className="old_price">Rp. 18.164.000</span><span className="current_price">Rp.
                                        18.064.000</span></div>
                                    <div className="countdown_text">
                                        <p><span>Hurry Up!</span> Offers ends in: </p>
                                    </div>
                                    <div className="product_timing">
                                        <div data-countdown="2021/12/15">
                                            <div className="countdown_area">
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">days</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">hours</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">mins</div>
                                                </div>
                                                <div className="single_countdown">
                                                    <div className="countdown_number">00</div>
                                                    <div className="countdown_title">secs</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add_to_cart"><a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty" title="Checkout">Checkout</a></div>
                            </div>
                        </figure>
                    </article>
                </div>
                <div className="col-16">
                    <figure className="single_banner mb-20">
                        <div className="banner_thumb">
                            <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty">
                                <img style={{paddingLeft:'50px',paddingRight:'50px'}}  src="http://onlinestore.microdataindonesia.co.id/assets/img/flashsale.svg" alt />
                            </a>
                        </div>
                    </figure>
                </div>
                <div class="col-12">
                    <div class="product_header">
                        <div class="section_title">
                            <h2>REKOMENDASI PRODUK</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="small_product_list">
                            <div className="section_title">
                                <h2 id="kategoriNamePage1">Pulsa Prabayar</h2>
                            </div>
                            <div
                                className="product_carousel small_p_container  product_column1 owl-carousel owl-loaded owl-drag"
                                id="generatePage1Kategori"
                            >
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-906px, 0px, 0px)",
                                            transition: "all 0s ease 0s",
                                            width: 2005
                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/3"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/6"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/3">
                                                                Kuota 3 GB Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 15.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={3}
                                                                id="data-cart-8016"
                                                                type="hidden"
                                                                name={8016}
                                                            />
                                                            <a
                                                                id="click-cart-8016"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-8016"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/3"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/6"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/3">
                                                                Kuota 3 GB Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 15.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={3}
                                                                id="data-cart-8016"
                                                                type="hidden"
                                                                name={8016}
                                                            />
                                                            <a
                                                                id="click-cart-8016"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-8016"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="owl-item active last" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/3"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/6"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/3">
                                                                Kuota 3 GB Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 15.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={3}
                                                                id="data-cart-8016"
                                                                type="hidden"
                                                                name={8016}
                                                            />
                                                            <a
                                                                id="click-cart-8016"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-8016"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        {/* <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/3"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/6"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/3">
                                                                Kuota 3 GB Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 15.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={3}
                                                                id="data-cart-8016"
                                                                type="hidden"
                                                                name={8016}
                                                            />
                                                            <a
                                                                id="click-cart-8016"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-8016"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/3"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/6"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/3">
                                                                Kuota 3 GB Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 15.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={3}
                                                                id="data-cart-8016"
                                                                type="hidden"
                                                                name={8016}
                                                            />
                                                            <a
                                                                id="click-cart-8016"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-8016"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <div className="owl-prev">
                                        <i className="ion-ios-arrow-back" />
                                    </div>
                                    <div className="owl-next">
                                        <i className="ion-ios-arrow-forward" />
                                    </div>
                                </div>
                                <div className="owl-dots disabled" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="small_product_list">
                            <div className="section_title">
                                <h2 id="kategoriNamePage2">Pulsa Prabayar</h2>
                            </div>
                            <div
                                className="product_carousel small_p_container  product_column1 owl-carousel owl-loaded owl-drag"
                                id="generatePage2Kategori"
                            >
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-906px, 0px, 0px)",
                                            transition: "all 0s ease 0s",
                                            width: 2265
                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/5"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2">
                                                                Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 16.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={2}
                                                                id="data-cart-1341"
                                                                type="hidden"
                                                                name={1341}
                                                            />
                                                            <a
                                                                id="click-cart-1341"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-1341 hasClick"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-click.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/5"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2">
                                                                Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 16.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={2}
                                                                id="data-cart-1341"
                                                                type="hidden"
                                                                name={1341}
                                                            />
                                                            <a
                                                                id="click-cart-1341"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-1341 hasClick"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-click.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="owl-item active last" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/5"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2">
                                                                Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 16.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={2}
                                                                id="data-cart-1341"
                                                                type="hidden"
                                                                name={1341}
                                                            />
                                                            <a
                                                                id="click-cart-1341"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-1341 hasClick"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-click.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/5"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2">
                                                                Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 16.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={2}
                                                                id="data-cart-1341"
                                                                type="hidden"
                                                                name={1341}
                                                            />
                                                            <a
                                                                id="click-cart-1341"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-1341 hasClick"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-click.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/5"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2">
                                                                Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 16.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={2}
                                                                id="data-cart-1341"
                                                                type="hidden"
                                                                name={1341}
                                                            />
                                                            <a
                                                                id="click-cart-1341"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-1341 hasClick"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-click.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <div className="owl-prev">
                                        <i className="ion-ios-arrow-back" />
                                    </div>
                                    <div className="owl-next">
                                        <i className="ion-ios-arrow-forward" />
                                    </div>
                                </div>
                                <div className="owl-dots disabled" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="small_product_list">
                            <div className="section_title">
                                <h2 id="kategoriNamePage3">Paket Data</h2>
                            </div>
                            <div
                                className="product_carousel small_p_container  product_column1 owl-carousel owl-loaded owl-drag"
                                id="generatePage3Kategori"
                            >
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-906px, 0px, 0px)",
                                            transition: "all 0s ease 0s",
                                            width: 2265
                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/5"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2">
                                                                Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 16.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={2}
                                                                id="data-cart-5029"
                                                                type="hidden"
                                                                name={5029}
                                                            />
                                                            <a
                                                                id="click-cart-5029"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-5029"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/5"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2">
                                                                Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 16.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={2}
                                                                id="data-cart-5029"
                                                                type="hidden"
                                                                name={5029}
                                                            />
                                                            <a
                                                                id="click-cart-5029"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-5029"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="owl-item active last" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/5"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2">
                                                                Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 16.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={2}
                                                                id="data-cart-5029"
                                                                type="hidden"
                                                                name={5029}
                                                            />
                                                            <a
                                                                id="click-cart-5029"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-5029"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/5"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2">
                                                                Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 16.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={2}
                                                                id="data-cart-5029"
                                                                type="hidden"
                                                                name={5029}
                                                            />
                                                            <a
                                                                id="click-cart-5029"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-5029"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 453 }}>
                                            <div className="product_items">
                                                <figure className="single_product">
                                                    <div className="product_thumb">
                                                        <a
                                                            className="primary_img"
                                                            href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2"
                                                        >
                                                            <img
                                                                style={{ width: 100, height: 100 }}
                                                                src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/5"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h4 className="product_name">
                                                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/2">
                                                                Telkomsel
                                                            </a>
                                                        </h4>
                                                        <div className="price_box">
                                                            <span className="current_price">Rp. 16.000</span>
                                                        </div>
                                                        <div className="product_cart_button">
                                                            <input
                                                                defaultValue={2}
                                                                id="data-cart-5029"
                                                                type="hidden"
                                                                name={5029}
                                                            />
                                                            <a
                                                                id="click-cart-5029"
                                                                onclick="cart(this)"
                                                                data="[object Object]"
                                                                className="click-cart"
                                                            >
                                                                <img
                                                                    className="icon-item-costum-cart-home image-cart-5029"
                                                                    src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg"
                                                                    alt="like"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <div className="owl-prev">
                                        <i className="ion-ios-arrow-back" />
                                    </div>
                                    <div className="owl-next">
                                        <i className="ion-ios-arrow-forward" />
                                    </div>
                                </div>
                                <div className="owl-dots disabled" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div>

                <i className="" />
                <a id="scrollUp" href="#top" style={{ position: 'fixed', zIndex: 2147483647, display: 'block' }}>
                    <i className="fa fa-angle-double-up" />
                </a>
            </div>
        </Layout >
    )
};

export default Home;