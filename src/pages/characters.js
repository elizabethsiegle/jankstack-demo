import React from 'react'
import { graphql } from 'gatsby'
import { Col, Row } from 'react-styled-flexboxgrid'

import { CharacterCard } from '../components/elements/cards'

import useRandomCharacters from '../utils/hooks/randomCharacters'
import { Navbar } from '../components/Navbar/App'
import Banner from '../components/Banner'
import { Button, Box, Flex, SimpleGrid, Container } from '@chakra-ui/react'
const Characters = ({ data }) => {
	const characters = useRandomCharacters(data.allCharacters.nodes, 40)
	return (
		<>
			<Banner />
			<Navbar active="characters" />
			<Container maxW="container.xl">
				<SimpleGrid
					mt={{
						base: '8',
						md: '0',
					}}
					columns={{
						base: 1,
						md: 3,
					}}
					spacing="10"
				>
					{characters.map((character, index) => (

						<CharacterCard
							key={character.id}
							character={character}
							linkURL={`/characters/${character.id}/`}
						/>

					))}
				</SimpleGrid>
			</Container>


		</>
	)
}

export default Characters

export const query = graphql`
query yourQuery($limit: Int) {
	allCharacters(limit: $limit) {
		nodes {
			id
			name
			gender
			species
			status
			image
		}
	}
}
`