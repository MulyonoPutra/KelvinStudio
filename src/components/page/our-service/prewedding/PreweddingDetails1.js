/* Thanks to https://jossmac.github.io/react-images/#/ */

import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { preWeddingGallery0 } from "../../../shared/Photos";
import '../../../../App.css';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';

function PreweddingDetails1() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [load, setLoad] = useState(true);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
        <div className="container-fluid">
          <Gallery photos={preWeddingGallery0} onClick={openLightbox} />
          <br />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={preWeddingGallery0.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <div className="space-bottom">
          <br />
        </div>
      </>
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

export default PreweddingDetails1;
