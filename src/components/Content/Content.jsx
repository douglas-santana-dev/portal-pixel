import "./Content.css";
import NewsList from "./NewsList";
import ReviewsList from "./ReviewsList";

export default function Content() {
  return (
    <section className="content">

      {/* 🔥 NOTÍCIAS (70%) */}
      <div className="content-news">
        <NewsList />
      </div>

      {/* 🎮 REVIEWS (30%) */}
      <div className="content-reviews">
        <ReviewsList />
      </div>

    </section>
  );
}