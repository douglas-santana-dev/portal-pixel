import "./Footer.css";
import logo from "../../images/logo-portal-pixel.png";
import logo2 from "../../images/logo-portal-pixel2.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

  {/* 🔹 LOGO + DESCRIÇÃO */}
  <div className="footer-brand">
    <img src={logo2} alt="Portal Pixel 2" /> <h1>Portal Pixel</h1>
    <p>
      Portal Pixel é o seu hub favorito de notícias, reviews e dicas sobre mundo Gamer e Tech.
    </p>
  </div>

  {/* 🔥 TODOS OS MENUS DENTRO DE UM ÚNICO CONTAINER */}
  <div className="footer-menus">

    <div className="footer-links">
      <h4>Portal</h4>
      <Link to="/">Home</Link>
      <Link to="/noticias">Notícias</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/dicas">Dicas</Link>
      <Link to="/indicacoes">Pixel Indica</Link>

    </div>

    <div className="footer-links">
      <h4>Categorias</h4>
      <a href="#">Hardware</a>
      <a href="#">Mobile</a>
      <a href="#">Games</a>
      <a href="#">Tecnologia</a>

    </div>

    <div className="footer-social">
      <h4>Redes</h4>
      <a href="#">Instagram</a>
      <a href="#">YouTube</a>
      <a href="#">Discord</a>
    </div>

  </div>

</div>

      {/* 🔻 LINHA FINAL */}
      <div className="footer-bottom">
        © 2026 Portal Pixel — Todos os direitos reservados
      </div>

    </footer>
  );
}