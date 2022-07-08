import { BrowserRouter, Routes, Route, Router, Link} from 'react-router-dom';
import "./App.css";
import CreatePost from './pages/CreatePost';
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Link to="/">Главная</Link>
          <Link to="/createpost">Создать пост</Link>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/createpost" element={<CreatePost/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
