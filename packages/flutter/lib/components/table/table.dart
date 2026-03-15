// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Table component - Bảng dữ liệu với columns, rows, caption

import 'package:flutter/material.dart';

/// GalaxyTable - Component bảng dữ liệu với columns, rows, caption
/// 
/// ## Props:
/// - [columns] - Danh sách các cột trong bảng
/// - [rows] - Danh sách các hàng trong bảng
/// - [caption] - Chú thích của bảng (optional)
/// - [showBorder] - Hiển thị border của bảng (default: true)
class GalaxyTable extends StatelessWidget {
  const GalaxyTable({
    Key? key,
    required this.columns,
    required this.rows,
    this.caption,
    this.showBorder = true,
  }) : super(key: key);

  /// Danh sách các cột trong bảng
  final List<GalaxyTableColumn> columns;

  /// Danh sách các hàng trong bảng
  final List<GalaxyTableRow> rows;

  /// Chú thích của bảng
  final String? caption;

  /// Hiển thị border của bảng
  final bool showBorder;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: DataTable(
            border: showBorder
                ? TableBorder.all(
                    color: theme.colorScheme.outline,
                    width: 1,
                  )
                : null,
            columns: columns.map((col) {
              return DataColumn(
                label: Text(
                  col.label,
                  style: theme.textTheme.bodyMedium?.copyWith(
                    fontWeight: FontWeight.w600,
                    color: theme.colorScheme.onSurface.withOpacity(0.7),
                  ),
                ),
              );
            }).toList(),
            rows: rows.map((row) {
              return DataRow(
                cells: row.cells.map((cell) {
                  return DataCell(cell);
                }).toList(),
              );
            }).toList(),
          ),
        ),
        if (caption != null)
          Padding(
            padding: const EdgeInsets.only(top: 16),
            child: Text(
              caption!,
              style: theme.textTheme.bodySmall?.copyWith(
                color: theme.colorScheme.onSurface.withOpacity(0.6),
              ),
            ),
          ),
      ],
    );
  }
}

/// GalaxyTableColumn - Cột trong bảng
/// 
/// ## Props:
/// - [label] - Nhãn hiển thị của cột
class GalaxyTableColumn {
  /// Nhãn hiển thị của cột
  final String label;

  const GalaxyTableColumn({
    required this.label,
  });
}

/// GalaxyTableRow - Hàng trong bảng
/// 
/// ## Props:
/// - [cells] - Danh sách các cell trong hàng
class GalaxyTableRow {
  /// Danh sách các cell trong hàng
  final List<Widget> cells;

  const GalaxyTableRow({
    required this.cells,
  });
}
