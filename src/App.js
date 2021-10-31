import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './pages/About/About';
import AddAPackage from './pages/AddAPackage/AddAPackage';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyAccount from './pages/MyAccount/MyAccount';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import TourDetails from './pages/Tours/TourDetails/TourDetails';
import Tours from './pages/Tours/Tours';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/tours" component={Tours} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/tour-details/:id">
              <TourDetails />
            </PrivateRoute>
            <PrivateRoute path="/my-account">
              <MyAccount />
            </PrivateRoute>
            <Route path="/add-package" component={AddAPackage} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
