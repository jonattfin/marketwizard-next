"use client";
import {Table, Switch, Badge} from '@mantine/core';

export default function IndicesTable() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.indice}>
      <Table.Td>{element.indice}</Table.Td>
      <Table.Td><Badge variant="light" color={element.change > 0 ? "green" : "red"}
                       size="sm">{element.change}</Badge></Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td><Switch/></Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Indice</Table.Th>
          <Table.Th>Change</Table.Th>
          <Table.Th>Points</Table.Th>
          <Table.Th>Off/On</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

const elements = [
  {position: 6, change: -12.011, symbol: 'C', indice: 'Carbon'},
  {position: 7, change: 14.007, symbol: 'N', indice: 'Nitrogen'},
  {position: 39, change: -88.906, symbol: 'Y', indice: 'Yttrium'},
  {position: 56, change: 137.33, symbol: 'Ba', indice: 'Barium'},
  {position: 58, change: -140.12, symbol: 'Ce', indice: 'Cerium'},
];