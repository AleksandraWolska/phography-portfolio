import React, { useState } from 'react'

const Banner = () => {


  const [currentImage, setCurrentImage] = useState("")
  
  
  React.useEffect(() => {
    const bannerImages = ["img1", "img2"]
    let counter = 0;
    const max = bannerImages.length
    const interval = setInterval(() => {
     if (counter >= max) counter = 0 

      setCurrentImage(bannerImages[counter++])
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div id="banner-container">
      <div id="photos"></div>

    </div>
  )
}

export default Banner