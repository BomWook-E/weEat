import { Routes, Route } from 'react-router-dom';
import './App.css';
import RandomMenu from './pages/RandomMenu';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='random-menu' element={<RandomMenu />} />
      </Route>
    </Routes>
  );
}

export default App;
