import React, { Fragment, useState, useEffect, useRef } from "react";
import { Layout } from "../../../layout";
import Gopay from '../../../assets/img/icon/gopay.png';
import Saldo from '../../../assets/img/icon/saldo.png';
import Ovo from '../../../assets/img/icon/ovo.png';
import Profil from '../../../assets/img/icon/profil.svg';
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


import Switch from "react-bootstrap/Switch";
import { Form, Row, Col } from "react-bootstrap";

import '../../../assets/css/custom.css';
import '../../../assets/css/plugins.css';
import '../../../assets/css/style.css';
import { height, textAlign } from "@mui/system";



const Profile = (props) => {

    ///pilih foto
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileInputChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log(selectedFile);
    };


    const [isFeatureActive, setIsFeatureActive] = useState(false);
    const handleSwitchChange = () => {
        setIsFeatureActive(!isFeatureActive);
    };


    ///Alamat data diri
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

    ///semua alamat->dari teman
    const [isAlamat, setIsAlamat] = useState(true);
    const [isTeman, setIsTeman] = useState(true);

    const handleResetLayoutAlamat = () => {
        setIsAlamat(true);
        setIsTeman(true);
    };

    const handleResetLayoutTeman = () => {
        setIsAlamat(false);
        setIsTeman(false);
    };

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

    ///edit nama

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("John Doe");
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



    ///tambah alamat
    const [alamat, setAlamat] = useState(false);
    const [tambahalamat, setTambahAlamat] = useState(false);
    const [editalamat, setEditAlamat] = useState(false);


    const closeAlamat = () => setAlamat(false);
    const openAlamat = () => setAlamat(true);
    const tambahAlamat = () => setTambahAlamat(true);
    const closeTambah = () => setTambahAlamat(false);
    const ubahAlamat = () => setEditAlamat(true);
    const closeEdit = () => setEditAlamat(false);

    ///Request
    const [request, setRequest] = useState(false);

    const closeRequest = () => setRequest(false);
    const openRequest = () => setRequest(true);

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



    return (
        <Layout>
            <div className="shop_area">
                <div className="container">
                    <div className="row">
                        {/* PEMBAYARAN */}
                        <div className="col-lg-3 col-md-12">
                            <aside className="sidebar_widget">
                                <div className="css-19ongn3">
                                    <a data-testid="btnSidebarProfile" className="profileLink" href="https://www.tokopedia.com/people/136946280">
                                        <img className="img-profil" src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/cf438cd7-a9f8-435f-910d-726100b587db.jpg" width={48} height={48} alt="profilePic" />
                                        <ul className="gojek">
                                            <li><a className="nama-profil">Fadil Ainuddin</a></li>
                                            <li><Button className="but" ><img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/c02d2b09.svg" style={{ width: 12, padding: 0 }} ></img>Sambungkan ke Gojek</Button></li>
                                        </ul>
                                    </a>
                                </div>
                            </aside>
                            <aside className="sidebar_widget">
                                <ul className="pembayaran">
                                    <li style={{ paddingTop: 20 }}>< img src={Gopay} alt="gopay" /><a style={{ paddingLeft: 20 }}>GoPay</a><span style={{ paddingLeft: 120, color: '#0d6efd' }}>Aktifkan</span></li>
                                    <li style={{ paddingTop: 20 }}>< img src={Saldo} alt="saldo" /><a style={{ paddingLeft: 20 }}>Saldo</a><span style={{ paddingLeft: 150 }}>Rp0</span></li>
                                    <li style={{ paddingTop: 20 }}>< img src={Ovo} alt="ovo" /><a style={{ paddingLeft: 20 }}>Ovo</a><span style={{ paddingLeft: 135, color: '#0d6efd' }}>Aktifkan</span></li>

                                    <li style={{ paddingTop: 20 }}><b>Member Silver</b></li>
                                </ul>
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
                            <aside className="sidebar_widget" style={{ borderRadius: 5 }}>
                            </aside>
                        </div>

                        {/* BIODATA */}

                        <div className="col-lg-9 col-md-12" style={{ paddingTop: 1 }}>
                            <div className="nama">
                                < img src={Profil} style={{ width: 20 }} alt="gopay" />
                                <a style={{ paddingLeft: 5 }}>Fadil Ainuddin</a>
                            </div>
                            {isGrid ? (
                                <div className="grid-layout " >
                                    <div className="row no-gutters shop_wrapper grid_4" id="generateBarang">
                                        <Card>
                                            <Card.Body>
                                                <div className="shop_toolbar_btn btn-data">
                                                    <button onClick={handleResetLayoutGrid} data-role="grid_4" id="buttonResetLayoutGrid" type="button" className="" data-toggle="tooltip" title={4}>Biodata Diri</button>
                                                    <button onClick={handleResetLayoutList} data-role="grid_list" id="buttonResetLayoutList" type="button" className="" data-toggle="tooltip" title="List" >Daftar Alamat</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <div className="col-lg-3 col-md-4 col-12 ">
                                            <Card style={{ width: '18rem', marginBottom: 20, padding: 10 }}>
                                                <Card.Img variant="top" src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/cf438cd7-a9f8-435f-910d-726100b587db.jpg" />

                                                <Card style={{ width: '16.5rem', marginTop: 10, height: 60 }}>
                                                    <Card.Body className="">
                                                        <Card.Text style={{ textAlign: "center" }}>
                                                            <button onClick={handleButtonClick} className="my-button" style={{ fontWeight: 'bold' }}>Pilih Foto </button>
                                                            <input
                                                                type="file"
                                                                ref={fileInputRef}
                                                                style={{ display: 'none' }}
                                                                onChange={handleFileInputChange}
                                                            />
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>

                                                <Card.Body>
                                                    <Card.Text>
                                                        Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                            <Card style={{ width: '18rem', marginBottom: 20 }}>
                                                <Card.Body>
                                                    <Card.Text style={{ textAlign: "center" }}>
                                                        <button className="my-button" onClick={openSandi} style={{ fontWeight: 'bold' }}>Ubah Kata Sandi </button>
                                                    </Card.Text>

                                                </Card.Body>
                                            </Card>
                                            <Card style={{ width: '18rem' }}>

                                                <Card.Body>
                                                    {/* <img src={Kode} style={{ marginRight: 30 }}></img> */}
                                                    <Card.Text style={{ textAlign: "center" }}>
                                                        <button onClick={openCode} className="my-button" style={{ fontWeight: 'bold', paddingTop: -100 }}>Pin </button>
                                                    </Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </div>

                                        {/* Data diri */}
                                        <div className="col-lg-9 col-md-4 col-12 ">
                                            <ul >
                                                <li className="data-diri"><h6 style={{ fontWeight: "bold", color: "#6D7588" }}>Ubah Biodata Diri</h6></li>
                                                <li className="data-diri"><a>Nama</a><span style={{ paddingLeft: 90 }}>{name}</span><button onClick={handleShow} className="my-button" style={{ paddingLeft: 30, color: '#0d6efd' }}>Ubah</button></li>
                                                <li className="data-diri"><a>Tanggal Lahir</a><span style={{ paddingLeft: 38 }}>01-Januari-2023</span></li>
                                                <li className="data-diri"><a>Jenis Kelamin</a><span style={{ paddingLeft: 38 }}>Pria</span></li>
                                                <li className="data-diri"><h6 style={{ fontWeight: "bold", color: "#6D7588" }}>Ubah Kontak</h6></li>
                                                <li className="data-diri"><a>Email</a><span style={{ paddingLeft: 92 }}>ainuddinfadil@gmail.com</span><button onClick={openEmail} className="my-button" style={{ paddingLeft: 30, color: '#0d6efd' }}>Ubah</button></li>
                                                <li className="data-diri"><a>Nomor HP</a><span style={{ paddingLeft: 60 }}>0895616710043</span><button onClick={openNomor} className="my-button" style={{ paddingLeft: 30, color: '#0d6efd' }}>Ubah</button></li>
                                                <li className="data-diri"><h6 style={{ fontWeight: "bold", color: "#6D7588" }}>Safe Mode</h6></li>
                                                <li className="data-diri " style={{ marginRight: 100, width: 510 }}><a>Fitur ini akan otomatis menyaring hasil pencarian sesuai kebijakan dan batasan usia pengguna</a></li>

                                                <li className="data-diri"><a style={{ fontWeight: "bold", color: "#6D7588" }}>Aktifkan
                                                    <Switch
                                                        checked={isFeatureActive}
                                                        onChange={handleSwitchChange}
                                                        onColor="#4cd964"
                                                        offColor="#0000"
                                                    />
                                                </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="list-layout ">
                                    <div className="row no-gutters shop_wrapper grid_4" id="generateBarang">
                                        <Card>
                                            <Card.Body>
                                                <div className="shop_toolbar_btn btn-data">
                                                    <button onClick={handleResetLayoutGrid} data-role="grid_4" id="buttonResetLayoutGrid" type="button" className="" data-toggle="tooltip" title={4}>Biodata Diri</button>
                                                    <button onClick={handleResetLayoutList} data-role="grid_list" id="buttonResetLayoutList" type="button" className="" data-toggle="tooltip" title="List" >Daftar Alamat</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
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
                                                <Form.Group as={Col} style={{ paddingLeft: 600 }}>
                                                    <Button variant='primary' onClick={openAlamat} type="submit">
                                                        + Tambah Alamat Baru
                                                    </Button>
                                                </Form.Group>
                                            </Row>

                                            <Row className="">
                                                <Form.Group as={Col} >
                                                    <Button variant="outline-primary" onClick={handleResetLayoutAlamat}>Semua Alamat</Button>
                                                    <Button style={{ marginLeft: 10 }} variant='outline-primary' onClick={handleResetLayoutTeman} type="submit">Dari Teman</Button>
                                                </Form.Group>

                                            </Row>
                                        </Form>

                                        <Card className="card-alamat">
                                            <Card.Body>
                                                <ul className="alamat">
                                                    <li style={{ paddingBottom: 8, fontWeight: 700, color: '#6D7588' }} ><b> Rumah</b><span style={{ background: '#0d6efd', color: '#6D7588', fontSize: 16 }}>Utama</span></li>
                                                    <li style={{ paddingBottom: 8 }}><b> Fadil Ainuddin</b></li>
                                                    <li style={{ paddingBottom: 8 }}> 0895616710043 </li>
                                                    <li style={{ paddingBottom: 12 }}>Gang Harun, Belakang SMA Muhammadiyah 1 way Jepara</li>
                                                    <li style={{ paddingBottom: 12, fontSize: 14 }}><img src={Location} style={{ width: 20 }} alt="gambar" />Sudah Pinpoint</li>

                                                    <Nav className="me-auto">
                                                        <Nav.Link className="nav" style={{ color: "#0d6efd" }} href="#features" onClick={openRequest}>Share</Nav.Link>
                                                        <Nav.Link className="nav a" style={{ color: "#0d6efd" }} onClick={ubahAlamat} href="#features">Ubah Alamat</Nav.Link>
                                                    </Nav>
                                                </ul>
                                            </Card.Body>

                                        </Card>
                                        {/* Dari Teman */}
                                        <Card className="card-alamat" style={{ height: 130 }}>

                                            <Card.Body>
                                                <img src={Share} style={{ height: 30 }} alt='share'></img>
                                                <div style={{ paddingLeft: 60 }}>
                                                    <ul>
                                                        <li><b>Minta alamat ke teman kamu</b></li>
                                                        <li><span>Lebih mudah dan cepat mendapatkan alamat teman cukup klik di sini.</span></li>
                                                    </ul>
                                                </div>

                                                <div style={{ paddingLeft: 950, marginTop: -45 }}>
                                                    <Button onClick={openRequest}>Request</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            )}
                        </div>
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

                {/* Alamat */}
                <Modal show={alamat} onHide={closeAlamat} animation={false}>
                    <Card >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter" style={{ fontWeight: 'bold', paddingLeft: 300 }}>
                                Tambah Alamat
                            </Modal.Title>
                        </Modal.Header>
                        <Card.Body style={{ paddingTop: 50 }}>
                            <h4 style={{ paddingBottom: 20 }}>Di mana lokasi tujuan pengirimanmu?</h4>
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
                                    <Button style={{ background: '#ffff', color: 'black' }} onClick={setTambahAlamat}>Mau cara lain? Isi alamat secara manual</Button>
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

                        <Card.Body style={{ padding: 30 }}>
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
                    <Card >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter" style={{ fontWeight: 'bold', paddingLeft: 300 }}>
                                Tambah Alamat
                            </Modal.Title>
                        </Modal.Header>
                        <h4 style={{ paddingLeft: 30 }}>Lengkapi detail alamat</h4>
                        <Card.Body style={{ padding: 30 }}>
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
            </div>
        </Layout >
    );
};

export default Profile;