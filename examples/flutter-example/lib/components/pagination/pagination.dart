import 'package:flutter/material.dart';

/// Pagination variant
enum PaginationVariant {
  compact, // Shows only a few pages (mobile-friendly)
  full, // Shows all pages
  loadMore, // Shows "Load More" button
}

/// A unified pagination component for mobile and web
class GalaxyPagination extends StatelessWidget {
  final int currentPage;
  final int totalPages;
  final ValueChanged<int>? onPageChange;
  final PaginationVariant variant;
  final int visiblePages; // Number of visible page buttons in compact mode
  final String? loadMoreText;
  final bool isLoading;

  const GalaxyPagination({
    Key? key,
    required this.currentPage,
    required this.totalPages,
    this.onPageChange,
    this.variant = PaginationVariant.compact,
    this.visiblePages = 5,
    this.loadMoreText,
    this.isLoading = false,
  }) : super(key: key);

  /// Creates a compact pagination (mobile-friendly)
  const GalaxyPagination.compact({
    Key? key,
    required this.currentPage,
    required this.totalPages,
    this.onPageChange,
    this.visiblePages = 5,
  })  : variant = PaginationVariant.compact,
        loadMoreText = null,
        isLoading = false,
        super(key: key);

  /// Creates a full pagination
  const GalaxyPagination.full({
    Key? key,
    required this.currentPage,
    required this.totalPages,
    this.onPageChange,
  })  : variant = PaginationVariant.full,
        visiblePages = 10,
        loadMoreText = null,
        isLoading = false,
        super(key: key);

  /// Creates a load more button
  const GalaxyPagination.loadMore({
    Key? key,
    required this.currentPage,
    required this.totalPages,
    this.onPageChange,
    this.loadMoreText = 'Load More',
    this.isLoading = false,
  })  : variant = PaginationVariant.loadMore,
        visiblePages = 0,
        super(key: key);

  @override
  Widget build(BuildContext context) {
    if (totalPages <= 1) {
      return const SizedBox.shrink();
    }

    switch (variant) {
      case PaginationVariant.compact:
        return _buildCompactPagination(context);
      case PaginationVariant.full:
        return _buildFullPagination(context);
      case PaginationVariant.loadMore:
        return _buildLoadMore(context);
    }
  }

  Widget _buildCompactPagination(BuildContext context) {
    final theme = Theme.of(context);
    final pages = _getVisiblePages();

    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        // Previous button
        _buildIconButton(
          context,
          icon: Icons.chevron_left,
          onPressed: currentPage > 1
              ? () => onPageChange?.call(currentPage - 1)
              : null,
        ),

        const SizedBox(width: 8),

        // Page buttons
        ...pages.map((page) {
          if (page == -1) {
            // Ellipsis
            return Padding(
              padding: const EdgeInsets.symmetric(horizontal: 4),
              child: Text(
                '...',
                style: theme.textTheme.bodyMedium?.copyWith(
                  color: theme.colorScheme.onSurface.withOpacity(0.5),
                ),
              ),
            );
          }

          final isSelected = page == currentPage;

          return Padding(
            padding: const EdgeInsets.symmetric(horizontal: 2),
            child: _buildPageButton(
              context,
              page: page,
              isSelected: isSelected,
            ),
          );
        }).toList(),

        const SizedBox(width: 8),

        // Next button
        _buildIconButton(
          context,
          icon: Icons.chevron_right,
          onPressed: currentPage < totalPages
              ? () => onPageChange?.call(currentPage + 1)
              : null,
        ),
      ],
    );
  }

  Widget _buildFullPagination(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        // Previous button
        _buildIconButton(
          context,
          icon: Icons.chevron_left,
          onPressed: currentPage > 1
              ? () => onPageChange?.call(currentPage - 1)
              : null,
        ),

        const SizedBox(width: 8),

        // All page buttons
        ...List.generate(totalPages, (index) {
          final page = index + 1;
          final isSelected = page == currentPage;

          return Padding(
            padding: const EdgeInsets.symmetric(horizontal: 2),
            child: _buildPageButton(
              context,
              page: page,
              isSelected: isSelected,
            ),
          );
        }),

        const SizedBox(width: 8),

        // Next button
        _buildIconButton(
          context,
          icon: Icons.chevron_right,
          onPressed: currentPage < totalPages
              ? () => onPageChange?.call(currentPage + 1)
              : null,
        ),
      ],
    );
  }

  Widget _buildLoadMore(BuildContext context) {
    final theme = Theme.of(context);
    final hasMore = currentPage < totalPages;

    if (!hasMore) {
      return const SizedBox.shrink();
    }

    return Center(
      child: ElevatedButton(
        onPressed: isLoading
            ? null
            : () => onPageChange?.call(currentPage + 1),
        style: ElevatedButton.styleFrom(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
        ),
        child: isLoading
            ? SizedBox(
                width: 20,
                height: 20,
                child: CircularProgressIndicator(
                  strokeWidth: 2,
                  valueColor: AlwaysStoppedAnimation<Color>(
                    theme.colorScheme.onPrimary,
                  ),
                ),
              )
            : Text(loadMoreText ?? 'Load More'),
      ),
    );
  }

  Widget _buildPageButton(
    BuildContext context, {
    required int page,
    required bool isSelected,
  }) {
    final theme = Theme.of(context);

    return InkWell(
      onTap: () => onPageChange?.call(page),
      borderRadius: BorderRadius.circular(8),
      child: Container(
        width: 40,
        height: 40,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: isSelected
              ? theme.colorScheme.primary
              : Colors.transparent,
          borderRadius: BorderRadius.circular(8),
          border: isSelected
              ? null
              : Border.all(
                  color: theme.colorScheme.outline,
                  width: 1,
                ),
        ),
        child: Text(
          '$page',
          style: theme.textTheme.bodyMedium?.copyWith(
            color: isSelected
                ? theme.colorScheme.onPrimary
                : theme.colorScheme.onSurface,
            fontWeight: isSelected ? FontWeight.w600 : FontWeight.normal,
          ),
        ),
      ),
    );
  }

  Widget _buildIconButton(
    BuildContext context, {
    required IconData icon,
    required VoidCallback? onPressed,
  }) {
    final theme = Theme.of(context);

    return InkWell(
      onTap: onPressed,
      borderRadius: BorderRadius.circular(8),
      child: Container(
        width: 40,
        height: 40,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8),
          border: Border.all(
            color: theme.colorScheme.outline,
            width: 1,
          ),
        ),
        child: Icon(
          icon,
          size: 20,
          color: onPressed != null
              ? theme.colorScheme.onSurface
              : theme.colorScheme.onSurface.withOpacity(0.3),
        ),
      ),
    );
  }

  List<int> _getVisiblePages() {
    if (totalPages <= visiblePages) {
      return List.generate(totalPages, (i) => i + 1);
    }

    final half = visiblePages ~/ 2;
    int start = currentPage - half;
    int end = currentPage + half;

    if (start < 1) {
      start = 1;
      end = visiblePages;
    }

    if (end > totalPages) {
      end = totalPages;
      start = totalPages - visiblePages + 1;
    }

    final pages = <int>[];

    // Always show first page
    if (start > 1) {
      pages.add(1);
      if (start > 2) {
        pages.add(-1); // Ellipsis
      }
    }

    // Show visible range
    for (int i = start; i <= end; i++) {
      pages.add(i);
    }

    // Always show last page
    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.add(-1); // Ellipsis
      }
      pages.add(totalPages);
    }

    return pages;
  }
}
