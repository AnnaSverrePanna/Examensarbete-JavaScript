import { Box, Heading, Text } from '@chakra-ui/react'

export default function PropTest(props) {
    return (
        <Box>
            <Heading size={"md"}>{props.propType}</Heading>
            <Text>{props.prop.text}</Text>
        </Box>
    );
}
