import React, { Fragment,useState, useEffect } from 'react'
import axios from "axios";
import like from "../assets/img/logo/like-click.svg"
import likehover from "../assets/img/logo/like-hover.svg"
import cart from "../assets/img/logo/cart-click.svg"
import carthover from "../assets/img/logo/cart-hover.svg"
import Cookies from 'js-cookie';
import Countdown from 'react-countdown';
import toast, { Toaster } from 'react-hot-toast';




const Penawaran = () => {
    const [barang, setBarang] = useState([]);
    const [Barangmurah, setBarangmurah] = useState([]);

    useEffect(() => {
        getBarang();
        getBarangmurah();
    }, []);


    function getBarang() {

        const loading = toast.loading(`Memproses ...`);

        axios
            .get(process.env.REACT_APP_API_URL + '/barang?per-page=5')
            .then(function (response) {
                console.log('response :>> ', response.data.items);
                setBarang(response.data.items);
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

  ///format number
  const numberWithComma = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
    return (
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
                                                    <div className="price_box"><span className="current_price" style={{ height: '50px' }}>Rp. {numberWithComma(items.price)}</span></div>
                                                    <div className="countdown_text">
                                                        <p><span>Hurry Up!</span> Offers ends in: </p>
                                                    </div>
                                                    <div className="product_timing">
                                                        <div data-countdown="2021/12/15">
                                                            <div className="countdown_area">
                                                                <Countdown date={new Date().setDate(new Date().getDate() + 2)} renderer={renderer} />
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
    )
};

export default Penawaran;