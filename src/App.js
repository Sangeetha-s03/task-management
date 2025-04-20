<<<<<<< HEAD
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './pages/Sidebar';
import Home from './pages/Home';
import Task from './pages/Task';
import User from './pages/User';
import Report from './pages/Report';
import Footer from './components/Footer';
import "./App.css";

function App() {
 return(
  <>
<Router>
  <div className='App'>
    <Sidebar/>

    <div className='content'> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/Task" element={<Task/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/Profile" element={<ProfileDropdown/>}/>        
      </Routes>
    </div>
  </div>
</Router>
<Footer/>
</>
 );
}


export default App;
