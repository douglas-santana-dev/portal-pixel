import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { articles } from "../data/articles";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./NewsPage.css";


export default function NewsPage() {
const [searchParams, setSearchParams] = useSearchParams();

const currentPage = parseInt(searchParams.get("page")) || 1;

  const sortedArticles = articles
  .filter(article => article.tag?.toLowerCase() === "noticia")
  .sort((a, b) => new Date(b.date) - new Date(a.date));

  const itemsPerPage = 10;

const startIndex = (currentPage - 1) * itemsPerPage;
const paginatedArticles = sortedArticles.slice(
  startIndex,
  startIndex + itemsPerPage
);

const totalPages = Math.ceil(sortedArticles.length / itemsPerPage);

function goToPage(page) {
  setSearchParams({ page: String(page) });
  window.scrollTo(0, 0);
}

  return (
    <>
      <Header />

      <section className="news-page">

        <h1>Todas as Notícias</h1>

        <div className="news-container">
          {paginatedArticles.map(article => (
            <Link 
              to={`/artigo/${article.slug}`} 
              state={{ from: "noticias" }}
              className="news-item"
            >
              <img src={article.image} alt={article.title} />

              <div className="info">
                <span className="tag">{article.subtags[0]}</span>
                <p className="date">{article.date}</p>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
              </div>

            </Link>
          ))}
        </div>
        <div className="pagination">

  <button 
    onClick={() => goToPage(prev => prev - 1)}
    disabled={currentPage === 1}
  >
    ←
  </button>

  <span>Página {currentPage} de {totalPages}</span>

  <button 
    onClick={() => goToPage(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    →
  </button>

</div>

      </section>

      <Footer />
    </>
  );
}