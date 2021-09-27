/* eslint-disable */
import React from 'react'
import { Grid } from 'react-styled-flexboxgrid'

import Layout from './../components/Layout'
import { Heading1, Lead } from '../components/elements/text'
import { Navbar } from '../components/Navbar/App'
import Banner from '../components/Banner'
const About = () => {
	return (
		<>
			<Banner />
			<Navbar />
			<Layout helmet={'404'}>
				<Grid>
					<Heading1 align={'center'}>About page</Heading1>
					<hr />
					<Lead align={'center'}>lead text</Lead>
				</Grid>
			</Layout>
		</>
	)
}

export default About
