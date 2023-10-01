import { useEffect, useRef, useState } from "react";
import "./chromaKey.scss";

function ChromaKey({ video }) {

  const videoHtml = useRef(null);
  const canvas = useRef(null);
  //const [display, setDisplay] = useState(null);
  const [play, setPlay] = useState(false);

  const chromaKey = (ctx, v, w, h) => {
    console.log("a");
    ctx.drawImage(v, 0, 0, w, h);
    const imageData = ctx.getImageData(0, 0, w, h);
    for (let i = 0; i < imageData.data.length; i++) {
      const offset = i * 4;
      const red = imageData.data[offset];
      const green = imageData.data[offset + 1];
      const blue = imageData.data[offset + 2];

      if (green > 150 && green > red && green > blue) {
        imageData.data[offset + 3] = 0;
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }

  useEffect(() => {
    if (!play && videoHtml && videoHtml.current && canvas && canvas.current) {
      setPlay(true);
      videoHtml.current.play();
      videoHtml.current.addEventListener('loadeddata', () => {
        const ctx = canvas.current.getContext('2d');
        canvas.current.width = videoHtml.current.videoWidth;
        canvas.current.height = videoHtml.current.videoHeight;
        const display = setInterval(() => {
          chromaKey(ctx, videoHtml.current, canvas.current.width, canvas.current.height);
        }, 0);
        console.log("display", display);
        videoHtml.current.addEventListener('ended', () => {
          console.log("end", display);
          clearInterval(display);
        });
      });

    }
  }, [videoHtml, canvas, play]);


  return <>
    <video className="chromakey" src={video} ref={videoHtml} playsInline muted></video>
    <canvas className="chromakey" width="0" height="0" ref={canvas}></canvas>
  </>

}

export default ChromaKey;