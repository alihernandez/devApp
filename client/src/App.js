import './App.css'; 
import {
  BrowserRouter as Router,
  
} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';
import Education from './components/Education/Education';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import CircularDeterminate from './components/ProgressBars/ProgressBars';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

// style={{ backgroundImage: `url(${HeaderImg})`, backgroundRepeat: 'scroll', backgroundSize: 'cover'}}

function App() {
  return (
    <Router>
    <div className="App" >
      <ScrollToTop />
      <NavBar />
      <Header exact path="/about"/>
      <Education />
      <CircularDeterminate />
      <Portfolio />
      <ToastContainer />
      <Contact path="/contact" />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
