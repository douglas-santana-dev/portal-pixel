import "./ReviewsList.css";
import { reviews } from "../../data/reviews";
import { Link } from "react-router-dom";

export default function ReviewsList() {

  const latestReviews = [...reviews]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 4);

  function getScoreColor(score) {
  if (score >= 90) return "#ab43f1"; // Roxo
  if (score >= 80) return "#4CAF50"; // Verde
  if (score >= 70) return "#FF9800"; // Laranja
  return "#ea5e5e"; // Vermelho
}

  return (
    <section className="reviews-list">

      <h1>Reviews</h1>

      <div className="reviews-grid">
        {latestReviews.map(review => (
          <Link 
            to={`/review/${review.slug}`} 
            key={review.id} 
            className="review-card"
          >
            <img src={review.image} alt={review.title} />

            <div className="content">
              <span className="tag">{review.subtags[0]}</span>
              <h3>{review.title}</h3>

              {/* 🔥 NOTA */}
              <div 
  className="score"
  style={{ backgroundColor: getScoreColor(review.score) }}
>
  {review.score}
</div>
            </div>

          </Link>
        ))}
      </div>
      <div className="see-all">
  <Link to="/reviews">Ver todos os reviews &gt;</Link>
</div>

    </section>
  );
}