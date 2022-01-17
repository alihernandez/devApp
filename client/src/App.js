import './App.css'; 
import {
  BrowserRouter as Router, Switch
  
} from 'react-router-dom';
// import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';
import Education from './components/Education/Education';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import CircularDeterminate from './components/ProgressBars/ProgressBars';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
// import Particles from 'react-particles-js';

// style={{ backgroundImage: `url(${HeaderImg})`, backgroundRepeat: 'scroll', backgroundSize: 'cover'}}

function App() {
  return (
    <Router>
      <Switch>
    <div className="App" >
      
      <ScrollToTop />
      
      <NavBar className="mainCont" />
      
      <Header exact path="/about" className="mainCont" />
      
      <Education className="mainCont" />
      <CircularDeterminate className="mainCont" />
      <Portfolio className="mainCont" />
      <Contact path="/contact" className="mainCont" />
      <Footer className="mainCont" />
      
    </div>

    </Switch>
    </Router>
  );
}

export default App;
