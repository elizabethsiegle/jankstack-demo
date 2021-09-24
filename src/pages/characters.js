import React from 'react'
import {graphql} from 'gatsby'
import {Col, Row} from 'react-styled-flexboxgrid'

import {CharacterCard} from '../Components/elements/cards'
import Layout from './../Components/Layout'

import useRandomCharacters from '../utils/hooks/randomCharacters'

const JANKY_SOURCE_NODES = process.env.JANKY_SOURCE_NODES
const Characters = ({data}) => {
	const characters = useRandomCharacters(data.allCharacters.nodes, 40)

	return (
		<Layout helmet={'Character Viewer'}>
			<Row>
				{characters.map((character, index) => (
					<Col xs={12} sm={4} md={4} lg={3} key={character.id}>
						<CharacterCard
							key={character.id}
							character={character}
							linkURL={`/characters/${character.id}/`}
						/>
					</Col>
				))}
			</Row>
		</Layout>
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