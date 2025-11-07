import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function TableScreen() {
  const invoices = [
    { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
    { id: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
    { id: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  ];

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Table</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Invoice Table</Text>
      <Table className="mb-6">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Text>Invoice</Text>
            </TableHead>
            <TableHead>
              <Text>Status</Text>
            </TableHead>
            <TableHead>
              <Text>Method</Text>
            </TableHead>
            <TableHead>
              <Text>Amount</Text>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>
                <Text>{invoice.id}</Text>
              </TableCell>
              <TableCell>
                <Text>{invoice.status}</Text>
              </TableCell>
              <TableCell>
                <Text>{invoice.method}</Text>
              </TableCell>
              <TableCell>
                <Text>{invoice.amount}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Text className="text-lg font-semibold text-gray-700 mb-3">User Table</Text>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Text>Name</Text>
            </TableHead>
            <TableHead>
              <Text>Email</Text>
            </TableHead>
            <TableHead>
              <Text>Role</Text>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Text>John Doe</Text>
            </TableCell>
            <TableCell>
              <Text>john@example.com</Text>
            </TableCell>
            <TableCell>
              <Text>Admin</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text>Jane Smith</Text>
            </TableCell>
            <TableCell>
              <Text>jane@example.com</Text>
            </TableCell>
            <TableCell>
              <Text>User</Text>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ScrollView>
  );
}
