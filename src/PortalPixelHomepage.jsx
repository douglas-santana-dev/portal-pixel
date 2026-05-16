import './App.css';

const news = [
  {
    id: 1,
    title: "Novo RPG surpreende jogadores",
    description: "Um novo título está dominando o mercado...",
    image: "https://via.placeholder.com/600x300",
    featured: true
  },
  {
    id: 2,
    title: "Atualização muda completamente o meta",
    description: "Patch trouxe mudanças importantes...",
    image: "https://via.placeholder.com/300x200",
    featured: false
  },
  {
    id: 3,
    title: "Console novo chegando",
    description: "Rumores indicam lançamento próximo...",
    image: "https://via.placeholder.com/300x200",
    featured: false
  }
];

export default function PortalPixelHomepage() {
  const featured = news.find(n => n.featured);
  const others = news.filter(n => !n.featured);

  return (
    <div className="container">
      
      {/* HEADER */}
      <header className="header">
        <h1>Portal Pixel</h1>
      </header>

      {/* DESTAQUE */}
      <section className="featured">
        <img src={featured.image} alt={featured.title} />
        <div className="featured-content">
          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
          <button className="btn-primary">Ler mais</button>
        </div>
      </section>

      {/* LISTA */}
      <section className="news-grid">
        {others.map(item => (
          <div className="news-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="btn-primary">Ler mais</button>
          </div>
        ))}
      </section>

    </div>
  );
}