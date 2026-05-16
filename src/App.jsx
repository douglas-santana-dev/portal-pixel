import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Article from "./pages/Article";
import Noticias from "./pages/NewsPage";
import ReviewsPage from "./pages/ReviewsPage";
import ReviewsArticle from "./pages/ReviewsArticle";
import IndicationsPage from "./pages/IndicationsPage";
import DicasPage from "./pages/DicasPage";
import SearchPage from "./pages/SearchPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/artigo/:slug" element={<Article />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/review/:slug" element={<ReviewsArticle />} />
        <Route path="/indicacoes" element={<IndicationsPage />} />
        <Route path="/dicas" element={<DicasPage />} />
        <Route path="/buscar" element={<SearchPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;