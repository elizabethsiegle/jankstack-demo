import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
  Img
} from '@chakra-ui/react'
import * as React from 'react'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'

export const Navbar = (props) => {
  return (
    <Box>
      <Box as="header" bg={mode('white', 'gray.800')} borderBottomWidth="1px">
        <Box
          maxW="7xl"
          mx="auto"
          py="4"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Box as="a" href="/" rel="home">
                <VisuallyHidden>Envelope app</VisuallyHidden>
                {/* <Logo h="6" iconColor="blue.500" /> */}

                <Img src="/logo.png" maxH="60px" />
              </Box>
              <HStack
                display={{
                  base: 'none',
                  lg: 'flex',
                }}
                spacing="8"
              >
                <NavLink.Desktop href="/">Home</NavLink.Desktop>
                {/* <NavLink.Desktop href="/" active>Home</NavLink.Desktop> */}
                <NavLink.Desktop href="/characters" {...props.active} >Characters</NavLink.Desktop>
                <NavLink.Desktop href="/about" {...props.active}>About</NavLink.Desktop>
              </HStack>
            </HStack>
            <Flex align="center">
              <HStack
                spacing="8"
                display={{
                  base: 'flex',
                }}
              >
                <Button bg="#FF0081" color="white" rounded="full" _hover={{
                  bg: "#b8005d"
                }}>
                  Win a free powerbank
                </Button>
              </HStack>
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box >
  )
}
