import React from 'react'

type Props = {
	onLike: () => void
	onDelete: () => void
}

const Botones: React.FC<Props> = ({ onLike, onDelete }) => {
	return (
		<div className="botones">
			<button type="button" className="btn-like" onClick={onLike} aria-label="like">👍</button>
			<button type="button" className="btn-delete" onClick={onDelete} aria-label="delete">Eliminar</button>
		</div>
	)
}

export default Botones
