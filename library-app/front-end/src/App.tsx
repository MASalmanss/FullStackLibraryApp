import './App.css';
import HomePage from './Layouts/HomePage/HomePage';
import Footer from './Layouts/NavbarAndFooter/Footer';
import Navbar from './Layouts/NavbarAndFooter/Navbar';
import SearchBooksPage from './Layouts/SearchBooksPage/SearchBooksPage';

export const App = () => {
  return (
    <>
      <Navbar/>

      {/* <HomePage/> */}
      <SearchBooksPage/>
      <Footer/>
    </>
  );
}
