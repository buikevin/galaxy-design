import 'package:flutter/material.dart';

class GalaxyTable extends StatelessWidget {
  final List<GalaxyTableColumn> columns;
  final List<GalaxyTableRow> rows;
  final String? caption;
  final bool showBorder;

  const GalaxyTable({
    Key? key,
    required this.columns,
    required this.rows,
    this.caption,
    this.showBorder = true,
  }) : super(key: key);

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

class GalaxyTableColumn {
  final String label;

  const GalaxyTableColumn({
    required this.label,
  });
}

class GalaxyTableRow {
  final List<Widget> cells;

  const GalaxyTableRow({
    required this.cells,
  });
}
