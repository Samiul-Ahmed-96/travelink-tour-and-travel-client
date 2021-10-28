import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route path="/home">
          <Home/>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
