import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#263238" color="white" p={8} mt={8}>
      <Flex direction={{ base: "column", sm: "row" }} alignItems={{ base: "initial", sm: "center" }} justifyContent="space-between">
        {/* Logo and Text */}
        <Box mb={{ base: 4, sm: 0 }}>
          <Text fontWeight="bold" fontSize={{ base: "md", sm: "xl" }}>
            LOGO
          </Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>
            Learn lpsum is simply dummy text of the
            <Text> printing and typesetting industry.</Text>
          </Text>
        </Box>

        {/* About Us */}
        <Box mb={{ base: 4, sm: 0 }}>
          <Text fontWeight="bold" fontSize={{ base: "md", sm: "xl" }}>
            About Us
          </Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>Work</Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>Culture</Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>Leadership</Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>Careers</Text>
        </Box>

        {/* Services */}
        <Box mb={{ base: 4, sm: 0 }}>
          <Text fontWeight="bold" fontSize={{ base: "md", sm: "xl" }}>
            Services
          </Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>Web Development</Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>Mobile Application Development</Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>IOT</Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>Artificial Intelligence</Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>Cloud & DevOps</Text>
        </Box>

        {/* Contact Us */}
        <Box>
          <Text fontWeight="bold" fontSize={{ base: "md", sm: "xl" }}>
            Contact Us
          </Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>Address: Your Address</Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>Tel: 01166481018</Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>Fax: 01166481003</Text>
          <HStack spacing={2} mt={{ base: 4, sm: 0 }} fontSize="2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
