import React, { Fragment, useState, useEffect } from 'react'
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const PenawaranHarga = () => {
    const [barang, setBarang] = useState([]);
    const [Barangmurah, setBarangmurah] = useState([]);

    useEffect(() => {
        getBarang();
        getBarangmurah();
    }, []);


    function getBarang() {

        const loading = toast.loading(`Memproses ...`);

        axios
            .get(process.env.REACT_APP_API_URL + '/barang?per-page=5')
            .then(function (response) {
                console.log('response :>> ', response.data.items);
                setBarang(response.data.items);
                toast.success('Barang berhasil diproses');
            }).catch(function (error) {
                toast.error('Barang tidak berhasil diproses, karena = ' + error);
            }).finally(function () {
                toast.dismiss(loading)
            });
    }
    function getBarangmurah() {
        axios
            .get(process.env.REACT_APP_API_URL + '/barang?sort=price&per-page=6')
            .then(function (response) {
                console.log('response :>> ', response.data.items);
                setBarangmurah(response.data.items);

            }).catch(function (error) {

            }).finally(function () {

            });
    }
     ///format number
  const numberWithComma = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

    return (

        <div className="small_product_list">
                    <div className="section_title">
                        <h2 id="kategoriNamePage1">Harga Termurah</h2>
                    </div>
                    <div className="product_carousel small_p_container  product_column1 owl-carousel owl-loaded owl-drag"
                        id="generatePage1Kategori">
                        <div className="owl-stage-outer">
                            <div className="owl-stage" style={{ transition: "all 0s ease 0s", display: 'flex', flexDirection: 'row' }}>
                                {
                                    Barangmurah.map((items, index) => {
                                        return (
                                            <div className="owl-item last active" >
                                                <div className="product_items">

                                                    <article >
                                                        <figure>
                                                            <div className="product_thumb">
                                                                <a className="primary_img" href="/detail/id_barang">
                                                                    {
                                                                        items.images.map((gambar, indexGambar) => {
                                                                            return (
                                                                                <>
                                                                                    {
                                                                                        (indexGambar == 0) ?
                                                                                            <img src={gambar.original} alt="gambar" />
                                                                                            : ""
                                                                                    }
                                                                                </>
                                                                            )
                                                                        })

                                                                    }</a>


                                                                <a className="secondary_img" href="/detail/id_barang">
                                                                    {
                                                                        items.images.map((gambar, indexGambar) => {
                                                                            return (
                                                                                <>
                                                                                    {
                                                                                        (indexGambar == 0) ?
                                                                                            <img src="{gambar.original}" alt="gambar" />
                                                                                            : ""
                                                                                    }
                                                                                </>
                                                                            )
                                                                        })

                                                                    }
                                                                </a>

                                                                <div className="action_links">
                                                                </div>
                                                            </div>
                                                            <div className="product_content">
                                                                <div className="product_content_inner">
                                                                    <h4 className="product_name" style={{ height: '60px' }} >{items.name}</h4>
                                                                    <div className="price_box">
                                                                        <span className="current_price" style={{ fontSize: 15 }}>Rp. {numberWithComma(items.price)}</span></div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </article>
                                                </div>
                                            </div>)
                                    })}
                            </div>
                        </div>
                        </div>
                        
      </div>  
    )
};

export default PenawaranHarga;