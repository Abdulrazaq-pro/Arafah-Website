import "bootstrap/dist/css/bootstrap.css";
import "./sass/custom.css";
import "./App.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import RandomText from "./components/RandomText";
import IconSection from "./components/IconSection";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Showcase />
      <About />
      <RandomText />
      <IconSection />
      <Form/>
      <Footer />
    </div>
  );
}

export default App;
