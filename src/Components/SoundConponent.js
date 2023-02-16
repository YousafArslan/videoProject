import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const SoundConponent = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });
  return (
    <div>
      <div>
        <p>{status}</p>
        <button onClick={startRecording}>startRecording</button>
        <button onClick={stopRecording}>stopRecording</button>
        <video src={mediaBlobUrl} autoPlay controls></video>
      </div>
    </div>
  );
};

export default SoundConponent;
