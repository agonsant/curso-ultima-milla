import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArenaPage from './pages/ArenaPage';
import RankingPage from './pages/RankingPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  const language = "English";
  
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={ <HomePage/> }/>
          <Route path="/arena" element={ <ArenaPage language={language}/> }/>
          <Route path="/ranking" element={ <RankingPage/> }/>
          <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
      <Footer />
    </BrowserRouter> 
  );
}

export default App;
