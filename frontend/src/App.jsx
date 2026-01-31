import { Routes,Route } from 'react-router-dom'
import './App.css';
import User from './components/user'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/home'
import State from './hooks/state' 
import Effect from './hooks/effect'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/state" element={<State />} />
      <Route path="/effect" element={<Effect />} />
    </Routes>
    <center><User name="Retiha" department="CSE" skills={["CSS","HTML","JavaScript"]} DOB ="07-06-2006" Age="19" /></center>
    </>
  );
};

export default App;


