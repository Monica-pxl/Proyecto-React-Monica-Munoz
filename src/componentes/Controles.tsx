import { useState } from "react";

type ControlesProps = {
  onAdd: (titulo: string, url: string, descripcion: string) => void;
  onToggle: () => void;
  visible: boolean;
  onToggleTheme: () => void;
  isDark: boolean;
};

function Controles({ onAdd, onToggle, onToggleTheme, visible, isDark }: ControlesProps) {

  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [descripcion, setDescripcion] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();

    if (!titulo) {
      alert("Escribe un título");
      return;
    }

    onAdd(titulo, url, descripcion);

    setTitulo("");
    setUrl("");
    setDescripcion("");
  }


  return (
    <section className="controles">
      <div className="controles-form-wrapper">
        <div className="galeria-header">
          <h1>Añadir una tarjeta</h1>
        </div>

        <form className="controles-form" onSubmit={enviar}>
          <div className="input-field titulo">
            <label htmlFor="titulo">Escribe un título llamativo para tu tarjeta</label>
            <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Título" />
          </div>

          <div className="input-field url">
            <label htmlFor="url">Pega aquí la URL de la imagen (debe ser válida)</label>
            <input type="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="URL de imagen" />
          </div>

          <div className="input-field descripcion">
            <label htmlFor="descripcion">Describe tu tarjeta brevemente</label>
            <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} placeholder="Descripción" />
          </div>

          <div className="add-button-field">
            <button type="submit">Añadir</button>
          </div>
        </form>
      </div>


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
