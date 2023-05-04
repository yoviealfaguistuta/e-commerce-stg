import React, { Fragment,useState, useEffect} from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import BRI from "../assets/img/logo/BRI.png";
import BNI from "../assets/img/logo/BNI.png";
import BCA from "../assets/img/logo/BCA.png";
import Mandiri from "../assets/img/logo/Mandiri.png";
import Alfamart from "../assets/img/logo/Alfamart.png";
import Indomaret from "../assets/img/logo/Indomaret.png";
import like from "../assets/img/logo/like-click.svg"
import likehover from "../assets/img/logo/like-hover.svg"
import cart from "../assets/img/logo/cart-click.svg"
import carthover from "../assets/img/logo/cart-hover.svg"
import '../assets/css/custom.css';
import '../assets/css/plugins.css';
import '../assets/css/style.css';
import '../assets/css/Checkout.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoChevronForward } from "react-icons/io5";

const Pembayaran = () => {

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
    )
};

export default Pembayaran;