import '../style/NavBar.scss';
import DogtionaryLogo from '../style/img/DogtionaryLogo.png';

const NavBar = () => {
  return (
    <>
      <section className="container nav-container">
        <a href="/">
          <h1>Dogtionary</h1>
        </a>
        <img alt="logo" src={DogtionaryLogo} />
      </section>
    </>
  );
};

export default NavBar;
