import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>choose one 👇🏼</p>
        <nav>
          <Link to="/function">Function</Link>
          <br />
          <Link to="/class">Class</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
