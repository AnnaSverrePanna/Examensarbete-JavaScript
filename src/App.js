import { Heading, VStack } from '@chakra-ui/react'
import FactorialFunction from './FactorialFunction';

export default function App() {
  return (
    <VStack>
      <Heading as={"h1"} size={"2xl"}>Javascript App</Heading>
      <FactorialFunction />
    </VStack>
  );
}
