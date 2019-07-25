import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-card">
          <p className="App-news">Unconfirmed*</p>
        </div>
        <p> The last appearance of the great leader was on July 5 </p>
        <a
          className="App-small"
          href="https://web.archive.org/web/20190721141702/https://m.gazeta.ru/politics/news/2019/07/21/n_13242091.shtml"
        >
          {" "}
          *Denied officially{" "}
        </a>
      </header>
    </div>
  );
}

export default App;
