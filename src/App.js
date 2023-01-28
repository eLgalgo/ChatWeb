import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from './pages/Registro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Router>
      
      </header>
    </div>
  );
}

export default App;
