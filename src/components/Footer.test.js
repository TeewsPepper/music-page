import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('se renderiza sin errores', () => {
  render(<Footer />);
  expect(screen.getByText(/AlvarengaGrooves 2024/)).toBeInTheDocument();
});

test('muestra el texto correcto en el pie de página', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/AlvarengaGrooves 2024 ©Todos los derechos reservados/);
    expect(footerElement).toBeInTheDocument();
  });

  test('verifica que las clases CSS se apliquen correctamente', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/AlvarengaGrooves 2024 ©Todos los derechos reservados/);
    expect(footerElement).toHaveClass('footer');
    
  });
  
  
