import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import "./App.css";
import CreatePost from './pages/CreatePost';
import Home from "./pages/Home";
import Post from './pages/Post';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div className="nav">
          <Link className='link' to="/">Главная</Link>
          <Link className='link' to="/createpost">Создать пост</Link>
      </div>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/createpost" element={<CreatePost/>}/>
              <Route exact path="/post/:id" element={<Post/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
