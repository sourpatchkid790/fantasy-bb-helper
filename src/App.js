import './App.css';
import PlayerStatsPage from './pages/PlayerStatsPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage'

import { Routes, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/stats' element={<PlayerStatsPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
