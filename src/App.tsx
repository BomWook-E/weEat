import { Routes, Route } from 'react-router-dom';
import './App.css';
import RandomMenu from './pages/RandomMenu';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index />
        <Route path='random-menu' element={<RandomMenu />} />
      </Route>
    </Routes>
  );
}

export default App;
