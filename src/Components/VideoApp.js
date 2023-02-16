import React, { useRef } from "react";
import { GrPlay, GrPause } from "react-icons/gr";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import video from "../assets/video.mp4";
import useVideoPlayer from "./useVideoPlayer";
import "../assets/video.css";
const VideoApp = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? <GrPlay /> : <GrPause />}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? <GiSpeaker /> : <GiSpeakerOff />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoApp;
