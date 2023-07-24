import { useState } from "react";
import "./App.css";
import CardMultiColor from "./components/CardMultiColor";
import Hero from "./components/Hero";

function App() {
  const [clientX, setClientX] = useState(100);
  const [clientY, setClientY] = useState(100);

  return (
    <div className="App">
      <Hero />

      <main className="container mx-auto">
        <h2>Card Multi Color</h2>
        <h3>Red</h3>
        <div
          className="grid grid-cols-3 gap-2 group/outer"
          onMouseMove={(e) => {
            setClientX(e.clientX);
            setClientY(e.clientY);
          }}
        >
          {[...Array(6)].map((_, i) => (
            <CardMultiColor
              key={i}
              clientX={clientX}
              clientY={clientY}
              color="red"
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
