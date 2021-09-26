import React from 'react'
import { graphql } from 'gatsby'

import HomeBox from './../components/Home/HomeBox'
import Layout from './../components/Layout'
import Banner from '../components/Banner'
import { Navbar } from '../components/Navbar/App'
import { Landing } from '../components/Landing/App'

const Home = ({ data }) => {
	return (
		<>

			<Banner />
			<Navbar />
			<Landing />
		</>
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