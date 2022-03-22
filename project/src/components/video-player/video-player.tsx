import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  src: string;
  posterSrc: string;
  autoPlay: boolean;
}

function VideoPlayer({src, posterSrc, autoPlay}: VideoPlayerProps):JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (autoPlay) {
      setTimeout(() => videoRef.current?.play(), 1000);
      return;
    }

    videoRef.current.load();
  }, [autoPlay]);

  return (
    <video muted src={src} className='player__video' poster={posterSrc} ref={videoRef}></video>
  );
}

export default VideoPlayer;
