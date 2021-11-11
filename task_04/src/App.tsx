import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import { Header } from './components/header';

function App() {
  return (
    <Router>
          <Header/>
          <Routes>
            <Route path='/estudantes' element={(<h1>módulo de estudantes</h1>)}/>
            <Route path='/professores' element={(<h1>módulo de professores</h1>)}/>
            <Route path='/disciplinas' element={(<h1>módulo de disciplinas</h1>)}/>
          </Routes>
    </Router>
  );
}

export default App;
