import React from 'react'
import {graphql} from 'gatsby'

import HomeBox from './../Components/Home/HomeBox'
import Layout from './../Components/Layout'

const Home = ({data}) => {
	return (
		<Layout helmet={"Sam's Rick & Morty App"}>
			<h1><strike>JAMstack</strike>JANKstack.org</h1>
			<HomeBox characters={data.allCharacters.nodes} />
		</Layout>
	)
}

export default Home

export const query = graphql`
	query HomeCharactersQuery {
		allCharacters(limit: 5) {
			nodes {
				id
				name
				gender
				status
				image
			}
		}
	}
`