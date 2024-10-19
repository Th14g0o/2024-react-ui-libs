import React, { useRef, useState } from 'react';
import { useNavigate, } from "react-router-dom";
import {
    Box, Heading, Text, IconButton, FormLabel, FormControl, Input, Stack, ButtonGroup, Button, Textarea,
    Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel,
    Menu, MenuButton, MenuList, MenuItem,
    CircularProgress, CircularProgressLabel,
    Popover, PopoverTrigger, FocusLock, PopoverContent, useDisclosure,
    AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter

} from "@chakra-ui/react";
import { ArrowBackIcon, HamburgerIcon, DeleteIcon, EditIcon, AddIcon, CheckIcon, CheckCircleIcon, SpinnerIcon } from '@chakra-ui/icons'

interface Tarefa {
    idTarefa: number;
    titulo: string;
    descricao: string;
    ehFinalizado: boolean;
    dtCriado: string;
    dtAlterado: string;
}

interface TarefaAcordeaoProps extends Tarefa {
    atualizarTarefa: (id: number, titulo: string, descricao: string) => void;
    excluirTarefa: (idTarefa: number) => void;
}

const TarefaAcordeao: React.FC<TarefaAcordeaoProps> = ({ titulo, descricao, ehFinalizado, dtCriado, dtAlterado, idTarefa, atualizarTarefa, excluirTarefa }) => {
    const { isOpen: isPopoverOpen, onOpen: onPopoverOpen, onClose: onPopoverClose } = useDisclosure();
    const firstFieldRef = useRef<HTMLInputElement>(null);
    const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure();
    const cancelRef = useRef<HTMLInputElement>(null);

    const [tituloAtual, setNovoTitulo] = useState(titulo);
    const [descricaoAtual, setNovaDescricao] = useState(descricao);

    const escutaModificacaoTexto = (evento: any) => {
        setNovoTitulo(evento.target.value);
    }
    const escutaModificacaoDesc = (evento: any) => {
        setNovaDescricao(evento.target.value);
    }

    const salvarEdicao = () => {
        atualizarTarefa(idTarefa, tituloAtual, descricaoAtual);
        onPopoverClose();
    };


    return (
        <Accordion allowMultiple>
            <AccordionItem >
                <Box bg="blue.400" color="white" display="flex" alignItems="center" justifyContent="center">
                    <Text fontWeight='bold' textDecoration={ehFinalizado ? "line-through" : ""} fontSize='2xl' width="100%">
                        <AccordionButton >
                            <Box as='span' flex='1' textAlign='left'>
                                {titulo} | {dtCriado}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Text>
                    <IconButton bg="blue.400" onClick={onAlertOpen} _hover={{ bg: 'blue.500' }} color='white' aria-label='Search database' icon={<DeleteIcon />} />
                    <AlertDialog leastDestructiveRef={cancelRef} isOpen={isAlertOpen} onClose={onAlertClose} >
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                    Excluir Tarefa
                                </AlertDialogHeader>

                                <AlertDialogBody>
                                    Tem certeza que deseja excluir essa tarefa? Você não tera como recupera-la novamente.
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                    <Button onClick={onAlertClose}>
                                        Cancelar
                                    </Button>
                                    <Button colorScheme='red' onClick={() => {excluirTarefa(idTarefa); onAlertClose();}} ml={3}>
                                        Excluir
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>

                    <Popover isOpen={isPopoverOpen} initialFocusRef={firstFieldRef} onOpen={onPopoverOpen} onClose={onPopoverClose} placement='right' closeOnBlur={false}>
                        <PopoverTrigger>
                            <IconButton bg="blue.400" _hover={{ bg: 'blue.500' }} color='white' aria-label='Search database' icon={<EditIcon />} />
                        </PopoverTrigger>
                        <PopoverContent p={5}>
                            <FocusLock persistentFocus={false}>
                                <Stack spacing={4}>
                                    <FormControl>
                                        <FormLabel htmlFor={idTarefa.toString()} color="black">Titulo</FormLabel>
                                        <Input value={tituloAtual} onChange={escutaModificacaoTexto} type="text" ref={firstFieldRef} placeholder='Escreva o titulo aqui...' id={idTarefa.toString()} color="black" />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor={idTarefa.toString()} color="black">Descrição</FormLabel>
                                        <Textarea  value={descricaoAtual} onChange={escutaModificacaoDesc} id={idTarefa.toString()} color="black" placeholder='Descreva aqui...' size='sm' />
                                    </FormControl>
                                    <ButtonGroup display='flex' justifyContent='flex-end'>
                                        <Button variant='outline' onClick={onPopoverClose}>
                                            Cancelar
                                        </Button>
                                        <Button bg="blue.400" _hover={{ bg: 'blue.500' }} color='white' onClick={salvarEdicao}>
                                            Salvar
                                        </Button>
                                    </ButtonGroup>
                                </Stack>
                            </FocusLock>
                        </PopoverContent>
                    </Popover>
                </Box>
                <AccordionPanel bg="blackAlpha.50" pb={4}>
                    {descricao}
                    <br />
                    Ultima Alteração em {dtAlterado}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};


const Lista = () => {
    const navegador = useNavigate();

    const [tarefas, setTarefas] = useState([
        { idTarefa: 1, titulo: "Iniciar projeto vite ts", ehFinalizado: false, descricao: "", dtCriado: "19/10/2024", dtAlterado: "19/10/2024" },
        { idTarefa: 2, titulo: "Escolher Biblioteca de Componentes e Instalar", ehFinalizado: false, descricao: "", dtCriado: "19/10/2024", dtAlterado: "19/10/2024" },
        { idTarefa: 3, titulo: "criar interface react", ehFinalizado: false, descricao: "", dtCriado: "19/10/2024", dtAlterado: "19/10/2024" },
        { idTarefa: 4, titulo: "Implementar logica local", ehFinalizado: false, descricao: "", dtCriado: "19/10/2024", dtAlterado: "19/10/2024" }
    ]);

    const sairConta = () => {
        navegador("/");
    }

    const atualizarTarefa = (idTarefa: number, novoTitulo: string, novaDescricao: string) => {
        setTarefas(tarefas.map(tarefa =>
            tarefa.idTarefa == idTarefa
                ? { ...tarefa, titulo: novoTitulo, descricao: novaDescricao,  dtAlterado: new Date().toLocaleString(), }
                : tarefa
        ));
    };
    const excluirTarefa = (idTarefa: number) => {
        setTarefas(tarefas.filter(tarefa => tarefa.idTarefa !== idTarefa));
    };

    return (
        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.100" >
            <Box pos="absolute" top="5" left="5">
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        bg="white"
                        _hover={{ bg: 'blackAlpha.50' }}
                        _focus={{ bg: 'blackAlpha.50' }}
                        transition='all 0.2s'
                    />
                    <MenuList>
                        <MenuItem onClick={sairConta} icon={<ArrowBackIcon />} _hover={{ bg: 'blackAlpha.50' }} _focus={{ bg: 'blackAlpha.50' }}>
                            Sair
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>

            <Box bg="white" p={6} px={10} rounded="md" shadow="md" width="90%">
                <Heading as="h1" size="lg" width="100%" textAlign="center" >
                    Lista de tarefas
                </Heading>
                <Text color="blue.200" as="h2" size="lg" width="100%" textAlign="center" mb={10}>Bem vindo Usuario</Text>
                <Box display="flex" mb={10} alignItems="center" justifyContent="center">
                    <CircularProgress size='120px' value={40} color='blue.200'>
                        <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                </Box>
                <ButtonGroup spacing='3' mb={3}>
                    <Button leftIcon={<AddIcon />} variant='solid' colorScheme="green" >
                        Criar Nova
                    </Button>
                    <Button leftIcon={<CheckIcon />} variant='solid' colorScheme="green" >
                        Finalizar todas selecionadas
                    </Button>

                    <Button leftIcon={<SpinnerIcon />} variant='solid' colorScheme="red" >
                        Reativar todas selecionadas
                    </Button>
                    <Button variant='solid' leftIcon={<CheckCircleIcon />} bg="blue.400" _hover={{ bg: 'blue.500' }} color='white' >
                        Marcar todas
                    </Button>
                </ButtonGroup>
                {
                    tarefas.map((tarefa: Tarefa) => {
                        return (
                            <TarefaAcordeao
                                key={tarefa.idTarefa}
                                titulo={tarefa.titulo}
                                descricao={tarefa.descricao}
                                ehFinalizado={tarefa.ehFinalizado}
                                dtCriado={tarefa.dtCriado}
                                dtAlterado={tarefa.dtAlterado}
                                idTarefa={tarefa.idTarefa}
                                atualizarTarefa={atualizarTarefa}
                                excluirTarefa={excluirTarefa}
                            />
                        )
                    })
                }

            </Box>

        </Box >
    );
};

export default Lista;
