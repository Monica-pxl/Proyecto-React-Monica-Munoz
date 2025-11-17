import React from 'react'
import Botones from './Botones'

type Props = {
	titulo: string
	url: string
	descripcion: string
	likes: number
	onDelete: () => void
	onLike: () => void
}

const Tarjeta: React.FC<Props> = ({ titulo, url, descripcion, likes, onDelete, onLike }) => {
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
					<Botones onLike={onLike} onDelete={onDelete} />
				</div>
			</div>
		</article>
	)
}

export default Tarjeta
