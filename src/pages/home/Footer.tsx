import { Box, Flex, Text, Button, Image, Divider } from '@chakra-ui/react';

function Footer() {
    return ( 
        <Box
        backgroundColor="#EADAF0"
        color="#939EA4"
        paddingY="2rem"
        textAlign="center"
        padding="3% 10%"
    >
        <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="1rem" marginLeft="2rem">©2023 Healthful Hearts</Text>
            <Button
                bg="#2E2133"
                color="#2E2133"
                borderRadius="0"
                width="150px"
                padding="0.5rem"
                fontSize="1rem"
            >
                <Text color="white">Suscribirme</Text>
            </Button>
        </Flex>

        <Divider my="1rem" borderColor="#929ECC" />

        <Flex justifyContent="space-between" alignItems="center">
            <Flex>
                <Text fontSize="1rem" color="#929ECC" marginRight="1.5rem" textAlign="center">
                    Inicio
                </Text>
                <Text fontSize="1rem" color="#929ECC" marginRight="1.5rem" textAlign="center">
                    Sobre Nosotros
                </Text>
                <Text fontSize="1rem" color="#929ECC" textAlign="center">
                    Contacto
                </Text>
            </Flex>

            {/* Iconos de redes sociales */}
            <Flex>
                <Image src="assets/images/landing/whatsapp.png" alt="WhatsApp" boxSize="24px" marginRight="1rem" />
                <Image src="assets/images/landing/facebook.png" alt="Facebook" boxSize="24px" marginRight="1rem" />
                <Image src="assets/images/landing/twitter.png" alt="Twitter" boxSize="24px" />
            </Flex>
        </Flex>
    </Box>

     );
}

export {Footer};