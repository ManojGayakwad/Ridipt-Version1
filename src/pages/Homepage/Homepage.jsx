import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Button,
  ChakraProvider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Center,
  Spacer // Import Spacer component
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import Home from '../../components/Home';
import About from '../../components/About';
import Services from '../../components/Services';
import Contact from '../../components/Contact';

const AppBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box style={{ minWidth: "100%", position: "fixed", color: "white", borderBottom: "1px solid white",zIndex:1, }}>
      <Flex p="4" alignItems="center" justifyContent="space-between" backgroundColor='#1d252c' >
        <Heading size="md">Logo</Heading>
        <Flex display={{ base: 'none', md: 'flex' }} > {/* Updated display property */}

          <Button variant="simple">Home</Button>
          <Button variant="simple">Services</Button>
          <Button variant="simple">About</Button>
          <Button variant="simple">Contact</Button>
          <Button variant="simple">Login</Button>

        </Flex>
        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          onClick={toggleDrawer}
        />
        {/* <IconButton
          display={{ base: 'none', md: 'block' }}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          aria-label="Toggle dark mode"
        /> */}
      </Flex>
      <Drawer placement="right" onClose={toggleDrawer} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4}>
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Services</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
              <Button variant="ghost">Login</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      <Box>
        <AppBar />
        <Box>
          <Home />
          <About />
          <Services />
          <Contact />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;
