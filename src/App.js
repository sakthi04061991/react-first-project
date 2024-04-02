import './App.css';
import { Header } from './Header.js';
import { Nav } from './Nav';
import { Home } from './Home';
import { NewPost } from './NewPost';
import {Routes, Route} from 'react-router-dom';
import { About } from './About';
import { Missing } from './Missing';
import { PostPage } from './PostPage';
import { EditPost } from './EditPost.js';
import { DataProvider } from './context/DataContext.js';
function App() {
  
  return (
    <div className="App">
      <DataProvider>
        <Header title="test"></Header>
        <Nav />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='post' >
              <Route index element = {<NewPost />} />
              <Route path=':id' element = {<PostPage />} />
          </Route>
          <Route path='/edit/:id' element={<EditPost />} />
          <Route path='/about' element={<About />} />
        </Routes>
        
      </DataProvider>
    </div>
  );
}

export default App;
