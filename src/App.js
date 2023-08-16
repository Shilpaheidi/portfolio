// import { Home as HomeIcon } from '@material-ui/icons';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home'; // Renamed the import
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer  from './components/Footer';
function App() {
  return (
    <div className="App">
         {/* <HomeIcon /> */}
         <HomePage />
         <Experience />
         <Projects />
         <Footer/>

    </div>
  );
}

export default App;


{/* <Router>
<Navbar/>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/experience" element={<Experience />} />
</Routes>
<Footer/>
</Router> */}