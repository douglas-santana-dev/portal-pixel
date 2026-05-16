import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { reviews } from "../data/reviews";
import { useNavigate, useLocation } from "react-router-dom";
import "./ReviewsArticle.css";

function getScoreColor(score) {
  if (score >= 90) return "#ab43f1";
  if (score >= 80) return "#4CAF50";
  if (score >= 70) return "#FF9800";
  return "#ea5e5e";
}

function getScoreLabel(score) {
  if (score >= 90) return "SELO PIXEL";
  if (score >= 80) return "ÓTIMO JOGO";
  if (score >= 70) return "DA PRA JOGAR";
  return "FRACO";
}

export default function ReviewsArticle() {
  
const navigate = useNavigate();
const location = useLocation();

  const { slug } = useParams();

  const review = reviews.find(r => r.slug === slug);

const handleBack = () => {
  const from = location.state?.from;

  if (from === "home") return navigate("/");
  if (from === "noticias") return navigate("/noticias");
  if (from === "dicas") return navigate("/dicas");
  if (from === "indicacoes") return navigate("/indicacoes");
  if (from === "reviews") return navigate("/reviews");

  return navigate("/reviews"); // fallback
};

  if (!review) {
    return <h1>Review não encontrado</h1>;
  }

  return (
    <>
      <Header />

      <button className="back-button" onClick={handleBack}>
        ← Voltar
      </button>

      <article className="review-article">

        {/* CAPA */}
        <img 
          src={review.image} 
          alt={review.title} 
          className="review-article-cover" 
        />

        <div className="review-article-content">

          <span className="review-article-tag">
            {review.subtags[0]}
          </span>

          <h1 className="review-article-title">
            {review.title}
          </h1>

          <p className="review-article-date">
            {review.date}
          </p>

          {/* TEXTO EM PARÁGRAFOS */}
          <div className="review-article-text">
            {review.content.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* 🔥 BLOCO FINAL DE REVIEW */}
          <div className="review-article-verdict">

  <h3>Veredito Final</h3>

  <span className="verdict-label">
    {getScoreLabel(review.score)}
  </span>

  <div 
    className="verdict-score"
    style={{ backgroundColor: getScoreColor(review.score) }}
  >
    {review.score}
  </div>

  <p className="verdict-text">
    {review.veredict}
  </p>

</div>

        </div>

      </article>

      <Footer />
    </>
  );
}