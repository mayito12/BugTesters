import { Box, Flex, Text, Image } from '@chakra-ui/react';

function Ediciones() {
    return (
        <Flex
            width="100%"
            height="100vh"
            flexDirection="row" // Alinear los elementos en fila
        >
            {/* Lado Izquierdo para la Imagen */}
            <Box width="50%">
                {/* Preparar espacio para la imagen */}
                {/* Puedes agregar la imagen aquí cuando esté disponible */}
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
               
                marginLeft="auto"  // Mover al lado derecho
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
                        Ediciones especiales y aumento de Valor
                    </Text>
                    <Text fontSize="1rem" color="#5C4266" marginBottom="2rem">
                        Busca nuestras ediciones especiales que mejoran tus avatares y mascotas, aumentando su valor en el mercado. ¡Cada NFT es una inversión en tu bienestar
                    </Text>
                </Flex>
            </Flex>
        </Flex>



    );
}

export { Ediciones };
