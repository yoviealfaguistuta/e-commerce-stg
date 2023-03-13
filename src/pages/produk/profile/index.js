import React, { Fragment, useState } from 'react'
import { Layout } from '../../../layout';
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = () => {

  

  return (
    <Layout>
        <>
        <div>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  {/* Bootstrap CSS */}
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
  {/* bootstrap 3 and affix */}
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
  {/* end  */}
  <link rel="stylesheet" href="assets/css/style.css" />
  <title>Tokopedia</title>
  <div id="overlay" />
  <div className="header">
    <div className="item-header-1 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img className="mr-2" src="assets/img/1.png" alt="" />
        <span>Download Tokopedia App</span>
      </div>
      <div className="d-flex">
        <span className="mr-4">Tentang Tokopedia</span>
        <span className="mr-4">Mitra Tokopedia</span>
        <span className="mr-4">Mulai Berjualan</span>
        <span className="mr-4">Promo</span>
        <span className="mr-4">Tokopedia Care</span>
      </div>
    </div>
    <div className="item-header-2 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <img className="img-tokopedia" src="assets/img/2.png" alt="" />
        <span className="mx-2 text-kategory" onclick="kategoryOn()">Kategory</span>
        <div className="wrap-search">
          <input type="text" className="form-control" placeholder="Cari barang" data-toggle="modal" data-target="#exampleModal" />
          <div className=" wrap-icon-search">
            <img className="img-search" src="assets/img/3.png" alt="" />
          </div>
        </div>
        <div className="wrap-img-shop mx-3" onclick="on()">
          <img className="img-shop" src="assets/img/4.png" alt="" />
        </div>
        <span className="mr-3 line">|</span>
        <div className="d-flex">
          <button className="btn font-weight-bold mr-3">Masuk</button>
          <button className="btn font-weight-bold text-white">Daftar</button>
        </div>
      </div>
      <div className="text-under-search d-flex mt-2">
        <span className="mr-3">Jersey Sepeda</span>
        <span className="mr-3">Jersey Sepeda</span>
        <span className="mr-3">Jersey Sepeda</span>
        <span className="mr-3">Jersey Sepeda</span>
        <span className="mr-3">Jersey Sepeda</span>
      </div>
    </div>
    <div className="menu-bar flex-column justify-content-between align-items-center" id="menuBar">
      <img src="assets/img/5.png" alt="" />
      <h4 className="mt-2">Wah keranjang belanjaanmu kosong</h4>
      <p className="text-center">Daripada dianggurin, mending diisi dengan barang barang <br />impianmu. Yuk cek
        sekarang!</p>
      <button className="btn">Lihat Rekomendasi</button>
    </div>
  </div>
  <div className="kategory" id="kategory">
    <div className="head-kategory d-flex w-100">
      <span>Belanja</span>
      <span>Featured</span>
      <span>Featured</span>
      <span>Brand&nbsp;Unggulan</span>
      <span>Halal&nbsp;Corner</span>
      <span>Investasi&nbsp;Asuransi&nbsp;&amp;&nbsp;Pinjaman</span>
      <span>Pajak</span>
      <span>Pendidikan</span>
      <span>Tagihan</span>
      <span>Top&nbsp;-&nbsp;Up</span>
      <span>Travel&nbsp;Entertaiment</span>
      <span>OS&nbsp;Pupuler</span>
      <span>Lainnya</span>
    </div>
    <div className="row">
      <div className="col-2">
        <div className="head-left">
          <h6 className="mb-0">Buku</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Dapur</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
          <h6 className="mb-0">Elektronik</h6>
        </div>
      </div>
      <div className="col-10">
        <div className="head-left">
          <div className="w-100 d-flex align-items-center">
            <img src="assets/img/6.png" alt="" />
            <span className="h4 m-0 p-0 font-weight-bold">Buku</span>
          </div>
          <div className="row mt-5">
            <div className="col-3">
              <h5>Title</h5>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
            </div>
            <div className="col-3">
              <h5>Title</h5>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
            </div>
            <div className="col-3">
              <h5>Title</h5>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
            </div>
            <div className="col-3">
              <h5>Title</h5>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3">
              <h5>Title</h5>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
            </div>
            <div className="col-3">
              <h5>Title</h5>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
            </div>
            <div className="col-3">
              <h5>Title</h5>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
            </div>
            <div className="col-3">
              <h5>Title</h5>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
              <h6>Deskripsi</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* caraousel */}
  <div id="carouselExampleIndicators" className="carousel slide d-flex flex-column align-items-center" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="assets/img/slide/3.png" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="assets/img/slide/4.png" className="d-block w-100" alt="..." />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
  {/* kategory pilihan */}
  <div className="kategory-pilihan">
    <div className="row mx-0 p-0">
      <div className="col-6 mx-0 p-0">
        <h1>Kategory Pilihan</h1>
        <div id="carouselExampleControls" className="carousel carousel2 slide mt-4" data-ride="carousel">
          <div className="carousel-inner carousel-inner2">
            <div className="carousel-item active">
              <div className="row mx-0 p-0">
                <div className="col-3 pl-0 pr-2">
                  <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                    <img src="assets/img/7.png" alt="" />
                    <h2 className="mb-0">Makanan</h2>
                    <h3 className="mb-0">Kering</h3>
                  </div>
                </div>
                <div className="col-3 pl-0 pr-2">
                  <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                    <img src="assets/img/7.png" alt="" />
                    <h2 className="mb-0">Makanan</h2>
                    <h3 className="mb-0">Kering</h3>
                  </div>
                </div>
                <div className="col-3 pl-0 pr-2">
                  <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                    <img src="assets/img/7.png" alt="" />
                    <h2 className="mb-0">Makanan</h2>
                    <h3 className="mb-0">Kering</h3>
                  </div>
                </div>
                <div className="col-3 pl-0 pr2">
                  <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                    <img src="assets/img/7.png" alt="" />
                    <h2 className="mb-0">Makanan</h2>
                    <h3 className="mb-0">Kering</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mx-0 p-0">
                <div className="col-3 pl-0 pr-2">
                  <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                    <img src="assets/img/7.png" alt="" />
                    <h2 className="mb-0">Makanan</h2>
                    <h3 className="mb-0">Kering</h3>
                  </div>
                </div>
                <div className="col-3 pl-0 pr-2">
                  <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                    <img src="assets/img/7.png" alt="" />
                    <h2 className="mb-0">Makanan</h2>
                    <h3 className="mb-0">Kering</h3>
                  </div>
                </div>
                <div className="col-3 pl-0 pr-2">
                  <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                    <img src="assets/img/7.png" alt="" />
                    <h2 className="mb-0">Makanan</h2>
                    <h3 className="mb-0">Kering</h3>
                  </div>
                </div>
                <div className="col-3 pl-0 pr2">
                  <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                    <img src="assets/img/7.png" alt="" />
                    <h2 className="mb-0">Makanan</h2>
                    <h3 className="mb-0">Kering</h3>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-6">
        <h1>Top Up &amp; Tagihan <span style={{fontSize: '16px', color: '#03ac0e'}}>Lihat Semua</span> </h1>
        <div className="row mx-0 overflow-hidden border mt-4" style={{borderRadius: '12px'}}>
          <div className="d-flex justify-content-between align-items-center w-100 border-bottom">
            <div className="item-menu w-100 h-100 d-flex align-items-center justify-content-center">
              <span>Pulsa</span>
            </div>
            <div className="item-menu w-100 h-100 d-flex align-items-center justify-content-center">
              <span>Paket data</span>
            </div>
            <div className="item-menu w-100 h-100 d-flex align-items-center justify-content-center">
              <span>Listrik PLN</span>
            </div>
            <div className="item-menu w-100 h-100 d-flex align-items-center justify-content-center">
              <span>Flight</span>
            </div>
            <div className="item-menu d-flex px-2 align-items-center justify-content-center border-left">
              <img src="assets/img/10.png" alt="" />
            </div>
          </div>
          <div className="d-flex w-100 justify-content-between align-items-end p-3">
            <div className="form-row mx-0 w-100">
              <div className="form-group w-100 mr-3 mb-0">
                <label htmlFor className="font-weight-bold">Nomor Telepon</label>
                <input type="text" className="form-control w-100"  />
              </div>
            </div>
            <div className="form-row mx-0 w-100">
              <div className="form-group w-100 mr-3 mb-0">
                <label htmlFor className="font-weight-bold">Nominal</label>
                <select name id className="form-control" disabled>
                  <option value>asdfsadfsafdsdf</option>
                  <option value>asdfsadfsafdsdf</option>
                </select>
              </div>
            </div>
            <button className="btn px-3" style={{backgroundColor: '#4950572e'}}>Beli</button>
          </div>
        </div>
      </div>
      <div className="row flex-nowrap mx-0 mt-4 menu-scroll">
        <div className="item-scroll d-flex align-items-center border py-1 px-3 mr-2">
          <img src="assets/img/9.png" alt="" />
          <span className="ml-2">Kategory</span>
        </div>
        <div className="item-scroll d-flex align-items-center border py-1 px-3 mr-2">
          <img src="assets/img/9.png" alt="" />
          <span className="ml-2">Kategory</span>
        </div>
        <div className="item-scroll d-flex align-items-center border py-1 px-3 mr-2">
          <img src="assets/img/9.png" alt="" />
          <span className="ml-2">Kategory</span>
        </div>
        <div className="item-scroll d-flex align-items-center border py-1 px-3 mr-2">
          <img src="assets/img/9.png" alt="" />
          <span className="ml-2">Kategory</span>
        </div>
        <div className="item-scroll d-flex align-items-center border py-1 px-3 mr-2">
          <img src="assets/img/9.png" alt="" />
          <span className="ml-2">Kategory</span>
        </div>
        <div className="item-scroll d-flex align-items-center border py-1 px-3 mr-2">
          <img src="assets/img/9.png" alt="" />
          <span className="ml-2">Kategory</span>
        </div>
        <div className="item-scroll d-flex align-items-center border py-1 px-3 mr-2">
          <img src="assets/img/9.png" alt="" />
          <span className="ml-2">Kategory</span>
        </div>
        <div className="item-scroll d-flex align-items-center border py-1 px-3 mr-2">
          <img src="assets/img/9.png" alt="" />
          <span className="ml-2">Kategory</span>
        </div>
        <div className="item-scroll d-flex align-items-center border py-1 px-3 mr-2">
          <img src="assets/img/9.png" alt="" />
          <span className="ml-2">Kategory</span>
        </div>
        <div className="item-scroll d-flex align-items-center border py-1 px-3 mr-2">
          <img src="assets/img/9.png" alt="" />
          <span className="ml-2">Kategory</span>
        </div>
      </div>
    </div>
  </div>
  <hr className="position-relative" style={{top: '170px'}} />
  <div className="trending">
    <h3>Lagi trending nih! <img src="assets/img/reload.png" alt="" /> <span style={{color: '#03ac0e'}}>Muat
        Lainnya</span> </h3>
    <div className="row mt-4">
      <div className="col-3">
        <div className="card-trend">
          <div className="wrap-img-trend">
            <img className="w-100 h-100" src="assets/img/13.png" alt="" />
          </div>
          <div className="ml-4 d-flex flex-column justify-content-center">
            <span className="mb-1 font-weight-bold">Mini PC</span>
            <span style={{fontWeight: 400, color: '#dfdfdf'}}>67rb produk</span>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card-trend">
          <div className="wrap-img-trend">
            <img className="w-100 h-100" src="assets/img/13.png" alt="" />
          </div>
          <div className="ml-4 d-flex flex-column justify-content-center">
            <span className="mb-1 font-weight-bold">Mini PC</span>
            <span style={{fontWeight: 400, color: '#dfdfdf'}}>67rb produk</span>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card-trend">
          <div className="wrap-img-trend">
            <img className="w-100 h-100" src="assets/img/13.png" alt="" />
          </div>
          <div className="ml-4 d-flex flex-column justify-content-center">
            <span className="mb-1 font-weight-bold">Mini PC</span>
            <span style={{fontWeight: 400, color: '#dfdfdf'}}>67rb produk</span>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card-trend">
          <div className="wrap-img-trend">
            <img className="w-100 h-100" src="assets/img/13.png" alt="" />
          </div>
          <div className="ml-4 d-flex flex-column justify-content-center">
            <span className="mb-1 font-weight-bold">Mini PC</span>
            <span style={{fontWeight: 400, color: '#dfdfdf'}}>67rb produk</span>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-3">
        <div className="card-trend">
          <div className="wrap-img-trend">
            <img className="w-100 h-100" src="assets/img/13.png" alt="" />
          </div>
          <div className="ml-4 d-flex flex-column justify-content-center">
            <span className="mb-1 font-weight-bold">Mini PC</span>
            <span style={{fontWeight: 400, color: '#dfdfdf'}}>67rb produk</span>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card-trend">
          <div className="wrap-img-trend">
            <img className="w-100 h-100" src="assets/img/13.png" alt="" />
          </div>
          <div className="ml-4 d-flex flex-column justify-content-center">
            <span className="mb-1 font-weight-bold">Mini PC</span>
            <span style={{fontWeight: 400, color: '#dfdfdf'}}>67rb produk</span>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card-trend">
          <div className="wrap-img-trend">
            <img className="w-100 h-100" src="assets/img/13.png" alt="" />
          </div>
          <div className="ml-4 d-flex flex-column justify-content-center">
            <span className="mb-1 font-weight-bold">Mini PC</span>
            <span style={{fontWeight: 400, color: '#dfdfdf'}}>67rb produk</span>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card-trend">
          <div className="wrap-img-trend">
            <img className="w-100 h-100" src="assets/img/13.png" alt="" />
          </div>
          <div className="ml-4 d-flex flex-column justify-content-center">
            <span className="mb-1 font-weight-bold">Mini PC</span>
            <span style={{fontWeight: 400, color: '#dfdfdf'}}>67rb produk</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="wrap-affix mt-4">
    <div className="d-flex" data-spy="affix" data-offset-top={1200}>
      <div className="position-relative mr-3 box-affix bg-affix1">
        <div className="line1" />
        <h4>For Your</h4>
      </div>
      <div className="position-relative mr-3 box-affix bg-affix2">
        <div className="line1" />
        <h4>Spesial Diskon</h4>
      </div>
    </div>
    <div className="row mx-0 mt-5">
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mx-0 mt-2">
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 pl-0">
        <div className="card">
          <img src="assets/img/12.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Kaos Cowo trending</h6>
            <div className="d-flex">
              <span className="badge badge-pill" style={{backgroundColor: '#ff00d13b', color: 'd50000'}}>47%</span>
              <span className="badge-pill badge" style={{color: '#989898'}}><del>Rp 75.000</del></span>
            </div>
            <h6 className="mt-1">Rp 40.000</h6>
            <div className="d-flex align-items-center">
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <img className="mr-1" width={10} height={10} src="assets/img/icon-bintang.png" alt="" />
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mx-0 mt-5 justify-content-center">
      <button className="btn btn-green">Muat Lebih Banyak</button>
    </div>
  </div>
  <div className="kategory-foot">
    <div className="row mx-0">
      <div className="d-flex w-100 justify-content-between align-items-center">
        <h4 className="font-weight-bold" style={{fontSize: '20px'}}>Kategory</h4>
        <h4 style={{color: '#03ac0e'}}>Lihat Semua</h4>
      </div>
    </div>
    <div className="border p-3">
      <div className="row mx-0 p-2 border-bottom">
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
      </div>
      <div className="row mx-0 p-2 border-bottom">
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
      </div>
      <div className="row mx-0 p-2 border-bottom">
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
      </div>
      <div className="row mx-0 p-2 border-bottom">
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
      </div>
      <div className="row mx-0 p-2 border-bottom">
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
        <div className="col-3 p-0">
          <div className="d-flex align-items-center">
            <div className="mr-4" style={{width: '2px', height: '40px', backgroundColor: '#4950572e'}} />
            <img className="mr-3" src="assets/img/6.png" alt="" />
            <h4 className="font-weight-normal">Fashion Wanita</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="kategory-foot2">
    <div className="row mx-0">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div>
          <h4 className="font-weight-bold" style={{color: '#ff8b00'}}>Punya Toko Online? Buka cabangnya di Tokopedia
          </h4>
          <h5 className="mt-5 font-weight-normal">Mudah, nyaman dan bebas komisi transaksi. <span className="font-weight-bold">GRATIS!</span> </h5>
          <div className="d-flex align-items-center">
            <button className="btn mr-4 text-white" style={{backgroundColor: '#03ac0e'}}>Buka Toko GRATIS</button>
            <a href style={{color: '#03ac0e'}}>Pelajari lebih lanjut</a>
          </div>
        </div>
        <img src="assets/img/17.png" alt="" />
      </div>
    </div>
  </div>
  <hr style={{position: 'relative', top: '190px', borderTop: '1px dashed black', margin: '10px 20px'}} />
  <div className="kategory-foot3">
    <p>Belanja di Tokopedia Sebagai Solusi Belanja Mudah dan Aman</p>
    <p>Tokopedia merupakan salah satu e-commerce di Indonesia yang perkembangannya terhitung cepat, menjadikannya
      sebagai marketplace pilihan bagi banyak masyarakat Indonesia. Hal ini disebabkan kehadiran Tokopedia membuat
      pengalaman belanja online para penggunanya menjadi mudah, aman, dan efisien. Tersedia berbagai fitur dan
      metode pembayaran yang dapat Anda pilih, untuk memastikan kegiatan belanja Anda dapat dilakukan senyaman
      mungkin. Baik itu melalui transfer bank yang bisa dilakukan menggunakan rekening dari berbagai bank yang
      tersedia, uang elektronik seperti OVO, hingga cicilan. Sistem berbelanja di Tokopedia terintegrasi pula
      dengan sistem beberapa jasa ekspedisi. Kerjasama yang dijalin ini memungkinkan Tokopedia untuk memberikan
      penawaran pengiriman gratis, dan memungkinkan pengguna yang berbelanja untuk terus melacak status pengiriman
      produk yang mereka beli. Jadi, produk apapun yang dibeli di Tokopedia baik itu pakaian bayi, aksesoris
      mobil, aksesoris kamera, celana, jam, hingga peralatan elektronik seperti kabel dan peralatan gaming, atau
      makanan sekali pun dapat terus Anda lacak keberadaannya untuk memastikan akan sampai dengan aman. Data
      pribadi dan seluruh transaksi yang sudah maupun yang akan Anda lakukan di Tokopedia dilindungi oleh
      kebijakan privasi Tokopedia, sehingga tak perlu khawatir data Anda akan jatuh ke pihak yang tidak
      bertanggungjawab dan/atau disalahgunakan. Karena faktor-faktor tersebut lah, Tokopedia menjadi solusi untuk
      belanja online dengan mudah dan aman.
      Kini, tak perlu ragu lagi untuk membeli semua kebutuhan rumah tangga atau keperluan pribadimu di website
      jual beli online terpercaya, Tokopedia. Karena dengan berbelanja di Waktu Indonesia Belanja dari Tokopedia.
      Kami menjamin semua produk yang kami tawarkan memiliki harga lebih murah dibandingkan dengan waktu belanja
      pada umumnya. Selain itu, nikmati pula membeli aneka barang kebutuhan dengan mudah, lengkap, praktis dan
      aman dengan penawaran diskon Tokopedia yang melimpah. Segera nikmati pengalaman berbelanja online dengan
      ribuan promo belanja Tokopedia yang siap memanjakanmu, dengan membeli semua produk berkualitas di bawah
      harga normal. Mulai dari produk kosmetik, peralatan rumah tangga, elektronik, fashion, perlengkapan ibu dan
      bayi, makanan dan minuman semuanya tersedia lengkap dalam satu aplikasi saja. Tak perlu repot, tak perlu
      ragu, ribuan promo Tokopedia serta cashback Tokopedia hingga ratusan ribu rupiah akan membawamu ke
      pengalaman belanja online yang lebih untung. Tak tanggung-tanggung, kamu juga bisa menikmati bebas ongkir
      pengiriman nol rupiah ke semua wilayah di Indonesia lho. Tunggu apa lagi? Cek segera campaign spesial Waktu
      Indonesia Belanja dari Tokopedia di ponsel kesayanganmu dan nikmati promo WIB dengan diskon mencapai 90%!
    </p>
    <a href style={{color: '#03ac0e'}}>Selengkapnya</a>
    <div className="row mx-0 mt-5">
      <div className="col-4">
        <div className="d-flex align-items-center">
          <img className="mr-3" src="assets/img/18.png" alt="" />
          <div className="d-flex flex-column">
            <span className="mb-3 font-weight-bold" style={{color: '#03ac0e'}}>Transparent</span>
            <p>Pembayaran Anda baru saja diteruskan kepenjual setelah barang diterima</p>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="d-flex align-items-center">
          <img className="mr-3" src="assets/img/18.png" alt="" />
          <div className="d-flex flex-column">
            <span className="mb-3 font-weight-bold" style={{color: '#03ac0e'}}>Transparent</span>
            <p>Pembayaran Anda baru saja diteruskan kepenjual setelah barang diterima</p>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="d-flex align-items-center">
          <img className="mr-3" src="assets/img/18.png" alt="" />
          <div className="d-flex flex-column">
            <span className="mb-3 font-weight-bold" style={{color: '#03ac0e'}}>Transparent</span>
            <p>Pembayaran Anda baru saja diteruskan kepenjual setelah barang diterima</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row mx-0 mt-5" style={{padding: '50px'}}>
      <div className="col-3">
        <div className="d-flex flex-column">
          <h4 className="font-weight-bold">Tokopedia</h4>
          <h5>Tentang tokopedia</h5>
          <h5>Tentang tokopedia</h5>
          <h5>Tentang tokopedia</h5>
        </div>
      </div>
      <div className="col-3">
        <div className="d-flex flex-column">
          <h4 className="font-weight-bold">Tokopedia</h4>
          <h5>Tentang tokopedia</h5>
          <h5>Tentang tokopedia</h5>
          <h5>Tentang tokopedia</h5>
        </div>
      </div>
      <div className="col-3">
        <div className="d-flex flex-column">
          <h4 className="font-weight-bold">Tokopedia</h4>
          <h5>Tentang tokopedia</h5>
          <h5>Tentang tokopedia</h5>
          <h5>Tentang tokopedia</h5>
        </div>
      </div>
      <div className="col-3">
        <div className="d-flex flex-column align-items-center">
          <img src="assets/img/21.png" width={400} alt="" />
          <div className="d-flex mt-3">
            <img width={150} className="mr-3" src="assets/img/22.png" alt="" />
            <img width={150} src="assets/img/23.png" alt="" />
          </div>
          <span>2019 - 2020 Tokopedia</span>
          <div className="d-flex align-items-center mt-3">
            <span className="text-white font-weight-bold p-2 mr-3 rounded" style={{backgroundColor: '#03ac0e'}}>Indonesia</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal pencarian */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content m-c-head">
        <div className="d-flex justify-content-between">
          <span className="font-weight-bold title">Pencarian Terakhir</span>
          <span className="font-weight-bold" style={{color: '#d50000'}}>Hapus Semua</span>
        </div>
        <span className="ml-2 mt-2" style={{fontSize: '14px'}}>Jersey sepeda</span>
        <span className="ml-2 mt-2" style={{fontSize: '14px'}}>Lampu Emergency</span>
        <span className="ml-2 mt-2" style={{fontSize: '14px'}}>Lampu Emergency</span>
        <span className="font-weight-bold mt-2 mb-2 title">Populer</span>
        <div className="d-flex flex-wrap">
          <button className="btn mr-2">text button</button>
          <button className="btn mr-2">text button</button>
          <button className="btn mr-2">text button</button>
        </div>
      </div>
    </div>
    {/* Optional JavaScript */}
    {/* jQuery first, then Popper.js, then Bootstrap JS */}
  </div></div>

        </>
      <div>
       
      </div>
    </Layout>
  );
};

export default Profile;