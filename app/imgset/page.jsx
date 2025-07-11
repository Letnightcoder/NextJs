import './image.css'
import React from 'react'

const Imgset = () => {
  return (
    <div className='img-container'>
      <img className='img'
        src="https://cdn.pixabay.com/photo/2014/09/21/17/56/mountaineering-455338_1280.jpg"
        alt="Mountains"
        quality="50"
      />
    </div>
  );
}

export default Imgset