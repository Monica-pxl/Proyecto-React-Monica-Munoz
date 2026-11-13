type Props = {
	onLike: () => void
	onDelete: () => void
	onEdit: () => void
}

function Botones({ onDelete, onLike, onEdit }: Props) {
	return (
		<div className="botones">
			<button type="button" className="btn-like" onClick={onLike} aria-label="like">👍</button>
			<button type="button" className="btn-delete" onClick={onDelete} aria-label="delete">Eliminar</button>
			<button type="button" className="btn-edit" onClick={onEdit} aria-label="edit">Editar</button>
		</div>
	)
}

export default Botones
