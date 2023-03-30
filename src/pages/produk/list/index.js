import React, { Fragment, useState, useEffect } from "react";
import { Layout } from "../../../layout";
import kategoribanner from "../../../assets/img/product/kategori-banner.png";
import like from "../../../assets/img/logo/like-click.svg"
import likehover from "../../../assets/img/logo/like-hover.svg"
import cart from "../../../assets/img/logo/cart-click.svg"
import carthover from "../../../assets/img/logo/cart-hover.svg"
import { BsDot } from 'react-icons/bs';

import '../../../assets/css/custom.css';
import '../../../assets/css/plugins.css';
import '../../../assets/css/style.css';
import Slider from '@mui/material/Slider';
import Cookies from 'js-cookie';
import  axios  from "axios";


const List = () => {

  ///Clikck gambar
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

  ///load gambar

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets9.lottiefiles.com/packages/lf20_oCWIv0.json';
    script.async = true;
    document.head.appendChild(script);
  }, []);


  ///scrolll
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function hScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', hScroll);
    return () => window.removeEventListener('scroll', hScroll);
  }, []);

  const showScroll = scrollPosition <= 0;
  const hideScroll = scrollPosition > 0;


  ///Filter harga
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };


  ///list
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(true);

  const handleResetLayoutGrid = () => {
    setIsGrid(true);
    setIsList(true);
  };

  const handleResetLayoutList = () => {
    setIsGrid(false);
    setIsList(false);
  };

///like
const [jumlahLike, setJumlahLike] = useState(0);
function handleLike() {
  setJumlahLike(jumlahLike + 1);
}

///jenis-barang
const [barang,setBarang] = useState([]);
useEffect(() =>{
  getBarang();
},[]);
function getBarang(){
  axios
  .get('https://microdatastoreapi.cooljarsoft.com/barang')
  .then(function(response){
    console.log('response :>> ', response.data.items);
    setBarang(response.data.items);
  }).catch(function(error){

  }).finally(function(){

  });
}

  return (
    <Layout>
      <div>
        <div className="breadcrumbs_area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb_content">
                  <ul id="title_breadcumb">
                    <li><a href="http://onlinestore.microdataindonesia.co.id">home</a></li>
                    <li>Kosmetik</li>
                    <li>Facial Cleanser</li>
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
                      <img
                        src={kategoribanner}
                        alt="Snow"
                        className="image_breadcumb"
                      />
                      <div className="top-left-breadcumb">
                        ALL PRODUCT IS 100% ORIGINAL 2
                      </div>
                      <div className="top-left-breadcumb-hint">
                        Feel free to get what you want
                      </div>
                      teset
                      <div className="start_lottie">
                        <lottie-player id="lottie-player" src="https://assets9.lottiefiles.com/packages/lf20_oCWIv0.json"
                          background="white"
                          speed={1}
                          style={{
                            position: "absolute", width: "100%", height: "228px",
                          }}
                          loop autoPlay>
                        </lottie-player>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop_toolbar_wrapper">
                  <div className="shop_toolbar_btn">
                    <button onClick={handleResetLayoutGrid} data-role="grid_4" id="buttonResetLayoutGrid" type="button" className="btn-grid-4 active" data-toggle="tooltip" title={4} />
                    <button onClick={handleResetLayoutList} data-role="grid_list" id="buttonResetLayoutList" type="button" className="btn-list" data-toggle="tooltip" title="List" />
                    {/* {showAllProducts? <AllProducts/> : <SingleProducts/>} */}
                  </div>
                  <select className="select_costum_kategori" onchange="sortirAscDesc()" id="sortir-barang">
                    <option value selected disabled hidden>Urutkan nama barang</option>
                    <option value="name">Urut berdasarkan A ke Z</option>
                    <option value="-name">Urut berdasarkan Z ke A</option>
                  </select>
                  <div className="page_amount" id="page-count-kategori">
                    <p>Showing 0–1 of 1 results</p>
                  </div>
                </div>
                <div
                  id="generateBarang"
                >
                </div>

                {/* List daftar produk */}
                {isGrid ? (
                  <div className="grid-layout">
                    <div className="row no-gutters shop_wrapper grid_4" id="generateBarang">
                      <div className="col-lg-3 col-md-4 col-12 ">
                        <article className="single_product">
                          <figure>
                            <div className="product_thumb">
                              <a className="primary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9">
                                <img id="testload" className="image1-barang" src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/16" alt="" />
                              </a>
                              <a className="secondary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9">
                                <img className="image2-barang" src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/17" alt="" />
                              </a>
                              <div className="label_product">
                                <span className="label_sale">Sale</span>
                              </div>
                              <div className="action_links">
                                <ul>
                                  <li className="wishlist">
                                    <input defaultValue={9} id="data-favorite-3977" type="hidden" name={3977} />
                                    <a id="click-favorite-3977" onclick="favorite(this)" data="[object Object]" className="click-favorites">
                                      <img src={images[imageIndex]} style={{ width: "25px" }} alt="gambar" onClick={handleClick} />
                                      {/* <img className="icon-item-costum-like image-favorite-3977"  src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/like-hover.svg" alt="like" /> */}
                                    </a>
                                  </li>
                                  <li className="compare">
                                    <a>
                                      <img className="icon-item-costum-compare" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare-hover.svg" alt="compare" />
                                    </a>
                                  </li>
                                  <li className="quick_button">
                                    <input defaultValue={9} id="data-cart-3977" type="hidden" name={3977} />
                                    <a id="click-cart-3977" onclick="cart(this)" data="[object Object]" className="click-cart">
                                      <img src={gambar[cartIndex]} style={{ width: "25px" }} alt="image" onClick={handleClick2} />
                                      {/* <img className="icon-item-costum-cart image-cart-3977" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg" alt="like" /> */}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_content grid_content">
                              <div className="product_content_inner">
                                <h4 className="product_name" style={{ height: '50px' }}>
                                  <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9">Wardah - Facial Cleansher</a>
                                </h4>
                                <div className="price_box">
                                  <span className="current_price">Rp. 31.500</span>
                                </div>
                              </div>
                              <div className="add_to_cart">
                                <a href="cart.html" title="Add to cart">Checkout</a>
                              </div>
                            </div>

                            <div className="product_content list_content">
                              <h4 className="product_name">
                                <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9">Wardah - Facial Cleansher</a>
                              </h4>
                              <div className="price_box">
                                <span className="current_price">Rp. 31.500</span>
                              </div>

                              <div className="product_desc">
                                <p>-</p>
                                <ul>
                                  <div className="row">
                                    <div className="col-md-6 ">
                                      <li className="wrapper-list-kategori">
                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" /> Wardah Crystal Secret Foaming Cleanser with Natural AHA+PHA merupakan Foaming Cleanser dengan kandungan Natural AHA + PHA dan Moistbeads yang sustainable
                                      </li>
                                    </div>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" /> bantu mengangkat sel kulit mati
                                      </li>
                                    </div>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" /> minyak
                                      </li>
                                    </div>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" /> kotoran
                                      </li>
                                    </div>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" /> dan sisa make-up dengan lembut
                                      </li>
                                    </div>
                                  </div>
                                  <ul />
                                </ul>
                              </div>
                              <div className="add-cart-costum">
                                <a href="cart.html" title="Add to cart">Checkout</a>
                                <a id="click-favorite-3977" onclick="favorite(this)" className="click-favorites">
                                  <img className="icon-item-costum-like image-favorite-3977" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/like.svg" alt="like" />
                                </a>
                                <a title="Add to cart">
                                  <img className="icon-item-costum-compare" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare.svg" alt="compare" />
                                </a>
                                <a id="click-cart-3977" onclick="cart(this)" className="click-cart">
                                  <img className="icon-item-costum-cart image-cart-3977" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart.svg" alt="like" />
                                </a>
                              </div>
                            </div>
                          </figure>
                        </article>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="list-layout">
                    {/* tombol list single produk */}
                    <div className="row no-gutters shop_wrapper grid_list" id="generateBarang">
                      <div className="col-12">
                        <article className="single_product">
                          <figure>
                            <div className="product_thumb">
                              <a className="primary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9">
                                <img id="testload" className="image1-barang" src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/16" alt="" />
                              </a>
                              <a className="secondary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9">
                                <img className="image2-barang" src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/17" alt="" />
                              </a>
                              <div className="label_product">
                                <span className="label_sale">Sale</span>
                              </div>
                              <div className="action_links">
                                <ul>
                                  <li className="wishlist">
                                    <input defaultValue={9} id="data-favorite-8621" type="hidden" name={8621} />
                                    <a id="click-favorite-8621" onclick="favorite(this)" data="[object Object]" className="click-favorites">
                                      <img className="icon-item-costum-like image-favorite-8621" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/like-hover.svg" alt="like" />
                                    </a>
                                  </li>
                                  <li className="compare">
                                    <a>
                                      <img className="icon-item-costum-compare" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare-hover.svg" alt="compare" />
                                    </a>
                                  </li>
                                  <li className="quick_button">
                                    <input defaultValue={9} id="data-cart-8621" type="hidden" name={8621} />
                                    <a id="click-cart-8621" onclick="cart(this)" data="[object Object]" className="click-cart">
                                      <img className="icon-item-costum-cart image-cart-8621" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg" alt="like" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_content grid_content">
                              <div className="product_content_inner">
                                <h4 className="product_name" style={{ height: '50px' }}>
                                  <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9">Wardah - Facial Cleansher</a>
                                </h4>
                                <div className="price_box">
                                  <span className="current_price" >Rp. 31.500</span>
                                </div>
                              </div>
                              <div className="add_to_cart">
                                <a href="cart.html" title="Add to cart">Checkout</a>
                              </div>
                            </div>
                            <div className="product_content list_content">
                              <h4 className="product_name">
                                <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9" style={{paddingLeft: '10px'}}>Wardah - Facial Cleansher</a>
                              </h4>
                              <div className="price_box">
                                <span className="current_price" >Rp. 31.500</span>
                              </div>
                              <div className="product_desc">
                                <p style={{fontSize: '32px', paddingLeft: '15px'}}>-</p>
                                <ul>
                                  <div className="row" style={{paddingTop:'10px'}}>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                        <BsDot size={40}/>Wardah Crystal Secret Foaming Cleanser with Natural AHA+PHA merupakan Foaming Cleanser dengan kandungan Natural AHA + PHA dan Moistbeads yang sustainable
                                      </li>
                                    </div>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                      <BsDot size={40}/>bantu mengangkat sel kulit mati
                                      </li>
                                    </div>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                      <BsDot size={40} /> minyak
                                      </li>
                                    </div>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                      <BsDot size={40}/>kotoran
                                      </li>
                                    </div>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                      <BsDot size={40} />dan sisa make-up dengan lembut
                                      </li>
                                    </div>
                                  </div>
                                  <ul />
                                </ul>
                              </div>
                              <div className="add-cart-costum" style={{paddingLeft:'17px'}}>
                                <a href="cart.html" title="Add to cart">Checkout</a>
                                <a id="click-favorite-8621" onclick="favorite(this)" className="click-favorites">
                                  <img src={images[imageIndex]} style={{ width: "25px" }} alt="gambar" onClick={handleClick}/>
                                  {/* <img className="icon-item-costum-like image-favorite-8621" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/like.svg" alt="like" /> */}
                                </a>
                                <a title="Add to cart">
                                  <img className="icon-item-costum-compare" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare.svg" alt="compare" />
                                </a>
                                <a id="click-cart-8621" onclick="cart(this)" className="click-cart">
                                  <img src={gambar[cartIndex]} style={{ width: "25px" }} alt="image" onClick={handleClick2} />
                                  {/* <img className="icon-item-costum-cart image-cart-8621" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart.svg" alt="like" /> */}
                                </a>
                              </div>
                            </div>
                          </figure>
                        </article>
                      </div>
                    </div>
                  </div>
                )}

                {/* Button */}
                <div className="shop_toolbar t_bottom">
                  <div className="pagination">
                    <ul id="generatePagination">
                      <li className="current">1</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Filter */}
              <div className="col-lg-3 col-md-12">
                <aside className="sidebar_widget">
                  <div className="widget_list widget_categories">
                    <h3>Product categories</h3>
                    <ul id="generateKategori">
                      {/* <li><a href="#/" onclick="generateBarang(1,1)">Pulsa Prabayar</a></li>
                      <li><a href="#/" onclick="generateBarang(2,1)">Paket Data</a></li>
                      <li><a href="#/" onclick="generateBarang(3,1)">Printer</a></li>
                      <li><a href="#/" onclick="generateBarang(4,1)">Scanner</a></li>
                      <li><a href="#/" onclick="generateBarang(5,1)">External Storage</a></li>
                      <li><a href="#/" onclick="generateBarang(6,1)">Monitor</a></li>
                      <li><a href="#/" onclick="generateBarang(7,1)">Audio Video</a></li>
                      <li><a href="#/" onclick="generateBarang(8,1)">Televisi</a></li>
                      <li><a href="#/" onclick="generateBarang(9,1)">Facial Wash</a></li> */}
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Facial Cleanser</a></li>
                    </ul>
                  </div>
                  <div className="widget_list widget_filter">
                    <h3>Filter by price</h3>
                    <form action="#">
                      <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={500}
                      />
                      <p className="filter">${value[0]} - ${value[1]}</p>
                      {/* <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                        <div className="ui-slider-range ui-widget-header ui-corner-all" style={{ left: '0%', width: '84%' }} />
                        <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{ left: '0%' }} />
                        <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{ left: '84%' }} />
                      </div> */}
                      <button className="btn-filter" style={{}} type="submit" placeholder="Filter">
                        Filter
                      </button>
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
        <div>
          <i className={`sticky-scroll ${hideScroll ? 'show' : ''} ${showScroll ? 'hide' : ''}`} />
          <a id="scrollUp" href="#top" style={{ position: 'fixed', zIndex: 2147483647, display: 'block' }}>
            <i className="fa fa-angle-double-up" />
          </a>
        </div>
      </div>



    </Layout>

  );
};

export default List;

function ProdukList() {
  return (
    <div>
      <h1>Produk List</h1>
      {/* Daftar produk */}
    </div>
  );
}

function SingleProduk() {
  return (
    <div>
      <h1>Single Produk</h1>
      {/* Detail produk */}
    </div>
  );
}