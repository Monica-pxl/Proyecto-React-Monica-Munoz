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
};

function Galeria() {
  const [cards, setCards] = useState<Card[]>(elementos.map(item => ({ ...item, likes: 0 })));
  const [visible, setVisible] = useState(true);
  const [dark, setDark] = useState(false);

  function agregarCard(titulo: string, url: string, descripcion: string) {
    const nuevaCard: Card = { id: Date.now(), titulo, url, descripcion, likes: 0 };
    setCards([nuevaCard, ...cards]);
  }

  function eliminarCard(id: number) {
    setCards(cards.filter(c => c.id !== id));
  }

  function darLike(id: number) {
    setCards(
      cards.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c)
    );
  }

  function editarCard(id: number, nuevoTitulo: string, nuevaUrl: string, nuevaDescripcion: string) {
    setCards(
      cards.map(c => c.id === id ? { ...c, titulo: nuevoTitulo, url: nuevaUrl, descripcion: nuevaDescripcion } : c)
    );
  }

  return (
    <div className={`galeria ${dark ? "theme-dark" : "theme-light"}`}>
      <header className="galeria-header">
        <h1>Galería</h1>
      </header>

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
            {cards.map(c => (
              <Tarjeta
                key={c.id}
                titulo={c.titulo}
                url={c.url}
                descripcion={c.descripcion}
                likes={c.likes}
                onDelete={() => eliminarCard(c.id)}
                onLike={() => darLike(c.id)}
                onEdit={() => {
                  const nuevoTitulo = prompt("Nuevo título", c.titulo) || c.titulo;
                  const nuevaUrl = prompt("Nueva URL de imagen", c.url) || c.url;
                  const nuevaDescripcion = prompt("Nueva descripción", c.descripcion) || c.descripcion;

                  editarCard(c.id, nuevoTitulo, nuevaUrl, nuevaDescripcion);
                }}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Galeria;
