import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skills from "./components/Skills/Skills.jsx";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Hero />
        <Skills/>
      </div>
    </div>
  );
}

export default App;
