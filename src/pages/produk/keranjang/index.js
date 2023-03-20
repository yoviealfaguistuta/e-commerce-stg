import React, { Fragment, useState, useEffect, Component } from "react";
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
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';






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
  ///tuliscatatan

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );

    //plusminus
    const [count, setCount] = useState(0);

    function tambah() {
      setCount(count + 1);
      console.log(tambah)
    }

    function kurang() {
      if (count > 0) {
        setCount(count - 1);
      }
    }

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
                      <div>
                      </div>
                      <Card style={{ paddingLeft: 30, margin: 0 }}>

                        <Form.Check style={{ paddingLeft: 22, fontSize: 14, fontWeight: 'bold' }} label="TokoIni" />
                        <a style={{ paddingLeft: 21, marginTop: -10, color: '#7B8FA1', fontSize: 13 }}>Bandar Lampung</a>

                        <Form.Check />
                        <Figure>
                          <Figure.Image style={{ height: 100, width: 120, paddingLeft: 30, marginTop: -5, }}
                            src="https://tse4.mm.bing.net/th?id=OIP.2paaXoyhspUguo3iIMZ2kAHaHa&pid=Api&P=0">
                          </Figure.Image>
                        </Figure>
                        <p style={{ paddingLeft: 130, fontSize: 14, marginTop: -90 }}>Robot M205 Wireless Mouse Optical 2.4G & Tombol Sakelar DPI - Robot M205 Robot M205</p>
                        <p style={{ paddingLeft: 130, fontSize: 14, fontWeight: 'bold' }}>RP65.000</p>

                        <a onClick={() => openForms()} style={{ color: '#5D9C59', fontSize: 14, paddingLeft: 20 }}>Tulis Catatan</a>
                        <Form>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control style={{ width: 250, display: openForm, fontSize: 13 }} type="Note" placeholder="Pastikan tidak ada data pribadi" />
                          </Form.Group>
                        </Form>

                        <Stack direction="row" spacing={1} style={{ fontSize: 15, color: '#7B8FA1', paddingLeft: 600, marginLeft: 100, marginTop: -25, marginBottom: 30 }}>
                          <IconButton aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
                        <a style={{ fontSize: 15, color: '#7B8FA1', paddingLeft: 600, marginLeft: 100, marginTop: -25, marginBottom: 30 }}> <RxDividerVertical /></a>
                        <a style={{ paddingLeft: 455, color: '#7B8FA1', marginLeft: 108, marginTop: -25, fontSize: 13, marginBottom: 40 }}>Sudah ada di wishlist</a>
                        <a style={{ fontSize: 20, color: '#7B8FA1', paddingLeft: 730, marginLeft: 90, marginTop: -28 }}> <AiOutlineMinusCircle /></a>
                        <a  style={{ fontSize: 20, color: '#7B8FA1', paddingLeft: 780, marginLeft: 90, marginTop: -30 }}> <AiFillPlusCircle /></a>


                        <div>
                          {/* <p>Jumlah barang: {count}</p>
                          <button onClick={tambah}>Tambah</button>
                          <button onClick={kurang}>Kurang</button> */}
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              {/* Filter */}
              <div className="col-lg-3 col-md-12">
                <aside className="sidebar_widget">
                  <div className="widget_list widget_categories">
                    <div>
                      <Button style={{ paddingLeft: 50, paddingRight: 60, marginRight: -12 }} variant="light" onClick={handleShow}>
                        Makin Hemat Pakai Promo
                      </Button>

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
                        <p style={{ margin: 5 }}>Total Harga</p>
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



    </Layout>

  );
};

export default Keranjang;
