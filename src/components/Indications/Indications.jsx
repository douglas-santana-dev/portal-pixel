import "./Indications.css";
import { articles } from "../../data/articles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Indications() {

  // 🔥 RESPONSIVO REAL (reage ao resize)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

function handleTouchStart(e) {
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
}

function handleTouchMove(e) {
  setTouchEnd(e.targetTouches[0].clientX);
}

function handleTouchEnd() {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;

  const isLeftSwipe = distance > minSwipeDistance;
  const isRightSwipe = distance < -minSwipeDistance;

  if (isLeftSwipe) nextSlide();
  if (isRightSwipe) prevSlide();
}

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 CONFIGURAÇÕES DINÂMICAS
  const itemsPerSlide = isMobile ? 2 : 4;
  const maxItems = isMobile ? 5 : 11;

  // 🔥 FILTRO + ORDENA + LIMITE
  const indications = articles
    .filter(a => a.tag === "indicacao")
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, maxItems);

  const [currentSlide, setCurrentSlide] = useState(0);

  // 🔥 RESET SLIDE AO TROCAR DE TAMANHO
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  // 🔥 CRIA SLIDES
  const slides = [];
  for (let i = 0; i < indications.length; i += itemsPerSlide) {
    slides.push(indications.slice(i, i + itemsPerSlide));
  }

  // 🔥 GARANTE "VER MAIS"
  if (slides.length > 0) {
    const lastSlide = slides[slides.length - 1];

    if (lastSlide.length === itemsPerSlide) {
      slides.push(["VER_MAIS"]);
    } else {
      lastSlide.push("VER_MAIS");
    }
  }

  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }

  return (
    <section className="indications">

      <h1>Pixel Indica</h1>

      <div className="slider">

        {/* BOTÃO ESQUERDA */}
        {currentSlide > 0 && (
          <button className="nav left" onClick={prevSlide}>❮</button>
        )}

        <div 
  className="slides"
  style={{ transform: `translateX(-${currentSlide * 100}%)` }}

  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
          {slides.map((slide, index) => (
            <div className="slide" key={index}>

              {slide.map((item, i) => {

                // 🔥 CARD "VER MAIS"
                if (item === "VER_MAIS") {
                  return (
                    <Link 
                      to="/indicacoes" 
                      className="see-all-card"
                      key={i}
                    >
                      Ver todas as indicações →
                    </Link>
                  );
                }

                // 🔥 CARD NORMAL
                return (
                  <Link 
                    to={`/artigo/${item.slug}`} 
                    key={item.id} 
                    state={{ from: "indicacoes" }}
                    className="card"
                  >
                    <img src={item.image} alt={item.title} />

                    <div className="content">
                      <span><strong>{item.subtags?.[0]}</strong></span>

                      <h3>{item.title}</h3>

                      <p className="excerpt">
                        {item.excerpt}
                      </p>
                    </div>
                  </Link>
                );

              })}

            </div>
          ))}
        </div>

        {/* BOTÃO DIREITA */}
        {currentSlide < slides.length - 1 && (
          <button className="nav right" onClick={nextSlide}>❯</button>
        )}

      </div>

    </section>
  );
}