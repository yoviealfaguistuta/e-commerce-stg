import React, { useState, useEffect } from "react";
import { Layout } from '../../layout';
import SliderHome from "../../components/SliderHome";
import Penawaran from "../../components/Penawaran";
import RekomenHarga from "../../components/RekomenHarga";



const Home = () => {

    return (
        <Layout >
            <div className='home_selection_bg'>
                <div className="row">
                <div className="col-lg-6">
                <SliderHome
                            gambar_1={'http://onlinestore.microdataindonesia.co.id/assets/img/slider/wallpapersden.com_astronaut-art-4k_3840x2274.jpg'}
                            gambar_2={'http://onlinestore.microdataindonesia.co.id/assets/img/slider/valley-pine-trees-river-fox-wallpaper-preview.jpg'}
                        />
                </div>
                <div className="col-lg-2">
                        <figure className="single_banner">
                            <div className="banner_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/394"><img style={{ width: '800px' }} src="http://onlinestore.microdataindonesia.co.id/assets/img/product/lenovo.svg" alt="" /></a>
                            </div>
                        </figure>
                </div>
                <div className="col-lg-2" >
                        <figure className="single_banner mb-30">
                            <div className="banner_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9"><img src="http://onlinestore.microdataindonesia.co.id/assets/img/product/sony.svg" alt="" /></a>
                            </div>
                        </figure>
                        <figure className="single_banner">
                            <div className="banner_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/178"><img src="http://onlinestore.microdataindonesia.co.id/assets/img/product/plantronic.svg" alt="" /></a>
                            </div>
                        </figure>
                </div>
                </div>
                <div className="banner_area banner_style2 banner_style4 mb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <figure className="single_banner">
                                    <div className="banner_thumb">
                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty">
                                            <img
                                                src="http://onlinestore.microdataindonesia.co.id/assets/img/product/pc.svg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <figure className="single_banner">
                                    <div className="banner_thumb">
                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty">
                                            <img style={{ padding: 20 }}
                                                src="http://onlinestore.microdataindonesia.co.id/assets/img/product/middleimage.svg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <figure className="single_banner">
                                    <div className="banner_thumb">
                                        <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty">
                                            <img
                                                src="http://onlinestore.microdataindonesia.co.id/assets/img/product/server.svg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="generatekategoriBarangUtama">
                    <div className="col-md-3">
                        <a
                            className="go-to-jenisbarang"
                            href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty"
                        />
                        <div className="single_categories_product-costum">
                            <a
                                className="go-to-jenisbarang"
                                href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty"
                            />
                            <div className="categories_product_content">
                                <a
                                    className="go-to-jenisbarang"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty"
                                />
                                <h4>
                                    <a style={{ color: 'white' }}
                                        className="go-to-jenisbarang"
                                        href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty"
                                    >
                                        Digital Product
                                    </a>
                                </h4>
                                <a
                                    className="go-to-jenisbarang-deskripsi"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty"
                                >
                                    <p />
                                </a>
                            </div>
                            <div className="categories_product_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/1/empty/empty">
                                    <img
                                        className="image-icon-dashboard"
                                        src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/1"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <a
                            className="go-to-jenisbarang"
                            href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty"
                        />
                        <div className="single_categories_product-costum">
                            <a
                                className="go-to-jenisbarang"
                                href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty"
                            />
                            <div className="categories_product_content">
                                <a
                                    className="go-to-jenisbarang"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty"
                                />
                                <h4 >
                                    <a style={{ color: 'white' }}
                                        className="go-to-jenisbarang"
                                        href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty"
                                    >
                                        Office Supplies
                                    </a>
                                </h4>
                                <a
                                    className="go-to-jenisbarang-deskripsi"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty"
                                >
                                    <p />
                                </a>
                            </div>
                            <div className="categories_product_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/2/empty/empty">
                                    <img
                                        className="image-icon-dashboard"
                                        src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/2"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <a
                            className="go-to-jenisbarang"
                            href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty"
                        />
                        <div className="single_categories_product-costum">
                            <a
                                className="go-to-jenisbarang"
                                href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty"
                            />
                            <div className="categories_product_content">
                                <a
                                    className="go-to-jenisbarang"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty"
                                />
                                <h4>
                                    <a style={{ color: 'white' }}
                                        className="go-to-jenisbarang"
                                        href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty"
                                    >
                                        Gadget
                                    </a>
                                </h4>
                                <a
                                    className="go-to-jenisbarang-deskripsi"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty"
                                >
                                    <p />
                                </a>
                            </div>
                            <div className="categories_product_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/3/empty/empty">
                                    <img
                                        className="image-icon-dashboard"
                                        src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/3"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <a
                            className="go-to-jenisbarang"
                            href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty"
                        />
                        <div className="single_categories_product-costum">
                            <a
                                className="go-to-jenisbarang"
                                href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty"
                            />
                            <div className="categories_product_content">
                                <a
                                    className="go-to-jenisbarang"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty"
                                />
                                <h4>
                                    <a style={{ color: 'white' }}
                                        className="go-to-jenisbarang"
                                        href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty"
                                    >
                                        Elektronik
                                    </a>
                                </h4>
                                <a
                                    className="go-to-jenisbarang-deskripsi"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty"
                                >
                                    <p />
                                </a>
                            </div>
                            <div className="categories_product_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/4/empty/empty">
                                    <img
                                        className="image-icon-dashboard"
                                        src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/4"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <a
                            className="go-to-jenisbarang"
                            href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"
                        />
                        <div className="single_categories_product-costum">
                            <a
                                className="go-to-jenisbarang"
                                href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"
                            />
                            <div className="categories_product_content">
                                <a
                                    className="go-to-jenisbarang"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"
                                />
                                <h4>
                                    <a style={{ color: 'white' }}
                                        className="go-to-jenisbarang"
                                        href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"
                                    >
                                        Kosmetik
                                    </a>
                                </h4>
                                <a style={{ color: 'white' }}
                                    className="go-to-jenisbarang-deskripsi"
                                    href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty"
                                >
                                    <p>Kosmetik</p>
                                </a>
                            </div>
                            <div className="categories_product_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/10/empty/empty">
                                    <img
                                        className="image-icon-dashboard"
                                        src="https://microdatastoreapi.cooljarsoft.com/image-jenis/thumb/10"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product_header">
                                <div className="section_title">
                                    <h2>PENAWARAN TERBATAS</h2>

                                </div>
                                <div className="product_tab_btn">
                                    <ul className="nav" role="tablist" id="nav-tab">
                                        <li>
                                            <span className="active" data-toggle="tab" role="tab" aria-controls="Fashion" aria-selected="true">
                                                Dapatkan sebelum waktu yang ditentukan habis
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div>
                <Penawaran/>
                </div>
                <div className="row">
                    <div className="col-12">
                        <figure className="single_banner mb-20">
                            <div className="banner_thumb">
                                <a href="http://onlinestore.microdataindonesia.co.id/kategori/list_kategori/empty/empty/empty">
                                    <img style={{ paddingLeft: '50px', paddingRight: '50px' }} src="http://onlinestore.microdataindonesia.co.id/assets/img/flashsale.svg" alt />
                                </a>
                            </div>
                        </figure >
                    </div>
                </div>
                <div className="row">
                    <div class="col-12">
                        <div class="product_header">
                            <div class="section_title">
                                <h2>REKOMENDASI PRODUK</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <RekomenHarga/>
                </div>
                <div>
                <i className="" />
                <a id="scrollUp" href="#top" style={{ position: 'fixed', zIndex: 2147483647, display: 'block' }}>
                    <i className="fa fa-angle-double-up" />
                </a>
            </div>
        </Layout >
    )
};

export default Home;