import '../style/NavBar.scss';
import DogtionaryLogo from '../style/img/DogtionaryLogo.png';

const NavBar = () => {
  return (
    <>
      <header className="container nav-container">
        <a href="/">
          <h1>Dogtionary</h1>
        </a>
        <img alt="logo" src={DogtionaryLogo} />
      </header>
    </>
  );
};

export default NavBar;
