import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import * as Constants from '../../shared/Constants'
import '../../../App.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Kelvin Photography</h1>
      <h4 className="article">{Constants.ARTICLE}</h4>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= '/assets/images/prewedding1/photo12.jpeg'
              text='Once in awhile, right in the middle of an ordinary life, love gives us a fairy tale.'
              label='Prewedding'
              path='/prewedding/prewedding-details'
            />
            <CardItem
              src='/assets/images/_MG_7957.jpg'
              text='A hundred hearts would be too few to carry all my love for you.'
              label='Wedding'
              path='wedding/wedding-details-02'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/assets/images/prewedding3/DSCF4889.jpg'
              text='In the arithmetic of love, one plus one equals everything, and two minus one equals nothing.'
              label='Prewedding'
              path='/prewedding/prewedding-details2'
            />
            <CardItem
              src='/assets/images/DSC04353.JPG'
              text='I would rather share one lifetime with you than face all the ages of this world alone.'
              label='Wedding'
              path='wedding/wedding-details-04'
            />
            <CardItem
              src='/assets/images/wedding3/_MG_4166.jpg'
              text='Keep love in your heart. A life without it is like a sunless garden when the flowers are.'
              label='Wedding'
              path='wedding/wedding-details-03'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;   