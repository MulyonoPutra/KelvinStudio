import React from 'react';
import '../../../App.css';
import CardItem from '../../shared/cards/CardItem';

function OurService() {
	return (
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

export default OurService;
