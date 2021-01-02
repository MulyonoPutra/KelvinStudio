import React, { useState } from 'react';
import '../../../App.css';
import {css} from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';
import '../about-us/AboutUs.css';
import * as Constants from '../../shared/Constants';
import Footer from '../../shared/footer/Footer';
import CarouselComponent from '../../shared/carousel/CarouselComponent';

function AboutUs() {
    const [load,
        setLoad] = useState(true);

    React.useEffect(() => {
        const timeoutID = setTimeout(() => {
            setLoad(false);
        }, 500);
        return () => clearTimeout(timeoutID);
    }, []);

    return load
        ? (Spinners())
        : (
            <div>
                <CarouselComponent/>
                <h4 className="about-text">
                    <p>{Constants.ABOUT_US}</p>
                </h4>
                <Footer/>
            </div>
        );
}

const Spinners = (load) => {
    return (
        <div className="sweet-loading">
            <MoonLoader css={override} size={150} color={'#C5B358'} loading={load}/>
        </div>
    );
};

const override = css `
	display: block;
	margin: 0 auto;
	border-color: red;
`;

export default AboutUs;
