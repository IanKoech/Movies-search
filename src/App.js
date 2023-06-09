import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

//imported components
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

import './App.scss';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <div className='container'></div>
          <Routes>
              <Route  exact path='/' element={<Home/>} />
              <Route path='/movie/:imdbID' element={<MovieDetail/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path="*" element={<ErrorPage/>} />
              
          </Routes>
        </Router>
        <Footer></Footer>
    </div>
    
  );
}

export default App;