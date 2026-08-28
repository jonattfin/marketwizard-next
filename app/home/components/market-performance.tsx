import {Table} from '@mantine/core';

export default function MarketPerformance() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.sector}</Table.Td>
      <Table.Td>{element.performance}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Sector</Table.Th>
          <Table.Th>Performance</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

const elements = [
  {sector: 'C', performance: 1, id: 1,},
  {sector: 'N', performance: 2, id: 2,},
  {sector: 'Y', performance: 3, id: 3},
  {sector: 'Ba', performance: 4, id: 4,},
  {sector: 'Ce', performance: 5, id: 5,},
];