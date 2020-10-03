import React from 'react'
import CardItem from '../../../shared/cards/CardItem'

function Prewedding() {
    return (
        <>
            <div>
                <br/>
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
        </>
    )
}

export default Prewedding
