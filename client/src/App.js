import './App.css'
import Navbar from './components/navbar';
import Home from './components/home';
import Create from './components/create';
import BlogDetails from './components/blogDetails';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
