import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  src: string;
  posterSrc: string;
  autoPlay: boolean;
}

function VideoPlayer({src, posterSrc, autoPlay}: VideoPlayerProps):JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const video = videoRef.current;
    if(video === null){
      return;
    }

    if (!autoPlay) {
      return;
    }

    video.src = src;
    video.muted=true;
    video.autoplay = true;

    return ()=>{
      video.pause();
      video.autoplay = false;
      video.src = '';};
  }, [autoPlay,src]);

  return (
    <video className='player__video' poster={posterSrc} ref={videoRef}/>
  );
}

export default VideoPlayer;
