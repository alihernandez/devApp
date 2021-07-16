import './App.css'; 
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import CircularDeterminate from './components/ProgressBars/ProgressBars';

// style={{ backgroundImage: `url(${HeaderImg})`, backgroundRepeat: 'scroll', backgroundSize: 'cover'}}

function App() {
  return (
    <div className="App" >
      <NavBar />
      <Header />
      <CircularDeterminate />
      <Portfolio />
      <ToastContainer />
      <Contact />
    </div>
  );
}

export default App;
