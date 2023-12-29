
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import './App.css';

import Fetch from './components/Fetch';
import News from './components/News';

import Try from "./components/Try";
import YourComponent from "./components/Expres";
import Video1 from "./components/Video";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import AllUser from "./AllUser";
import Search from "./Search";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/pic' element={<Fetch />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/try' element={<Try />} />
        <Route exact path='/video' element={<Video1 />} />
        <Route exact path='/form' element={<SignUp />} />
        <Route exact path="/fetch" element={<YourComponent />} />
        <Route exact path="/users" element={<AllUser />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/search' element={<Search/>} />
      </Routes>
    </Router>
  );
}

export default App;