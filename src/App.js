import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-card">
          <p className="App-news">Not yet</p>
        </div>
        <p> Enjoy this video of the Great Leader while you are waiting </p>
        <iframe
          title="youtube"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Pxd6H-tTPds"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </header>
    </div>
  );
}

export default App;
