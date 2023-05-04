import React, {useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import like from "../assets/img/logo/like-click.svg"
import likehover from "../assets/img/logo/like-hover.svg"
import cart from "../assets/img/logo/cart-click.svg"
import carthover from "../assets/img/logo/cart-hover.svg"
import '../assets/css/custom.css';
import '../assets/css/plugins.css';
import '../assets/css/style.css';
import Cookies from 'js-cookie';
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { BsDot } from 'react-icons/bs';

const ListProduk = (props) => {
    
  ///Clikck gambar
  const [imageIndex, setImageIndex] = useState(0);
  const images = [likehover, like];

  const [cartIndex, setCart] = useState(0);
  const gambar = [carthover, cart];

  function handleClick() {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    Cookies.set('imageIndex', imageIndex + 1);
  }
  function handleClick2() {
    setCart((prevIndex) => (prevIndex + 1) % gambar.length);
    Cookies.set('cartIndex', cartIndex + 1);

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

  ///barang
  const [barang, setBarang] = useState([]);

  function getBarang(type, pencarian, minPrice, maxPrice) {
    let Order = ''

    if (type == 'asc') {
      Order = 'name'
    } else if (type == 'desc') {
      Order = '-name'
    }

    axios
      .get('https://microdatastoreapi.cooljarsoft.com/barang', {
        params: {
          sort: Order,
          name: pencarian,
        }
      })
      .then(function (response) {
        console.log('response :>> ', response.data.items);
        setBarang(response.data.items);
      })
      .catch(function (error) {
      })
      .finally(function () {
      });
  }

  ///jenis barang
  const [jenisbarang, setJenisBarang] = useState([]);

  useEffect(() => {
    getJenisBarang();
  }, []);

  function getJenisBarang() {
    axios
      .get('https://microdatastoreapi.cooljarsoft.com/jenis-barang')
      .then(function (response) {
        console.log('response :>> ', response.data.items);
        setJenisBarang(response.data.items);
      })
      .catch(function (error) {
      })
      .finally(function () {
      });
  }

  ///pencarian
  let [searchParams, setSearchParams] = useSearchParams();
  let type = searchParams.get("pencarian")

  useEffect(() => {
    console.log("lol! the type is ", type);
    getBarang('asc', type)
  }, [type]);


  // //Filter harga
  const [priceRange, setPriceRange] = useState([0, 200000000]);
  const handlePriceFilter = (event, newValue) => {
    setPriceRange(newValue);
  };


    const navigate = useNavigate();

    function submitHarga(e) {
      navigate("/list?harga=" + priceRange, { replace: true });

  }
 
  let price = searchParams.get("harga")

  useEffect(() => {
    console.log("harga ", price);
    getBarang( price)
  }, [price]);

///kategori barang
const [kategoribarang, setKategoriBarang] = useState([]);

  useEffect(() => {
    getKategoriBarang();
  }, []);
  const { jenisId } = useParams();

  function getKategoriBarang() {
    axios
      .get('https://microdatastoreapi.cooljarsoft.com/kategori-barang' + jenisId)
      .then(function (response) {
        console.log('response :>> ', response.data.items);
        setJenisBarang(response.data.items);
      })
      .catch(function (error) {
      })
      .finally(function () {
      });
  }
  const filteredItems = barang.filter(items => items.kategori === props.kategori);

  const filterResult=(items)=>{
    const result=barang.filter((curtData)=>{
      return curtData.kategori===items;
    });
    setKategoriBarang()
  }

  ///format number
  const numberWithComma = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

}
  return (
    <div className="list-layout">
    {/* tombol list single produk */}
    <div className="row no-gutters shop_wrapper grid_list" id="generateBarang">
      {
        barang.filter((items) => items.price >= priceRange[0] && items.price <= priceRange[1])
          .map((items) => {
            return (
              <div className="col-12">
                {['Info',].map((variant) => (

                  <article className="single_product">
                    <figure>
                      <div className="product_thumb">
                        <a className="primary_img" href={'/detail/' + items.id}>
                          {
                            items.images.map((gambar, indexGambar) => {
                              return (
                                <>
                                  {
                                    (indexGambar == 0) ?
                                      <img id="testload" className="image1-barang" src={gambar.original} alt="gambar" />
                                      : ""
                                  }
                                </>
                              )
                            })

                          }
                        </a>
                        <a className="secondary_img" href={'/detail/' + items.id}>
                          {
                            items.images.map((gambar, indexGambar) => {
                              return (
                                <>
                                  {
                                    (indexGambar == 0) ?
                                      <img id="testload" className="image1-barang" src={gambar.thumb} alt="gambar" />
                                      : ""
                                  }
                                </>
                              )
                            })

                          }
                        </a>
                        <div className="label_product">
                          <span className="label_sale">Sale</span>
                        </div>
                        <div className="action_links">
                          <ul>
                            <li className="wishlist">
                              <input defaultValue={9} id="data-favorite-8621" type="hidden" name={8621} />
                              <a id="click-favorite-8621" onclick="favorite(this)" data="[object Object]" className="click-favorites">
                                <img className="icon-item-costum-like image-favorite-8621" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/like-hover.svg" alt="like" />
                              </a>
                            </li>
                            <li className="compare">
                              <a>
                                <img className="icon-item-costum-compare" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare-hover.svg" alt="compare" />
                              </a>
                            </li>
                            <li className="quick_button">
                              <input defaultValue={9} id="data-cart-8621" type="hidden" name={8621} />
                              <a id="click-cart-8621" onclick="cart(this)" data="[object Object]" className="click-cart">
                                <img className="icon-item-costum-cart image-cart-8621" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/cart-hover.svg" alt="like" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_content grid_content">
                        <div className="product_content_inner">
                          <h4 className="product_name" style={{ height: '50px' }}>
                            <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9"></a>
                          </h4>
                          <div className="price_box">
                            <span className="current_price" >Rp. 31.500</span>
                          </div>
                        </div>
                        <div className="add_to_cart">
                          <a href="/checkout/" title="Add to cart">Checkout</a>
                        </div>
                      </div>
                      <div className="product_content list_content">
                        <h4 className="product_name">
                          <a href="http://onlinestore.microdataindonesia.co.id/detail/detail_barang/9" style={{ paddingLeft: '10px' }}>{items.name}</a>
                        </h4>
                        <div className="price_box">
                          <span className="current_price" >Rp. {numberWithComma(items.price)}</span>
                        </div>
                        <div className="product_desc">
                          <ul>
                            <div className="row mt-2" id="shortDescription">
                              {
                                items.short_description.map((short_description) =>
                                  <div className='col-md-6'>
                                    <li className="wrapper-list-kategori" >
                                      <BsDot size={30} />{short_description}
                                    </li>
                                  </div>

                                )
                              }
                            </div>
                          </ul>
                        </div>
                        <div className="add-cart-costum" style={{ paddingLeft: '17px' }}>
                          <a href="/checkout/" title="Add to cart">Checkout</a>
                          <a id="click-favorite-8621" onclick="favorite(this)" className="click-favorites">
                            <img src={images[imageIndex]} style={{ width: "25px" }} alt="gambar" onClick={handleClick} />
                          </a>
                          <a title="Add to cart">
                            <img className="icon-item-costum-compare" src="http://onlinestore.microdataindonesia.co.id/assets/img/icon/compare.svg" alt="compare" />
                          </a>
                          <a id="click-cart-8621" onclick="cart(this)" className="click-cart">
                            <img src={gambar[cartIndex]} style={{ width: "25px" }} alt="image" onClick={handleClick2} />
                          </a>
                        </div>
                      </div>
                    </figure>
                  </article>
                ))}
              </div>
            )
          })

      }

    </div>
  </div>
  );
};

export default ListProduk;