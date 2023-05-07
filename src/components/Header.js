import classes from './Header.module.css';


function Header() {
  return (
    <div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">Stats</a></li>
        <li><a href="#search">Search</a></li>
      </ul>
    </div>
  );
}

export default Header;