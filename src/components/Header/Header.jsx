import { useState } from "react";
import logo2 from "../../images/logo-portal-pixel2.png";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [search, setSearch] = useState("");
const navigate = useNavigate();

function handleSearch(e) {
  if (e.key === "Enter" && search.trim() !== "") {
    navigate(`/buscar?q=${encodeURIComponent(search)}`);
  }
}

  return (
    <header className="header">

      {/* 🔹 LADO ESQUERDO: LOGO + NOME */}
      <Link to="/" className="logo-link">
        <div className="header-left">
          <img src={logo2} alt="Portal Pixel 2" />
          <h1>Portal Pixel</h1>
        </div>
      </Link>

      {/* 🔹 MENU (FÁCIL DE EDITAR FUTURAMENTE) */}
      <nav className="header-menu">
        {/* 👉 PARA ADICIONAR NOVO MENU, DUPLIQUE UMA LINHA ABAIXO */}
        <Link to="/">Home</Link>
        <Link to="/noticias">Notícias</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/dicas">Dicas</Link>
        <Link to="/indicacoes">Pixel Indica</Link>
      </nav>

      {/* 🔹 BUSCA */}
      <div className="header-search">
  <div className="search-wrapper">
    <span className="search-icon">
      <svg viewBox="0 0 24 24">
        <path d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </span>

    <input
      type="text"
      placeholder="Buscar artigos..."
      className="search-input"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleSearch}
    />
  </div>
</div>

    </header>
  );
}