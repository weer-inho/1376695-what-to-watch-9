import {FilmsType} from '../../types/films';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { useCallback, useState } from 'react';

type FilmCardProps = {
  film: FilmsType;
  onActivated: () => void;
  onDeactivated: () => void;
  isActive: boolean;
}

function FilmCard(props: FilmCardProps):JSX.Element {
  const {film, onActivated, onDeactivated, isActive} = props;

  const [timerId, setTimerId] = useState(undefined as number | undefined);
  const handleMouseEnter = useCallback(()=>{
    clearTimeout(timerId);
    setTimerId(window.setTimeout(()=>{onActivated();},1000));
  },[onActivated, timerId]);
  const handleMouseLeave = useCallback(()=>{
    clearTimeout(timerId);
    onDeactivated();
  },[onDeactivated, timerId]);

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer autoPlay={isActive} src={film.videoSrc} posterSrc={film.previewImage}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="/films/12/review" style={{color: 'white'}}>
          {film.title}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
