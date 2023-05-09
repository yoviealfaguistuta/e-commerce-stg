import React, { Fragment, useState, useEffect} from "react";
import Form from 'react-bootstrap/Form';
import '../assets/css/custom.css';
import '../assets/css/plugins.css';
import '../assets/css/style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';




const KodePromo = () => {
  
  
 
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
 
 
   ///kodepromo
 
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
   const [count, setCount] = useState(0);
 

    return (
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
    )
};

export default KodePromo;





