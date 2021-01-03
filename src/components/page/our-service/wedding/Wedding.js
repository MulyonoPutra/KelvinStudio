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
                            src='/assets/images/wedding1/_MG_7957.jpg'
                            text='When in a relationship, a real man doesn’t make his woman jealous of others, he makes others jealous of his woman.'
                            label='Wedding of Ones & Udy'
                            path='/wedding/wedding-details-02'
                        />
                        <CardItem
                            src='/assets/images/wedding4/DSC04353.JPG'
                            text=' successful marriage requires falling in love many times, always with the same person.'
                            label='Wedding of Reni & Rendi'
                            path='/wedding/wedding-details-04'
                        />
                        <CardItem
                            src='/assets/images/wedding3/_MG_4166.jpg'
                            text='Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.'
                            label='Wedding of Riana & Nevanda'
                            path='/wedding/wedding-details-03'
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

export default Wedding
