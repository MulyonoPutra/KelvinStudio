import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import * as Constants from '../../shared/Constants' 

function Cards() {
  return (
    <div className='cards'>
      <h1>Kelvin Studio</h1>
      <h4 className="article">{Constants.ARTICLE}</h4>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/assets/images/_MG_8783.JPG'
              text='Explores the hidden waterfall deep inside the Amazon Jungle'
              label='Wedding'
              path='/services'
            />
            <CardItem
              src='/assets/images/photo3.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Wedding'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/assets/images/_MG_4204.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Wedding'
              path='/services'
            />
            <CardItem
              src='/assets/images/DSC04353.JPG'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Wedding'
              path='/products'
            />
            <CardItem
              src='/assets/images/photo4.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Prewedding'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;   