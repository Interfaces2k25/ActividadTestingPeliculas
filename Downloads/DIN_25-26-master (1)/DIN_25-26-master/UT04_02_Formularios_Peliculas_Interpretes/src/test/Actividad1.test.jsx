import { describe, test, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import List from '../components/List';

describe("Componente List", () => {
    test('muestra el nombre correctamente pasado por props', () => {

        const nombre = "Leonardo DiCaprio";
        render(
            <List
            foto="foto.jpg"
            nombre={nombre}
            esNota10={false}
          >
            Actor principal
          </List>
          )
        expect(screen.getByText(nombre)).toBeInTheDocument()
    })
    
    it('muestra el título en rojo si la película tiene nota 10', () => {
        render(
          <List
            foto="foto.jpg"
            nombre="Leonardo DiCaprio"
            esNota10={true}
          >
            Actor principal
          </List>
        )
    
        const titulo = screen.getByRole('heading', {
          name: /Leonardo DiCaprio/i,
        })
    
        expect(titulo).toHaveClass('text-red-600')
      })
    
      it('NO muestra el título en rojo si no es nota 10', () => {
        render(
          <List
            foto="foto.jpg"
            nombre="Leonardo DiCaprio"
            esNota10={false}
          >
            Actor principal
          </List>
        )
    
        const titulo = screen.getByRole('heading', {
          name: /Leonardo DiCaprio/i,
        })
    
        expect(titulo).not.toHaveClass('text-red-600')
    })
});
