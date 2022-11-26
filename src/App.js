import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
    <h1>546456546545</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App;
