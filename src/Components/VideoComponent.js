import React, { useState } from "react";
import FFMPEG from "react-ffmpeg";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const VideoComponent = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const [imageFile, setImageFile] = useState({});
  const [soundFile, setSoundFile] = useState({});
  const ffmpeg = createFFmpeg({ log: true });
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };
  const handleChangeSound = (e) => {
    const file = e.target.files[0];
    setSoundFile(file);
  };
  const createVideo = async () => {
    debugger;
    ffmpeg.load();
    debugger;

    ffmpeg.FS("writeFile", "sound.mp3", fetchFile(soundFile));

    await ffmpeg.run("-i", "sound.mp3", "output.mp4");
    const data = ffmpeg.FS("readFile", "output.mp4");
    setVideoSrc(
      URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }))
    );
    // const file = new File([videoBlob], "video.mp4");
    // await FFMPEG.process(
    //   file,
    //   "-framerate",
    //   "1/100",
    //   "-i",
    //   "image.png",
    //   "-i",
    //   "sound.mp3",
    //   "-c:v",
    //   "libx264",
    //   "-t",
    //   "10",
    //   "-pix_fmt",
    //   "yuv420p",
    //   "-vf",
    //   "scale=1920:1080",
    //   "test.mp4",
    //   function (e) {
    //     const video = e.result;
    //     console.log(video);
    //     const url = window.URL.createObjectURL(video);
    //     var a = document.createElement("a");
    //     document.body.appendChild(a);
    //     a.style = "display: none";
    //     a.href = url;
    //     a.download = "video.mp4";
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //   }
    // );
    // await ffmpeg.
    // ffmpeg.FS("writeFile", "sound.mp3", await fetchFile(soundFile));
    // await ffmpeg.run(
    // "-framerate",
    // "1/100",
    // "-i",
    // "image.png",
    // "-i",
    // "sound.mp3",
    // "-c:v",
    // "libx264",
    // "-t",
    // "10",
    // "-pix_fmt",
    // "yuv420p",
    // "-vf",
    // "scale=1920:1080",
    // "test.mp4"
    // );
    // const data = ffmpeg.FS("readFile", "test.mp4");
  };
  return (
    <div>
      <video id="player" src={videoSrc} controls></video>
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
      <button onClick={createVideo}>Create a video </button>
    </div>
  );
};

export default VideoComponent;
