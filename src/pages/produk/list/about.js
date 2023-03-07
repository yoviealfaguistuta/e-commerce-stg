import React, { Fragment } from "react";
import { Layout } from "../../../layout";
import gambar from "../../../assets/img/logo/image.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/style.css'
import '../../../assets/css/custom.css'
import '../../../assets/css/plugins.css'



function about() {
    return (
        <Layout>
            <div className="about_bg_area">
                <div className="container">
                    <section className="about_section mb-60">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <figure>
                                    <div className="about_thumb">
                                        <img src={gambar} alt="" />
                                    </div>
                                    <figcaption className="about_content">
                                        <h1>We are a digital agency focused on delivering content and utility user-experiences.
                                        </h1>
                                        <p>Microdata Indonesia is one of the few IT system integration, professional service and
                                            software development companies based in Bandar lampung, Lampung - Indonesia that
                                            works with Enterprise systems and companies. As a privately owned company, Microdata
                                            Indonesia provides IT Consultancy, software design and development as well as
                                            professional.</p>
                                        <div className="about_signature">
                                            <img src="assets/img/about/about-us-signature.png" alt="" />
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>
                    <div className="choseus_area" data-bgimg="http://127.0.0.1:8000/assets/img/about/about-us-policy-bg.jpg" style={{ backgroundImage: 'url("http://127.0.0.1:8000/assets/img/about/about-us-policy-bg.jpg")' }}>
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="single_chose">
                                    <div className="chose_icone">
                                        <img className="icon-about-costum" src="http://127.0.0.1:8000/assets/img/about/idea.svg" alt="" />
                                    </div>
                                    <div className="chose_content">
                                        <h3>Business Innovative ideas</h3>
                                        <p>Identifying and prioritizing opportunities, to moving concepts through the pipeline,
                                            there’s no magic formula for success.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single_chose">
                                    <div className="chose_icone">
                                        <img className="icon-about-costum" src="http://127.0.0.1:8000/assets/img/about/tech.svg" alt="" />
                                    </div>
                                    <div className="chose_content">
                                        <h3>Latest Technologies</h3>
                                        <p>Microdata Indonesia has a rich experience in developing and deploying desktop and
                                            mobile software solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single_chose">
                                    <div className="chose_icone">
                                        <img className="icon-about-costum" src="http://127.0.0.1:8000/assets/img/about/success.svg" alt="" />
                                    </div>
                                    <div className="chose_content">
                                        <h3>Successful Project</h3>
                                        <p>Microdata Indonesia have experience in developing and supporting large web-based
                                            applications using latest web technologies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about_gallery_section mb-55">
                        <div className="row">
                            <div className="row">
                                <div className="col-lg-12 col-md-4">
                                    <article className="single_gallery_section">
                                        <figure>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-4 mt-5">
                                                    <figcaption className="about_gallery_content">
                                                        <h3>Currently</h3>
                                                        <p>Hasil kerja Microdata Indoneisa yang memuaskan pun dengan cepat
                                                            mendapat perhatian dari perusahaan-perusahan besar. Portofolio klien
                                                            kami juga semakin bervariasi. Kami bangga memiliki cakupan pelanggan
                                                            yang terdiri dari sejumlah perusahaan digital serta
                                                            perusahaan-perusahaan tradisional sehinggi Microdata Indoneisa
                                                            memperluas cakupan bidang bisnis tidak hanya berfokus di bidang
                                                            teknologi informasi tetapi juga di bidang advertising karna pada era
                                                            digital seperti saat ini sangat erat hubunganya antara teknologi dan
                                                            advertising. Solusi yang kami berikan saat ini adalah :</p>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-4">
                                                                <ul>
                                                                    <li>
                                                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" />Consultan Teknologi
                                                                        Informasi
                                                                    </li>
                                                                    <li>
                                                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" />Consultan Networking
                                                                    </li>
                                                                    <li>
                                                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" />Design Grafis
                                                                    </li>
                                                                    <li>
                                                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" />Commercial
                                                                        Photography
                                                                    </li>
                                                                    <li>
                                                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" />Web Design
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-6 col-md-4">
                                                                <ul>
                                                                    <li>
                                                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" />Software Developer
                                                                    </li>
                                                                    <li>
                                                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" />Mobile App Developer
                                                                    </li>
                                                                    <li>
                                                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" />Arsitektur
                                                                    </li>
                                                                    <li>
                                                                        <ion-icon name="ellipse" role="img" className="md hydrated" aria-label="ellipse" />Event Organizer
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </figcaption>
                                                </div>
                                                <div className="col-lg-6 col-md-4 mt-5">
                                                    <div className="gallery_thumb">
                                                        <img className="image-about-history" src="http://127.0.0.1:8000/assets/img/about/currently.svg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-4 mt-5">
                                <article className="single_gallery_section">
                                    <figure>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-4 mt-5">
                                                <div className="gallery_thumb">
                                                    <img className="image-about-history" src="http://127.0.0.1:8000/assets/img/about/history.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-4 mt-5">
                                                <figcaption className="about_gallery_content">
                                                    <h3>History Of Us</h3>
                                                    <p>Microdata Indonesia didirikan pada tahun 2010 sebagai penyedia jasa
                                                        konsultasi di bidang teknologi informasi yang berkantor di Bandar
                                                        Lampung dengan tenaga ahli berjumlah 20 orang di bidang teknologi
                                                        informasi.
                                                        Microdata Indonesia memiliki fokus pada pengembangan produk dan solusi
                                                        teknologi informasi untuk segmen perguruan tinggi, lembaga pemerintah,
                                                        perusahaan penyedia jasa transportasi dan logistik, serta industri
                                                        business. Layanan yang berfokus pada 4 segmen utama tersebut selanjutnya
                                                        didefinisikan sebagai Microdata Solution, yaitu solusi berbasis sistem
                                                        dan teknologi informasi guna mewujudkan sebuah kota cerdas dengan ciri
                                                        less paper, less time, less cash dan less complexity untuk meningkatkan
                                                        tatanan hidup masyarakat.
                                                        Pada segmen business, Microdata Indonesia mengembangkan produk-produk
                                                        aplikasi back-end dan front-end untuk beberapa sub industri diantaranya
                                                        taman hiburan dan wisata, pusat belanja dan entertainment, microfinance,
                                                        dan industri kesehatan.</p>
                                                </figcaption>
                                            </div>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-client-say-area">
                    <div className="row">
                        <div className="col-lg-12 col-md-6">
                            <div className="testimonials-area">
                                <div className="testimonial-two owl-carousel owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage" style={{ transform: 'translate3d(-628px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2198px' }}>
                                            <div className="owl-item cloned" style={{ width: '314px' }}>
                                                <div className="testimonial-wrap-two text-center">
                                                    <div className="quote-container">
                                                        <div className="quote-image">
                                                            <img src="assets/img/about/testimonial2.jpg" alt="" />
                                                        </div>
                                                        <div className="testimonials-text">
                                                            <p>Support and response has been amazing, helping me with several issues
                                                                I came
                                                                across and got them solved almost the same day. A pleasure to work
                                                                with
                                                                them!</p>
                                                        </div>
                                                        <div className="author">
                                                            <h6>Kathy Young</h6>
                                                            <p>CEO of SunPark</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned" style={{ width: '314px' }}>
                                                <div className="testimonial-wrap-two text-center">
                                                    <div className="quote-container">
                                                        <div className="quote-image">
                                                            <img src="assets/img/about/testimonial3.jpg" alt="" />
                                                        </div>
                                                        <div className="testimonials-text">
                                                            <p>Support and response has been amazing, helping me with several issues
                                                                I came
                                                                across and got them solved almost the same day. A pleasure to work
                                                                with
                                                                them!</p>
                                                        </div>
                                                        <div className="author">
                                                            <h6>Kathy Young</h6>
                                                            <p>CEO of SunPark</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: '314px' }}>
                                                <div className="testimonial-wrap-two text-center">
                                                    <div className="quote-container">
                                                        <div className="quote-image">
                                                            <img src="assets/img/about/testimonial1.jpg" alt="" />
                                                        </div>
                                                        <div className="testimonials-text">
                                                            <p>Support and response has been amazing, helping me with several issues
                                                                I came
                                                                across and got them solved almost the same day. A pleasure to work
                                                                with
                                                                them!</p>
                                                        </div>
                                                        <div className="author">
                                                            <h6>Kathy Young</h6>
                                                            <p>CEO of SunPark</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item" style={{ width: '314px' }}>
                                                <div className="testimonial-wrap-two text-center">
                                                    <div className="quote-container">
                                                        <div className="quote-image">
                                                            <img src="assets/img/about/testimonial2.jpg" alt="" />
                                                        </div>
                                                        <div className="testimonials-text">
                                                            <p>Support and response has been amazing, helping me with several issues
                                                                I came
                                                                across and got them solved almost the same day. A pleasure to work
                                                                with
                                                                them!</p>
                                                        </div>
                                                        <div className="author">
                                                            <h6>Kathy Young</h6>
                                                            <p>CEO of SunPark</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item" style={{ width: '314px' }}>
                                                <div className="testimonial-wrap-two text-center">
                                                    <div className="quote-container">
                                                        <div className="quote-image">
                                                            <img src="assets/img/about/testimonial3.jpg" alt="" />
                                                        </div>
                                                        <div className="testimonials-text">
                                                            <p>Support and response has been amazing, helping me with several issues
                                                                I came
                                                                across and got them solved almost the same day. A pleasure to work
                                                                with
                                                                them!</p>
                                                        </div>
                                                        <div className="author">
                                                            <h6>Kathy Young</h6>
                                                            <p>CEO of SunPark</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned" style={{ width: '314px' }}>
                                                <div className="testimonial-wrap-two text-center">
                                                    <div className="quote-container">
                                                        <div className="quote-image">
                                                            <img src="assets/img/about/testimonial1.jpg" alt="" />
                                                        </div>
                                                        <div className="testimonials-text">
                                                            <p>Support and response has been amazing, helping me with several issues
                                                                I came
                                                                across and got them solved almost the same day. A pleasure to work
                                                                with
                                                                them!</p>
                                                        </div>
                                                        <div className="author">
                                                            <h6>Kathy Young</h6>
                                                            <p>CEO of SunPark</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned" style={{ width: '314px' }}>
                                                <div className="testimonial-wrap-two text-center">
                                                    <div className="quote-container">
                                                        <div className="quote-image">
                                                            <img src="assets/img/about/testimonial2.jpg" alt="" />
                                                        </div>
                                                        <div className="testimonials-text">
                                                            <p>Support and response has been amazing, helping me with several issues
                                                                I came
                                                                across and got them solved almost the same day. A pleasure to work
                                                                with
                                                                them!</p>
                                                        </div>
                                                        <div className="author">
                                                            <h6>Kathy Young</h6>
                                                            <p>CEO of SunPark</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-nav disabled">
                                        <div className="owl-prev">prev</div>
                                        <div className="owl-next">next</div>
                                    </div>
                                    <div className="owl-dots">
                                        <div className="owl-dot active"><span /></div>
                                        <div className="owl-dot"><span /></div>
                                        <div className="owl-dot"><span /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )

}
export default about;