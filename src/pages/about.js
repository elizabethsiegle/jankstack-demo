/* eslint-disable */
import React from 'react'
import { Navbar } from '../components/Navbar/App'
import Banner from '../components/Banner'
import VerticalSteps from '../components/VerticalSteps'

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
				md: '2xl',
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
					lg: '2xl',
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
				<VerticalSteps />
				</Box>
			</Stack>
			</Box>
		</Box>
	</>
	)
  }
  
export default About
