import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Welcome to my first webpage</h1>
          <h2>Created a second header!</h2>
          <h3>I can have a 3rd header as well.</h3>
        <p>
          My first React code!
        </p>
          <p>
              Created by: Roshan Patel
          </p>
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGhxU4o5pOUy15ZwR4HXxqqZqVWWBqJTZxRCZb0ZK1xoGJwlIpQoCmlP3uPY2DWV6IfcgOz278y2FTLrk3gPGW7SRrgcH0VfonDHXGA_E" alt="Picture of EST GEE"/>
          <p>Click <a href="https://images.google.com">this</a> to go to Google Images.</p>
          <MyButton/>
      </header>
    </div>
  );
}

function MyButton() {
    return (
        <button>Try to press me</button>
    );
}

export default App;
