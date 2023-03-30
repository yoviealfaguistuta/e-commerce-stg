import React, { Fragment, useState, useEffect } from 'react'
import { Layout } from '../../../layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import like from "../../../assets/img/logo/like-click.svg"
import likehover from "../../../assets/img/logo/like-hover.svg"
import cart from "../../../assets/img/logo/cart-click.svg"
import carthover from "../../../assets/img/logo/cart-hover.svg"


import '../../../App.css';
import '../../../assets/css/style.css';
import '../../../assets/css/plugins.css';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';




const Detail = () => {

  const [DataUser, setUserData] = useState({
    backgroundImage: `url('https://microdatastoreapi.cooljarsoft.com/image-barang/original/1')`,
    backgroundPosition: '0% 0%',
    backgroundSize: 800
  });

  const handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left - 170) / width * 450
    const y = (e.pageY - top - 490) / height * 450
    setUserData({ backgroundSize: 800, backgroundPosition: `${x}% ${y}%`, backgroundImage: `url('https://microdatastoreapi.cooljarsoft.com/image-barang/original/1')` })
  }

  const [imageIndex, setImageIndex] = useState(0);
  const images = [likehover, like];

  const [cartIndex, setCart] = useState(0);
  const gambar = [carthover, cart];

  function handleClick() {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }
  function handleClick2() {
    setCart((prevIndex) => (prevIndex + 1) % gambar.length);
  }

  ///detail barang
  const [detailBarang, setDetailBarang] = useState([]);


  const { id_barang } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getDetailBarang();
  }, []);

  function getDetailBarang() {
    axios
      .get('https://microdatastoreapi.cooljarsoft.com/barang/' + 1)
      .then(function (response) {
        console.log('response :>> ', response.data);
        setDetailBarang(response.data);

      }).catch(function (error) {
      }).finally(function () {
      });
  }



  return (
    <Layout>
      <>
        {
          (detailBarang.length !== 0) ?
            <>
              <div className="breadcrumbs_area">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="breadcrumb_content">
                        <ul id="title_breadcumb_detail"><li><a href="http://onlinestore.microdataindonesia.co.id">home</a></li><li>Kosmetik</li><li><a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/10">Facial Cleanser</a></li><li>Wardah - Facial Cleansher</li></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product_page_bg">
                <div className="container">
                  <div className="product_details_wrapper mb-55">
                    <div className="product_details">
                      <div className="row">
                        <div className="col-lg-5 col-md-6">
                          <div className="product-details-tab">
                            <div id="img-1" className="zoomWrapper single-zoom">
                              <figure className='figure-img' onMouseMove={(e) => handleMouseMove(e)} style={DataUser}>

                                {
                                  detailBarang.images && detailBarang.images.map((gambar, indexGambar) => {
                                    return (
                                      <>
                                        {
                                          (indexGambar == 0) ?
                                            <img id="testload" className='img1' src={gambar.original} alt="gambar" />
                                            : ""
                                        }
                                      </>
                                    )
                                  })

                                }


                              </figure>
                              <a href="#/" id="image-detail-main"></a>
                            </div>
                            <div className="single-zoom-thumb">
                              <ul className="s-tab-zoom owl-carousel single-product-active owl-loaded owl-drag" id="gallery_01">
                                <div className="owl-stage-outer">
                                  <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '391px' }}>
                                    <div className="owl-item active" style={{ width: '185.5px', marginRight: '10px' }}>
                                      <li>
                                        <a href="#/" className="elevatezoom-gallery active" data-update data-image="https://microdatastoreapi.cooljarsoft.com/image-barang/original/16" data-zoom-image="https://microdatastoreapi.cooljarsoft.com/image-barang/original/16">
                                          {
                                            detailBarang.images && detailBarang.images.map((gambar, indexGambar) => {
                                              return (
                                                <>
                                                  {
                                                    (indexGambar == 0) ?
                                                      <img style={{ width: '110px', height: '110px' }} src={gambar.small} alt="zo-th-1" />
                                                      : ""
                                                  }
                                                </>
                                              )
                                            })

                                          }
                                        </a>
                                      </li>
                                    </div>
                                    <div className="owl-item active" style={{ width: '185.5px', marginRight: '10px' }}>
                                      <li>
                                        <a href="#/" className="elevatezoom-gallery active" data-update data-image="https://microdatastoreapi.cooljarsoft.com/image-barang/original/17" data-zoom-image="https://microdatastoreapi.cooljarsoft.com/image-barang/original/17">
                                          {
                                            detailBarang.images && detailBarang.images.map((gambar, indexGambar) => {
                                              return (
                                                <>
                                                  {
                                                    (indexGambar == 0) ?
                                                      <img style={{ width: '110px', height: '110px' }} src={gambar.original} alt="zo-th-1" />
                                                      : ""
                                                  }
                                                </>
                                              )
                                            })

                                          }
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <div className="owl-nav disabled">
                                  <div className="owl-prev">
                                    <i className="fa fa-angle-left" />
                                  </div>
                                  <div className="owl-next">
                                    <i className="fa fa-angle-right" />
                                  </div>
                                </div>
                                <div className="owl-dots disabled" />
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-7 col-md-6">
                          <div className="product_d_right">
                            <form action="#">
                              <h3 className="namabarang-detail">
                                <a id="namaBarang">{detailBarang.name}</a>
                              </h3>
                              <div className="price_box">
                                <span className="current_price" id="hargaBarang">Rp. {detailBarang.price}</span>
                              </div>
                              <div className="border-divider" />
                              <div className="product_desc">
                                <span className="title-deskripsi">Deskripsi: </span>
                                <div className="row mt-2" id="shortDescription">
                                  {
                                    detailBarang.short_description && detailBarang.short_description.map((short_description) =>
                                      <div className='col-md-6'>
                                        <li>
                                          {short_description}

                                        </li>
                                      </div>

                                    )
                                  }
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-2">
                                  <span className="content-detail-title">Garansi:</span>
                                </div>
                                <div className="col-md-10">
                                  <span className="content-detail-main" id="garansi">{detailBarang.garansi}</span>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-md-2">
                                  <span className="content-detail-title">Jenis Barang:</span>
                                </div>
                                <div className="col-md-10">
                                  <span className="content-detail-main" id="jenisbarang">{detailBarang.jenisName}</span>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-md-2">
                                  <span className="content-detail-title">Kategori:</span>
                                </div>
                                <div className="col-md-10">
                                  <span className="content-detail-main" id="kategori">{detailBarang.kategoriName}</span>
                                </div>
                              </div>
                              <div className="border-divider" />
                              <div className="product_desc">
                                <span className="title-deskripsi">Include: </span>
                                <div className="row mt-2" id="include"><div className="col-md-6"><li>{detailBarang.include}</li></div></div>
                              </div>
                              <div className="product_desc">
                                <span className="title-deskripsi">Exclude: </span>
                                <div className="row mt-2" id="exclude"><div className="col-md-6"><li>{detailBarang.exclude}</li></div></div>
                              </div>
                              <div className="product_variant quantity">
                                <label>quantity</label>
                                <input id="jumlah" min={1} max={100} defaultValue={1} type="number" fdprocessedid="m48o36" />
                                <button className="button" type="button" onclick="cartClick()" fdprocessedid="und3ge">add to cart</button>
                              </div>
                              <div className="border-divider" />
                              <div className="row mt-2">
                                <div className="col-md-2">
                                  <span className="content-detail-title">Total:</span>
                                </div>
                                <div className="col-md-10">
                                  <span className="content-detail-price-main" id="total">Rp. 31.500</span>
                                </div>
                              </div>
                              <div className="border-divider" />
                            </form>
                            <div className="priduct_social">
                              <ul>
                                <li><a className="facebook" href="https://id-id.facebook.com/" title="facebook"><i className="fa fa-facebook" /> Like</a></li>
                                <li><a className="twitter" href="https://twitter.com/" title="twitter"><i className="fa fa-twitter" /> tweet</a></li>
                                <li><a className="pinterest" href="https://id.pinterest.com/" title="pinterest"><i className="fa fa-pinterest" /> save</a></li>
                                <li><a className="google-plus" href="https://myaccount.google.com/" title="google +"><i className="fa fa-google-plus" /> share</a></li>
                                <li><a className="linkedin" href="linkedin.com" title="linkedin"><i className="fa fa-linkedin" /> linked</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="product_d_info">
                      <div className="row">
                        <div className="col-12">
                          <div className="tabs">
                            <input type="radio" name="tabs" id="tabone" defaultChecked="checked" />
                            <label htmlFor="tabone">Deskripsi</label>
                            <div className="tab" id="generateLongdeskripsi">
                              <h3 style={{ lineHeight: 1 }}></h3>
                              <p dangerouslySetInnerHTML={{ __html: detailBarang.long_description }}></p>
                            </div>
                            <input type="radio" name="tabs" id="tabtwo" />
                            <label htmlFor="tabtwo">Spesifikasi</label>
                            <div className="tab">
                              <div className="row" id="generateSpesifikasi">
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Audio:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Audio']}</span>
                                </div>
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Voltase:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Voltase']}</span>
                                </div>
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Dimensi Produk:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Dimensi Produk\t']}</span>
                                </div>
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Lain-lain:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Lain-lain']}</span>
                                </div>
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Konsumsi Daya:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Konsumsi Daya\t']}</span>
                                </div>
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Berat Produk:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Berat Produk\t']}</span>
                                </div>
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Ukuran Layar:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Ukuran Layar\t']}</span>
                                </div>
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Speaker:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Speaker']}</span>
                                </div>
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Input /Output:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Input / Output\t']}</span>
                                </div>
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Video:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Video']}</span>
                                </div>
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Resolusi Layar:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Resolusi Layar\t']}</span>
                                </div>
                                <div className="col-md-2 spesifikasikey">
                                  <span className>Koneksi Nirkabel:</span>
                                </div>
                                <div className="col-md-4 spesifikasivalue">
                                  <span className>{detailBarang.spesifikasi['Koneksi Nirkabel\t']}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>



                  <section className="product_area related_products">
                    <div className="row">
                      <div className="col-12">
                        <div className="section_title">
                          <h2>PRODUK YANG SERUPA </h2>
                        </div>
                      </div>
                    </div>
                    <div className="product_carousel product_style product_column5 owl-carousel owl-loaded owl-drag" id="generateProdukSerupa">
                      <div className="owl-stage-outer">
                        <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '283px' }}>
                          <div className="owl-item active" style={{ width: '282.333px' }}>
                            <article className="single_product">
                              <figure>
                                <div style={{ width: '260px', height: '260px' }} className="product_thumb"><a className="primary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9"><img src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/16" alt="" /></a><a className="secondary_img" href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9"><img src="https://microdatastoreapi.cooljarsoft.com/image-barang/original/17" alt="" /></a>
                                  <div className="label_product"><span className="label_sale">Sale</span></div>
                                  <div className="action_links">
                                    <ul>
                                      <li className="wishlist">
                                        <input defaultValue={9} id="data-cart-301" type="hidden" name={301} />
                                        <a id="click-cart-30" onclick="cawil(this)" data="[object Object]" className="click-wilshit">
                                          {/* <img src={gambar} onClick={() => setGambar(like)} alt="gambar" /> */}
                                          <img src={images[imageIndex]} alt="gambar" onClick={handleClick} />
                                        </a>
                                      </li>
                                      <li className="compare">
                                        <a><img className="icon-item-costum-compare-home" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare-hover.svg" alt="compare" /></a></li>
                                      <li className="quick_button">
                                        <input defaultValue={9} id="data-cart-301" type="hidden" name={301} />
                                        <a id="click-cart-301" onclick="cart(this)" data="[object Object]" className="click-cart">
                                          <img src={gambar[cartIndex]} alt="image" onClick={handleClick2} />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="product_content">
                                  <div className="product_content_inner">
                                    <h4 className="product_name"><a href="product-details.html">Natus erro at congue massa commodo sit Natus erro</a></h4>
                                    <div className="price_box"><span className="old_price">$80.00</span><span className="current_price">$70.00</span></div>
                                  </div>
                                  <div className="add_to_cart"><a href="cart.html" title="Add to cart">Checkout</a></div>
                                </div>
                              </figure>
                            </article>
                          </div>
                        </div>
                      </div>
                      <div className="owl-nav disabled">
                        <div className="owl-prev disabled"><i className="ion-ios-arrow-back" /></div>
                        <div className="owl-next disabled"><i className="ion-ios-arrow-forward" /></div>
                      </div>
                      <div className="owl-dots disabled" />
                    </div>
                  </section>
                </div>


              </div>
              <div>
                <i className="" />
                <a id="scrollUp" href="#top" style={{ position: 'fixed', zIndex: 2147483647, display: 'block' }}>
                  <i className="fa fa-angle-double-up" />
                </a>
              </div>
            </> : 'Loading ...'}
      </>
    </Layout >
  );
};

export default Detail;