import './App.css';
import Home from "./views/Home"
import NavBar from "./components/NavBar"
import PetList from './components/PetList';
import SearchForm from './components/SearchForm';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import AddPet from './components/AddPet';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
    <div className="links">
      <NavBar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/petlist" element = {<PetList/>}/>
        <Route path = "/addpet" element = {<AddPet/>}/>
        <Route path = "/searchform" element = {<SearchForm/>}/>
        <Route path = "/login" element = {<LogIn/>}/>
        <Route path = "/logout" element = {<LogOut/>}/>
       
      </Routes>
      <Footer/>
    </div>
    </Router>
    </div>
  );
}

export default App;

