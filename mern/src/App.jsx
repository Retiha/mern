import { Routes,Route } from 'react-router-dom'
import User from './components/user'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/home'


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <User name="Retiha" department="CSE" skills={["CSS","HTML","JavaScript"]} DOB ="07-06-2006" Age="19" />
    </>
  )
}

export default App




