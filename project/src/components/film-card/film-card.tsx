import {useState} from 'react';
import {FilmsType} from '../../types/films';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: FilmsType;
  onActivated: () => void;
  onDeactivated: () => void;
}

function FilmCard(props: FilmCardProps):JSX.Element {
  const [isHover, setIsHover] = useState(false);
  const {film, onActivated, onDeactivated} = props;
  // eslint-disable-next-line no-console
  console.log(isHover);

  return (
    <article
      onMouseEnter={() => {
        onActivated();
        setIsHover(!isHover);
      }}
      onMouseLeave={() => {
        onDeactivated();
        setIsHover(!isHover);
      }}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer autoPlay={isHover} src={film.videoSrc} posterSrc={film.previewImage}/>
      </div>
      <h3 className="small-film-card__title">
        <Link to="/films/12/review">
          <a style={{color: 'white'}} className="small-film-card__link" href="film-page.html">{film.title}</a>
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
