import Nav from './components/Nav';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Aboutme />
      <Contact />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
