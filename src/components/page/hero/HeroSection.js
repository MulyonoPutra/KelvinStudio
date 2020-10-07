import React, { useState } from 'react';
import { Button } from '../../shared/button/Button';
import '../hero/HeroSection.css';
import '../../../App.css';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';

function HeroSection() {
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
		<div className="hero-container">
			<video src="/assets/videos/video-2.mp4" autoPlay loop muted />
			<h1>"Every picture tells a story.”</h1>
			<p>What are you waiting for?</p>
			<div className="hero-btns">
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
					GET STARTED
				</Button>
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

export default HeroSection;
