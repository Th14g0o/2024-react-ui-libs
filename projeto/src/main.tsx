import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './paginas/Login.tsx';
import Lista from './paginas/Lista.tsx';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="lista" element={<Lista />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
