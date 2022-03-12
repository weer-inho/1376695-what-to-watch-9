import {FilmsType} from '../../types/films';

type FilmCardProps = {
  film: FilmsType;
  onActivated: () => void;
  onDeactivated: () => void;
}

function FilmCard(props: FilmCardProps):JSX.Element {
  const {film, onActivated, onDeactivated} = props;

  return (
    <article
      onMouseEnter={() => onActivated()}
      onMouseLeave={() => onDeactivated()}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.title}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
