import React, { useState } from 'react'

type Props = {
  onAdd: (titulo: string, url: string, descripcion: string) => void
  onToggle: () => void
  onToggleTheme: () => void
  visible: boolean
  isDark: boolean
}

const Controles: React.FC<Props> = ({ onAdd, onToggle, visible, onToggleTheme, isDark }) => {
  const [titulo, setTitulo] = useState('')
  const [url, setUrl] = useState('https://via.placeholder.com/400x300?text=Imagen')
  const [descripcion, setDescripcion] = useState('Descripción breve')

  const enviar = (e: React.FormEvent) => {
    e.preventDefault()
    if (!titulo.trim()) return
    onAdd(titulo, url, descripcion)
    setTitulo('')
    setDescripcion('')
  }

  return (
    <section className="controles">
      <form onSubmit={enviar} className="controles-form">
        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" />
        <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL de imagen" />
        <button type="submit">Añadir</button>
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" />
      </form>

      <div className="controles-actions">
        <button type="button" onClick={onToggle}>{visible ? 'Ocultar galería' : 'Mostrar galería'}</button>
        <button type="button" onClick={onToggleTheme}>{isDark ? 'Modo claro' : 'Modo oscuro'}</button>
      </div>
    </section>
  )
}

export default Controles