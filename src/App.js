import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Login from './Login/Login';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import PakageDetail from './Pages/PakageDetail/PakageDetail';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
   <AuthProvider>
   <BrowserRouter>
   <Header/>
   <Switch>
     <Route exact path="/">
         <Home/>
     </Route>
     <Route path="/home">
         <Home/>
     </Route>
     <Route path="/pakageDetail/:id">
         <PakageDetail></PakageDetail>
     </Route>
     <Route path="/login">
         <Login></Login>
     </Route>
     <Route path="*">
       <NotFound></NotFound>
     </Route>
   </Switch>
  </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
