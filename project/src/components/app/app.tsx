import {Route, BrowserRouter, Routes, Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import FilmCard from '../film-card/film-card';
import SignIn from '../signin/sign-in';
import Player from '../player/player';
import Mylist from '../mylist/mylist';
import AddReview from '../add-review/add-review';
import MainPage from '../main-page/main-page';

type AppProps = {
  title: string,
  janre: string,
  year: number,
  numberOfCards: number
}

function App({title, janre, year, numberOfCards}: AppProps):JSX.Element {
  return (
    //
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage title={title} janre={janre} year={year} numberOfCards={numberOfCards}/>
          }
        >
        </Route>
        <Route path={AppRoute.SignIn} element={<SignIn/>}></Route>
        <Route path={AppRoute.MyList} element={<Mylist/>}></Route>
        <Route path={AppRoute.Film} element={<FilmCard />}></Route>
        <Route path={AppRoute.AddReview} element={<AddReview/>}></Route>
        <Route path={AppRoute.Player} element={<Player />}>
          <Route path=':id' element={<Player />}></Route>
        </Route>
        <Route
          path="*"
          element={
            <>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/mylist">Go to main page</Link>
            </>
          }
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
