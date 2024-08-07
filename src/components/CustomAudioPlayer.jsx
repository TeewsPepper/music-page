
import React, { useRef, useState } from "react";

const CustomAudioPlayer = ({ src, title, image }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="custom-audio-player">
      <div className='image-container'>
        <img
          src={image}
          alt={title}
          className={`audio-image imagen  ${isPlaying ? "rotate" : ""}`}
        />
      </div>
      <h3>{title}</h3>
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <input
        type="range"
        value={(currentTime / duration) * 100}
        onChange={handleSeek}
      />
      <div>
        <span>{formatTime(currentTime)}</span> <span>/{" "}</span>
        <span>{formatTime(duration)}</span>
      </div>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default CustomAudioPlayer;
