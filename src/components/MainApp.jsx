import React, { useState } from 'react'
import InputCamera from './InputCamera';
import WebCam from './WebCam';

const MainApp = () => {
  const [options, setOptions] = useState(null);

  return (
    <>
      <div className="d-grid gap-2">
          <button onClick={ () => setOptions(true) }>Primer opción react-webcam</button>
          <button onClick={ () => setOptions(false) }>Segunda opción input camara</button>
      </div>
  
      <hr />

      <div className="d-grid gap-2">
        { options && <WebCam /> }
        { options === false && <InputCamera /> }
      </div>
    </>
  )
}

export default MainApp;
