import './App.css';
import Carousel from './Layouts/HomePage/components/Carousel';
import ExploreTopBooks from './Layouts/HomePage/components/ExploreTopBooks';
import Heros from './Layouts/HomePage/components/Heros';
import LibraryServices from './Layouts/HomePage/components/LibraryServices';
import HomePage from './Layouts/HomePage/HomePage';
import Footer from './Layouts/NavbarAndFooter/Footer';
import Navbar from './Layouts/NavbarAndFooter/Navbar';

export const App = () => {
  return (
    <>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </>
  );
}
