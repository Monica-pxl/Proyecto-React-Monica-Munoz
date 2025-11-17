import React, { useState } from 'react'
import { elementos } from '../data/data'
import Tarjeta from './Tarjeta'
import Controles from './Controles'

export type Card = {
  id: number
  titulo: string
  url: string
  descripcion: string
  likes?: number
}

const Galeria: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(() => elementos.map((e) => ({ ...e, likes: 0 })))
  const [visible, setVisible] = useState(true)
  const [themeDark, setThemeDark] = useState(false)

  const agregar = (titulo: string, url: string, descripcion: string) => {
    const nueva: Card = {
      id: Date.now(),
      titulo,
      url,
      descripcion,
      likes: 0
    }
    setCards((prev) => [nueva, ...prev])
  }

  const eliminar = (id: number) => {
    setCards((prev) => prev.filter((c) => c.id !== id))
  }

  const toggleMostrar = () => setVisible((v) => !v)
  const toggleTheme = () => setThemeDark((t) => !t)

  const incrementarLike = (id: number) => {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, likes: (c.likes || 0) + 1 } : c)))
  }

  return (
    <div className={`galeria ${themeDark ? 'theme-dark' : 'theme-light'}`}>
      <header className="galeria-header">
        <h1>Galería de tarjetas</h1>
      </header>

      <main className="galeria-main">
        <Controles
          onAdd={agregar}
          onToggle={toggleMostrar}
          onToggleTheme={toggleTheme}
          visible={visible}
          isDark={themeDark}
        />

        {!visible ? (
          <p className="galeria-hidden">Galería oculta</p>
        ) : (
          <div className="galeria-grid">
            {cards.map((card) => (
              <Tarjeta
                key={card.id}
                titulo={card.titulo}
                url={card.url}
                descripcion={card.descripcion}
                likes={card.likes || 0}
                onDelete={() => eliminar(card.id)}
                onLike={() => incrementarLike(card.id)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Galeria
