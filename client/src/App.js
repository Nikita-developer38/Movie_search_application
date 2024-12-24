import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbars';
import Movies from './Components/Movies';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddMovie from './Components/AddMovie';
import EditMovie from './Components/EditMovie';

function App() {
  return (

    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/addMovie" element={<AddMovie />} />
        <Route path="/update/:id" element={<EditMovie />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
