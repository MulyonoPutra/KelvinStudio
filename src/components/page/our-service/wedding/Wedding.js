import React, { useState } from 'react'
import CardItem from '../../../shared/cards/CardItem'
import '../../../../App.css';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';

function Wedding() {
    const [load, setLoad] = useState(true);

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
                    <br />
                    <ul className='cards__items'>
                        <CardItem
                            src='/assets/images/_MG_4204.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Wedding of Ones & Udy'
                            path='/wedding/wedding-details-02'
                        />
                        <CardItem
                            src='/assets/images/DSC04353.JPG'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Wedding of Reni & Rendi'
                            path='/wedding/wedding-details-04'
                        />
                        <CardItem
                            src='/assets/images/wedding3/_MG_4166.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Wedding of Riana & Nevanda'
                            path='/wedding/wedding-details-03'
                        />
                    </ul>
{/*                     <ul className='cards__items'>
                        <CardItem
                            src='/assets/images/wedding2/DSC01786.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Wedding of Ones & Udy'
                            path='/wedding/wedding-details-01'
                        />
                        <CardItem
                            src='/assets/images/wedding2/DSC01786.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Wedding of Ones & Udy'
                            path='/wedding/wedding-details-01'
                        />
                        <CardItem
                            src='/assets/images/wedding2/DSC01786.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Wedding of Ones & Udy'
                            path='/wedding/wedding-details-01'
                        />
                    </ul> */}
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

export default Wedding
