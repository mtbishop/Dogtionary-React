import '../style/SearchZip.scss';
import ZipSearchBackground from '../style/img/background_image.jpg';

const SearchZip = () => {
  return (
    <>
      <section className="container searchZip-container">
        <div className="zipSearch-wrapper">
          <img alt="dog-background" src={ZipSearchBackground} />
          <div className="search-div">
            <p>Enter your zip code to find dogs near you that need a home!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchZip;
