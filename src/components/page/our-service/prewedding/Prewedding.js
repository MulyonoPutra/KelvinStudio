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
                        text='Once in a while, Right in the middle of an ordinary life, Love gives us a fairy tale.'
                        label='Prewedding of Indah & Ari'
                        path='/prewedding/prewedding-details1'
                    />
                    <CardItem
                        src='/assets/images/prewedding1/photo12.jpeg'
                        text='Once upon a time, there was a boy who loved a girl, and her laughter was a question he wanted to spend his whole life answering.'
                        label='Prewedding of Tatu & Faqih'
                        path='/prewedding/prewedding-details'
                    />
                    <CardItem
                        src='/assets/images/prewedding3/DSCF5016.jpg'
                        text='Where there is love, there is life.'
                        label='Prewedding Amia & Ugi'
                        path='/prewedding/prewedding-details2'
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
