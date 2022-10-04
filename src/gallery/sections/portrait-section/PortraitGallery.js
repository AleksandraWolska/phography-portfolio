import React from "react";
import GalleryTemplate from "../../GalleryTemplate";

const PortraitGallery = () => {



  let photosArray = [
    "https://raw.githubusercontent.com/AleksandraWolska/photo-gallery.io/main/src/photos/AWolska%20(10).jpg",
    "https://raw.githubusercontent.com/AleksandraWolska/photo-gallery.io/main/src/photos/AWolska%20(34).jpg",
  ];



  return <GalleryTemplate photos={photosArray} />;
};

export default PortraitGallery;
