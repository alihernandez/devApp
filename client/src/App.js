import './App.css'; 
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ToastContainer />
     <Contact />
    </div>
  );
}

export default App;
