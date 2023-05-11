import { Heading, VStack } from '@chakra-ui/react'
import Container from './Container';

export default function App() {
  return (
    <VStack>
      <Heading as={"h1"} size={"2xl"}>Javascript App</Heading>
      <Container />
    </VStack>
  );
}
