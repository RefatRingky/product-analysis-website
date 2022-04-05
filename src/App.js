import { Route, Routes } from 'react-router-dom';
import Home  from './Component/Home/Home';
import Dashboard from './Component/Dashboard/Dashboard';
import Blog from './Component/Blog/Blog';
import Review from './Component/Review/Review';
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element ={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
