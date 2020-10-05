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
              src= '/assets/images/_MG_8783.JPG'
              text='Once in awhile, right in the middle of an ordinary life, love gives us a fairy tale.'
              label='Wedding'
              path='/services'
            />
            <CardItem
              src='/assets/images/photo3.jpeg'
              text='A hundred hearts would be too few to carry all my love for you.'
              label='Wedding'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/assets/images/_MG_4204.jpg'
              text='In the arithmetic of love, one plus one equals everything, and two minus one equals nothing.'
              label='Wedding'
              path='/prewedding-details'
            />
            <CardItem
              src='/assets/images/DSC04353.JPG'
              text='I would rather share one lifetime with you than face all the ages of this world alone.'
              label='Wedding'
              path='/wedding-details-04'
            />
            <CardItem
              src='/assets/images/photo4.jpg'
              text='Keep love in your heart. A life without it is like a sunless garden when the flowers are.'
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