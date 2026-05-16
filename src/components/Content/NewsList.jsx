import "./NewsList.css";
import { articles, featuredArticleSlug } from "../../data/articles";
import { Link } from "react-router-dom";

export default function NewsList() {

  const sortedArticles = [...articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const filteredArticles = sortedArticles.filter(
    article => article.slug !== featuredArticleSlug
  );

  const newsList = filteredArticles.slice(4, 9);

  return (
    <section className="news-page-home">

      <h1>Últimos Posts</h1>

      <div className="news-container-home">
        {newsList.map(article => (
          <Link 
            to={`/artigo/${article.slug}`} 
            key={article.id} 
            className="news-item-home"
          >
            <img src={article.image} alt={article.title} />

            <div className="news-info-home">
              <span className="tag">
                {article.tag === "dicas" ? "DICAS" : article.subtags[0]}
              </span>
              <p className="date">{article.date}</p>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>  
            </div>
          </Link>
        ))}
      </div>

      <div className="see-all">
        <Link to="/noticias">Ver todas as notícias &gt;</Link>
      </div>

    </section>
  );
}