
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Work from './Components/Work';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
        <Home/>
        <About/>
        <Work/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        
    </div>
  );
}

export default App;
