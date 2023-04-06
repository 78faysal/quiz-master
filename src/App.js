import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Home from './Pages/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UpperNav from './Pages/UpperNav/UpperNav';
import Footer from './Pages/Footer/Footer';
import QuizTopics from './Pages/Quiz/QuizTopics/QuizTopics';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <UpperNav />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/topics' element={<QuizTopics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
