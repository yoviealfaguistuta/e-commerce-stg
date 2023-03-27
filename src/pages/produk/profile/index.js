import React, { Fragment, useState, useEffect, useRef } from "react";
import { Layout } from "../../../layout";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../../assets/css/custom.css';
import '../../../assets/css/plugins.css';
import '../../../assets/css/style.css';
import Gopay from '../../../assets/img/icon/gopay.png';
import Saldo from '../../../assets/img/icon/saldo.png';
import Ovo from '../../../assets/img/icon/ovo.png';
import Reward from '../../../assets/img/icon/reward.svg';
import Ovoo from '../../../assets/img/icon/Ovoo.png';
import Profil from '../../../assets/img/icon/profil.svg';
import Konek from '../../../assets/img/icon/konek.svg';
import Search from '../../../assets/img/icon/search1.png';
import Location from '../../../assets/img/icon/location.png';
import Kode from '../../../assets/img/icon/kode.svg';
import Share from '../../../assets/img/icon/share.svg';
import Sms from '../../../assets/img/icon/SMS.png';
import Modal from 'react-bootstrap/Modal';
import Cookies from 'js-cookie';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import LocationMap from "./LocationMap";
import { width } from "@mui/system";
import Switch from "react-bootstrap/Switch";
import { Form } from "react-bootstrap";

import '../../../assets/css/custom.css';
import '../../../assets/css/plugins.css';
import '../../../assets/css/style.css';
import { height, textAlign } from "@mui/system";


const Profile = (props) => {
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

  ///sidebar
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleClick3 = () => {
    setIsOpen3(!isOpen3);
  };


  const [isFeatureActive, setIsFeatureActive] = useState(false);
  const handleSwitchChange = () => {
    setIsFeatureActive(!isFeatureActive);
  };

  ///Alamat data diri
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(true);
  const [ToogleAddress, setToogleAddress] = useState(true); // TRUE = SEMUA, FALSE = DARI TEMAN


  const handleResetLayoutGrid = () => {
    setIsGrid(true);
    setIsList(true);
  };

  const handleResetLayoutList = () => {
    setIsGrid(false);
    setIsList(false);
  };

  ///edit nama

  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("Mr Ai");
  useEffect(() => {
    const savedName = Cookies.get('name');
    if (savedName) {
      setName(savedName);
    }

  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleSaveName = () => {
    Cookies.set('name', name, { expires: 7 });
  }

  ///edit nohp
  const [nomor, setNomor] = useState(false);

  const closeNomor = () => setNomor(false);
  const openNomor = () => setNomor(true);

  ///email
  const [email, setEmail] = useState(false);

  const closeEmail = () => setEmail(false);
  const openEmail = () => setEmail(true);

  ///Ubah sandi
  const [sandi, setSandi] = useState(false);
  const closeSandi = () => setSandi(false);
  const openSandi = () => setSandi(true);

  ///verivikasi kode 
  const [code, setCode] = useState(false);
  const closeCode = () => setCode(false);
  const openCode = () => setCode(true);

  const codeRef1 = useRef(null);
  const codeRef2 = useRef(null);
  const codeRef3 = useRef(null);
  const codeRef4 = useRef(null);

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    // Move focus to the next input field
    if (index < 3 && e.target.value !== '') {
      switch (index) {
        case 0:
          codeRef2.current.focus();
          break;
        case 1:
          codeRef3.current.focus();
          break;
        case 2:
          codeRef4.current.focus();
          break;
        default:
          break;
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('Text');
    const pastedCode = pastedData.split('').slice(0, 4);
    setCode(pastedCode);

    // Move focus to the last input field after pasting
    codeRef4.current.focus();
  };

  ///Ovo 
  const [ovo, setOvo] = useState(false);
  const closeOvo = () => setOvo(false);
  const openOvo = () => setOvo(true);

  ///Gopay 
  const [gopay, setGopay] = useState(false);
  const closeGopay = () => setGopay(false);
  const openGopay = () => setGopay(true);

  ///Gopay->grab 
  const [konek, setKonek] = useState(false);
  const closeKonek = () => setKonek(false);
  const openKonek = () => setKonek(true);

  ///tambah alamat
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
      nama: "fadil ainuddin",
      hp: "0895616710043",
      jalan: "Gang Harun, Belakang SMA Muhammadiyah 1 way Jepara",
  });

  useEffect(() => {
      const cookieData = Cookies.get("crudData");
      if (cookieData) {
          setData(JSON.parse(cookieData));
      }
  }, []);

  useEffect(() => {
      Cookies.set("crudData", JSON.stringify(data));
  }, [data]);

  const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddData = () => {
      setData([...data, formData]);
      setFormData({ nama: "", hp: "", jalan: "" });
  };

      ///tambah alamat
      const [alamat, setAlamat] = useState(false);
      const [tambahalamat, setTambahAlamat] = useState(false);
      const [editalamat, setEditAlamat] = useState(false);
  
  
      const closeAlamat = () => setAlamat(false);
      const openAlamat = () => setAlamat(true);
  
      const closeTambah = () => setTambahAlamat(false);
      const tambahAlamat = () => setTambahAlamat(true);
  
      const ubahAlamat = () => setEditAlamat(true);
      const closeEdit = () => setEditAlamat(false);
  
      ///Request
      const [request, setRequest] = useState(false);
  
      const closeRequest = () => setRequest(false);
      const openRequest = () => setRequest(true);

  return (
    <Layout>
      <div>
        <div className="shop_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                {/* sidebar */}
                <aside className="sidebar_widget">
                  <div className="row" >
                    <div className="col-3"><img className="img-profil" src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/cf438cd7-a9f8-435f-910d-726100b587db.jpg" alt="profilePic" />
                    </div>
                    <div className="col" style={{ padding: 0 }}>
                      <ul>
                        <li><a className="huruf">Fadil Ainuddin</a></li>
                        <li><Button className="but" ><img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/c02d2b09.svg" style={{ width: 12, padding: 0 }} ></img><span>Sambungkan ke Gojek</span></Button></li>
                      </ul>
                    </div>
                  </div>
                </aside>
                <aside className="sidebar_widget">
                  <div className="row">
                    <div className="col-2">
                      <img src={Gopay} alt='gopay' width={50} style={{ paddingTop: 3 }}></img>
                    </div>
                    <div className="col font">
                      <Button className="button" onClick={openGopay}><a>GoPay</a><span style={{ paddingLeft: 100, color: '#0d6efd' }}>Aktifkan</span></Button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <img src={Saldo} alt='saldo' width={50} style={{ paddingTop: 3 }}></img>
                    </div>
                    <div className="col font">
                      <Button className="button"><a>Saldo</a><span style={{ paddingLeft: 130 }}>Rp.0</span></Button>
                    </div>
                  </div>
                  <div className="row" style={{ marginBottom: 20 }}>
                    <div className="col-2">
                      <img src={Ovo} alt='saldo' width={50} style={{ paddingTop: 3 }}></img>
                    </div>
                    <div className="col font">
                      <Button onClick={openOvo} className="button"><a>OVO Cash</a><span style={{ paddingLeft: 70, color: '#0d6efd' }}>Aktifkan</span></Button>
                    </div>
                  </div>

                  <div className="row" >
                    <div className="col-2" >
                      <img src={Reward} alt='saldo' width={50} style={{ paddingTop: 3 }}></img>
                    </div>
                    <div className="col" style={{ paddingTop: 10, fontWeight: 'bold' }}>
                      <a>Member Silver 1</a>
                      <div className="col font" style={{ paddingTop: 10, fontWeight: '600' }}>
                        <ul>
                          <li><Button className="button" ><a>Toko Member</a><span style={{ paddingLeft: 100 }}>0</span></Button></li>
                          <li> <Button className="button" ><a>Misi Seru</a><span style={{ paddingLeft: 130 }}>0</span></Button></li>
                          <li> <Button className="button" ><a>Kupon Saya</a><span style={{ paddingLeft: 108 }}>0</span></Button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </aside>
                <aside className="sidebar_widget collapsible">
                  <div className="widget_list widget_categories">
                    <a href="#/" className="header" onClick={handleClick} style={{ fontWeight: "bold", color: '#212121' }}>Kotak Masuk </a> {props.title}
                    {isOpen && <ul id="generateKategori" className="kotak content" >
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Chat</a></li>
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Diskusi Produk </a></li>
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Ulasan</a></li>
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Pesan Bantuan</a></li>
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Pesanan Dikomplain</a></li>
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Update</a></li>
                      {props.content}</ul>}
                  </div>
                </aside>
                <aside className="sidebar_widget collapsible">
                  <div className="widget_list widget_categories">
                    <a href="#/" className="header" onClick={handleClick2} style={{ fontWeight: "bold", color: '#212121' }}>Pembelian</a>
                    {isOpen2 && <ul id="generateKategori" className="kotak content" >
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Menunggu Pembayaran</a></li>
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Daftar Transaksi </a></li>
                      {props.content}</ul>}
                  </div>
                </aside>
                <aside className="sidebar_widget collapsible">
                  <div className="widget_list widget_categories">
                    <a href="#/" className="header" onClick={handleClick3} style={{ fontWeight: "bold", color: '#212121' }}>Profil Saya</a>
                    {isOpen3 && <ul id="generateKategori" className="kotak content" >
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Wishlist</a></li>
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Toko Favorit </a></li>
                      <li><a href="#/" onclick="generateBarang(10,1) " style={{ fontWeight: "440" }}>Pengaturan </a></li>

                      {props.content} </ul>}
                  </div>
                </aside>
                <aside className="sidebar_widget collapsible">
                  <div className="widget_list widget_categories">
                   
                  </div>
                </aside>
              </div>

              {/* isi profil */}

              <div className="col-lg-9 col-md-12">
                <div className="nama">
                  < img src={Profil} style={{ width: 20 }} alt="gopay" />
                  <a style={{ paddingLeft: 5 }}>Fadil Ainuddin</a>
                </div>
                {isGrid ? (
                  <div className="grid-layout">
                    <div className="row no-gutters shop_wrapper grid_4" id="generateBarang">
                      <Card>
                        <div className="col-lg--3 col-md-4 col-12 ">
                          <div className="row" style={{ paddingLeft: 10 }}>
                            <buttom onClick={handleResetLayoutGrid} className="col">
                              <button className="button"><b >Biodata Diri</b></button>
                            </buttom>

                            <buttom onClick={handleResetLayoutList} className="col">
                              <button className="button"><b >Daftar Alamat</b></button>
                            </buttom>
                          </div>

                        </div>
                      </Card>


                      <div className="row">
                        <Col md={4}>
                          <Card className="card-profil" style={{ marginTop: 30 }}>
                            <img variant="top" className="image" src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/cf438cd7-a9f8-435f-910d-726100b587db.jpg" />

                            <Card style={{ width: '18.6rem', marginTop: 10, height: 50, marginBottom: 10 }}>
                              <Card.Body style={{ paddingTop: 10 }} >
                                <Card.Text style={{ textAlign: "center" }}>
                                  <button className="my-button" style={{ fontWeight: 'bold' }}>Pilih Foto </button>
                                </Card.Text>
                              </Card.Body>
                            </Card>
                            <Card.Body style={{ padding: 0 }}>
                              <Card.Text className="font">
                                Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG
                              </Card.Text>
                            </Card.Body>
                          </Card>
                          <Card style={{ width: '20.6rem', marginTop: 10, height: 50 }}>
                            <Card.Body style={{ paddingTop: 10 }} >
                              <Card.Text style={{ textAlign: "center" }}>
                                <button className="my-button" onClick={openSandi} style={{ fontWeight: 'bold' }}>Ubah Kata Sandi </button>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                          <Card style={{ width: '20.6rem', marginTop: 10, height: 50 }}>
                            <Card.Body style={{ paddingTop: 10 }} >
                              <Card.Text style={{ textAlign: "center" }}>
                                <button className="my-button" onClick={openCode} style={{ fontWeight: 'bold' }}>Pin </button>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        <div className="col" style={{ paddingTop: 30 }}>
                          <h6 className="data-diri" style={{ fontWeight: "bold", color: "#6D7588" }}>Ubah Biodata Diri</h6>
                          <div className="row data">
                            <div className="col-3"><span>Nama</span></div>
                            <div className="col"><span>{name}</span><button className="my-button" onClick={handleShow}><span style={{ paddingLeft: 20, color: '#0d6efd' }}>Ubah</span></button></div>

                          </div>
                          <div className="row data">
                            <div className="col-3"><span>Tanggal Lahir</span></div>
                            <div className="col"><span>05 Oktober 2022</span></div>

                          </div>
                          <div className="row data">
                            <div className="col-3"><span>Jenis Kelamain</span></div>
                            <div className="col"><span>Pria</span></div>
                          </div>

                          <h6 className="data-diri" style={{ fontWeight: "bold", color: "#6D7588" }}>Ubah Kontak</h6>
                          <div className="row data">
                            <div className="col-3"><span>Email</span></div>
                            <div className="col"><span>ainuddinfadil@gmail.com</span><span style={{ paddingLeft: 20, background:'#0d6efd' }}>Terverifikasi</span><button onClick={openEmail} className="my-button"><span style={{ paddingLeft: 20, color: '#0d6efd' }}>Ubah</span></button></div>

                          </div>
                          <div className="row data">
                            <div className="col-3"><span>Nomor Hp</span></div>
                            <div className="col"><span>0895616710043</span><span style={{ paddingLeft: 20,background:'#0d6efd' }}>Terverifikasi</span><button onClick={openNomor} className="my-button"><span style={{ paddingLeft: 20, color: '#0d6efd' }}>Ubah</span></button></div>

                          </div>

                          <h6 className="data-diri" style={{ fontWeight: "bold", color: "#6D7588" }}>Save Mode</h6>
                          <div className="row">
                            <div className="col-9"><span>Fitur ini akan otomatis menyaring hasil pencarian sesuai kebijakan dan batasan usia pengguna</span></div>
                          </div>

                          <div className="row data">
                            <div className="col-3"><span>Aktifkan</span></div>
                            <div className="col"><span><Switch
                              checked={isFeatureActive}
                              onChange={handleSwitchChange}
                              onColor="#4cd964"
                              offColor="#0000"
                            /></span></div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                ) : (
                  <div className="grid-layout">
                    <div className="row no-gutters shop_wrapper grid_4" id="generateBarang">
                      <Card>
                        <div className="col-lg--3 col-md-4 col-12 ">
                          <div className="row" style={{ paddingLeft: 10 }}>
                            <buttom onClick={handleResetLayoutGrid} className="col">
                              <button className="button"><b >Biodata Diri</b></button>
                            </buttom>

                            <buttom onClick={handleResetLayoutList} className="col">
                              <button className="button"><b >Daftar Alamat</b></button>
                            </buttom>
                          </div>

                        </div>
                      </Card>

                      <Card >
                        <div className="row">
                          <div className="col-9">
                            <Form>
                              <Row className="mb-3" style={{ paddingTop: 20 }}>
                                <Form.Group as={Col} >
                                  <InputGroup className="mb-1" style={{ width: 300 }}>
                                    <Form.Control
                                      placeholder="Cari alamat atau nama penerima"
                                      aria-label="Recipient's username"
                                      aria-describedby="basic-addon2"
                                    />

                                    <InputGroup.Text id="basic-addon2">
                                      <img src={Search} style={{ width: 20 }} alt="gambar" />
                                    </InputGroup.Text>
                                  </InputGroup>
                                </Form.Group>

                              </Row>
                            </Form>
                          </div>
                          <div className="col">
                            <Form>
                              <Row className="mb" style={{ paddingTop: 20 }}>
                                <Form.Group as={Col} >
                                  <Form.Group as={Col} >
                                    <Button onClick={openAlamat} variant='primary' href="#features" type="submit">
                                      + Tambah Alamat Baru
                                    </Button>
                                  </Form.Group>
                                </Form.Group>
                              </Row>
                            </Form>

                          </div>

                        </div>
                        <div className="col">
                          <Form.Group as={Col} >
                            <Button variant="outline-primary" onClick={() => setToogleAddress(true)} >Semua Alamat</Button>
                            <Button style={{ marginLeft: 10 }} variant='outline-primary' onClick={() => setToogleAddress(false)} href="#features" type="submit">Dari Teman</Button>
                          </Form.Group>
                        </div>

                        {
                          (ToogleAddress) ?
                            
                            <Card className="card-alamat alamat" style={{ paddingLeft: 10 }}>
                              <Col><span style={{ paddingBottom: 8, fontWeight: 700, color: '#6D7588' }}>Rumah</span></Col>
                              <Col style={{ paddingBottom: 10 }}><b>Fadil Ainuddin</b></Col>
                              <Col style={{ paddingBottom: 10 }}><span>0895616710043</span></Col>
                              <Col style={{ paddingBottom: 10 }}><span>Gang Harun, Belakang SMA Muhammadiyah 1 way Jepara</span></Col>
                              <Col style={{ paddingBottom: 12, fontSize: 14 }}><img src={Location} style={{ width: 20 }} alt="gambar" />Sudah Pinpoint</Col>

                              <Nav className="me-auto">
                                <Nav.Link className="nav" style={{ color: "#0d6efd" }} href="#features"  onClick={openRequest} >Share</Nav.Link>
                                <Nav.Link className="nav a" style={{ color: "#0d6efd" }} href="#features" onClick={ubahAlamat}>Ubah Alamat</Nav.Link>
                              </Nav>
                            </Card> :


                            <Card className="card-alamat">
                              <Card.Body>
                                <div className="row">
                                  <div className="col-1">
                                    <img src={Share} style={{ height: 30 }} alt='share'></img>
                                  </div>

                                  <div className="col-9">
                                    <ul>
                                      <li><b>Minta alamat ke teman kamu</b></li>
                                      <li><span>Lebih mudah dan cepat mendapatkan alamat teman cukup klik di sini.</span></li>
                                    </ul>
                                  </div>
                                  <div className="col">
                                    <Button  onClick={openRequest} variant="outline-primary" >Request</Button>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                        }
                      </Card>

                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scrooll */}
        <div>
          <i className={`sticky-scroll ${hideScroll ? 'show' : ''} ${showScroll ? 'hide' : ''}`} />
          <a id="scrollUp" href="#top" style={{ position: 'fixed', zIndex: 2147483647, display: 'block' }}>
            <i className="fa fa-angle-double-up" />
          </a>
        </div>
      </div>

      {/* edit nama */}
      <Modal show={show} onHide={handleClose} animation={false}>

        <Card >
          <Card.Body>
            <div onClick={handleClose} className="mini_cart_close" style={{ paddingLeft: 750 }}>
              <a href="javascript:void(0)">
                <i class="ion-android-close"></i>
              </a>
            </div>

            <Card.Title style={{ paddingBottom: 20, marginTop: -25 }}>Ubah Nama</Card.Title>
            <Card.Text>
              Kamu hanya dapat mengubah nama 1 kali lagi. Pastikan nama sudah benar.
            </Card.Text>

            <Card.Subtitle className="mb-2 text-muted">Nama</Card.Subtitle>
            <Form.Control type="text" style={{ width: 600, height: 50 }} id="nameInput" value={name} onChange={handleNameChange} />
            <Form.Text id="text" muted>
              Nama dapat dilihat oleh pengguna lainnya
            </Form.Text>

            <div className="d-grid gap-2" style={{ padding: 50 }}>
              <Button onClick={handleSaveName} variant="primary" size="lg" style={{ marginBottom: -30, width: 500, alignItems: 'center' }}>
                Simpan
              </Button>
            </div>
          </Card.Body>

        </Card>
      </Modal>

      {/* edit email */}
      <Modal show={email} onHide={closeEmail} animation={false}>
        <Card >
          <Card.Body>
            <div onClick={closeEmail} className="mini_cart_close" style={{ paddingLeft: 750 }}>
              <a href="javascript:void(0)">
                <i class="ion-android-close"></i>
              </a>
            </div>

            <Card.Title style={{ paddingBottom: 20, marginTop: -25, fontSize: 25, fontWeight: 600 }}>Ubah Email</Card.Title>
            <Card.Text>
              <ul>
                <li style={{ color: '#31353B', textAlign: 'center', fontWeight: 'bold', fontSize: '1.14286rem' }}>Pilih Metode Verifikasi</li>
                <li style={{ color: '#31353B', textAlign: 'center', lineHeight: 1.5 }}>Pilih salah satu metode dibawah ini untuk mendapatkan kode verifikasi.</li>
              </ul>
            </Card.Text>

            <div style={{ paddingBottom: 50, paddingLeft: 135 }}>
              <Button className="element" size="lg" style={{ marginBottom: -30, width: 500, height: 100, paddingRight: 300 }}>
                <div className="row">
                  <div className="col">
                  <img src={Sms} style={{ paddingTop: 20, width: 50 }} alt></img>

                  </div>
                  <div className="col" style={{width:300, paddingTop: 20}}>
                  <b style={{ color: '#31353B', paddingTop: 20}}>SMS Ke</b>
                  <div>
                  <a style={{ color: '#31353B',fontSize: 13 }}>0895-6167-100-43</a>

                </div>

                  </div>
                </div>
              

              </Button>
            </div>
          </Card.Body>

        </Card>
      </Modal>

      {/* no hp */}
      <Modal show={nomor} onHide={closeNomor} animation={false}>
        <Card >
          <Card.Body>
            <div onClick={closeNomor} className="mini_cart_close" style={{ paddingLeft: 750 }}>
              <a href="javascript:void(0)">
                <i class="ion-android-close"></i>
              </a>
            </div>

            <Card.Title style={{ paddingBottom: 20, marginTop: -25, fontSize: 25, fontWeight: 600 }}>Ubah Email</Card.Title>
            <Card.Text>
              <ul>
                <li style={{ color: '#31353B', textAlign: 'center', fontWeight: 'bold', fontSize: '1.14286rem' }}>Pilih Metode Verifikasi</li>
                <li style={{ color: '#31353B', textAlign: 'center', lineHeight: 1.5 }}>Pilih salah satu metode dibawah ini untuk mendapatkan kode verifikasi.</li>

              </ul>
            </Card.Text>

            <div style={{ paddingBottom: 50, paddingLeft: 135 }}>
              <Button className="element" size="lg" style={{ marginBottom: -30, width: 500, height: 100, paddingRight: 300 }}>
                <img src={Sms} style={{ paddingTop: 20, width: 50 }} alt></img>
                <b style={{ color: '#31353B', paddingLeft: 20 }}>SMS Ke</b>
                <div>
                  <a style={{ color: '#31353B', paddingLeft: 70, fontSize: 13 }}>0895-6167-100-43</a>
                </div>
              </Button>

            </div>
            <div style={{ paddingBottom: 50, paddingLeft: 400 }}>
              <Button className="element" ><a style={{ color: '#31353B' }}>Nomor saya sudah tidak aktif</a></Button>
            </div>

          </Card.Body>

        </Card>
      </Modal>

      {/* Sandi */}
      <Modal show={sandi} onHide={closeSandi} animation={false}>
        <Card >
          <Card.Body>
            <div onClick={closeSandi} className="mini_cart_close" style={{ paddingLeft: 750 }}>
              <a href="javascript:void(0)">
                <i class="ion-android-close"></i>
              </a>
            </div>

            <Card.Title style={{ paddingBottom: 20, marginTop: -25, fontSize: 25, fontWeight: 600 }}>Ubah Email</Card.Title>
            <Card.Text>
              <ul>
                <li style={{ color: '#31353B', textAlign: 'center', fontWeight: 'bold', fontSize: '1.14286rem' }}>Pilih Metode Verifikasi</li>
                <li style={{ color: '#31353B', textAlign: 'center', lineHeight: 1.5 }}>Pilih salah satu metode dibawah ini untuk mendapatkan kode verifikasi.</li>
              </ul>
            </Card.Text>

            <div style={{ paddingBottom: 50, paddingLeft: 135 }}>
              <Button className="element" size="lg" style={{ marginBottom: -30, width: 500, height: 100, paddingRight: 300 }}>
                <img src={Sms} style={{ paddingTop: 20, width: 50 }} alt></img>
                <b style={{ color: '#31353B', paddingLeft: 20 }}>SMS Ke</b>
                <div>
                  <a style={{ color: '#31353B', paddingLeft: 70, fontSize: 13 }}>0895-6167-100-43</a>

                </div>

              </Button>
            </div>
          </Card.Body>

        </Card>
      </Modal>

      {/* verivikasi */}
      <Modal show={code} onHide={closeCode} animation={false} >
        <Card>
          <Modal.Header closeButton>

          </Modal.Header>
          <Card.Body style={{ padding: 30 }}>
            <ul style={{ textAlign: "center" }}>
              <li><b style={{ fontSize: 40 }}>Ubah Pin</b></li>
              <li><b>Masukkan 6-digit PIN Lama Anda</b></li>
            </ul>
            <div className="verification-code-input" style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', paddingBottom: 30 }}>
              <Form.Control type="text" value={code[0]} onChange={(e) => handleChange(e, 0)} ref={codeRef1} maxLength={1} onPaste={handlePaste}
              />
              <Form.Control type="text" value={code[1]} onChange={(e) => handleChange(e, 1)} ref={codeRef2} maxLength={1} onPaste={handlePaste}
              />
              <Form.Control type="text" value={code[2]} onChange={(e) => handleChange(e, 2)} ref={codeRef3} maxLength={1} onPaste={handlePaste}
              />
              <Form.Control type="text" value={code[3]} onChange={(e) => handleChange(e, 3)} ref={codeRef4} maxLength={1} onPaste={handlePaste}
              />
            </div>
            <div style={{ textAlign: 'center', paddingBottom: 20 }}>
              <Button style={{ width: 500 }}>Selanjutnya</Button>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Button className="element" style={{ width: 100 }} ><a style={{ color: '#31353B' }}> Lupa Pin</a></Button>
            </div>

          </Card.Body>
        </Card>
      </Modal>

      {/* Ovo */}
      <Modal show={ovo} onHide={closeOvo} animation={false} >
        <Card>
          <Modal.Header closeButton>

          </Modal.Header>
          <Card.Body style={{ padding: 30 }}>
            <ul style={{ textAlign: "center" }}>
              <img src={Ovoo} style={{ width: 100 }}></img>
              <li><b style={{ fontSize: 40 }}>Lebih praktis dengan OVO</b></li>
              <li><b>Aktifkan OVO untuk pembayaran instan dalam sekali klik. Sstt, beragam promo khusus OVO juga menantimu lho.</b></li>
            </ul>
            <div className="verification-code-input" style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', paddingBottom: 30 }}>

            </div>
            <div style={{ textAlign: 'center', paddingBottom: 20 }}>
              <Button style={{ width: 500 }}>Aktifkan Ovo</Button>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Button className="element" style={{ width: 400 }} ><a style={{ color: '#31353B' }}> Pelajari Lebih Lanjut</a></Button>
            </div>

          </Card.Body>
        </Card>
      </Modal>

      {/* Gopay */}
      <Modal show={gopay} onHide={closeGopay} animation={false} >
        <Card>
          <Modal.Header closeButton>

          </Modal.Header>
          <Card.Body style={{ padding: 30 }}>
            <ul style={{ textAlign: "center" }}>
              <img src={Gopay} style={{ width: 100 }}></img>
              <li><b style={{ fontSize: 30 }}>Sambungin akun  & Gojek biar dapat keuntungan ekstra ini!</b></li>
              <li><b>Dengan klik tombol di bawah, saya bersedia bagikan data untuk sambungkan akun sesuai Syarat & Ketentuan Tokopedia dan Gojek.</b></li>
            </ul>
            <div className="verification-code-input" style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', paddingBottom: 30 }}>

            </div>
            <div style={{ textAlign: 'center', paddingBottom: 20 }}>
              <Button style={{ width: 500 }} onClick={openKonek} >Sambungkan Akun</Button>
            </div>
            <div style={{ textAlign: 'right' }}>
            </div>

          </Card.Body>
        </Card>
      </Modal>

      {/* Gopay - grab */}
      <Modal show={konek} onHide={closeKonek} animation={false} >
        <Card>
          <Modal.Header closeButton>

          </Modal.Header>
          <Card.Body style={{ padding: 30, height: 400, overflow: 'scroll' }}>
            <ul style={{ textAlign: "center" }}>
              <img src={Gopay} style={{ width: 100 }}></img>

              <li><b style={{ fontSize: 28 }}>Konfirmasi akun Gojek yang akan disambungin ke Tokopedia</b></li>
            </ul>

            <Card style={{ width: 600, height: 300, marginLeft: 65, alignItems: 'center', background: '#0d6efd' }}>
              <b style={{ fontSize: 14, paddingBottom: 20 }}>Konfirmasi akun Gojek yang akan disambungin ke Tokopedia</b>
              <Card style={{ width: 300, height: 200 }}>
                <Card.Body style={{ textAlign: 'center', margin: 10 }}>
                  <img src={Konek} style={{ width: 80, }}></img>

                  <ul>
                    <li style={{ fontWeight: 800, fontSize: '1.42857rem' }}>0895616710043</li>
                    <li>Fadil Ainuddin</li>

                  </ul>
                </Card.Body>
              </Card>
            </Card>
            <div className="verification-code-input" style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', paddingBottom: 30 }}>

            </div>
            <div style={{ textAlign: 'center', paddingBottom: 20 }}>
              <Button style={{ width: 500 }}>Konfirmasi</Button>
            </div>
            <div style={{ textAlign: 'right' }}>
            </div>

          </Card.Body>
        </Card>
      </Modal>

      {/* Alamat */}
      <Modal show={alamat} onHide={closeAlamat} animation={false}>
        <Card >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" style={{ fontWeight: 'bold', paddingLeft: 300 }}>
              Tambah Alamat
            </Modal.Title>
          </Modal.Header>
          <Card.Body style={{ padding: 30, height: 400, overflow: 'scroll' }} className="location-search">
            <h4 style={{ paddingBottom: 20 }}>Di mana lokasi tujuan pengirimanmu?</h4>
            <LocationMap />

            <Form>
              <InputGroup className="mb-3" style={{ width: 470, height: 50 }}>
                <InputGroup.Text style={{ background: '#ffff' }} id="basic-addon1"> <img src={Search}></img></InputGroup.Text>
                <Form.Control
                  style={{ width: 10, height: 50 }}
                  type="text"
                  placeholder="Tuliskan nama jalan /gedung /perumahan"

                />
              </InputGroup>


              <Card.Text style={{ color: '#31353B', paddingTop: 40 }}>
                <Button style={{ background: '#ffff', color: 'black' }} onClick={tambahAlamat}>Mau cara lain? Isi alamat secara manual</Button>
              </Card.Text>
            </Form>

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

      {/* Tambah Alamat */}
      <Modal className="modal1" show={tambahalamat} onHide={closeTambah} animation={false}>
        <Card style={{}}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" style={{ fontWeight: 'bold', paddingLeft: 300 }}>
              Tambah Alamat
            </Modal.Title>
          </Modal.Header>
          <h4 style={{ paddingLeft: 30 }}>Lengkapi detail alamat</h4>
          <Card.Body style={{ padding: 30, height: 400, overflow: 'scroll' }}>
            <Form.Label style={{ fontWeight: 'bold' }} >Nama Penerima</Form.Label>
            <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" name="nama" value={formData.nama} onChange={handleInputChange} />
            <Form.Label style={{ fontWeight: 'bold' }}>Nomor HP</Form.Label>
            <Form.Control type="text" id="inputPassword5" name="hp" value={formData.hp} onChange={handleInputChange} />
            <Form.Label style={{ fontWeight: 'bold' }} >Label Alamat</Form.Label>
            <Form.Control type="text" id="inputPassword5" name="jalan" value={formData.jalan} onChange={handleInputChange} />
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
              <Button onClick={handleAddData} >Simpan</Button>
            </div>
          </Card.Body>
        </Card>
      </Modal>

      {/* Request */}
      <Modal show={request} onHide={closeRequest} animation={false}>
        <Card >
          <Card.Body>
            <div onClick={closeRequest} className="mini_cart_close" style={{ paddingLeft: 750 }}>
              <a href="javascript:void(0)">
                <i class="ion-android-close"></i>
              </a>
            </div>

            <Card.Title style={{ paddingBottom: 20, marginTop: -25, fontSize: 25, fontWeight: 600 }}>Minta alamat ke teman kamu</Card.Title>
            <Card.Text>
              <Card.Body>
                <Form.Control type="text" id="inputPassword5" placeholder="Email/Nomor HP" aria-describedby="passwordHelpBlock" />

                <div style={{ paddingTop: 40, fontSize: 20, }} >
                  <Form.Text id="passwordHelpBlock" muted>
                    Dengan klik Minta Alamat, kamu setuju menggunakan kontak teman kamu untuk dimintakan alamat.
                  </Form.Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button  >Minta Alamat</Button>
                </div>
              </Card.Body>
            </Card.Text>

          </Card.Body>

        </Card>
      </Modal>

    </Layout>

  );
};

export default Profile;