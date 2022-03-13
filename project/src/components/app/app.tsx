import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignIn from '../signin/sign-in';
import Player from '../player/player';
import AddReview from '../add-review/add-review';
import MainPage from '../main-page/main-page';
import MyList from '../mylist/mylist';
import {FilmsType} from '../../types/films';

type AppProps = {
  title: string,
  janre: string,
  year: number,
  numberOfCards: number,
  films: FilmsType[],
}

function App({title, janre, year, numberOfCards, films}: AppProps):JSX.Element {
  return (
    //
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              films={films}
              title={title}
              janre={janre}
              year={year}
              numberOfCards={numberOfCards}
            />
          }
        >
        </Route>
        <Route path={AppRoute.SignIn} element={<SignIn/>}></Route>
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList
                films={films}
              />
            </PrivateRoute>
          }
        >
        </Route>
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
