// import FilmCard from '../film-card/film-card';
// import SignIn from '../signin/sign-in';
// import Player from '../player/player';
// import Mylist from '../mylist/mylist';
import MainPage from '../main-page/main-page';

type AppProps = {
  title: string,
  janre: string,
  year: number,
  numberOfCards: number
}

function App({title, janre, year, numberOfCards}: AppProps):JSX.Element {
  return (
    <MainPage title={title} janre={janre} year={year} numberOfCards={numberOfCards}/>
  );
}

export default App;
