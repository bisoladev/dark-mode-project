import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.documentElement.className = theme;
    console.log(document.documentElement);
  }, [theme]);
  return (
    <main>
      <nav className="nav-center">
        <h1>Overreacted</h1>
        <button className="btn">Toggle</button>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
