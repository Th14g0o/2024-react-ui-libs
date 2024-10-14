import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading, Text } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.100">
      <Box bg="white" p={6} rounded="md" shadow="md" width="100%" maxW="md">
        <Heading as="h1" size="lg" textAlign="center" mb={10}>
          Entrar
        </Heading>
        <FormControl mt={5} display="flex" justifyContent="center" alignItems="center" id="name">
          <FormLabel bg="blue.400" color="white" borderRadius={0} m={0} p={2}>Nome</FormLabel>
          <Input type="text" placeholder="Digite seu usuario aqui..." p={0} pl={2} py={2}  borderRadius="0px" />
        </FormControl>
        
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button  mt={6} bg="blue.400" color="white" _hover={{ bg: "blue.600"}} type="submit">
            Enviar
          </Button>
        </Box>
        <Text color="gray" textAlign="center" mt={4} fontSize="85%">Cheguei atrasado então não sei do que se trata esse site, mas, se quiser entrar, preencha, e, não vá para lugar nenhum</Text>
      </Box>
    </Box>
  );
};

export default Login;
