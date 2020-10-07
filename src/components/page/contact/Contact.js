import React, { useState } from 'react';
import '../../../App.css';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';

function Contact() {
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
		<div>
			<h1 className="contact">Contact</h1>
		</div>
	);
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

export default Contact;
