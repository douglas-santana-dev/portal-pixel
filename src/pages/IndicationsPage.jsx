import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { articles } from "../data/articles";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./IndicationsPage.css";

export default function IndicationsPage() {

    const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const sortedIndications = articles
    .filter(a => a.tag === "indicacao")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const itemsPerPage = 12;

const startIndex = (currentPage - 1) * itemsPerPage;
const paginatedIndications = sortedIndications.slice(
  startIndex,
  startIndex + itemsPerPage
);

const totalPages = Math.ceil(sortedIndications.length / itemsPerPage);

function goToPage(page) {
  setSearchParams({ page: String(page) });
  window.scrollTo(0, 0);
}

  return (
    <>
      <Header />

      <section className="indications-page">
        <h1>Pixel Indica</h1>

        <div className="indications-grid">
          {paginatedIndications.map(item => (
            <Link 
              to={`/artigo/${articles.slug}`} 
              state={{ from: "indicacoes" }}
              className="indications-card"
            >
              <img src={item.image} alt={item.title} />

              <div className="content">
                <span>{item.subtags[0]}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
            <div className="pagination">

  <button 
    onClick={() => goToPage(currentPage - 1)}
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