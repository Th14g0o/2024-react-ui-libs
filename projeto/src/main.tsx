import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login.tsx'
import { ChakraProvider } from "@chakra-ui/react";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  </StrictMode>,
)
