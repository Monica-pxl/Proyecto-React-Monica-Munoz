import { useState } from "react";

type ControlesProps = {
  onAdd: (titulo: string, url: string, descripcion: string) => void;
  onToggle: () => void;
  onToggleTheme: () => void;
  visible: boolean;
  isDark: boolean;
};

function Controles({ onAdd, onToggle, onToggleTheme, visible, isDark }: ControlesProps) {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [descripcion, setDescripcion] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();

    if (titulo.trim() === "") return;

    onAdd(titulo, url, descripcion);

    setTitulo("");
    setDescripcion("");
    setUrl("");
  }

  return (
    <section className="controles">
      <form onSubmit={enviar} className="controles-form">
        <div className="input-button-group">
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título"
          />
        </div>

        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL de imagen"
        />

        <button type="submit">Añadir</button>

        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
        />

      </form>

      <div className="controles-actions">
        <button onClick={onToggle}>
          {visible ? "Ocultar galería" : "Mostrar galería"}
        </button>

        <button onClick={onToggleTheme}>
          {isDark ? "Modo claro ☀️​" : "Modo oscuro 🌙​"}
        </button>
      </div>
    </section>
  );
}

export default Controles;
