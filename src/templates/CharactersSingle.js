import React from "react"
import { Col, Row } from "react-styled-flexboxgrid"

import { CharacterCard } from "../Components/elements/cards"
import Layout from "./../Components/Layout"
import { Box } from "../Components/elements/layout"

const CharactersSingle = props => {
  const character = props.pageContext

  return (
    <Layout helmet={character.name}>
      <Box.Center>
        <Row>
          <Col xs={12} sm={4} md={4} lg={4} key={character.id}>
            <CharacterCard
              character={character}
              linkURL={`/characters/${parseInt(character.id, 10)}/`}
            />
          </Col>
        </Row>
      </Box.Center>
    </Layout>
  )
}

export default CharactersSingle
