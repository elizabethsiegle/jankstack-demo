/* eslint-disable */
import React from 'react'
import { Navbar } from '../components/Navbar/App'
import Banner from '../components/Banner'
import Feature from '../components/Features'

import {
	Box,
	Button,
	Center,
	Heading,
	Img,
	Stack,
	SimpleGrid,
	Text,
	Divider,
	useColorModeValue as mode,
  } from '@chakra-ui/react'

  
const About = () => {
	return (
	<>
		<Banner />
		<Navbar />
		<Box as="section" bg={mode('gray.50', 'gray.800')} py="20">
			<Box
			maxW={{
				base: 'xl',
				md: '7xl',
			}}
			mx="auto"
			px={{
				base: '6',
				md: '8',
			}}
			>
			<Stack
				spacing={{
				base: '4',
				lg: '20',
				}}
				direction={{
				base: 'column',
				lg: 'row',
				}}
			>
				<Center
				flex="1"
				shadow="lg"
				minH="26rem"
				maxW={{
					lg: 'xl',
				}}
				>
				<Img
					objectFit="cover"
					w="full"
					h="full"
					htmlWidth="576px"
					htmlHeight="420px"
					src="/power.jpeg"
					alt="Bring team together"
				/>
				</Center>
				<Box
				maxW={{
					lg: 'lg',
				}}
				>
				<Heading
					size="2xl"
					mt="10"
					fontWeight="extrabold"
					letterSpacing="tight"
					lineHeight="normal"
				>
					Win a Free Power Bank in 10 minutes
				</Heading>
				<Text fontSize="lg" mt="6" color={mode('gray.600', 'gray.400')}>
					Instrument your Gatsby Site with Observability and win a free power bank *(Until Supplies Last). Terms and Conditions apply.
				</Text>
				<Button
					className="group"
					mt="8"
					colorScheme="pink"
					size="lg"
					px="8"
					fontWeight="bold"
					h="14"
					iconSpacing="3"
				>
					Three Steps Below 👇
				</Button>
				</Box>
			</Stack>
			</Box>
		</Box>
		<Box as="section" bg={mode('gray.10', 'gray.800')} py="20">
		<Box
		  maxW={{
			base: 'xl',
			md: '7xl',
		  }}
		  mx="auto"
		  px={{
			base: '6',
			md: '8',
		  }}
		>
		  <Stack
			spacing={{
			  base: '4',
			  lg: '20',
			}}
			direction={{
			  base: 'column',
			  lg: 'row',
			}}
		  >
			<Center
			  flex="1"
			  minH="26rem"
			  maxW={{
				lg: 'xl',
			  }}
			>
			  <Img
				objectFit="cover"
				w="full"
				h="full"
				htmlWidth="576px"
				htmlHeight="420px"
				src="/nr1.png"
				alt="Bring team together"
			  />
			</Center>
			<Box
			  maxW={{
				lg: 'lg',
			  }}
			>
			  <Heading
				size="2xl"
				mt="10"
				fontWeight="extrabold"
				letterSpacing="tight"
				lineHeight="normal"
			  >
				Sign up for a Free New Relic Account and get API Keys
			  </Heading>
			  <Text fontSize="lg" mt="6" color={mode('gray.600', 'gray.400')}>
			  New Relic One is a powerful full-stack data analysis platform for all your software's metrics, events, and logs. 
			  </Text>
			  <Button
				className="group"
				mt="8"
				colorScheme="pink"
				size="lg"
				px="8"
				fontWeight="bold"
				h="14"
				iconSpacing="3"
			  >
				Sign up for New Relic One
			  </Button>
			</Box>
		  </Stack>
		  <Divider my="20" opacity={1} />
        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
          }}
          spacing={{
            base: '12',
            md: '8',
          }}
        >
          <Feature title="Share files" icon="/nr1.png">
            Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="Connect with users" >
            Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="Collaborate with partners" >
            Keep files and the messages about them together in channels.
          </Feature>
        </SimpleGrid>
		</Box>
	  </Box>
	</>
	)
  }
  
export default About
