import './App.scss';
import NavBar from './components/NavBar';
import SearchZip from './components/SearchZip';
import BreedSearcher from './components/BreedSearcher';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <SearchZip />
      <BreedSearcher />
      <Footer />
    </>
  );
}

export default App;
