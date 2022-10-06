import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import GalleryView from "../gallery/GalleryView";

//props : title, previewPhotos, categoryPage, photoArray
const Category = (props) => {
  return (
    <div>
      <p>Category: {props.title}</p>
      <Link to={props.categoryPage} />
      <Routes>
        <Route exactPath={props.categoryPage} component={<GalleryView title={props.title} photoArray={props.photoArray} />}>
          
        </Route>
      </Routes>
    </div>
  );
};

export default Category;
