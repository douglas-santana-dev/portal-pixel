import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Content from "../components/Content/Content";
import Indications from "../components/Indications/Indications";
import Footer from "../components/Footer/Footer";
import { articles, featuredArticleSlug } from "../data/articles";

export default function Home() {
  const mainArticle = articles.find(
  article => article.slug === featuredArticleSlug
);
  const sideArticles = [...articles]
  .filter(article => article.slug !== featuredArticleSlug)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 4);
  return (
    <>
      <Header />
      <Hero 
      mainArticle={mainArticle}
      sideArticles={sideArticles}
      />
      <Content />
      <Indications />
      <Footer />
    </>
  );
}