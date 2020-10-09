import React, { useState } from 'react';
import '../../../App.css';
import CardItem from '../../shared/cards/CardItem';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';

function OurService() {
  const [ load, setLoad ] = useState(true);

	React.useEffect(() => {
		const timeoutID = setTimeout(() => {
			setLoad(false);
		}, 500);
		return () => clearTimeout(timeoutID);
  }, []);
  
	return  load ? (
		Spinners()
	) : (
		<div>
			<br/>
			<div>
			<ul className='cards__items'>
            <CardItem
              src='/assets/images/_MG_8783.JPG'
              text='Explores the hidden waterfall deep inside the Amazon Jungle'
              label='Wedding'
              path='/wedding'
            />
            <CardItem
              src='/assets/images/photo4.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Prewedding'
              path='/prewedding'
            />
          </ul>
			</div>
		</div>
	);
}

const Spinners = (load) => {
	return (
		<div className="sweet-loading">
			<MoonLoader css={override} size={150} color={'#C5B358'} loading={load} />
		</div>
	);
};

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

export default OurService;
