import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';

function Comunidad() {
    return (
        <Flex
            width="100%"
            marginTop="8rem"
            flexDirection="row" // Alinear los elementos en fila
        >
            {/* Lado Izquierdo para la Imagen */}
            <Box width="50%">
                {/* Preparar espacio para la imagen */}
                {/* <Image src="ruta_de_la_imagen.jpg" alt="Descripción de la imagen" /> */}
            </Box>

            {/* Lado Derecho para las Cajas con Letras */}
            <Flex
                width="50%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                color="#2E2133"
                marginLeft="auto" // Mover al lado derecho
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
                        Únete a Nuestra Comunidad de Apoyo
                    </Text>
                    <Text fontSize="1rem" color="#5C4266" marginBottom="2rem">
                        Forma parte de una comunidad que se preocupa por la salud mental. Comparte tus experiencias, consejos y apoyo con personas que comparten tus desafíos.
                    </Text>

                    <Button
                        bg="#2E2133"
                        color="white"
                        borderRadius="0"
                        width="120px"
                        padding="0.5rem"
                        fontSize="1rem"
                    >
                        <Text color="white">Unirse</Text>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}

export { Comunidad };
