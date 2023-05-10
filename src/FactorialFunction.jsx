import { useState } from 'react';
import { Button, Heading, Input, VStack, InputRightElement, InputGroup, Text } from '@chakra-ui/react'
import { calculatePrimes } from './functions';

export default function FactorialFunction() {
  const [primes, setPrimes] = useState([]);

  const handleGeneratePrimes = () => {
    const inputNumber = document.getElementById('number-input').value;
    const primeArray = calculatePrimes(inputNumber);
    setPrimes(primeArray);
  };

  return (
    <VStack w={"70%"} alignItems={"flex-start"}>
        <Heading size={"lg"}>Factorial Function</Heading>
        <InputGroup w={"full"}>
            <Input id='number-input' placeholder='Write a number' />
            <InputRightElement w={"fit-content"} mr={"2"}>
                <Button h='1.75rem' w={"full"} onClick={handleGeneratePrimes}>
                    Generate Prime Numbers
                </Button>
            </InputRightElement>
        </InputGroup>
        <Text>
          <Text as={"b"}>Prime numbers: </Text>{primes.join(', ')}
        </Text>
    </VStack>
  );
}
