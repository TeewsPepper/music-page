import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

import { MemoryRouter, Route, Routes } from 'react-router-dom';



describe('Header component', () => {


  test('se renderiza sin errores', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Verifica que el componente Header se renderice correctamente
    expect(screen.getByTestId('main-navigation')).toBeInTheDocument();
  });

  test('navega correctamente al hacer clic en un enlace', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/musica" element={<div>Música</div>} />
        </Routes>
      </MemoryRouter>
    );
    // Simula un clic en el enlace 'Música'
    fireEvent.click(screen.getByText(/Música/i));
    // Verifica que la URL haya cambiado correctamente
    expect(screen.getByText(/Música/i)).toBeInTheDocument();
  });

  

  test('verifica que las clases CSS se apliquen correctamente', () => {
    
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Verifica que las clases CSS esperadas estén presentes en el contenedor principal
    const mainNavigation = screen.getByTestId('main-navigation'); // Selecciona el contenedor principal por su data-testid
    expect(mainNavigation).toHaveClass('navegacion');
    
  });
});


