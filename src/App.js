import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Welcome to my first webpage</h1>
          <h2>Created a second header!</h2>
          <p>My first React code!</p>
          <p>Created by: Roshan Patel</p>
          <img src="https://images.seeklogo.com/logo-png/23/2/atlanta-braves-logo-png_seeklogo-238257.png" alt="Picture of Braves logo"/>
          <p>Click <a href="https://images.google.com">this</a> to go to Google Images.</p>
          <AButton/>
      </header>
    </div>
  );
}

function AButton() {
    return (
        <button>Press me</button>
    );
}

export default App;
