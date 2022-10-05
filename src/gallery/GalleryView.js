import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const GalleryView = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    function getMeta(url) {
      const img = new Image();
      img.addEventListener("load", () => {
        console.log("halo")
      });
      img.src = url;
      return { src: url, width: img.width, height: img.height };
    }


    const photoArray = []
    
    props.photos.forEach((p) => photoArray.push(getMeta(p)))


  return (
    <div>
    <Gallery photos={photoArray} onClick={openLightbox} />
    <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
           
            currentIndex={currentImage}
            views={photoArray.map(x => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  </div>
  )
}

export default GalleryView