/* eslint-disable */
import React from 'react'
import {Link} from 'gatsby'
import {Grid} from 'react-styled-flexboxgrid'

import {Box} from '../components/elements/layout'
import Layout from './../components/Layout'
import {Heading1, Lead} from '../components/elements/text'

const About = () => {
	return (
		<Layout helmet={'404'}>
			<Grid>
				<Heading1 align={'center'}>About page</Heading1>
				<hr />
				<Lead align={'center'}>lead text</Lead>
			</Grid>
		</Layout>
	)
}

export default About
