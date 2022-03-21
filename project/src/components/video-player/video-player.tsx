import {useState, useEffect, useRef} from 'react';

type VideoPlayerProps = {
  src: string;
  posterSrc: string;
}

function VideoPlayer({src, posterSrc}: VideoPlayerProps):JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <video onMouseEnter={() => setIsPlaying(!isPlaying)} src={src} className={`player__video player__video--${isPlaying ? 'pause' : 'play'}`} poster={posterSrc} ref={videoRef}></video>
  );
}

export default VideoPlayer;
