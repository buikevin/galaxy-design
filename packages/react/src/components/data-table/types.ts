export interface DataTableColumn<T = Record<string, unknown>> {
  key: string;
  header: string;
  sortable?: boolean;
  className?: string;
  cell?: (row: T) => React.ReactNode;
}

export interface DataTableProps<T = Record<string, unknown>> {
  columns: DataTableColumn<T>[];
  data: T[];
  searchable?: boolean;
  pageSize?: number;
  className?: string;
  emptyText?: string;
  onRowClick?: (row: T) => void;
}
