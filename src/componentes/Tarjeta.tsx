import { useState } from "react";
import Botones from "./Botones";

type TarjetaProps = {
  titulo: string;
  url: string;
  descripcion: string;
  likes: number;
  onDelete: () => void;
  onLike: () => void;
  onEdit: (nuevoTitulo: string, nuevaUrl: string, nuevaDescripcion: string) => void;
};

function Tarjeta({ titulo, url, descripcion, likes, onDelete, onLike, onEdit }: TarjetaProps) {
  const [editMode, setEditMode] = useState(false);
  const [newTitulo, setNewTitulo] = useState(titulo);
  const [newUrl, setNewUrl] = useState(url);
  const [newDescripcion, setNewDescripcion] = useState(descripcion);

  const handleSave = () => {
    onEdit(newTitulo, newUrl, newDescripcion);
    setEditMode(false);
  };

  return (
    <article className="tarjeta">
      <div className="tarjeta-media">
        <img src={editMode ? newUrl : url} alt={titulo} />
      </div>

      <div className="tarjeta-body">
        {editMode ? (
          <div className="controles-form" style={{ gap: "8px", flexDirection: "column" }}>
            <input
              className="controles-form-input"
              value={newTitulo}
              onChange={(e) => setNewTitulo(e.target.value)}
              placeholder="Título"
            />
            <input
              className="controles-form-input"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="URL de imagen"
            />
            <textarea
              className="controles-form-textarea"
              value={newDescripcion}
              onChange={(e) => setNewDescripcion(e.target.value)}
              placeholder="Descripción"
            />
            <div className="botones">
              <button className="btn-edit" onClick={handleSave}>Guardar</button>
              <button className="btn-delete" onClick={() => setEditMode(false)}>Cancelar</button>
            </div>
          </div>
        ) : (
          <>
            <h3 className="tarjeta-title">{titulo}</h3>
            <p className="tarjeta-desc">{descripcion}</p>
            <div className="tarjeta-row">
              <small className="tarjeta-likes">
                {likes} {likes === 1 ? "like" : "likes"}
              </small>
              <Botones
                onLike={onLike}
                onDelete={onDelete}
                onEdit={() => setEditMode(true)}
              />
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default Tarjeta;
