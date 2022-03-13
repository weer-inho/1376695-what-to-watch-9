import FilmCard from '../film-card/film-card';
import {FilmsType} from '../../types/films';
import {useState} from 'react';

type MyListProps = {
  films: FilmsType[];
}

function MyList(props:MyListProps) :JSX.Element {
  const {films} = props;
  const [, setFilmHoverId] = useState(undefined as number | undefined);

  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        const keyValue = film.id;
        return (
          <FilmCard
            onActivated={() => setFilmHoverId(film.id)}
            onDeactivated={() => setFilmHoverId(undefined)}
            key={keyValue}
            film={film}
          />
        );
      })}
    </div>
  );
}

export default MyList;
