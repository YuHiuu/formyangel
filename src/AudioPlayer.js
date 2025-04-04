import React from "react";

function AudioPlayer() {
  return (
    <div>
      <audio autoplay loop>
        <source src="/audios/nothingbm.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
