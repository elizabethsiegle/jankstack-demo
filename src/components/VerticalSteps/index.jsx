import { Box, Stack, Button, Text, HStack, Img, Link} from '@chakra-ui/react'
import * as React from 'react'
import { Step } from './Step'
import { StepContent } from './StepContent'
import { Steps } from './Steps'
import { useSteps } from './useSteps'

const VerticalSteps = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <Box
      mx="auto"
      maxW="3xl"
      py="10"
      px={{
        base: '6',
        md: '8',
      }}
      minH="400px"
    >
      <Steps activeStep={activeStep}>
        <Step title="Sign up for always-free New Relic One and Get API Keys">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
                New Relic One is a powerful full-stack data analysis platform for all your software's metrics, events, and logs.  
              </Text>
              <Button
                mt="8"
                minW="14rem"
                colorScheme="pink"
                size="lg"
                height="14"
                bg="#FF0081"
                px="8"
                fontSize="md"
                fontWeight="bold"
                _hover={{
                  bg: "#b8005d"
                }}

              >
                Sign up for New Relic One
              </Button>
              <Img
                objectFit="cover"
                w="full"
                h="full"
                htmlWidth="576px"
                htmlHeight="420px"
                src="/nr1.png"
                alt="Bring team together"
                />
                <b>Get New Relic Ingest Key, Insert Key, and Account ID </b>
              <HStack>
                <Button size="sm" variant="ghost" isDisabled>
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Next
                </Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
        <Step title="Deploy Sample Site">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <b>Fill the New Relic environmental variables in the Netlify deployment step.</b>
              <Img
                objectFit="cover"
                w="full"
                h="full"
                htmlWidth="576px"
                htmlHeight="420px"
                src="/steps/2.png"
                alt="Bring team together"
                />
              <Link href="https://app.netlify.com/start/deploy?repository=https://github.com/lazyplatypus/jank-stack" isExternal>
              <Img
                objectFit="cover"
                w="full"
                h="full"
                maxWidth="200px"
                src="https://www.netlify.com/img/deploy/button.svg"
                alt="Bring team together"
                />
                </Link>
              <Link href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/lazyplatypus/jank-stack" isExternal>
              <Img
                objectFit="cover"
                w="full"
                h="full"
                maxWidth="200px"
                src="https://www.gatsbyjs.com/deploynow.svg"
                alt="Bring team together"
                />
                </Link>
              <HStack>
                <Button size="sm" onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Next
                </Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
        <Step title="Tweet @newrelic and @gatsbyjs with your dashboard">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
                Tag @newrelic and @gatsbyjs with the autoinstrumented dashboard. 
              </Text>
              <HStack>
                <Button size="sm" onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Finish
                </Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
      </Steps>
      <HStack display={activeStep === 3 ? 'flex' : 'none'} mt="10" spacing="4" shouldWrapChildren>
        <Text>All steps completed - you&apos;re finished</Text>
        <Button size="sm" onClick={reset} variant="outline" verticalAlign="baseline">
          Reset
        </Button>
      </HStack>
    </Box>
  )
}

export default VerticalSteps