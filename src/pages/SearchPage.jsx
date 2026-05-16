import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useSearchParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import { reviews } from "../data/reviews";
import "./SearchPage.css";

export default function SearchPage() {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const normalizedQuery = query.trim();

  // 🔥 NORMALIZA REVIEWS
  const normalizedReviews = reviews.map(review => ({
    ...review,
    type: "review",
    excerpt: review.veredict || review.excerpt
  }));

  // 🔥 JUNTA TUDO
  const allContent = [
    ...articles.map(a => ({ ...a, type: "article" })),
    ...normalizedReviews
  ];

  // 🔥 FILTRO
  const results = allContent.filter(item => {
    const text = `${item.title} ${item.excerpt} ${item.content}`.toLowerCase();
    return text.includes(normalizedQuery);
  });

  return (
    <>
      <Header />

      <section className="search-page">
        <h1>Resultados para: "{query}"</h1>

        <div className="search-container">
          {results.length > 0 ? (
            results.map(item => (
  <Link 
    to={
      item.type === "review"
        ? `/review/${item.slug}`
        : `/artigo/${item.slug}`
    }
    key={item.id}
    className="search-item"
  >
    <img src={item.image} alt={item.title} />

    <div>
      <span className="tag">
        {item.type === "review" 
          ? "Review" 
          : item.subtags?.[0]}
      </span>

      <h2>{item.title}</h2>
      <p>{item.excerpt}</p>
    </div>
  </Link>
))
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </div>

      </section>

      <Footer />
    </>
  );
}