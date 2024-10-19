import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './paginas/Login.tsx';
import Lista from './paginas/Lista.tsx';
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "lista",
    element: <Lista />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={Rotas} />
    </ChakraProvider>
  </StrictMode>,
)
