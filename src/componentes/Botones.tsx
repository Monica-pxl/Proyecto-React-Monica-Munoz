import { useRef } from "react"

type Props = {
	onLike: () => void
	onDelete: () => void
	onEdit: () => void
}

function Botones({ onDelete, onLike, onEdit }: Props) {
	const lastTouchLikeAt = useRef(0)

	function handleLikeTouchEnd(event: React.TouchEvent<HTMLButtonElement>) {
		event.preventDefault()
		event.stopPropagation()
		lastTouchLikeAt.current = Date.now()
		onLike()
	}

	function handleLikeClick() {
		if (Date.now() - lastTouchLikeAt.current < 800) return
		onLike()
	}

	return (
		<div className="botones">
			<button
				type="button"
				className="btn-like"
				onClick={handleLikeClick}
				onTouchEnd={handleLikeTouchEnd}
				aria-label="like"
			>
				👍
			</button>
			<button type="button" className="btn-delete" onClick={onDelete} aria-label="delete">Eliminar</button>
			<button type="button" className="btn-edit" onClick={onEdit} aria-label="edit">Editar</button>
		</div>
	)
}

export default Botones
