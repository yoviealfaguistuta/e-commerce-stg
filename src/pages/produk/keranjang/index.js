import React, { Fragment, useState, useEffect} from "react";
import { Layout } from "../../../layout";
import Form from 'react-bootstrap/Form';
import '../../../assets/css/custom.css';
import '../../../assets/css/plugins.css';
import '../../../assets/css/style.css';
import Barang from "../../../components/Barang";
import KodePromo from "../../../components/KodePromo";

const Keranjang = () => {

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
                     <Barang/>
                    </div>
                  </div>
                </div>
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
      </div>



    </Layout >

  );
};

export default Keranjang;
