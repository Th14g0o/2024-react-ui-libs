import React, { useState } from 'react';
import { useNavigate, } from "react-router-dom";
import {
  Box, Button, FormControl, FormLabel, Input, Heading, IconButton,
  Tabs, TabList, Tab, TabPanels, TabPanel,
  useToast
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon  } from '@chakra-ui/icons'

const Login = () => {
  const navegador = useNavigate();

  const [usuarioEntrar, setusuarioEntrar] = useState<string>("");
  const [senhaEntrar, setSenhaEntrar] = useState<string>("");
  const aoMudarUsuarioEntrar = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setusuarioEntrar(evento.target.value);
  }
  const aoMudarSenhaEntrar = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setSenhaEntrar(evento.target.value);
  }


  const [exibirSenhaEntrar, setExibirSenhaEntrar] = useState<boolean>(false);
  const exibeSenhaEntrar = () => setExibirSenhaEntrar(!exibirSenhaEntrar);

  const [exibirSenhaCriar, setExibirSenhaCriar] = useState<boolean>(false);
  const exibeSenhaCriar = () => setExibirSenhaCriar(!exibirSenhaCriar);

  const [exibirSenhaCriarConfirma, setExibirSenhaCriarConfirma] = useState<boolean>(false);
  const exibeSenhaCriarConfirma = () => setExibirSenhaCriarConfirma(!exibirSenhaCriarConfirma);

  const [senhaCriada, setSenhaCriada] = useState<string>("");
  const [senhaCriadaConfirma, setSenhaCriadaConfirma] = useState<string>("");
  const [usuarioCriado, setusuarioCriado] = useState<string>("");

  const aoMudarSenha = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setSenhaCriada(evento.target.value);
  }
  const aoMudarSenhaConfimacao = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setSenhaCriadaConfirma(evento.target.value);
  }
  const aoMudarUsuario = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setusuarioCriado(evento.target.value);
  }

  const aviso = useToast();

  const entrarEnviar = () => {
    let erro = false;

    if (!usuarioEntrar) {
      aviso({
        position: 'top',
        title: "Usuario invalido.",
        status: "warning",
        isClosable: true,
      })
      erro = true;
    };

    if (!senhaEntrar) {
      aviso({
        position: 'top',
        title: "Senha invalida.",
        status: "warning",
        isClosable: true,
      })
      erro = true;
    };

    if(!erro) navegador('lista/');
  }
  const criarEnviar = () => {
    let erro = false;

    if (!usuarioCriado) {
      aviso({
        position: 'top',
        title: "Usuario invalido.",
        status: "warning",
        isClosable: true,
      })
      erro = true;
    };

    if (senhaCriada != senhaCriadaConfirma) {
      aviso({
        position: 'top',
        title: "A senha esta diferente da Confirmação da senha, corrija isso",
        status: "warning",
        isClosable: true,
      })
      erro = true;
    };

    if (senhaCriada.length < 1) {
      aviso({
        position: 'top',
        title: "Tamanho da senha Invalido.",
        status: "warning",
        isClosable: true,
      });
      erro = true;
    };
    
    if (!erro) navegador('lista/');
  }

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.100">
      <Box bg="white" p={6} rounded="md" shadow="md" width="590px" >
        <Tabs size='md'>
          <TabList >
            <Tab>
              <Heading as="h1" size="lg" textAlign="center" >
                Entrar
              </Heading>
            </Tab>
            <Tab>
              <Heading as="h1" size="lg" textAlign="center" >
                Cadastrar
              </Heading>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FormControl mt={2} display="flex" justifyContent="center" alignItems="center">
                <FormLabel bg="blue.400" color="white" borderRadius={0} m={0} p={2}>Nome</FormLabel>
                <Input value={usuarioEntrar} onChange={aoMudarUsuarioEntrar} type="text" placeholder="Digite seu usuario aqui..." p={0} pl={2} py={2} borderRadius="0px" id="usuarioEntrar" name="usuarioEntrar"/>
              </FormControl>

              <FormControl mt={5} display="flex" justifyContent="center" alignItems="center">
                <FormLabel bg="blue.400" color="white" borderRadius={0} m={0} p={2}>Senha</FormLabel>
                <Input value={senhaEntrar} onChange={aoMudarSenhaEntrar} type={!exibirSenhaEntrar ? 'password' : 'text'} placeholder="Digite sua senha aqui..." p={0} pl={2} py={2} borderRadius="0px" id="senhaEntrar" name="senhaEntrar"/>
                <IconButton onClick={exibeSenhaEntrar} rounded="0" bg="blue.400" _hover={{ bg: 'blue.500' }} color='white' aria-label='Search database' icon={exibirSenhaEntrar ? <ViewOffIcon /> : <ViewIcon />} />
              </FormControl>

              <Box display="flex" justifyContent="center" alignItems="center">
                <Button onClick={entrarEnviar} mt={6} bg="blue.400" color="white" _hover={{ bg: "blue.600" }} type="submit">
                  Entrar
                </Button>
              </Box>
            </TabPanel>
            <TabPanel>
              <FormControl mt={2} display="flex" justifyContent="center" alignItems="center">
                <FormLabel bg="blue.400" color="white" borderRadius={0} m={0} p={2}>Nome</FormLabel>
                <Input value={usuarioCriado} onChange={aoMudarUsuario} type="text" placeholder="Digite seu usuario aqui..." p={0} pl={2} py={2} borderRadius="0px" id="usuarioCriar" name='usuarioCriar'/>
              </FormControl>

              <FormControl  mt={5} display="flex" justifyContent="center" alignItems="center">
                <FormLabel bg="blue.400" color="white" borderRadius={0} m={0} p={2}>Senha</FormLabel>
                <Input value={senhaCriada} onChange={aoMudarSenha} type={!exibirSenhaCriar ? 'password' : 'text'} placeholder="Digite sua senha aqui..." p={0} pl={2} py={2} borderRadius="0px" id="senhaCriar" name="senhaCriar"/>
                <IconButton onClick={exibeSenhaCriar}  rounded="0" bg="blue.400" _hover={{ bg: 'blue.500' }} color='white' aria-label='Search database' icon={exibirSenhaCriar ? <ViewOffIcon /> : <ViewIcon />} />
              </FormControl>

              <FormControl  mt={5} display="flex" justifyContent="center" alignItems="center" >
                <FormLabel width="200px" bg="blue.400" color="white" borderRadius={0} m={0} p={2}>Confirme Senha</FormLabel>
                <Input value={senhaCriadaConfirma} onChange={aoMudarSenhaConfimacao} type={!exibirSenhaCriarConfirma ? 'password' : 'text'} placeholder="Digite sua senha aqui..." p={0} pl={2} py={2} borderRadius="0px" id="senhaConfirmar" name="senhaConfirmar"/>
                <IconButton onClick={exibeSenhaCriarConfirma} rounded="0" bg="blue.400" _hover={{ bg: 'blue.500' }} color='white' aria-label='Search database' icon={exibirSenhaCriarConfirma ? <ViewOffIcon /> : <ViewIcon />} />
              </FormControl>

              <Box display="flex" justifyContent="center" alignItems="center">
                <Button onClick={criarEnviar} mt={6} bg="blue.400" color="white" _hover={{ bg: "blue.600" }} type="submit">
                  Criar
                </Button>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Login;
