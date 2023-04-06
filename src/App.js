import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//imported components
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
            
            <Route  exact path='/' element={<Home/>} />
            <Route path='/movie/:imdbID' element={<MovieDetail/>} />
            <Route path="*" element={<ErrorPage/>} />
            
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;