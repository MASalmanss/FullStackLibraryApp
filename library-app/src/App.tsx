import './App.css';
import Carousel from './Layouts/HomePage/Carousel';
import ExploreTopBooks from './Layouts/HomePage/ExploreTopBooks';
import Navbar from './Layouts/NavbarAndFooter/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/> 
    </>
  );
}

export default App;
