import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const BadImage = ({ imagePath }) => {
  // 🚫 don’t do this!
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  // 🚫 even though we’re only using one image, all transformations will run!
  const image = data.allFile.nodes.find(img => img.relativePath === imagePath);

  return <Image fluid={image.childImageSharp.fluid} />;
};

export default BadImage;