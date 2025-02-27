
import Frontpage from "./pages/FrontPage";
import TaskManager from "./pages/Taskmanager";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() { 
  return (
    <div>
       <Routes>
    <Route path='/' element={<Frontpage />} />
    <Route path ='/task' element={<TaskManager/>} />
    </Routes> 
    </div>
  );
}

export default App;
