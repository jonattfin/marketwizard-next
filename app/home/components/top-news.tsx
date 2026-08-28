import {Table} from '@mantine/core';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

export default function TopNews() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.headline}</Table.Td>
      <Table.Td>{element.source}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Headline</Table.Th>
          <Table.Th>Source</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

const elements = [
  {source: 'C', headline: lorem.generateWords(10), id: 1,},
  {source: 'N', headline: lorem.generateWords(10), id: 2,},
  {source: 'Y', headline: lorem.generateWords(10), id: 3},
  {source: 'Ba', headline: lorem.generateWords(10), id: 4,},
  {source: 'Ce', headline: lorem.generateWords(10), id: 5,},
];