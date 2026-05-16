import "./NewsList.css";
import { Link } from "react-router-dom";

export default function NewsList({ articles, page }) {
  return (
    <div className="news-list">
        
      {articles.map(article => (
        
        <Link
          key={article.id}
          to={`/artigo/${article.slug}`}
          state={{ from: "noticias", page }}
          className="news-card card-hover"
        >

          <img src={article.image} alt={article.title} />

          <div className="news-content">
            <span className="tag">{article.subtags[0]}</span>
            <h3 className="news-title">{article.title}</h3>
            <p className="news-excerpt">{article.excerpt}</p>
            <span className="news-readmore">Ler notícia completa →</span>
          </div>

        </Link>

      ))}
    </div>
  );
}