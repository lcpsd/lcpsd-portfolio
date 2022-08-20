import { Button, ChakraStyledOptions, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { TechBadge } from './TechBadge'
interface TechProps {
    logo: string;
    title: string;
}

interface TechsButtonProps extends ChakraStyledOptions {
    techs: TechProps[];
}

export function TechsButton({ techs, ...rest }: TechsButtonProps) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay backdropFilter="blur(10px)" />
                <ModalContent bg="quinary" my="auto">
                    <ModalCloseButton color="primary" fontSize={20} />
                    <ModalBody p={10} h="100vh" border="1px" borderColor="primary" rounded="md">
                        <SimpleGrid spacing={5} my="auto">
                            {
                                techs.map(tech => (
                                    <TechBadge
                                        title={tech.title}
                                        logoUrl={tech.logo}
                                        reounded="md"
                                        h="100px"
                                    />
                                ))
                            }
                        </SimpleGrid>
                    </ModalBody>

                </ModalContent>
            </Modal>

            <Button
                bg="primary"
                color="quinary"
                colorScheme="teal.400"
                display={{ base: "block", md: "none" }}
                onClick={onOpen}
                w="100%"
                {...rest}
            >Tecnologias</Button>
        </>
    )
}