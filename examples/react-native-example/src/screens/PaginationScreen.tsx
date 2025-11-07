import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function PaginationScreen() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Pagination</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Pagination</Text>
      <Text className="mb-4 text-gray-600">Current Page: {currentPage}</Text>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onPress={() => setCurrentPage(Math.max(1, currentPage - 1))} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onPress={() => setCurrentPage(1)} isActive={currentPage === 1}>
              <Text>1</Text>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onPress={() => setCurrentPage(2)} isActive={currentPage === 2}>
              <Text>2</Text>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onPress={() => setCurrentPage(3)} isActive={currentPage === 3}>
              <Text>3</Text>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onPress={() => setCurrentPage(Math.min(3, currentPage + 1))} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </ScrollView>
  );
}
