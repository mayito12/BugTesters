import { Box, Flex, Text, Button, Image, Divider , Link} from '@chakra-ui/react';
import { FaDog } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

import { Ediciones } from './Ediciones';
import { Comprende } from './Comprende';
import { Comunidad } from './Comunidad';

function Landing() {
    return (
        <Box
            backgroundImage="assets/images/landing/Path.png"
            backgroundPosition="right center"
            backgroundRepeat="no-repeat"
            height="100vh"
            width="100%"
        >
            {/* Navbar superior */}
         
            {/* Navbar superior */}
            <Flex
      width="100%"
      bg="transparent"
      color="white"
      justifyContent="space-between" // Cambiado a "space-between" para distribuir los elementos en el contenedor
      paddingY="1rem"
      alignItems="center"
      paddingX="2rem" // Añadido un espacio horizontal en los bordes
    >
      {/* Sección Izquierda */}

      <Flex alignItems="center"> {/* Alineado verticalmente al centro */}
      <Box width="35%" marginRight="4rem" marginLeft="2.5rem">
                    <Image src="assets/images/landing/logo.png" alt="Girl Image" />
                </Box>
        <Text fontSize="1rem" marginRight="1.5rem" color="#2E2133">
          Home
        </Text>
        <Text fontSize="1rem" marginRight="1.5rem" color="#2E2133">
          Sobre Nosotros
        </Text>
        <Text fontSize="1rem" color="black">
          Contacto
        </Text>
      </Flex>

     

      {/* Botón Derecha */}
      <Button
        bg="#2E2133"
        color="#2E2133"
        borderRadius="8px" // Bordes redondeados
        width="120px"
        padding="0.5rem"
        fontSize="1rem"
      >
        <Text color="white">Iniciar sesión</Text>
      </Button>
    </Flex>

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
            {/* colecciones section */}
            <Flex width="100%" height="60vh">
                <Flex
                    width="50%"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    color="#2E2133"
                >
                    <Flex
                        width="50%"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        color="#2E2133"
                    >
                        <Text fontSize="2rem" fontWeight="bold" marginBottom="1rem">
                            Colecciones de Mascotas NFT
                        </Text>
                        <Text fontSize="1rem" color="#5C4266" marginBottom="2rem" textAlign="justify">
                            Colecciona adorables mascotas NFT que te acompañarán en tu viaje hacia el bienestar. Desbloquea nuevas mascotas a través de niveles y personaliza tu experiencia.
                        </Text>
                        {/* Icono de perro debajo del texto */}
                        <FaDog size={40} color="#2E2133" />
                    </Flex>
                </Flex>

                <Box width="50%" display="flex" justifyContent="center" alignItems="center">
                    <Image src="assets/images/landing/pets.png" alt="Girl Image" />
                </Box>
            </Flex>



            {/* Ediciones section */}
            <Flex
                width="100%"
                flexDirection={{ base: "column", md: "row" }} // Cambia la dirección de la fila a columna en dispositivos pequeños
                justifyContent="center" // Centra horizontalmente
                alignItems="center" // Centra verticalmente
                marginBottom="4rem"  // Añade un margen inferior para separar las secciones
            >
                {/* Lado Izquierdo para la Imagen */}
                <Box
                    width={{ base: "100%", md: "50%" }} // Ocupa el 100% del ancho en dispositivos pequeños y la mitad en dispositivos medianos y grandes
                    marginBottom={{ base: "2rem", md: 0 }} // Añade un margen inferior en dispositivos pequeños
                >
                    {/* Ajusta el tamaño y centra la imagen */}
                    <Image
                        src="assets/images/landing/ediciones.png"
                        alt="Descripción de la imagen"
                        margin="auto"
                        boxSize={{ base: "50%", md: "50%" }} // Ajusta el tamaño de la imagen
                    />
                </Box>

                {/* Lado Derecho para las Cajas con Letras */}
                <Flex
                    width={{ base: "100%", md: "50%" }} // Ocupa el 100% del ancho en dispositivos pequeños y la mitad en dispositivos medianos y grandes
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    color="#2E2133"
                    marginLeft={{ base: 0, md: "auto" }}  // Mueve al lado derecho en dispositivos medianos y grandes
                >
                    <Flex
                        width="50%"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        color="#2E2133"
                    >
                        <Text fontSize="2rem" fontWeight="bold" marginBottom="1rem">
                            Ediciones especiales y aumento de Valor
                        </Text>
                        <Text fontSize="1rem" color="#5C4266" marginBottom="2rem" textAlign="justify">
                            Busca nuestras ediciones especiales que mejoran tus avatares y mascotas, aumentando su valor en el mercado. ¡Cada NFT es una inversión en tu bienestar
                        </Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* comprende section */}
            <Flex width="100%" height="60vh">
                <Flex
                    width="50%"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    color="#2E2133"
                >
                    <Flex
                        width="50%"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        color="#2E2133"
                    >
                        <Text fontSize="2rem" fontWeight="bold" marginBottom="1rem">
                            Comprende Tu Personalidad
                        </Text>
                        <Text fontSize="1rem" color="#5C4266" marginBottom="2rem" textAlign="justify">
                            Al registrarte, toma nuestro test de personalidad que nos permite conocer y adaptarnos a tus necesidades emocionales. Tu bienestar es nuestra prioridad.
                        </Text>


                    </Flex>
                </Flex>

                <Box width="50%" display="flex" justifyContent="center" alignItems="center">
                    <Image src="assets/images/landing/personalidad.png" alt="Girl Image" />
                </Box>
            </Flex>






            <Flex
                width="100%"
                flexDirection={{ base: "column", md: "row" }} // Cambia la dirección de la fila a columna en dispositivos pequeños
                justifyContent="center" // Centra horizontalmente
                alignItems="center" // Centra verticalmente
                marginBottom="4rem"  // Añade un margen inferior para separar las secciones
            >
                {/* Lado Izquierdo para la Imagen */}
                <Box
                    width={{ base: "100%", md: "50%" }} // Ocupa el 100% del ancho en dispositivos pequeños y la mitad en dispositivos medianos y grandes
                    marginBottom={{ base: "2rem", md: 0 }} // Añade un margen inferior en dispositivos pequeños
                >
                    {/* Ajusta el tamaño y centra la imagen */}
                    <Image
                        src="assets/images/landing/ediciones.png"
                        alt="Descripción de la imagen"
                        margin="auto"
                        boxSize={{ base: "50%", md: "50%" }} // Ajusta el tamaño de la imagen
                    />
                </Box>

                {/* Lado Derecho para las Cajas con Letras */}
                <Flex
                    width={{ base: "100%", md: "50%" }} // Ocupa el 100% del ancho en dispositivos pequeños y la mitad en dispositivos medianos y grandes
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    color="#2E2133"
                    marginLeft={{ base: 0, md: "auto" }}  // Mueve al lado derecho en dispositivos medianos y grandes
                >
                    <Flex
                        width="50%"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        color="#2E2133"
                    >
                        <Text fontSize="2rem" fontWeight="bold" marginBottom="1rem">
                            Únete a Nuestra Comunidad de Apoyo
                        </Text>
                        <Text fontSize="1rem" color="#5C4266" marginBottom="2rem" textAlign="justify">
                            Forma parte de una comunidad que se preocupa por la salud mental. Comparte tus experiencias, consejos y apoyo con personas que comparten tus desafíos.
                        </Text>

                        <Button
                            bg="#2E2133"
                            color="#2E2133"
                            borderRadius="0"
                            width="120px"
                            padding="0.5rem"
                            fontSize="1rem"
                        >
                            <Text color="white">
                                Registrarme
                            </Text>
                        </Button>
                    </Flex>
                </Flex>
            </Flex>



            {/* Footer */}
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



        </Box>
    );
}

export { Landing };
