import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
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
import axios from "axios";





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


  ///barang
  const [barang, setBarang] = useState([]);
  const [sortType, setSortType] = useState('asc');
  const [formattedNumber, setFormattedNumber] = useState('');
 


  const { id_barang } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const formatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' });
    setFormattedNumber(formatter.format());
    getBarang();
  }, []);

  function getBarang() {
    axios
      .get('https://microdatastoreapi.cooljarsoft.com/barang')
      .then(function (response) {
        console.log('response :>> ', response.data.items);
        setBarang(response.data.items);
      })
      .catch(function (error) {
      })
      .finally(function () {
      });
  }


  ///jenis barang
  const [jenisbarang, setJenisBarang] = useState([]);

  useEffect(() => {
    getJenisBarang();
  }, []);

  function getJenisBarang() {
    axios
      .get('https://microdatastoreapi.cooljarsoft.com/jenis-barang')
      .then(function (response) {
        console.log('response :>> ', response.data.items);
        setJenisBarang(response.data.items);
      })
      .catch(function (error) {
      })
      .finally(function () {
      });
  }

  function filterBarang() {
    if (sortType === 'asc') {
      return barang.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'desc') {
      return barang.sort((a, b) => b.name.localeCompare(a.name));
    }
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
                        ALL PRODUCT IS 100% ORIGINAL
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
                    <option value="name" onClick={() => setSortType('asc')}>Urut berdasarkan A ke Z</option>
                    <option value="-name"onClick={() => setSortType('desc')}>Urut berdasarkan Z ke A</option>
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

                      {
                        barang.map((items, index) => {
                          return (                            
                            <div className="col-lg-3 col-md-4 col-12 ">
                              {['Info',].map((variant) => (
                                <article className="single_product">
                                  <figure>
                                    <div className="product_thumb">
                                      <a className="primary_img" href={'/detail/' + items.id_barang}>
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
                                      <a className="secondary_img" href={'/detail/' + items.id_barang}>
                                        {
                                          items.images.map((gambar, indexGambar) => {
                                            return (
                                              <>
                                                {
                                                  (indexGambar == 0) ?
                                                    <img id="testload" className="image1-barang" src={gambar.thumb} alt="gambar" />
                                                    : ""
                                                }
                                              </>
                                            )
                                          })

                                        }
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
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="product_content grid_content">
                                      <div className="product_content_inner">
                                        <h4 className="product_name" style={{ height: '50px' }}>
                                          <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9">{items.name}</a>
                                        </h4>
                                        <div className="price_box">
                                          <span className="current_price">Rp. {items.price}</span>
                                        </div>
                                      </div>
                                      <div className="add_to_cart">
                                        <a href="/checkout/" title="Add to cart">Checkout</a>
                                      </div>
                                    </div>

                                  </figure>
                                </article>
                              ))}

                            </div>
                          )
                        })

                      }

                    </div>
                  </div>

                ) : (
                  <div className="list-layout">
                    {/* tombol list single produk */}
                    <div className="row no-gutters shop_wrapper grid_list" id="generateBarang">
                      {
                        barang.map((items, index) => {


                          return (
                            <div className="col-12">
                              {['Info',].map((variant) => (

                                <article className="single_product">
                                  <figure>
                                    <div className="product_thumb">
                                      <a className="primary_img" href={'/detail/' + items.id_barang}>
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
                                      <a className="secondary_img" href={'/detail/' + items.id_barang}>
                                        {
                                          items.images.map((gambar, indexGambar) => {
                                            return (
                                              <>
                                                {
                                                  (indexGambar == 0) ?
                                                    <img id="testload" className="image1-barang" src={gambar.thumb} alt="gambar" />
                                                    : ""
                                                }
                                              </>
                                            )
                                          })

                                        }
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
                                          <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9"></a>
                                        </h4>
                                        <div className="price_box">
                                          <span className="current_price" >Rp. 31.500</span>
                                        </div>
                                      </div>
                                      <div className="add_to_cart">
                                        <a href="/checkout/" title="Add to cart">Checkout</a>
                                      </div>
                                    </div>
                                    <div className="product_content list_content">
                                      <h4 className="product_name">
                                        <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9" style={{ paddingLeft: '10px' }}>{items.name}</a>
                                      </h4>
                                      <div className="price_box">
                                        <span className="current_price" >Rp. {items.price}</span>
                                      </div>
                                      <div className="product_desc">
                                        <ul>
                                          <div className="row mt-2" id="shortDescription">
                                            {
                                              items.short_description.map((short_description) =>
                                                <div className='col-md-6'>
                                                  <li className="wrapper-list-kategori" >
                                                    <BsDot size={30} />{short_description}

                                                  </li>
                                                </div>

                                              )
                                            }
                                          </div>
                                        </ul>
                                      </div>
                                      <div className="add-cart-costum" style={{ paddingLeft: '17px' }}>
                                        <a href="/checkout/" title="Add to cart">Checkout</a>
                                        <a id="click-favorite-8621" onclick="favorite(this)" className="click-favorites">
                                          <img src={images[imageIndex]} style={{ width: "25px" }} alt="gambar" onClick={handleClick} />
                                        </a>
                                        <a title="Add to cart">
                                          <img className="icon-item-costum-compare" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare.svg" alt="compare" />
                                        </a>
                                        <a id="click-cart-8621" onclick="cart(this)" className="click-cart">
                                          <img src={gambar[cartIndex]} style={{ width: "25px" }} alt="image" onClick={handleClick2} />
                                        </a>
                                      </div>
                                    </div>
                                  </figure>
                                </article>
                              ))}
                            </div>
                          )
                        })

                      }

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
                    {
                      barang.map((items, index) => {
                        return (
                          <ul id="generateKategori">
                            <div className="border-divider" style={{}} />
                            <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>{items.kategoriName}</a></li>
                          </ul>
                        )
                      })
                    }
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
                      <button className="btn-filter" style={{}} type="submit" placeholder="Filter">
                        Filter
                      </button>
                      <input type="text" name="text" id="amount" />
                    </form>
                  </div>
                  <div className="widget_list tags_widget">
                    <h3>Product tags</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {jenisbarang.map((items) => (
                        <div key={items.index} style={{ padding: 10 }}>
                          <div className="tag_cloud">
                            <a href="shop-right-sidebar.html#">{items.tag}</a>
                          </div>

                        </div>
                      ))}
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
