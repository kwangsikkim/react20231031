import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Flex,
  SimpleGrid,
  Thead,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import * as PropTypes from "prop-types";

Tr.propTypes = { children: PropTypes.node };

function App() {
  return (
    <>
      <SimpleGrid columns={1} gap={5}>
        <Box>
          <Table>
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Soluta.</Th>
                <Th>At.</Th>
                <Th>Facilis.</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Laborum.</Td>
                <Td>Atque!</Td>
                <Td>Esse.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Excepturi!</Td>
                <Td>Labore.</Td>
                <Td>Et.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Repellendus?</Td>
                <Td>Eos.</Td>
                <Td>Dolor?</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Nobis.</Td>
                <Td>Repudiandae.</Td>
                <Td>Dolorum!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Sequi.</Td>
                <Td>Odio?</Td>
                <Td>Maxime?</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box>
          <Table variant="striped" colorScheme="red" size="lg">
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Nihil.</Th>
                <Th>Quaerat?</Th>
                <Th>Tenetur?</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Doloribus!</Td>
                <Td>Expedita.</Td>
                <Td>Officiis.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Ipsum.</Td>
                <Td>Cumque.</Td>
                <Td>Adipisci!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Itaque.</Td>
                <Td>Laborum!</Td>
                <Td>Iste.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Sunt?</Td>
                <Td>Vitae.</Td>
                <Td>Quasi.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Recusandae?</Td>
                <Td>Molestiae.</Td>
                <Td>Exercitationem?</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
