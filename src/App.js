import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          My first React project!
        </p>
          <p>
              Created By Roshan Patel
          </p>
          <MyButton />
      </header>
    </div>
  );
}

function MyButton() {
    return (
        <button>Press me</button>
    );
}

export default App;
