import { Button, Card} from "react-bootstrap";
import React, { Fragment, useState} from "react";
import { Layout } from "../../layout";
import ListGroup from 'react-bootstrap/ListGroup';
import BRI from "../../assets/img/logo/BRI.png";
import Countdown from 'react-countdown';
import Form from 'react-bootstrap/Form';
import { IoIosArrowDown } from "react-icons/io";

const Pembayaran = () => {

  const [openForm, setopenForm] = useState('none');
  const [openForm1, setopenForm1] = useState('none');
  const [openForm2, setopenForm2] = useState('none');
  const [openForm3, setopenForm3] = useState('none');



  const handleForm = () => {
    if (openForm === 'none') {
      setopenForm('')
      return
    }
    setopenForm('none')

  }

  const handleForm1 = () => {
    if (openForm1 === 'none') {
      setopenForm1('')
      return
    }
    setopenForm1('none')

  }

  const handleForm2 = () => {
    if (openForm2 === 'none') {
      setopenForm2('')
      return
    }
    setopenForm2('none')

  }
  const handleForm3 = () => {
    if (openForm3 === 'none') {
      setopenForm3('')
      return
    }
    setopenForm3('none')

  }

  const [isi, setisi] = useState('1234567890');

  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <>
          <div className="single_countdown">
            <div className="countdown_number">{hours}</div>
            <div className="countdown_title">Jam</div>
          </div>
          <div className="single_countdown">
            <div className="countdown_number">{minutes}</div>
            <div className="countdown_title">Menit</div>
          </div>
          <div className="single_countdown">
            <div className="countdown_number">{seconds}</div>
            <div className="countdown_title">Detik</div>
          </div>
        </>
      )
    }
  };

  return (
    <Layout>
      <div style={{ padding: "100px 500px" }}>
        <div className="row">
          <div style={{ paddingLeft: 100}}>
            <h2>Selesaikan Pembayaran Dalam</h2>
            <div className="product_timing">
              <div className="countdown_area">
                <Countdown date={new Date().setDate(new Date().getDate() + 1)} renderer={renderer} />
              </div>
            </div>
            <p>Batas Akhir Pembayaran</p>
            <span style={{ fontSize: 22, fontWeight: "bold" }}>Selasa, 28 Maret 2023 11:00</span>
          </div>


          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="row">
                  <div className="col-9"><span style={{ fontSize: 20, fontWeight: "bold" }}>Bank BRI</span></div>
                  <div className="col-3"><img src={BRI} style={{ width: 50, right: 50 }}></img></div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="row">
                  <p>Nomor Virtual Account</p>
                  <div className="col-9"><span style={{ fontSize: 20, fontWeight: "bold" }}>1234567890</span></div>
                  <div className="col-3">
                    <Button onClick={() => navigator.clipboard.writeText(isi)} variant="white" style={{ color: "#FE6244" }}>Salin</Button>
                  </div>
                </div>
              </ListGroup.Item>

              <ListGroup.Item>
                <div className="row">
                  <p>Total Pembayaran</p>
                  <div className="col-9"><span style={{ fontSize: 20, fontWeight: "bold" }}>60.000</span></div>
                  <div className="col-3">
                    <Button variant="white" style={{ color: "#FE6244" }}>Lihat Detail</Button>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <div style={{ paddingTop: 25, paddingBottom: 20 }}>
            <div className="row">
              <div className="col-6">
                <Button variant="outline-warning" style={{ color: "#FE6244", width: 300 }}>Cek Status Pembayaran</Button>
              </div>
              <div className="col-6">
                <Button href="/" variant="warning" size="sl" style={{ color: "#FFFF", width: 300 }}>Belanja Lagi</Button>
              </div>
            </div>
          </div>
          <div>
            <h3>Cara Pembayaran</h3>
            <Card>
              <div className="row">
                <div className="col-11">
                  <span style={{ fontSize: 15, fontWeight: "bold" }} >ATM BRI</span>
                </div>
                <div className="col-1">
                  <a onClick={() => handleForm()} style={{ color: '#5D9C59', fontSize: 14, }}><IoIosArrowDown /></a>
                </div>
                <Form >
                  <Form.Group style={{ display: openForm }}>
                    <p>1. Masukkan Kartu Debit BRI dan PIN Anda</p>
                    <p>2. Pilih menu Transaksi Lain - Pembayaran - Lainnya - BRIVA</p>
                    <p>3. Masukkan Nomor Virtual Account</p>
                    <p>4. Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti Nomor BRIVA, Nama Pelanggan dan Jumlah Pembayaran</p>
                    <p>5. Ikuti instruksi untuk menyelesaikan transaksi</p>
                    <p>6. Simpan struk transaksi sebagai bukti pembayaran</p>
                  </Form.Group>
                </Form>
              </div>
            </Card>
            <Card>
              <div className="row">
                <div className="col-11">
                  <span style={{ fontSize: 15, fontWeight: "bold" }} >Mobile Banking BRI</span>
                </div>
                <div className="col-1">
                  <a onClick={() => handleForm1()} style={{ color: '#5D9C59', fontSize: 14, }}><IoIosArrowDown /></a>
                </div>
                <Form>
                  <Form.Group style={{ display: openForm1 }}>
                    <p>1. Login aplikasi BRI Mobile</p>
                    <p>2. Pilih menu Transaksi Lain - Pembayaran - Lainnya - BRIVA</p>
                    <p>3. Masukkan Nomor Virtual Account</p>
                    <p>4. Masukan Jumlah Pembayaran</p>
                    <p>5. Masukan PIN</p>
                    <p>6. Simpan notifikasi SMS transaksi sebagai bukti pembayaran</p>
                  </Form.Group>
                </Form>
              </div>
            </Card>
            <Card>
              <div className="row">
                <div className="col-11">
                  <span style={{ fontSize: 15, fontWeight: "bold" }} > Internet Banking BRI</span>
                </div>
                <div className="col-1">
                  <a onClick={() => handleForm2()} style={{ color: '#5D9C59', fontSize: 14, }}><IoIosArrowDown /></a>
                </div>
                <Form>
                  <Form.Group style={{ display: openForm2 }}>
                    <p>1. Login pada alamat Internet Banking BRI (https://ib.bri.co.id/ib-bri/Login.html)</p>
                    <p>2. Pilih menu Transaksi Lain - Pembayaran - Lainnya - BRIVA</p>
                    <p>3. Masukkan Nomor Virtual Account</p>
                    <p>4. Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti Nomor BRIVA, Nama Pelanggan dan Jumlah Pembayaran</p>
                    <p>5. Masukkan password dan mToken</p>
                    <p>6. Simpan struk transaksi sebagai bukti pembayaran</p>
                  </Form.Group>
                </Form>
              </div>
            </Card>
            <Card>
              <div className="row">
                <div className="col-11">
                  <span style={{ fontSize: 15, fontWeight: "bold" }} >Kantor Bank BRI</span>
                </div>
                <div className="col-1">
                  <a onClick={() => handleForm3()} style={{ color: '#5D9C59', fontSize: 14, }}><IoIosArrowDown /></a>
                </div>
                <Form>
                  <Form.Group style={{ display: openForm3 }}>
                    <p>1. Ambil nomor antrian transaksi Teller dan isi slip setoran</p>
                    <p>2. Serahkan slip dan jumlah setoran kepada Teller BRI</p>
                    <p>3. Teller BRI akan melakukan validasi transaksi</p>
                    <p>4. Simpan slip setoran hasil validasi sebagai bukti pembayaran</p>
                  </Form.Group>
                </Form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout >
  );

};

export default Pembayaran;
