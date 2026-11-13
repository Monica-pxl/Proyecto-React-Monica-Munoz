import { useEffect, useState } from "react";
import { elementos } from "../data/data";
import Tarjeta from "./Tarjeta";
import Controles from "./Controles";

export type Card = {
  id: number;
  titulo: string;
  url: string;
  descripcion: string;
  likes: number;
  liked: boolean
};

function Galeria() {

  const [cards, setCards] = useState<Card[]>(elementos.map(item => ({ ...item, likes: 0, liked: false })));
  const [visible, setVisible] = useState(true);
  const [dark, setDark] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(() =>
    window.matchMedia("(hover: none) and (pointer: coarse)").matches
  );

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
    const updateTouchDevice = () => setIsTouchDevice(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateTouchDevice);
    return () => mediaQuery.removeEventListener("change", updateTouchDevice);
  }, []);

  function agregarCard(titulo: string, url: string, descripcion: string) {
    const nuevaCard: Card = { id: Date.now(), titulo, url, descripcion, likes: 0, liked: false };
    setCards(currentCards => [nuevaCard, ...currentCards]);
  }

  function eliminarCard(id: number) {
    setCards(currentCards => currentCards.filter(c => c.id !== id));
  }

  function darLike(id: number) {
    setCards(currentCards => currentCards.map(card => {
      if (card.id !== id) return card;
      const liked = !card.liked;
      return { ...card, liked, likes: card.likes + (liked ? 1 : -1) };
    }));
  }

  function editarCard(id: number, nuevoTitulo: string, nuevaUrl: string, nuevaDescripcion: string) {
    setCards(currentCards =>
      currentCards.map(card => card.id === id
        ? { ...card, titulo: nuevoTitulo, url: nuevaUrl, descripcion: nuevaDescripcion }
        : card
      )
    );
  }


  const handleDrop = (dropIndex: number) => {

    if (draggedIndex === null || draggedIndex === dropIndex) return;
    setCards(currentCards => {
      const newCards = [...currentCards];
      const [movedCard] = newCards.splice(draggedIndex, 1);
      newCards.splice(dropIndex, 0, movedCard);
      return newCards;
    });
    setDraggedIndex(null);
  };


  return (
    <div className={`galeria ${dark ? "theme-dark" : "theme-light"}`}>
      <main className="galeria-main">
        <Controles
          onAdd={agregarCard}
          onToggle={() => setVisible(!visible)}
          onToggleTheme={() => setDark(!dark)}
          visible={visible}
          isDark={dark}
        />

        {!visible ? (
          <p className="galeria-hidden">Galería oculta</p>
        ) : (
          <div className="galeria-grid">
            {cards.map((c, index) => (
              <div
                key={c.id}
                draggable={!isTouchDevice}
                onDragStart={() => setDraggedIndex(index)}
                onDragOver={e => e.preventDefault()} 
                onDrop={() => handleDrop(index)}
              >
                <Tarjeta
                  titulo={c.titulo}
                  url={c.url}
                  descripcion={c.descripcion}
                  likes={c.likes}
                  onDelete={() => eliminarCard(c.id)}
                  onLike={() => darLike(c.id)}
                  onEdit={(nuevoTitulo, nuevaUrl, nuevaDescripcion) =>
                    editarCard(c.id, nuevoTitulo, nuevaUrl, nuevaDescripcion)
                  }
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Galeria;
