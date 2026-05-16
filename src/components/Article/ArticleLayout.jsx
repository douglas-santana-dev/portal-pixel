import { articles } from "../../data/articles";
import { Link } from "react-router-dom";
import "./ArticleLayout.css";

export default function ArticleLayout({ article }) {

  // 🔥 SEGURANÇA (evita crash)
  if (!article) {
    return <p>Artigo não encontrado</p>;
  }

  // 🔥 RELACIONADOS
  const relatedArticles = articles
    .filter(a => a.slug !== article.slug)
    .sort((a, b) => {
      const aScore =
        (a.subtags?.some(sub => article.subtags?.includes(sub)) ? 2 : 0) +
        (a.tag === article.tag ? 1 : 0);

      const bScore =
        (b.subtags?.some(sub => article.subtags?.includes(sub)) ? 2 : 0) +
        (b.tag === article.tag ? 1 : 0);

      return bScore - aScore || new Date(b.date) - new Date(a.date);
    })
    .slice(0, 2);

  return (
    <main className="article">

      <div className="article-container">

        {/* 🔹 CONTEÚDO PRINCIPAL */}
        <article className="article-main">

          <p className="article-category">
            {article.subtags?.[0] || article.tag}
          </p>

          <h1>{article.title}</h1>

          <div className="article-meta">
            <span>Por Portal Pixel</span>
            <span>{article.date}</span>
          </div>

          <img src={article.image} alt={article.title} />

          <div className="article-content">
            {article.content.split("\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

        </article>

        {/* 🔹 LATERAL */}
        <aside className="article-side">

          <h3>Relacionados</h3>

          {relatedArticles.map(item => (
            <Link 
              to={`/artigo/${item.slug}`} 
              key={item.id}
              state={{ from: "noticias" }}
              className="related-item"
            >
              <img src={item.image} alt={item.title} />
              
              <div>
                <p>{item.title}</p>
              </div>
            </Link>
          ))}

        </aside>

      </div>

    </main>
  );
}