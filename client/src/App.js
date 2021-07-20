import './App.css'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

// style={{ backgroundImage: `url(${HeaderImg})`, backgroundRepeat: 'scroll', backgroundSize: 'cover'}}

function App() {
  return (
    <Router>
    <div className="App" >
      <NavBar />
      <Header />
      <Education />
      <CircularDeterminate />
      <Portfolio />
      <ToastContainer />
      <Contact />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
