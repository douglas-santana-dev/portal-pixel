import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero({ mainArticle, sideArticles }) {
  return (
    <section className="hero">

      {/* 🔥 DESTAQUE PRINCIPAL */}
      <Link to={`/artigo/${mainArticle.slug}`} className="hero-main">

  <img src={mainArticle.image} alt={mainArticle.title} />

  <div className="hero-main-content">
    <h2>{mainArticle.title}</h2>
    <p>{mainArticle.excerpt}</p>
  </div>

</Link>

      {/* 🔥 LATERAL DIREITA */}
      <div className="hero-side">

  {sideArticles.map(article => (
    <Link to={`/artigo/${article.slug}`} key={article.id} className="hero-card">
      
      <img src={article.image} alt={article.title} />

      <div className="text">
        <span className="tag">
          {article.tag === "dicas" ? "DICAS" : article.subtags[0]}
        </span>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
      </div>

    </Link>
  ))}

</div>

    </section>
  );
}