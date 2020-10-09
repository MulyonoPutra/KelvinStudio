import React, { useState } from 'react'
import CardItem from '../../../shared/cards/CardItem'
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';
import '../../about-us/AboutUs.css'

function Prewedding() {
    const [ load, setLoad ] = useState(true);

    React.useEffect(() => {
		const timeoutID = setTimeout(() => {
			setLoad(false);
		}, 500);
		return () => clearTimeout(timeoutID);
    }, []);
    
    return load ? (
		Spinners()
	) : (
        <>
            <div>
                <br/>
                <ul className='cards__items'>
                    <CardItem
                        src='/assets/images/prewedding2/DSC08469.jpg'
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Prewedding Indah & Ari'
                        path='/prewedding/prewedding-details1'
                    />
                    <CardItem
                        src='/assets/images/prewedding1/photo12.jpeg'
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Prewedding of Tatu & Faqih'
                        path='/prewedding/prewedding-details'
                    />
                    <CardItem
                        src='/assets/images/photo4.jpg'
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Prewedding'
                        path='/sign-up'
                    />
                </ul>
            </div>
        </>
    )
}

const Spinners = (load) => {
	return (
		<div className="sweet-loading">
			<MoonLoader css={override} size={150} color={"#C5B358"} loading={load} />
		</div>
	);
}

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

export default Prewedding
