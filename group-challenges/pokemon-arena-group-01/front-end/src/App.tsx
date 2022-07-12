import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArenaPage from './pages/ArenaPage';
import RankingPage from './pages/RankingPage';


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={ <HomePage/> }/>
          <Route path="/arena" element={ <ArenaPage/> }/>
          <Route path="/ranking" element={ <RankingPage/> }/>
        </Routes>

      <Footer />
    </BrowserRouter> 
  );
}

export default App;
