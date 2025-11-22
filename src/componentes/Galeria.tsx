import { useState } from "react";
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

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  function agregarCard(titulo: string, url: string, descripcion: string) {
    const nuevaCard: Card = { id: Date.now(), titulo, url, descripcion, likes: 0, liked: false };
    setCards([nuevaCard, ...cards]);
  }

  function eliminarCard(id: number) {
    setCards(cards.filter(c => c.id !== id));
  }

  function darLike(id: number) {
    setCards(cards.map(c => {

      if (c.id === id) {

        if (c.liked) {
          return { ...c, likes: c.likes - 1, liked: false };

        }else{
          return { ...c, likes: c.likes + 1, liked: true };
        }
      }
      return c;
    }));
  }

  function editarCard(id: number, nuevoTitulo: string, nuevaUrl: string, nuevaDescripcion: string) {
    setCards(
      cards.map(c => c.id === id ? { ...c, titulo: nuevoTitulo, url: nuevaUrl, descripcion: nuevaDescripcion } : c)
    );
  }


  const handleDrop = (dropIndex: number) => {

    if (draggedIndex === null || draggedIndex === dropIndex) return;
    const newCards = [...cards];
    const [movedCard] = newCards.splice(draggedIndex, 1);
    newCards.splice(dropIndex, 0, movedCard);
    setCards(newCards);
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
                draggable
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
