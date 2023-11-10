import { Box, Flex, Text, Button, Image, Divider, Link } from '@chakra-ui/react';

function Welcome() {
    return (
        <Flex width="100%" height="100vh">
            <Flex
                width="50%"
                height="100%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                color="#2E2133"
            >
                <Flex
                    width="75%"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    color="#2E2133"
                >
                    <Text fontSize="2rem" fontWeight="bold" marginBottom="1rem">
                        ¡Bienvenido a Heathful Hearts!
                    </Text>
                    <Text fontSize="1rem" color="#5C4266" marginBottom="2rem" textAlign="justify">
                        En Heathful Hearts estamos dedicados a apoyar tu salud mental de una manera única y atractiva. Descubre cómo nuestros NFTs y minijuegos pueden ayudarte a sentirte mejor y más saludable todos los días.
                    </Text>
                    <Flex justifyContent="center">
                        <Button
                            bg="#EEE1F3"
                            color="white"
                            borderRadius="0"
                            width="150px"
                            padding="0.5rem"
                            fontSize="1rem"
                            marginRight="1rem"
                        >
                            Empezar
                        </Button>
                        <Button
                            bg="transparent"
                            border="2px solid #2E2133"
                            color="#2E2133"
                            borderRadius="0"
                            width="150px"
                            padding="0.5rem"
                            fontSize="1rem"
                        >
                            Leer más
                        </Button>
                    </Flex>
                </Flex>
            </Flex>

            <Box width="50%" marginLeft="18rem" marginTop="8rem">
                <Image src="assets/images/landing/girl2.jpeg" alt="Girl Image" />
            </Box>
        </Flex>
    );
}

export { Welcome };