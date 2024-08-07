
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import FirstApp from "./FirstApp";
import { AuthProvider } from "./context/AuthContext"; // Asegúrate de importar AuthProvider correctamente

// Configurar el elemento raíz para react-modal
jest.mock("react-modal", () => ({
  setAppElement: jest.fn()
}));

test("renders Portada component at the root route", async () => {
  render(
    <AuthProvider>
      
        <FirstApp />
      
    </AuthProvider>
  );

  // Esperar hasta que el componente Portada se renderice
  await waitFor(() => {
    expect(screen.getByTestId("portada-content")).toBeInTheDocument();
  });
});


