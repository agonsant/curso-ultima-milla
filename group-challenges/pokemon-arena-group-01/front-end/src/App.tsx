import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UserOponent from './pages/UserOponent';
import ArenaPage from './pages/ArenaPage';
import RankingPage from './pages/RankingPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={ <HomePage/> }/>
          <Route path="/useroponent" element={ <UserOponent/> }/>
          <Route path="/arena" element={ <ArenaPage /> }/>
          <Route path="/ranking" element={ <RankingPage/> }/>
          <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
