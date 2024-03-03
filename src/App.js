import Header from './Header';
import logo from './logo.svg';
import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo" />
        <p>
          Zac's Website
        </p>
      </header>
    </div>
  );
}

export default App;
