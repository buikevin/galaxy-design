# Table

A responsive table component for displaying tabular data.

<ComponentPreview name="TableDemo">
  <template #preview>
    <DemoContainer>
      <TableDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<script setup lang="ts">
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in users" :key="user.id">
        <TableCell>{{ user.name }}</TableCell>
        <TableCell>{{ user.email }}</TableCell>
        <TableCell>{{ user.role }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
```

```tsx [React]
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

export default function App() {
  return <Table>{/* table content */}</Table>
}
```

```typescript [Angular]
@Component({
  template: `<ui-table>{/* table content */}</ui-table>`
})
export class TableDemoComponent {}
```

```tsx [React Native]
import { View, Text, ScrollView } from 'react-native'

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

export default function App() {
  return (
    <ScrollView className="border rounded-lg">
      <View className="bg-gray-100 border-b flex-row p-3">
        <Text className="flex-1 font-semibold">Name</Text>
        <Text className="flex-1 font-semibold">Email</Text>
        <Text className="flex-1 font-semibold">Role</Text>
      </View>
      {users.map(user => (
        <View key={user.id} className="border-b flex-row p-3">
          <Text className="flex-1">{user.name}</Text>
          <Text className="flex-1">{user.email}</Text>
          <Text className="flex-1">{user.role}</Text>
        </View>
      ))}
    </ScrollView>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  final users = [
    {'id': 1, 'name': 'John Doe', 'email': 'john@example.com', 'role': 'Admin'},
    {'id': 2, 'name': 'Jane Smith', 'email': 'jane@example.com', 'role': 'User'},
  ];

  @override
  Widget build(BuildContext context) {
    return DataTable(
      columns: const [
        DataColumn(label: Text('Name')),
        DataColumn(label: Text('Email')),
        DataColumn(label: Text('Role')),
      ],
      rows: users.map((user) => DataRow(
        cells: [
          DataCell(Text(user['name'] as String)),
          DataCell(Text(user['email'] as String)),
          DataCell(Text(user['role'] as String)),
        ],
      )).toList(),
    );
  }
}
```
:::

  </template>
</ComponentPreview>

## Installation

::: code-group
```bash [React]
npx galaxy-ui-cli add table
```

```bash [Vue]
npx galaxy-ui-cli add table
```

```bash [Angular]
npx galaxy-ui-cli add table
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add table
```
:::

## Usage

::: code-group
```tsx [React]
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/table'

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/table'
</script>

<template>
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead class="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="font-medium">INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell class="text-right">$250.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core'
import {
  TableComponent,
  TableHeaderDirective,
  TableBodyDirective,
  TableRowDirective,
  TableHeadDirective,
  TableCellDirective,
  TableCaptionDirective,
} from '@/components/table'

@Component({
  selector: 'app-table-demo',
  standalone: true,
  imports: [
    TableComponent,
    TableHeaderDirective,
    TableBodyDirective,
    TableRowDirective,
    TableHeadDirective,
    TableCellDirective,
    TableCaptionDirective,
  ],
  template: `
    <ui-table>
      <caption uiTableCaption>A list of your recent invoices.</caption>
      <thead uiTableHeader>
        <tr uiTableRow>
          <th uiTableHead>Invoice</th>
          <th uiTableHead>Status</th>
          <th uiTableHead>Method</th>
          <th uiTableHead class="text-right">Amount</th>
        </tr>
      </thead>
      <tbody uiTableBody>
        <tr uiTableRow>
          <td uiTableCell class="font-medium">INV001</td>
          <td uiTableCell>Paid</td>
          <td uiTableCell>Credit Card</td>
          <td uiTableCell class="text-right">$250.00</td>
        </tr>
      </tbody>
    </ui-table>
  `
})
export class TableDemo {}
```
:::


## API Reference

### Props

This component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Components

The Table component is composed of multiple sub-components:

- `Table` - Main table wrapper with responsive container
- `TableHeader` - Table header section
- `TableBody` - Table body section
- `TableFooter` - Table footer section
- `TableRow` - Table row with hover effect
- `TableHead` - Table header cell
- `TableCell` - Table body cell
- `TableCaption` - Table caption

## Accessibility

- Uses semantic HTML table elements
- Proper heading structure with `<thead>` and `<th>`
- Caption provides context for screen readers

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
