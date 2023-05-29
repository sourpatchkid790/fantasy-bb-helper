import Header from "../components/Header";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Header />
      <div>
        <Link to="/api">
          <button>Go to API</button>
        </Link>
        
      </div>
      
      <p>This is the home page</p>
    </div>
  );
}

export default HomePage;