import React, { Fragment } from "react";
import { Layout } from "../../../layout";
import "../../../assets/css/style.css";
import "../../../assets/css/plugins.css";
import "../../../assets/css/custom.css";

const List = () => {
  return (
    <Layout>
      <div>
        <div className="breadcrumbs_area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb_content">
                  <ul id="title_breadcumb"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shop_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="container-breadcumb">
                      <img
                        src="http://127.0.0.1:8000/assets/img/product/kategori-banner.png"
                        alt="Snow"
                        className="image_breadcumb"
                      />
                      <div className="top-left-breadcumb">
                        ALL PRODUCT IS 100% ORIGINAL
                      </div>
                      <div className="top-left-breadcumb-hint">
                        Feel free to get what you want
                      </div>
                      <div className="start_lottie">
                        <lottie-player
                          id="lottie-player"
                          src="https://assets9.lottiefiles.com/packages/lf20_oCWIv0.json"
                          background="white"
                          speed={1}
                          style={{
                            position: "absolute",
                            width: "100%",
                            height: "228px",
                          }}
                          loop
                          autoPlay
                        ></lottie-player>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop_toolbar_wrapper">
                  <div className="shop_toolbar_btn">
                    <button
                      data-role="grid_4"
                      id="buttonResetLayoutGrid"
                      type="button"
                      className=" active btn-grid-4"
                      data-toggle="tooltip"
                      title={4}
                    />
                    <button
                      data-role="grid_list"
                      id="buttonResetLayoutList"
                      type="button"
                      className="btn-list"
                      data-toggle="tooltip"
                      title="List"
                    />
                  </div>
                  <select
                    className="select_costum_kategori"
                    onchange="sortirAscDesc()"
                    id="sortir-barang"
                  >
                    <option value selected disabled hidden>
                      Urutkan nama barang
                    </option>
                    <option value="name">Urut berdasarkan A ke Z</option>
                    <option value="-name">Urut berdasarkan Z ke A</option>
                  </select>
                  <div className="page_amount" id="page-count-kategori"></div>
                </div>
                <div
                  className="row no-gutters shop_wrapper"
                  id="generateBarang"
                ></div>

                {/* List daftar produk */}
                <div className="col-lg-3 col-md-4 col-12 ">
                  <article className="single_product">
                    <figure>
                      <div className="product_thumb">
                        <box className="shine" />
                      </div>
                      <div className="product_content grid_content">
                        <div className="product_content_inner">
                          <h4
                            className="product_name"
                            style={{ height: "10px" }}
                          >
                            <a href>
                              <lines className="shine" />
                            </a>
                          </h4>
                          <h4
                            className="product_name"
                            style={{ height: "10px" }}
                          >
                            <a href>
                              <lines className="shine" />
                            </a>
                          </h4>
                          <h4
                            className="product_name"
                            style={{ height: "30px" }}
                          >
                            <a href>
                              <lines className="shine" />
                            </a>
                          </h4>
                          <h4
                            className="product_name"
                            style={{ height: "10px" }}
                          >
                            <a href>
                              <lines className="shine" />
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="product_content list_content">
                        <h4 className="product_name">
                          <a>
                            <lines className="shine" />
                          </a>
                        </h4>
                        <div className="price_box">
                          <span className="current_price">
                            <lines className="shine" />
                          </span>
                        </div>
                        <div className="product_desc">
                          <p>
                            <lines className="shine" />
                          </p>
                          <ul>
                            <div className="row">
                              <div className="col-md-6">
                                <li className="wrapper-list-kategori">
                                  <lines className="shine" />
                                </li>
                              </div>
                              <div className="col-md-6">
                                <li className="wrapper-list-kategori">
                                  <lines className="shine" />
                                </li>
                              </div>
                              <div className="col-md-6">
                                <li className="wrapper-list-kategori">
                                  <lines className="shine" />
                                </li>
                              </div>
                              <div className="col-md-6">
                                <li className="wrapper-list-kategori">
                                  <lines className="shine" />
                                </li>
                              </div>
                            </div>
                            <ul />
                          </ul>
                        </div>
                        <div className="add-cart-costum">
                          <box className="shine" />
                          <box className="shine" />
                          <box className="shine" />
                          <box className="shine" />
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <aside className="sidebar_widget">
                  <div className="widget_list widget_categories">
                    <h3>Product categories</h3>
                    <ul id="generateKategori"></ul>
                  </div>
                  <div className="widget_list widget_filter">
                    <h3>Filter by price</h3>
                    <form action="#">
                      <div id="slider-range" />
                      <button type="submit">Filter</button>
                      <input type="text" name="text" id="amount" />
                    </form>
                  </div>
                  <div className="widget_list tags_widget">
                    <h3>Product tags</h3>
                    <div className="tag_cloud">
                      <a href="shop-right-sidebar.html#">blouse</a>
                      <a href="shop-right-sidebar.html#">clothes</a>
                      <a href="shop-right-sidebar.html#">fashion</a>
                      <a href="shop-right-sidebar.html#">handbag</a>
                      <a href="shop-right-sidebar.html#">laptop</a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default List;
