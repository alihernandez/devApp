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
import Particles from 'react-particles-js';

// style={{ backgroundImage: `url(${HeaderImg})`, backgroundRepeat: 'scroll', backgroundSize: 'cover'}}

function App() {
  return (
    <Router>
    <div className="App" >
    <Particles id="particles-js"
                params={{
                    particles: {
                      "number": {
                        "value": 40,
                        "density": {
                          "enable": true,
                          "value_area": 800
                        }
                      },
                      "opacity": {
                        "value": 0.2,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                          "onhover": {
                            "enable": true,
                            "mode": "push"
                          },
                          "onclick": {
                            "enable": true,
                            "mode": "push"
                          },
                          "resize": true
                        },
                        "modes": {
                          "grab": {
                            "distance": 800,
                            "line_linked": {
                              "opacity": 1
                            }
                          },
                          "bubble": {
                            "distance": 800,
                            "size": 20,
                            "duration": 2,
                            "opacity": 0.8,
                            "speed": 1
                          },
                          "repulse": {
                            "distance": 400,
                            "duration": 0.4
                          },
                          "push": {
                            "particles_nb": 4
                          },
                          "remove": {
                            "particles_nb": 2
                          }
                        }
                      },
                        shape: {
                          "type": "star"
                        }
                    }
                }}>
                  </Particles>
      <ScrollToTop />
      <NavBar className="mainCont" />
      <Header exact path="/about" className="mainCont" />
      <Education className="mainCont" />
      <CircularDeterminate className="mainCont" />
      <Portfolio className="mainCont" />
      <ToastContainer className="mainCont" />
      <Contact path="/contact" className="mainCont" />
      <Footer className="mainCont" />
      
    </div>
    </Router>
  );
}

export default App;
