import React, { useState, useRef, useEffect } from "react";
import video from "../assets/video.mp4";
import ReactPlayer from "react-player";

const Player = () => {
  const valueRef = useRef();
  const [isReady, setIsReady] = React.useState(false);

  const onProgress = ({ lengthComputable, total, loaded }) => {
    console.log("yes");
    console.log(lengthComputable, total, loaded);
  };
  useEffect(() => {
    console.log("Page opened");
    return () => {
      console.log("Page closed");
    };
  }, []);

  const onReady = React.useCallback(() => {
    if (!isReady) {
      const timeToStart = 7;
      valueRef.current.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady]);
  return (
    <div>
      <ReactPlayer
        ref={valueRef}
        url={video}
        controls
        playing
        onReady={onReady}
        // onProgress={(progress) => {
        //   setPlayed(progress.playedSeconds);
        // }}
        // muted={true}
        // progressInterval={1000}
        // onDuration={(duration) => console.log(duration)}
        // onPause={() => console.log("pause")}
        // onPlay={() => console.log("play")}
      />
      {/* <button onClick={onClick}>Click</button> */}
    </div>
  );
};

export default Player;
