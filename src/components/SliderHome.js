import React, { Fragment } from 'react'
import Slider from 'react-slick';
import DeskripsiSliderHome from './DeskripsiSliderHome';

const SliderHome = ({gambar_1, gambar_2, title}) => {
    console.log('gambar_1 :>> ', gambar_1);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'test2'
    };

    return (
        <Slider {...settings}>

            <div className="owl-item cloned" style={{ width: '378px' }}>
                <DeskripsiSliderHome title={title} />
            </div>
            <div className="owl-item cloned" style={{ width: '378px' }}>
                <div
                    className="single_slider d-flex align-items-center "
                    style={{ height: '378px', backgroundImage: `url("${gambar_2}")` }}
                >
                    <div className="slider_content slider_c_four color_white">
                        <h3>popular products</h3>
                        <h1>
                            chellphone
                            <br /> new model 2019
                        </h1>
                        <p>
                            discount
                            <span> -30% off</span> this week
                        </p>
                        <a
                            className="button"
                            href="/list"
                        >
                            DISCOVER NOW
                        </a>
                    </div>
                </div>
            </div>
            {/* <a href="/list"><img style={{ width: '680px' }} src="http://onlinestore.microdataindonesia.co.id/assets/img/slider/valley-pine-trees-river-fox-wallpaper-preview.jpg" alt="" /></a>
    <a href="/list"><img style={{ width: '680px' }} src="http://onlinestore.microdataindonesia.co.id/assets/img/slider/wallpapersden.com_astronaut-art-4k_3840x2274.jpg" alt="" /></a>
    <a href="/list"><img style={{ width: '680px' }} src="http://onlinestore.microdataindonesia.co.id/assets/img/slider/valley-pine-trees-river-fox-wallpaper-preview.jpg" alt="" /></a> */}


        </Slider>
    )
};

export default SliderHome;