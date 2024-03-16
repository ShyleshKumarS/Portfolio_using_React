import "./App.css";
import Nav from "./components/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skills from "./components/Skills/Skills.jsx";
import ContactMe from "./components/ContactMe/ContactMe.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Hero />
        <Skills/>
        <ContactMe/>
        
      </div>
    </div>
  );
}

export default App;
