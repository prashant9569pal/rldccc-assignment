import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Related from './components/Related';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Content/>
      <Related/>
      <Footer/>
    </div>
  );
}

export default App;
