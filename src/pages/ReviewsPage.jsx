import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { reviews } from "../data/reviews";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./ReviewsPage.css";

function getScoreColor(score) {
  if (score >= 90) return "#ab43f1"; // dourado
  if (score >= 80) return "#4CAF50"; // verde
  if (score >= 70) return "#FF9800"; // laranja
  return "#ea5e5e"; // vermelho
}

export default function ReviewsPage() {

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;

  const sortedReviews = [...reviews]
    .sort((a, b) => new Date(b.date) - new Date(a.date));

      const itemsPerPage = 10;
    
    
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedReviews = sortedReviews.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    const totalPages = Math.ceil(sortedReviews.length / itemsPerPage);
    
   function goToPage(page) {
  setSearchParams({ page: String(page) });
  window.scrollTo(0, 0);
}
  return (
    <>
      <Header />

      <section className="reviews-page">

        <h1>Todos os Reviews</h1>

        <div className="reviews-container">
          {paginatedReviews.map(review => (
            <Link 
              to={`/review/${review.slug}`} 
              state={{ from: "reviews" }}
              className="review-item"
            >
              <img src={review.image} alt={review.title} />

              <div className="info">
                <span className="tag">{review.subtags[0]}</span>
                <h2>{review.title}</h2>
                <p>{review.excerpt}</p>
              </div>

              <div 
                className="score"
                style={{ backgroundColor: getScoreColor(review.score) }}
              >
                {review.score}
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