import Botones from "./Botones";

type TarjetaProps = {
  titulo: string;
  url: string;
  descripcion: string;
  likes: number;
  onDelete: () => void;
  onLike: () => void;
  onEdit: () => void;
};

function Tarjeta({ titulo, url, descripcion, likes, onDelete, onLike, onEdit }: TarjetaProps) {
  return (
    <article className="tarjeta">
      <div className="tarjeta-media">
        <img src={url} alt={titulo} />
      </div>

      <div className="tarjeta-body">
        <h3 className="tarjeta-title">{titulo}</h3>
        <p className="tarjeta-desc">{descripcion}</p>

        <div className="tarjeta-row">
          <small className="tarjeta-likes">{likes} likes</small>
          <Botones onLike={onLike} onDelete={onDelete} onEdit={onEdit}/>
        </div>
      </div>
    </article>
  );
}

export default Tarjeta;
