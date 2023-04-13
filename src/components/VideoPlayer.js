import React, { useRef, useEffect, useState} from 'react';

// import {handleStart,handlePauseResume} from './Stopwatch'
// import Cook from './Cook';


const VideoPlayer = () => {
    const [stream, setStream] = useState();
    const myVideo = useRef();
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
          .then((currentStream) => {
            setStream(currentStream);
            myVideo.current.srcObject = currentStream;
          });
      }, []);

  return (
    <video playsInline muted ref={myVideo} autoPlay/>
  );
};

export default VideoPlayer;

