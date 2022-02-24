import './App.scss';
import NavBar from './components/NavBar';
import SearchZip from './components/SearchZip';
import BreedSearcher from './components/BreedSearcher';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchZip />
      <BreedSearcher />
      <Footer />
    </div>
  );
}

export default App;
