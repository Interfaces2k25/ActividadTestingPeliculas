import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import List from '../components/List'

describe('Componente List – children e imagen', () => {
  it('renderiza correctamente el contenido pasado por children', () => {
    render(
      <List
        foto="foto.jpg"
        nombre="Meryl Streep"
        esNota10={false}
      >
        Actriz ganadora de múltiples premios Oscar
      </List>
    )

    // El texto pasado como children debe aparecer en el documento
    expect(
      screen.getByText(/Actriz ganadora de múltiples premios Oscar/)
    ).toBeInTheDocument()
  })

  it('la imagen tiene el atributo alt correcto basado en el nombre', () => {
    render(
      <List
        foto="foto.jpg"
        nombre="Meryl Streep"
        esNota10={false}
      >
        Biografía de la actriz
      </List>
    )

    const imagen = screen.getByRole('img')

    expect(imagen).toHaveAttribute(
      'alt',
      'Foto de Meryl Streep'
    )
  })
})
