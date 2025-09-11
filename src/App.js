import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          My first React project! Created By Roshan Patel
        </p>
          <p>
              I am learning how to use ReactJS
          </p>
          <MyButton />
      </header>
    </div>
  );
}

function MyButton() {
    return (
        <button>You can press me</button>
    );
}

export default App;
