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

  //Contiene todas las tarjetas de la galeria:
  //El setCards permite modificar ese estado, osea cuando añades, borras, editas tarjeta.
  const [cards, setCards] = useState<Card[]>(elementos.map(item => ({ ...item, likes: 0, liked: false })));

  //Botones: Añadir, Ocultar/Mostrar, Tema Claro/Oscuro:
  //Están aqui con UseState y NO en Controles porque afectan a toda la pagina, no solo a un formulario:
  const [visible, setVisible] = useState(true);
  const [dark, setDark] = useState(false);

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

                //Funciones que provienen de Botones:
                onDelete={() => eliminarCard(c.id)}
                onLike={() => darLike(c.id)}
                onEdit={(nuevoTitulo, nuevaUrl, nuevaDescripcion) =>
                  editarCard(c.id, nuevoTitulo, nuevaUrl, nuevaDescripcion)
                }
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Galeria;
