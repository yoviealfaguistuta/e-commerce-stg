import keranjang from "../../../assets/img/icon/keranjang.jpg"
import React, { Fragment, useState, useEffect } from "react";
import { Layout } from "../../../layout";
import like from "../../../assets/img/logo/like-click.svg"
import likehover from "../../../assets/img/logo/like-hover.svg"
import cart from "../../../assets/img/logo/cart-click.svg"
import carthover from "../../../assets/img/logo/cart-hover.svg"
import '../../../assets/css/custom.css';
import '../../../assets/css/plugins.css';
import '../../../assets/css/style.css';
import '../../../assets/css/Checkout.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { IoChevronForward } from "react-icons/io5";
import Barang from "../../../components/Barang";
import KodePromo from "../../../components/KodePromo";
import Pembayaran from "../../../components/Pembayaran";

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
                <Barang ischeckout={true}/>
                </div>

                <h5 style={{ marginTop: 20 }}>Pengirimana Dan Pembayaran</h5>

                {/* ALAMAT */}
                <Card>
                  <Card.Body >
                    <ul className="alamat">
                      <li style={{ paddingBottom: 8, fontSize: 14, fontWeight: 700, color: '#6D7588' }} ><b>Utama</b></li>
                      <li style={{ paddingBottom: 8, fontSize: 14 }}><b> Fadil Ainuddin</b>(0895616710043) </li>
                      <li style={{ paddingBottom: 12, fontSize: 14 }}>Gang Harun, Belakang SMA Muhammadiyah 1 way Jepara</li>
                 
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
                <Pembayaran/>
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
              <KodePromo/>
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
