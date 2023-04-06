import React, { Fragment, useState, useEffect, Component, useRef } from "react";
import { Layout } from "../../../layout";
import kategoribanner from "../../../assets/img/product/kategori-banner.png";
import like from "../../../assets/img/logo/like-click.svg"
import likehover from "../../../assets/img/logo/like-hover.svg"
import cart from "../../../assets/img/logo/cart-click.svg"
import carthover from "../../../assets/img/logo/cart-hover.svg"
import Form from 'react-bootstrap/Form';
import '../../../assets/css/custom.css';
import '../../../assets/css/plugins.css';
import '../../../assets/css/style.css';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { RxDividerVertical } from 'react-icons/rx';
import { FiTrash2 } from 'react-icons/fi';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";





const Keranjang = () => {

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

  ///kodepromo

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [openForm, setopenForm] = useState('none');
  const [count, setCount] = useState(0);





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

  function openForms() {
    console.log('openForm :>> ', openForm);
    if (openForm == 'none') {
      setopenForm('')
    } else {
      setopenForm('none')
    }
  }

  //plusminus



  function plus() {
    setCount(count + 1);

  }

  function min() {
    if (count > 0) {
      setCount(count - 1);
    }
  }


  const [barang, setBarang] = useState([]);
  useEffect(() => {
    getBarang();
  }, []);
  function getBarang() {
    axios
      .get('https://microdatastoreapi.cooljarsoft.com/barang?per-page=5')
      .then(function (response) {
        console.log('response :>> ', response.data.items);
        setBarang(response.data.items);
      }).catch(function (error) {

      }).finally(function () {

      });
  }


  return (
    <Layout>
      <div>

        <div className="shop_area">
          <div className="container">
            <div className="row">


              <div className="col-lg-9 col-md-12">
                <div className="row mb-3">
                  <div className="col-12">
                  </div>
                </div>
                <div
                  id="generateBarang"
                >
                </div>
                {/* List daftar produk */}
                <div className="grid-layout">
                  <div className="row no-gutters shop_wrapper grid_4" id="generateBarang">
                    <div className="keranjang">
                      <h4>Keranjang</h4>
                      <Form.Check label=" Pilih Semua" />
                      {/* <a style={{ color: '#5D9C59', fontSize: 14, paddingLeft: 970, marginLeft: 80}} >hapus</a> */}
                      <div>
                      </div>
                      <div>
                        {
                          barang.map((items, index) => {
                            return (
                              <Card>
                                <Form.Check style={{ fontSize: 14, fontWeight: 'bold' }} label="TokoIni" /><a style={{ color: '#7B8FA1', fontSize: 13, paddingLeft: 30 }}>Bandar Lampung</a><div className="row">
                                  <div className="col-2">
                                    <div style={{ display: 'flex', alignContent: 'center', textAlign: 'center' }}>
                                      <div className="col-2">  <Form.Check /></div>

                                      <Figure>
                                        <Figure.Image style={{ height: 100, width: 120 }}
                                          src="https://tse4.mm.bing.net/th?id=OIP.2paaXoyhspUguo3iIMZ2kAHaHa&pid=Api&P=0">
                                        </Figure.Image>
                                      </Figure>
                                    </div>
                                  </div>
                                  <div className="col-8">
                                    <p style={{ fontSize: 14 }}>{items.name}</p>
                                    <p style={{ fontSize: 14, fontWeight: 'bold' }}>{items.price}</p>

                                  </div>
                                  <div className="row">
                                    <div className="col-6">
                                      <a onClick={() => openForms()} style={{ color: '#5D9C59', fontSize: 14, paddingLeft: 30 }}>Tulis Catatan</a>
                                      <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                          <Form.Control style={{ width: 250, display: openForm, fontSize: 13 }} type="Note" placeholder="Pastikan tidak ada data pribadi" />
                                        </Form.Group>
                                      </Form>
                                    </div>
                                    <div className="col-6">
                                      <a style={{ color: '#7B8FA1', fontSize: 13 }}>Sudah ada di wishlist</a>
                                      <a style={{ fontSize: 25, color: '#7B8FA1', fontWeight: 'bold' }}> <RxDividerVertical /></a>
                                      <a style={{ fontSize: 20, color: '#7B8FA1' }}> <FiTrash2 /></a>
                                      <a onClick={() => min()} style={{ fontSize: 20, color: '#7B8FA1' }}> <AiOutlineMinusCircle /></a>
                                      {count}
                                      <a onClick={() => plus()} style={{ fontSize: 20, color: '#7B8FA1' }}> <AiFillPlusCircle /></a>
                                    </div>
                                  </div>
                                </div>
                              </Card>)
                          })}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              {/* Filter */}
              <div className="col-lg-3 col-md-12">
                <aside className="sidebar_widget">
                  <div className="widget_list widget_categories">
                    <div>
                      <Card style={{ paddingLeft: 50, paddingRight: 50, marginRight: -12, margin: 10 }} variant="light" onClick={handleShow}>

                        Makin Hemat Pakai Promo

                      </Card>


                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Pakai Promo</Modal.Title>

                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Control
                                type="name"
                                placeholder="Masukkan kode promo"
                                autoFocus
                              />
                            </Form.Group>
                            <Button variant="light" type="submit">
                              Terapkan
                            </Button>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                      </Modal>
                      <Card>
                        <h3 style={{ margin: 10 }} >Ringkasan belanja</h3>
                        <a style={{ margin: 10 }}>Total Barang (0 harga)</a>
                        <a></a>
                      </Card>
                      <Card>
                        {/* <p>Total Diskon</p> */}
                        <h3 style={{ margin: 10 }} >Total Harga</h3>
                        <Button style={{ margin: 10 }} variant="success" size="sm" active>
                          Total
                        </Button>{' '}</Card>

                    </div>
                  </div>
                  <div className="widget_list tags_widget">
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



    </Layout >

  );
};

export default Keranjang;