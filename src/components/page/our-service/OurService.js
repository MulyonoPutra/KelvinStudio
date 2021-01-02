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
              text='A successful marriage requires falling in love many times, always with the same person.'
              label='Wedding'
              path='/wedding'
            />
            <CardItem
              src='/assets/images/prewedding3/DSCF4889.jpg'
              text='To find someone who will love you for no reason, and to shower that person with reasons, that is the ultimate happiness.'
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
