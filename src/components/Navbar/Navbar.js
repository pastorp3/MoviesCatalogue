import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => (
  (
    <nav>
      <img alt="Logo" src={logo} className="logo" />
      <Link to="/" className="home-link">Home</Link>
    </nav>
  )
);

export default Navbar;
