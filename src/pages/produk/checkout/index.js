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
import Nav from 'react-bootstrap/Nav';
import { IoChevronForward } from "react-icons/io5";
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';


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


  ///tambah alamat


  const [request, setRequest] = useState(false);

  const closeRequest = () => setRequest(false);
  const openRequest = () => setRequest(true);

  const [alamat, setAlamat] = useState(false);
  const [tambahalamat, setTambahAlamat] = useState(false);
  const [editalamat, setEditAlamat] = useState(false);

  const ubahAlamat = () => setEditAlamat(true);
  const closeEdit = () => setEditAlamat(false);



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

  //Bank
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBRI, setSelectedBRI] = useState(null);

  const handleImageClick = (event) => {
    setSelectedImage(event.target.src);
  };

  const handleBRIClick = (event) => {
    setSelectedBRI(event.target.innerHTML);
  };

  //pengiriman
  const [selectedPengiriman, setSelectedPengiriman] = useState(null);

  const handlePengirimanClick = (nama, desc) => {
    setSelectedPengiriman({
      nama: nama,
      desc: desc
    });
  };
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

  ///kodepromo
  const [openForm, setopenForm] = useState('none');
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);


  //plusminus
  const [count, setCount] = useState(0);

  function plus() {
    setCount(count + 1);
    console.log(count + 1)
  }

  function min() {
    console.log('min')
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const handleForm = () => {
    if (openForm === 'none') {
      setopenForm('')
      return
    }
    setopenForm('none')

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

                  {/* //JENIS BARANG */}
                  <Card style={{ paddingLeft: 30, margin: 0 }}>
                    <div className="row">
                      <div className="col-2">
                        <Figure>
                          <Figure.Image
                            src="https://tse4.mm.bing.net/th?id=OIP.2paaXoyhspUguo3iIMZ2kAHaHa&pid=Api&P=0">
                          </Figure.Image>
                        </Figure>
                      </div>
                      <div className="col-10">
                        <p style={{ paddingLeft: 130, fontSize: 14 }}>Robot M205 Wireless Mouse Optical 2.4G & Tombol Sakelar DPI - Robot M205 Robot M205</p>
                        <p style={{ paddingLeft: 130, fontSize: 14, fontWeight: 'bold' }}>RP65.000</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <a onClick={() => handleForm()} style={{ color: '#5D9C59', fontSize: 14, paddingLeft: 20 }}>Tulis Catatan</a>
                        <Form>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control style={{ width: 250, display: openForm, fontSize: 13 }} type="Note" placeholder="Pastikan tidak ada data pribadi" />
                          </Form.Group>
                        </Form>
                      </div>
                      <div className="col-4">
                        <div style={{ display: 'flex', alignContent: 'center', textAlign: 'center' }}>
                          <a onClick={() => min()} style={{ fontSize: 20, color: '#7B8FA1', display: 'flex', alignContent: 'center', textAlign: 'center', }}> <AiOutlineMinusCircle /></a>
                          {count}
                          <a onClick={() => plus()} style={{ fontSize: 20, color: '#7B8FA1', display: 'flex', alignContent: 'center', textAlign: 'center' }}> <AiFillPlusCircle /></a>
                        </div>
                      </div>
                    </div>




                  </Card>
                </div>

                <h5 style={{ marginTop: 20 }}>Pengirimana Dan Pembayaran</h5>

                {/* ALAMAT */}
                <Card>
                  <Card.Body >
                    <ul className="alamat">
                      <li style={{ paddingBottom: 8, fontSize: 14, fontWeight: 700, color: '#6D7588' }} ><b>Utama</b></li>
                      <li style={{ paddingBottom: 8, fontSize: 14 }}><b> Fadil Ainuddin</b>(0895616710043) </li>
                      <li style={{ paddingBottom: 12, fontSize: 14 }}>Gang Harun, Belakang SMA Muhammadiyah 1 way Jepara</li>
                      {/* <li style={{ paddingBottom: 12, fontSize: 14 }}><img src={Location} style={{ width: 20 }} alt="gambar" />Sudah Pinpoint</li> */}

                      {/* <Nav className="me-auto">
                        <Nav.Link className="nav" style={{ color: "#0d6efd" }} href="#features" onClick={openRequest}>Share</Nav.Link>
                        <Nav.Link className="nav a" style={{ color: "#0d6efd" }} onClick={ubahAlamat} href="#features">Ubah Alamat</Nav.Link>
                      </Nav> */}
                    </ul>

                    <Card.Text style={{ marginLeft: 1070 }}>
                      <Button variant="outline-white" onClick={handleShow2}><IoChevronForward /></Button>
                      <Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                          <Modal.Title style={{ fontWeight: 'bold', paddingLeft: 285 }}>Pilih Alamat Pengiriman</Modal.Title>
                        </Modal.Header>
                        <div style={{ paddingLeft: 60, paddingRight: 60 }}>
                          <div style={{ paddingTop: 30 }}>
                            <Card >
                              <Button variant="white" onClick={openRequest}>tambah Alamat Baru</Button>
                            </Card>
                          </div>
                          <div style={{ paddingTop: 30 }}>
                            <Card Variant="outline-success">
                              <ul className="alamat">
                                <li style={{ paddingBottom: 8, fontSize: 14, fontWeight: 700, color: '#6D7588' }} ><b>Utama</b></li>
                                <li style={{ paddingBottom: 8, fontSize: 14 }}><b> Fadil Ainuddin</b>(0895616710043) </li>
                                <li style={{ paddingBottom: 12, fontSize: 14 }}>Gang Harun, Belakang SMA Muhammadiyah 1 way Jepara</li>
                                {/* <li style={{ paddingBottom: 12, fontSize: 14 }}><img src={Location} style={{ width: 20 }} alt="gambar" />Sudah Pinpoint</li> */}

                                <Nav className="me-auto">
                                  {/* <Nav.Link className="nav" style={{ color: "#0d6efd" }} href="#features" onClick={openRequest}>Share</Nav.Link> */}
                                  <Nav.Link className="nav a" style={{ color: "#0d6efd" }} onClick={ubahAlamat} href="#features">Ubah Alamat</Nav.Link>
                                </Nav>
                              </ul>
                            </Card>
                          </div>
                        </div>
                      </Modal>
                    </Card.Text>
                  </Card.Body>
                </Card>

                {/* PEMBAYARAN DAN PENGIRIMAN */}
                <CardGroup>
                  <Card>
                    <Card.Body>
                      <h6>Pilih Pengiriman</h6>
                      {selectedPengiriman && (
                        <div>
                          <p style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>{selectedPengiriman.nama}</p>
                        </div>
                      )}
                      {selectedPengiriman && (
                        <div>
                          <p style={{ marginTop: 10, fontSize: 14 }}>{selectedPengiriman.desc}</p>
                        </div>
                      )}

                      <Card.Text style={{ marginLeft: 500 }}>
                        <Button variant="outline-white" onClick={handleShow1}><IoChevronForward /></Button>

                        <Modal show={show1} onHide={handleClose1}>
                          <Modal.Header closeButton>
                            <Modal.Title>Pilih Pengiriman</Modal.Title>
                          </Modal.Header>
                          <div style={{ height: 150, overflowY: "scroll", paddingLeft: 60, paddingRight: 60 }}>
                            <Card >
                              <Button variant="white" onClick={() => handlePengirimanClick('Next Day (Rp 30.000)', 'Estiminasi Tiba Esok')} >
                                <h3 style={{ fontSize: 18, paddingRight: 430 }} >Next Day (Rp 30.000)</h3>
                                <span style={{ fontSize: 14, paddingRight: 430 }}>Estiminasi Tiba Esok</span>
                              </Button>
                              <Button variant="white" onClick={() => handlePengirimanClick('Instan (Rp 27.000-31.000)', 'Tiba Dalam 2 Jam')} >
                                <h3 style={{ fontSize: 18, paddingRight: 400 }} >Instan (Rp 27.000-31.000)</h3>
                                <span style={{ fontSize: 14, paddingRight: 400 }}>Tiba Dalam 2 Jam</span>
                              </Button>
                              <Button variant="white" onClick={() => handlePengirimanClick('Reguler (Rp 16.500-21.500)', 'Estiminasi tiba 21-22 maret 2023')}>
                                <h3 style={{ fontSize: 18, paddingRight: 380 }} >Reguler (Rp 16.500-21.500)</h3>
                                <span style={{ fontSize: 14, paddingRight: 380 }}>Estiminasi tiba 21-22 maret 2023 </span>
                              </Button><Button variant="white" onClick={() => handlePengirimanClick('Kargo(Rp 25.500-30.500)', 'Estiminasi Tiba 24-25 maret 2023')}>
                                <h3 style={{ fontSize: 18, paddingRight: 400 }} >Kargo(Rp 25.500-30.500)</h3>
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
                      {selectedImage && (
                        <div>
                          <img style={{ marginRight: 500, height: 40, width: 60 }} src={selectedImage} />
                        </div>
                      )}
                      {selectedBRI && (
                        <div>
                          <p style={{ marginTop: 10 }}>{selectedBRI}</p>
                        </div>
                      )}

                      <Card.Text style={{ marginLeft: 500 }}>
                        <Button variant="outline-white" onClick={handleShow}><IoChevronForward /></Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Pilih Pembayaran</Modal.Title>
                          </Modal.Header>
                          <div style={{ height: 150, overflowY: "scroll", paddingLeft: 60, paddingRight: 60 }}>
                            <h6>Transfer Bank</h6>
                            <Card style={{ paddingLeft: 50, paddingRight: 50 }}>
                              <Button variant="white">
                                <img onClick={handleImageClick} src={BRI} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p onClick={handleBRIClick} style={{ marginTop: -30 }}>Bank BRI</p>
                              </Button>
                              <Button variant="white">
                                <img onClick={handleImageClick} src={BNI} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p onClick={handleBRIClick} style={{ marginTop: -30 }}>Bank BNI</p>
                              </Button>
                              <Button variant="white">
                                <img onClick={handleImageClick} src={Mandiri} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p onClick={handleBRIClick} style={{ marginTop: -30 }}>Bank Mandiri</p>
                              </Button>
                              <Button variant="white">
                                <img onClick={handleImageClick} src={BCA} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p onClick={handleBRIClick} style={{ marginTop: -30 }}>Bank BCA</p>
                              </Button>
                            </Card>
                            <h6>Tunai di Gerai Retail</h6>
                            <Card>
                              <Button variant="white">
                                <img onClick={handleImageClick} src={Alfamart} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p style={{ marginTop: -30 }}>Alfamart</p>
                              </Button>
                              <Button variant="white">
                                <img onClick={handleImageClick} src={Indomaret} style={{ marginRight: 500, height: 25, width: 40 }}></img>
                                <p onClick={handleBRIClick} style={{ marginTop: -30 }}>Indomaret</p>
                              </Button>
                            </Card>
                          </div>
                        </Modal>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>


                {/* Tambah Alamat */}
                <Modal show={request} onHide={closeRequest} animation={false}>
                  <Card style={{}}>
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter" style={{ fontWeight: 'bold', paddingLeft: 300 }}>
                        Tambah Alamat
                      </Modal.Title>
                    </Modal.Header>
                    <h4 style={{ paddingLeft: 30 }}>Lengkapi detail alamat</h4>
                    <Card.Body style={{ padding: 30, height: 400, overflow: 'scroll' }}>
                      <Form.Label style={{ fontWeight: 'bold' }} >Nama Penerima</Form.Label>
                      <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                      <Form.Label style={{ fontWeight: 'bold' }}>Nomor HP</Form.Label>
                      <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                      <Form.Label style={{ fontWeight: 'bold' }} >Label Alamat</Form.Label>
                      <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                      <Form.Label style={{ fontWeight: 'bold' }} >Kota & Kecamatan</Form.Label>
                      <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                      <Form.Label style={{ fontWeight: 'bold' }}>Alamat Lengkap</Form.Label>
                      <Form.Control type="text" style={{ height: 80 }} id="inputPassword5" aria-describedby="passwordHelpBlock" />
                      <Form.Label style={{ fontWeight: 'bold' }} >Catatan untuk kurir (opsional)</Form.Label>
                      <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                      <div>
                        <Form.Text id="passwordHelpBlock" muted>
                          Warna rumah, patokan, pesan khusus, dll.
                        </Form.Text>
                      </div>

                      <div>
                        <Form><Form.Check type="checkbox" id="" label="Jadikan Alamat utama" /> </Form>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <Form.Text id="passwordHelpBlock" muted>
                          Dengan klik “Simpan”, kamu menyetujui <a variant='primary'>Syarat & Ketentuan.</a>
                        </Form.Text>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <Button >Simpan</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Modal>

                {/* ubah alamat */}
                <Modal show={editalamat} onHide={closeEdit} animation={false}>
                  <Card >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter" style={{ fontWeight: 'bold', paddingLeft: 300 }}>
                        Ubah Alamat
                      </Modal.Title>
                    </Modal.Header>

                    <Card.Body style={{ padding: 30, height: 400, overflow: 'scroll' }}>
                      <Form.Label style={{ fontWeight: 'bold' }} >Label Alamat</Form.Label>
                      <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                      <Form.Label style={{ fontWeight: 'bold' }}>Alamat Lengkap</Form.Label>
                      <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                      <Form.Label style={{ fontWeight: 'bold' }}>Catatan untuk kurir (opsional)</Form.Label>
                      <Form.Control type="text" style={{ height: 80 }} id="inputPassword5" aria-describedby="passwordHelpBlock" />
                      <div>
                        <Form.Text id="passwordHelpBlock" muted>
                          Warna rumah, patokan, pesan khusus, dll.
                        </Form.Text>
                      </div>
                      <Form.Label style={{ fontWeight: 'bold' }}>Nama Penerima</Form.Label>
                      <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                      <Form.Label style={{ fontWeight: 'bold' }}>Nomor HP</Form.Label>
                      <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                      <div>
                        <Form.Text id="passwordHelpBlock" muted>
                          Dengan klik “Simpan”, kamu menyetujui Syarat & Ketentuan.
                        </Form.Text>
                      </div>
                      <Button >Simpan</Button>
                    </Card.Body>
                  </Card>
                </Modal>
              </div>
              {/* Filter */}
              <div className="col-lg-3 col-md-12">
                <aside className="sidebar_widget">
                  <div className="widget_list widget_categories">
                    <div>
                      <Card style={{ paddingLeft: 50, paddingRight: 50, marginRight: -12, margin: 10 }} variant="light" onClick={handleShow3}>

                        Makin Hemat Pakai Promo

                      </Card>

                      <Modal show={show3} onHide={handleClose3}>
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
      </card>




    </Layout >

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