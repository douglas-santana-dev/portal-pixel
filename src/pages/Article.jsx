import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ArticleLayout from "../components/Article/ArticleLayout";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { articles } from "../data/articles";

export default function Article() {

  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();
  const [searchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;

  // 🔥 BUSCA O ARTIGO
  const article = articles.find(a => a.slug === slug);

  const handleBack = () => {
    const from = location.state?.from;

    if (from === "home") return navigate("/");
    if (from === "noticias") return navigate("/noticias");
    if (from === "dicas") return navigate("/dicas");
    if (from === "indicacoes") return navigate("/indicacoes");
    if (from === "reviews") return navigate("/reviews");

    return navigate("/noticias");
  };

  if (!article) {
    return (
      <>
        <Header />
        <div style={{ padding: "40px" }}>
          <h2>Artigo não encontrado</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <button onClick={handleBack} className="back-button">
        ← Voltar
      </button>

      <ArticleLayout article={article} />

      <Footer />
    </>
  );
}