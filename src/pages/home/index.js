import React, { Fragment, useState, useEffect, Component, useRef } from "react";
import { Layout } from '../../layout';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Figure } from "react-bootstrap";
import { fontSize } from "@mui/system";
import like from "../../assets/img/logo/like-click.svg"
import likehover from "../../assets/img/logo/like-hover.svg"
import cart from "../../assets/img/logo/cart-click.svg"
import carthover from "../../assets/img/logo/cart-hover.svg"
import Countdown from 'react-countdown';
import Slider from "react-slick";
import SliderHome from "../../components/SliderHome";

import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'universal-cookie';



const Home = () => {
    const [message, setMessage] = useState('');

    const [barang, setBarang] = useState([]);
    const [Barangmurah, setBarangmurah] = useState([]);

    useEffect(() => {
        getBarang();
        getBarangmurah();
    }, []);




    function getBarang() {
        const loading = toast.loading(`Memproses ...`);
        const cookies = new Cookies();


        axios
            .get(process.env.REACT_APP_API_URL + '/barang?per-page=5')
            .then(function (response) {
                console.log('response :>> ', response.data.items);
                setBarang(response.data.items);
                console.log(cookies.get('token')); // Pacman
                
                toast.success('Barang berhasil diproses');
            }).catch(function (error) {
                toast.error('Barang tidak berhasil diproses, karena = ' + error);
            }).finally(function () {
                toast.dismiss(loading)
            });
    }
    function getBarangmurah() {
        axios
            .get(process.env.REACT_APP_API_URL + '/barang?sort=price&per-page=6')
            .then(function (response) {
                console.log('response :>> ', response.data.items);
                setBarangmurah(response.data.items);

            }).catch(function (error) {

            }).finally(function () {

            });
    }

    const [imageIndex, setImageIndex] = useState(0);
    const images = [likehover, like];

    const [cartIndex, setCart] = useState(0);
    const gambar = [carthover, cart];

    function handleClick() {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        Cookies.set('imageIndex', imageIndex + 1);
    }
    function handleClick2() {
        setCart((prevIndex) => (prevIndex + 1) % gambar.length);
        Cookies.set('cartIndex', cartIndex + 1);

    }
    ///like
    const [jumlahLike, setJumlahLike] = useState(0);
    function handleLike() {
        setJumlahLike(jumlahLike + 1);
    }


    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state

        } else {
            // Render a countdown
            return (
                <>
                    <Toaster />
                    <div className="single_countdown">
                        <div className="countdown_number">{days}</div>
                        <div className="countdown_title">days</div>
                    </div>
                    <div className="single_countdown">
                        <div className="countdown_number">{hours}</div>
                        <div className="countdown_title">hours</div>
                    </div>
                    <div className="single_countdown">
                        <div className="countdown_number">{minutes}</div>
                        <div className="countdown_title">minutes</div>
                    </div>
                    <div className="single_countdown">
                        <div className="countdown_number">{seconds}</div>
                        <div className="countdown_title">seconds</div>
                    </div>
                </>
            )
        }
    };


    return (
        <Layout >
            
            <div className='home_selection_bg'>

                <div className="row">
                    <div className="col-lg-7">

                        <SliderHome
                            title={'Cellphone'}
                            gambar_1={'http://onlinestore.microdataindonesia.co.id/assets/img/slider/wallpapersden.com_astronaut-art-4k_3840x2274.jpg'}
                            gambar_2={'http://onlinestore.microdataindonesia.co.id/assets/img/slider/valley-pine-trees-river-fox-wallpaper-preview.jpg'}
                        />

                    </div>

                    <div className="col-lg-2">
                        <figure className="single_banner">
                            <div className="banner_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/394"><img style={{ width: '800px' }} src="http://onlinestore.microdataindonesia.co.id/assets/img/product/lenovo.svg" alt="" /></a>
                            </div>
                        </figure>
                    </div>
                    <div className="col-lg-2" >
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
                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty">
                                            <img
                                                src="http://onlinestore.microdataindonesia.co.id/assets/img/product/pc.svg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <figure className="single_banner">
                                    <div className="banner_thumb">
                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty">
                                            <img style={{ padding: 20 }}
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
                                    <a style={{ color: 'white' }}
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
                                    <a style={{ color: 'white' }}
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
                                    <a style={{ color: 'white' }}
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
                                    <a style={{ color: 'white' }}
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
                                    <a style={{ color: 'white' }}
                                        className="go-to-jenisbarang"
                                        href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"
                                    >
                                        Kosmetik
                                    </a>
                                </h4>
                                <a style={{ color: 'white' }}
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
                <div>
                    <div className='owl-item firstActiveItem active test-row'>
                        {
                            barang.map((items, index) => {
                                return (
                                    <article key={index} className="single_product">
                                        {/* {['info,'].map((variant) => ( */}

                                        <figure>
                                            <div className="product_thumb">

                                                <a className="primary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/7">
                                                    {
                                                        items.images.map((gambar, indexGambar) => {
                                                            return (
                                                                <>
                                                                    {
                                                                        (indexGambar == 0) ?
                                                                            <img id="testload" className="image1-barang" src={gambar.original} alt="gambar" />
                                                                            : ""
                                                                    }
                                                                </>
                                                            )
                                                        })

                                                    }</a>

                                                <a className="secondary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/7">
                                                    {
                                                        items.images.map((gambar, indexGambar) => {
                                                            return (
                                                                <>
                                                                    {
                                                                        (indexGambar == 0) ?
                                                                            <img id="testload" className="image1-barang" src={gambar.original} alt="gambar" />
                                                                            : ""
                                                                    }
                                                                </>
                                                            )
                                                        })

                                                    }
                                                </a>

                                                <div className="label_product"><span className="label_sale">Sale</span></div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist"><input defaultValue={7} id="data-favorite-6252" type="hidden" name={6252} /><a id="click-favorite-6252" onclick="favorite(this)" data="[object Object]" className="click-favorites">
                                                            <img src={images[imageIndex]} style={{ width: "25px" }} alt="gambar" onClick={handleClick} /></a></li>
                                                        <li className="compare"><a><img style={{ width: '500px' }} className="icon-item-costum-compare-home" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare-hover.svg" alt="compare" /></a></li>
                                                        <li className="quick_button"><input defaultValue={7} id="data-cart-6252" type="hidden" name={6252} />
                                                            <a id="click-cart-6252" onclick="cart(this)" data="[object Object]" className="click-cart">
                                                                <img src={gambar[cartIndex]} style={{ width: "25px" }} alt="image" onClick={handleClick2} /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_content">
                                                <div className="product_content_inner">

                                                    <h4 className="product_name" style={{ height: '60px' }} >{items.name}</h4>
                                                    <div className="price_box"><span className="current_price" style={{ height: '50px' }}>{items.price}</span></div>
                                                    <div className="countdown_text">
                                                        <p><span>Hurry Up!</span> Offers ends in: </p>
                                                    </div>
                                                    <div className="product_timing">
                                                        <div data-countdown="2021/12/15">
                                                            <div className="countdown_area">
                                                                <Countdown date={new Date().setDate(new Date().getDate() + 2)} renderer={renderer} />
                                                                {/* <div className="single_countdown">
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
                                                                    </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="add_to_cart"><a href="/list" title="Checkout">Checkout</a></div>

                                            </div>
                                        </figure>
                                        {/* ))} */}
                                    </article>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <figure className="single_banner mb-20">
                            <div className="banner_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty">
                                    <img style={{ paddingLeft: '50px', paddingRight: '50px' }} src="http://onlinestore.microdataindonesia.co.id/assets/img/flashsale.svg" alt />
                                </a>
                            </div>
                        </figure >
                    </div>
                </div>
                <div className="row">
                    <div class="col-12">
                        <div class="product_header">
                            <div class="section_title">
                                <h2>REKOMENDASI PRODUK</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="small_product_list">
                    <div className="section_title">
                        <h2 id="kategoriNamePage1">Harga Termurah</h2>
                    </div>
                    <div className="product_carousel small_p_container  product_column1 owl-carousel owl-loaded owl-drag"
                        id="generatePage1Kategori">
                        <div className="owl-stage-outer">
                            <div className="owl-stage" style={{ transition: "all 0s ease 0s", display: 'flex', flexDirection: 'row' }}>
                                {
                                    Barangmurah.map((items, index) => {
                                        return (
                                            <div className="owl-item last active" >
                                                <div className="product_items">

                                                    <article >
                                                        <figure>
                                                            <div className="product_thumb">
                                                                <a className="primary_img" href="/detail/id_barang">
                                                                    {
                                                                        items.images.map((gambar, indexGambar) => {
                                                                            return (
                                                                                <>
                                                                                    {
                                                                                        (indexGambar == 0) ?
                                                                                            <img src={gambar.original} alt="gambar" />
                                                                                            : ""
                                                                                    }
                                                                                </>
                                                                            )
                                                                        })

                                                                    }</a>


                                                                <a className="secondary_img" href="/detail/id_barang">
                                                                    {
                                                                        items.images.map((gambar, indexGambar) => {
                                                                            return (
                                                                                <>
                                                                                    {
                                                                                        (indexGambar == 0) ?
                                                                                            <img src="{gambar.original}" alt="gambar" />
                                                                                            : ""
                                                                                    }
                                                                                </>
                                                                            )
                                                                        })

                                                                    }
                                                                </a>

                                                                <div className="action_links">
                                                                </div>
                                                            </div>
                                                            <div className="product_content">
                                                                <div className="product_content_inner">
                                                                    <h4 className="product_name" style={{ height: '60px' }} >{items.name}</h4>
                                                                    <div className="price_box">
                                                                        <span className="current_price" style={{ fontSize: 15 }}>{items.price}</span></div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </article>
                                                </div>
                                            </div>)
                                    })}
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