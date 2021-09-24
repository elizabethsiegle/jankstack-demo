import React from 'react'

import {Card} from './'

//import ContentLoader from "react-content-loader";

const CharacterCard = ({character, linkURL}) => (
	<Card outline color="secondary">
		<Card.Link to={linkURL}>
			<Card.Img noRadius src={character.image} alt={character.name} />
		</Card.Link>

		<Card.Header strong>{character.name}</Card.Header>
		<Card.Body>
			<Card.Text>Species: {character.species}</Card.Text>
			<Card.Text>Gender: {character.gender}</Card.Text>
			<Card.Text>Status: {character.status}</Card.Text>
		</Card.Body>
	</Card>
)

export default CharacterCard
