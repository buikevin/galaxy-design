export interface DataTableColumn {
  key: string;
  header: string;
  sortable?: boolean;
  className?: string;
}

export interface DataTableProps {
  columns: DataTableColumn[];
  data: Record<string, unknown>[];
  searchable?: boolean;
  pageSize?: number;
  class?: string;
  emptyText?: string;
}

export type SortDirection = 'asc' | 'desc' | null;
