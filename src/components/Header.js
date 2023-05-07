import classes from './Header.module.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <ul>
        <li><Link to='/'> Home </Link> </li>
        <li><Link to='/stats'> Stats </Link></li>
        <li><Link to='/search'> Search </Link></li>
      </ul>
    </div>
  );
}

export default Header;