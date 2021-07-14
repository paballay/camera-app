import React, { useState } from 'react'
import '../app.css';

const InputCamera = () => {

  const [image, setImage] = useState(null);

  const handleInput = (e) => {
    setImage( URL.createObjectURL(e.target.files[0]) );
  }

  return (
    <div className="d-grid text-center">
      <input type="file" id="imageFile" accept="image/*" onChange={ handleInput }/>
      {image && <img className="prueba" src={image} alt="welcome" />}
    </div>
  )
}

export default InputCamera
