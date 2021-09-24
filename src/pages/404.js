import React from 'react'
import {Link} from 'gatsby'

import {Box} from '../Components/elements/layout'
import Button from '../Components/elements/buttons'
import Layout from './../Components/Layout'
import {Heading1, Lead} from '../Components/elements/text'

const Four0Four = ({location}) => {
	return (
		<Layout helmet={'404'}>
			<Heading1 align={'center'}>404</Heading1>
			<hr />
			<Lead align={'center'}>
				You tried to go to {location && location.pathname} and the page does not exist.
			</Lead>
			<p></p>
			<Box.Center>
				<Link to="/">
					<Button animate>Go Home</Button>
				</Link>
			</Box.Center>
		</Layout>
	)
}

export default Four0Four
