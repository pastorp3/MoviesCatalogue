import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => (
  (
    <nav data-test="navComponent">
      <img data-test="logo" alt="Logo" src={logo} className="logo" />
      <Link to="/" className="home-link" data-test="homeLink">Home</Link>
    </nav>
  )
);

export default Navbar;
