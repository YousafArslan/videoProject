import React, { useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import VideoComponent from "./Components/VideoComponent";
import SoundConponent from "./Components/SoundConponent";
import VideoApp from "./Components/VideoApp";
import Player from "./Components/Player";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* {show ? <Player /> : <div>Not showing</div>}
      <button onClick={() => setShow(!show)}>show</button> */}
      <Player />
      {/* <VideoApp /> */}
      {/* <SoundConponent /> */}
      {/* <VideoComponent /> */}
      {/* <br />
      <video src={videoSrc} controls></video>
      <br />
      <br />

      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={handleChangeImage}
      ></input>
      <br />
      <br />
      <input
        type="file"
        id="sound"
        accept="sound/*"
        onChange={handleChangeSound}
      ></input>
      <button onClick={createVideo}>Create a video </button> */}
    </div>
  );
}

export default App;
