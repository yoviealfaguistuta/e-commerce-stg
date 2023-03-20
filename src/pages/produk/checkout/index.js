import keranjang from "../../../assets/img/icon/keranjang.jpg"
import React, { Fragment, useState, useEffect } from "react";
import { Layout } from "../../../layout";
import like from "../../../assets/img/logo/like-click.svg"
import likehover from "../../../assets/img/logo/like-hover.svg"
import cart from "../../../assets/img/logo/cart-click.svg"
import carthover from "../../../assets/img/logo/cart-hover.svg"
import { BsDot } from 'react-icons/bs';
import '../../../assets/css/custom.css';
import '../../../assets/css/plugins.css';
import '../../../assets/css/style.css';
import Slider from '@mui/material/Slider';
import '../../../assets/css/Checkout.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import BRI from "../../../assets/img/logo/BRI.png";
import BNI from "../../../assets/img/logo/BNI.png";
import BCA from "../../../assets/img/logo/BCA.png";
import Mandiri from "../../../assets/img/logo/Mandiri.png";
import Alfamart from "../../../assets/img/logo/Alfamart.png";
import Indomaret from "../../../assets/img/logo/Indomaret.png";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Figure from 'react-bootstrap/Figure';
import { BiRightArrow } from 'react-icons/bi';



const Checkout = () => {

  ///Clikck gambar
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

  //pembayran
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleClose1 = () => setShow1(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  ///tuliscatatan

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );

    return (
      <Button
        type="button"
        variant="white"
        style={{ paddingLeft: 21, marginTop: -10, color: '#5D9C59', fontSize: 15 }}
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }

  return (
    <Layout>
      <card>
        <div className="shop_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="satu">
                      <img src={keranjang} style={{ height: 50, width: 50 }}></img>
                      <p style={{ paddingLeft: 80, marginTop: -30 }}>ini adalah halaman terakhir dari proses belanjamu</p>
                    </div>
                    <h5 style={{ marginTop: 20 }}>Barang Yang Dibeli</h5>
                  </div>
                  <Card style={{ paddingLeft: 30, margin: 0 }}>
                    <Figure>
                      <Figure.Image style={{ height: 120, width: 120, paddingLeft: 22, marginTop: 30, }}
                        src="https://tse4.mm.bing.net/th?id=OIP.2paaXoyhspUguo3iIMZ2kAHaHa&pid=Api&P=0">
                      </Figure.Image>
                    </Figure>
                    <h3 className="namabarang-detail" style={{ paddingLeft: 150, fontSize: 14, marginTop: -120 }}><a id="namaBarang">Wardah - Facial Cleansher</a></h3>
                    <div className="price_box">
                      <span className="current_price" id="hargaBarang" style={{ paddingLeft: 150, fontSize: 14, fontWeight: 'bold' }}>Rp. 31.500</span>
                    </div>
                    <Accordion defaultActiveKey="0" style={{ paddingTop: 50, paddingLeft: 130 }}>
                      <CustomToggle eventKey="0"  >Tulis Catatan</CustomToggle>
                      <Accordion.Collapse eventKey="0">
                        <Form>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control style={{ width: 300 }} type="Note" placeholder="Pastikan tidak ada data pribadi" />
                          </Form.Group>
                        </Form>
                      </Accordion.Collapse>
                      <input id="jumlah" min={1} max={100} type="number" fdprocessedid="m48o36" defaultValue={1}
                        style={{ fontSize: 15, color: '#7B8FA1', paddingLeft: 50, marginLeft: 50, marginTop: 50 }} />
                    </Accordion>
                  </Card>
                </div>


                <h5 style={{ marginTop: 20 }}>Pengirimana Dan Pembayaran</h5>
                <Card>
                  <div className="row mt-2">
                    <div className="col-md-2">
                      <span className="content-detail-title">Kategori:</span>
                    </div>
                    <div className="col-md-10">
                    <Button variant="outline-primary" onClick={handleShow2}><BiRightArrow/></Button>
                    <Modal show={show2} onHide={handleClose2}>
                      <Modal.Header closeButton>
                        <Modal.Title>Pilih Pembayaran</Modal.Title>
                      </Modal.Header>
                      <h6>Transfer Bank</h6>
                      <Card style={{ paddingLeft: 50, paddingRight: 50 }}>           
                      </Card>
                    </Modal>
                    </div>
                    </div>
                </Card>
                <CardGroup>
                  <Card>
                    <Card.Body>
                      <h6>Pilih Pengiriman</h6>
                      <Card.Text>
                        <Button variant="outline-primary" onClick={handleShow1}>
                          Launch demo modal
                        </Button>

                        <Modal show={show1} onHide={handleClose1}>
                          <Modal.Header closeButton>
                            <Modal.Title>Pilih Pengiriman</Modal.Title>
                          </Modal.Header>
                          <div style={{ height: 150, overflowY: "scroll", paddingLeft: 60, paddingRight: 60 }}>
                            <Card >
                              <Button variant="white">
                                <h3 style={{ fontSize: 18, paddingRight: 430 }} >Next Day<a> (Rp 30.000) </a></h3>
                                <span style={{ fontSize: 14, paddingRight: 430 }}>Estiminasi Tiba Esok</span>
                              </Button>
                              <Button variant="white">
                                <h3 style={{ fontSize: 18, paddingRight: 400 }} >Instan <a> (Rp 27.000-31.000) </a></h3>
                                <span style={{ fontSize: 14, paddingRight: 400 }}>Tiba Dalam 2 Jam</span>
                              </Button>
                              <Button variant="white">
                                <h3 style={{ fontSize: 18, paddingRight: 380 }} >Reguler <a> (Rp 16.500-21.500) </a></h3>
                                <span style={{ fontSize: 14, paddingRight: 380 }}>Estiminasi tiba 21-22 maret 2023 </span>
                              </Button><Button variant="white">
                                <h3 style={{ fontSize: 18, paddingRight: 400 }} >Kargo<a> (Rp 25.500-30.500) </a></h3>
                                <span style={{ fontSize: 14, paddingRight: 400 }}>Estiminasi Tiba 24-25 maret 2023</span>
                              </Button>
                            </Card>
                          </div>
                        </Modal>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <h6>Pilih Pembayaran</h6>
                      <Card.Text>
                        <Button variant="outline-primary" onClick={handleShow}>
                          Launch demo modal
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Pilih Pembayaran</Modal.Title>
                          </Modal.Header>
                          <div style={{ height: 150, overflowY: "scroll", paddingLeft: 60, paddingRight: 60 }}>
                            <h6>Transfer Bank</h6>
                            <Card style={{ paddingLeft: 50, paddingRight: 50 }}>
                              <Button variant="white">
                                <img src={BRI} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p style={{ marginTop: -30 }}>Bank BRI</p>
                              </Button>
                              <Button variant="white">
                                <img src={BNI} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p style={{ marginTop: -30 }}>Bank BNI</p>
                              </Button>
                              <Button variant="white">
                                <img src={Mandiri} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p style={{ marginTop: -30 }}>Bank Mandiri</p>
                              </Button>
                              <Button variant="white">
                                <img src={BCA} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p style={{ marginTop: -30 }}>Bank BCA</p>
                              </Button>
                            </Card>
                            <h6>Tunai di Gerai Retail</h6>
                            <Card>
                              <Button variant="white">
                                <img src={Alfamart} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p style={{ marginTop: -30 }}>Alfamart</p>
                              </Button>
                              <Button variant="white">
                                <img src={Indomaret} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p style={{ marginTop: -30 }}>Indomaret</p>
                              </Button>
                            </Card>
                          </div>
                        </Modal>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
                <div id="generateBarang"></div>
                {isGrid ? (
                  <div className="grid-layout">
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
                                <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9" style={{ paddingLeft: '10px' }}>Wardah - Facial Cleansher</a>
                              </h4>
                              <div className="price_box">
                                <span className="current_price" >Rp. 31.500</span>
                              </div>
                              <div className="product_desc">
                                <p style={{ fontSize: '32px', paddingLeft: '15px' }}>-</p>
                                <ul>
                                  <div className="row" style={{ paddingTop: '10px' }}>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                        <BsDot size={40} />Wardah Crystal Secret Foaming Cleanser with Natural AHA+PHA merupakan Foaming Cleanser dengan kandungan Natural AHA + PHA dan Moistbeads yang sustainable
                                      </li>
                                    </div>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                        <BsDot size={40} />bantu mengangkat sel kulit mati
                                      </li>
                                    </div>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                        <BsDot size={40} /> minyak
                                      </li>
                                    </div>
                                    <div className="col-md-6">
                                      <li className="wrapper-list-kategori">
                                        <BsDot size={40} />kotoran
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
                              <div className="add-cart-costum" style={{ paddingLeft: '17px' }}>
                                <a href="cart.html" title="Add to cart">Checkout</a>
                                <a id="click-favorite-8621" onclick="favorite(this)" className="click-favorites">
                                  <img src={images[imageIndex]} style={{ width: "25px" }} alt="gambar" onClick={handleClick} />
                                  {/* <img className="icon-item-costum-like image-favorite-8621" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/like.svg" alt="like" /> */}
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
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-3 col-md-12">
                <aside className="sidebar_widget">
                  <div className="widget_list widget_categories">
                    <h3>Product categories</h3>
                    <ul id="generateKategori">
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
      </card>



    </Layout>

  );
};

export default Checkout;

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