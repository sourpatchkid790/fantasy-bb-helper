import classes from './Header.module.css';
import { Link } from 'react-router-dom';

// Header component put on all pages
// Links to all pages in the website
function Header() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/stats'>Stats</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/api'>API</Link></li>
      </ul>
    </div>
  );
}

export default Header;