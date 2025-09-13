import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Welcome to my first webpage</h1>
          <h2>Created a second header!</h2>
          <h3>I can have a 3rd header s well.</h3>
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
