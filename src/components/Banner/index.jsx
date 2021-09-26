import { Box, HStack, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { BannerLink } from './BannerLink'

const Banner = () => {
  return (
    <Box as="section" pt="8" pb="12">
      <Stack
        direction={{
          base: 'column',
          sm: 'row',
        }}
        justifyContent="center"
        alignItems="center"
        py="3"
        px={{
          base: '3',
          md: '6',
          lg: '8',
        }}
        color="white"
        bg={useColorModeValue('blue.600', 'blue.400')}
      >
        <HStack spacing="3">
          <Text fontWeight="medium" marginEnd="2">
            Win a Free Battery Pack in 10 minutes by instrumenting your Gatsby site
          </Text>
        </HStack>
        <BannerLink
          w={{
            base: 'full',
            sm: 'auto',
          }}
          flexShrink={0}
        >
          Get Free Stuff
        </BannerLink>
      </Stack>
    </Box>
  )
}

export default Banner
