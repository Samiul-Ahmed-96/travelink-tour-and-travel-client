import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Login/Login/Login";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import AddPakage from "./Pages/AddPakage/AddPakage";
import Home from "./Pages/Home/Home/Home";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders/ManageAllOrders";
import MyOrders from "./Pages/MyOrders/MyOrders";
import NotFound from "./Pages/NotFound/NotFound";
import PakageDetailAndBooking from "./Pages/PakageDetailAndBooking/PakageDetailAndBooking";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Register from "./Register/Register";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/addPakage">
            <AddPakage></AddPakage>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageAllOrder">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path="/pakageDetail/:id">
            <PakageDetailAndBooking></PakageDetailAndBooking>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
