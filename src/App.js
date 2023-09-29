import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import About from './containers/About/About'
import Skill from './containers/Skills/Skill';
import Contact from './containers/Contact/Contact';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   {/* <Route path='/' element={<Home/>}/> */}
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skill' element={<Skill/>}/>
    <Route path='/contact' element={<Contact/>}/>


   </Routes>
   </>
  );
}

export default App;
