
import './App.css';
import React, { useState } from 'react'
import GalleryView from './gallery/GalleryView';
import HomeView from './home/HomeView';
import Header from './main/Header'
import Footer from './main/Footer'

const  App = () => {

  const categories = [
    {
      title: "Night Photography",
      previewPhotos: [],
      categoryRoute: 'link to category',
      photoArray: []

    }
  ]


  return (
    <>

    









    <Header />
    <HomeView categories={categories}/>
    <Footer />
    
    </>
  );
}

export default App;
