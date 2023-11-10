import { Box, Flex, Text, Button, Image, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { Welcome } from './Welcome';
import { PetCollection } from './PetCollection';
import { SpecialEdition } from './SpecialEdition';


function Home() {


  return (
    <Box
      backgroundImage="assets/images/landing/Path.png"
      backgroundPosition="right center"
      backgroundRepeat="no-repeat"
      height="100vh"
      width="100%"
    >


      {/* Navbar superior */}
      <Flex
        width="100%"
        bg="transparent"
        color="white"
        justifyContent="space-between"
        paddingY="1rem"
        alignItems="center"
        paddingX="2rem"
      >
        {/* Sección Izquierda */}
        <Flex alignItems="center">
          <Box width="35%" marginRight="4rem" marginLeft="2.5rem">
            <Image src="assets/images/landing/logo.png" alt="Logo" />
          </Box>
          <Link to="/">
            <Text fontSize="1rem" marginRight="1.5rem" color="#2E2133">
              Landing
            </Text>
          </Link>
          <Link to="/sobre-nosotros">
            <Text fontSize="1rem" marginRight="1.5rem" color="#2E2133">
              Minijuegos
            </Text>
          </Link>
          <Link to="/contacto">
            <Text fontSize="1rem" marginRight="1.5rem" color="#2E2133" >
              Comunidad
            </Text>
          </Link>
          <Link to="/contacto">
            <Text fontSize="1rem" color="#2E2133">
              Minijuegos
            </Text>
          </Link>
        </Flex>

        {/* Botón Derecha */}
        <Button
          bg="#2E2133"
          color="#2E2133"
          borderRadius="8px"
          width="120px"
          padding="0.5rem"
          fontSize="1rem"
        >
          <Text color="white">Ale_01</Text>
        </Button>
      </Flex>


      <Welcome />
      <PetCollection />
      <SpecialEdition />
    
      <Footer />


    </Box>





  )
}

export { Home };
