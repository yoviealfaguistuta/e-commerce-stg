import React, { Fragment } from 'react'

const DeskripsiSliderHome = ({title}) => {
    return (
        <div className="slider_content slider_c_four color_white">
            <h3>popular products</h3>
            <h1>
                {(title === "" || title == null) ? "Gak ada title" : title}
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
    )
};
