import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Layouts/HomePage/HomePage';
import Footer from './Layouts/NavbarAndFooter/Footer';
import Navbar from './Layouts/NavbarAndFooter/Navbar';
import SearchBooksPage from './Layouts/SearchBooksPage/SearchBooksPage';

export const App = () => {
  return (
   <div className='d-flex flex-column min-vh-100'>
    
      <Navbar />
      <Switch>

      <Route path="/" exact>
        <Redirect to ="/home" />
      </Route>

      <Route path="/home">
      <HomePage />
      </Route>


      <Route path="/search">
        <SearchBooksPage />
      </Route>

      </Switch>
      <Footer />
      </div>
  );
}
