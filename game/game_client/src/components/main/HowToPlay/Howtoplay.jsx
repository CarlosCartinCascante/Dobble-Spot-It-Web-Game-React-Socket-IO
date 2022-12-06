import React from "react";
import "./Howtoplay.scss";

function HowToPlay() {
  return (
    <div class="embed-responsive embed-responsive-21by9">
      <iframe
        class="embed-responsive-item p-5"
        src="https://www.youtube.com/embed/AlTZkmvX2Sk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default HowToPlay;
