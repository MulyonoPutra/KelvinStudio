import React, { useState } from 'react';
import '../../../App.css';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';
import '../about-us/AboutUs.css'

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

function AboutUs() {
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
			<h1 className="about-us">About Us</h1>
		</div>
	);
}

function Spinners(load) {
	return (
		<div className="sweet-loading">
			<MoonLoader css={override} size={150} color={"#C5B358"} loading={load} />
		</div>
	);
}

export default AboutUs;
