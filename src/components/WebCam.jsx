import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import '../app.css';

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER,
};

const WebCam = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
 
  const takePhoto = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    setImgSrc(imgSrc);
  }

  const switchCamera = () => {
    setFacingMode(prevState => prevState === FACING_MODE_USER ? FACING_MODE_ENVIRONMENT : FACING_MODE_USER);
  }

  return (
    <>
      { !imgSrc ? (
          <>
            <Webcam
              ref={webcamRef}
              className="prueba"
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                ...videoConstraints,
                facingMode
              }}
              mirrored
            />
            <button onClick={ takePhoto }>Sacar foto</button>
            <button onClick={ switchCamera } disabled={imgSrc}>Dar vuelta la camara</button>
          </>
        ) : (
          <>
            <img src={imgSrc} alt="Welcome" className="prueba" />
            <button>Compartir</button>
          </>
        )
      }
    </>
  )
}

export default WebCam;
