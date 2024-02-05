import { Box, Heading, Input, Button, Text, Textarea, Flex, VStack, HStack, Icon } from "@chakra-ui/react";
import { AddIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  const backgroundImageUrl = 'https://s3-alpha-sig.figma.com/img/5fc9/d2c6/e716f26217385059e33b17e9ffc83923?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b3ezmmMVG9ZeDU1xWMfHdHMaevRtHHm17saCQIkNY7tRCQA9ZfQ2v~lCQePk8ZkzmGE02pyzgQ3x7ldyB2MMA8p6ILIZtR65ybEf7IXJVEjGI2ADoglbgVASWBm54~2FEGGfj6hyPsLTcxo32wNoIjaZErSdeLnvAIUgpuakgZMINm6jSGwq7ysm0Rx7rtb~Cm5WI8nMOMltMKiHBoGxI4EEJFsisw6Q48qnYrsTag2wmZOj3CEXEZb~S5MmEYi7I4ywoHdSHcXzEayXzogRCQGDOMCfc0Fi1wQBwzVSHwy297SeeAZPrRQi3re9xcU1ws9QJBnTPL~kQwprrWnfNQ__';

  return (
    <>
        <Box
          style={{
            background: 'radial-gradient(circle at center bottom, #1d665c, #1d252c 40%)',
            height: '100%',
            width: '100%',
            // color: "white",
            
            
          }}
        >

   <Box    
        bgImage={`url(${backgroundImageUrl})`}
        bgSize="cover"
        bgPosition="center"
        color="white"
        padding="20px"
        // margin='20px'
        style={{ 
          height: '100vh',
          width: '100vw',
          filter:"brightness(90%)",      
          zIndex:1
        }}
      >
      <Box  >
          <Box textAlign="center">
            <Heading as="h5" size="md" noOfLines={1}>
              We would{" "}
              <Text as="span" color="teal">
                love
              </Text>{" "}
              to hear from{" "}
              <Text as="span" color="teal">
                you
              </Text>
            </Heading>
            <Box marginTop={1} direction={{ base: 'xs', md: 'sm', xl: 'lg' }}>
              <Text noOfLines={2} as='h6' size='xs' >
                Feel free to Contact us, and we will get back to you as soon as possible. Fill this form or Contact us with mail.
              </Text>
            </Box>
          </Box>
          <Flex p={8} direction={{ base: "column", md: "row" }}>
            {/* Left Side */}
            <VStack spacing={4} alignItems="left" flex={1} marginLeft={{ base: 0, md: 20 }}>
              <Box>
                <Text marginTop={2}>Name</Text>
                <Input placeholder="your name" variant="filled" bg="gray.700" style={{ width: '80%' }} marginTop={1} />
              </Box>
              <Box>
                <Text>Mobile Number</Text>
                <Input placeholder="your mobile number" variant="filled" bg="gray.700" style={{ width: '80%' }} marginTop={1} />
              </Box>
              <Box>
                <Text>Email</Text>
                <Input type="email" placeholder="your email" variant="filled" bg="gray.700" style={{ width: '80%' }} marginTop={1} />
              </Box>
              <Box>
                <Text>Message</Text>
                <Textarea placeholder="your message" variant="filled" backgroundColor={"gray.700"} style={{ width: '80%' }} marginTop={1} />
              </Box>
              <Button variant="filled" backgroundColor={"transparent"} textColor={"white"} style={{ width: '30%', marginLeft: '0' }}>
                Send
              </Button>
            </VStack>

            {/* Right Side */}
            <VStack align="left" flex={1} pl={10}>
              <Flex align="left" marginTop={{ base: 10, md: 20 }}>
                <Icon as={FaMapMarkerAlt} color="lightyellow" boxSize={8} marginRight={3} marginTop={2} />
                <Text>
                  Gurukripa, Office No.3 ,behind Maratah 
                  <Text> Mandir lane, Bavdhan,Pune, Maharashtra 411021</Text>
                </Text>
              </Flex>
              <Text marginTop={1}>
                <EmailIcon marginRight={3} boxSize={8}/> example@email.com
              </Text>
              <Text marginTop={2}>
                <PhoneIcon marginRight={3} boxSize={8}/> +123 456 789
              </Text>

              {/* Social Icons */}
              <HStack spacing={4} marginTop={4} >
                <Text fontSize="3xl">
                  <FaFacebook />
                </Text>
                <Text fontSize="3xl">
                  <FaInstagram />
                </Text>
                <Text fontSize="3xl">
                  <FaTwitter />
                </Text>
                <Text fontSize="3xl">
                  <FaLinkedin />
                </Text>
              </HStack>
            </VStack>
          </Flex>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Contact;
