import 'package:flutter/material.dart';

/// Typography variant for different text styles
enum TypographyVariant {
  h1,
  h2,
  h3,
  h4,
  p,
  lead,
  large,
  small,
  muted,
  blockquote,
  code,
}

/// Text weight options
enum TypographyWeight {
  normal,
  medium,
  semiBold,
  bold,
}

/// A unified typography component with pre-defined text styles
class GalaxyTypography extends StatelessWidget {
  final String text;
  final TypographyVariant variant;
  final TypographyWeight? weight;
  final Color? color;
  final TextAlign? textAlign;
  final int? maxLines;
  final TextOverflow? overflow;
  final bool? softWrap;

  const GalaxyTypography({
    Key? key,
    required this.text,
    this.variant = TypographyVariant.p,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  }) : super(key: key);

  /// Heading 1 - Largest heading
  const GalaxyTypography.h1(
    this.text, {
    Key? key,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  })  : variant = TypographyVariant.h1,
        super(key: key);

  /// Heading 2
  const GalaxyTypography.h2(
    this.text, {
    Key? key,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  })  : variant = TypographyVariant.h2,
        super(key: key);

  /// Heading 3
  const GalaxyTypography.h3(
    this.text, {
    Key? key,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  })  : variant = TypographyVariant.h3,
        super(key: key);

  /// Heading 4
  const GalaxyTypography.h4(
    this.text, {
    Key? key,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  })  : variant = TypographyVariant.h4,
        super(key: key);

  /// Paragraph - Default body text
  const GalaxyTypography.p(
    this.text, {
    Key? key,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  })  : variant = TypographyVariant.p,
        super(key: key);

  /// Lead text - Larger body text
  const GalaxyTypography.lead(
    this.text, {
    Key? key,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  })  : variant = TypographyVariant.lead,
        super(key: key);

  /// Large text
  const GalaxyTypography.large(
    this.text, {
    Key? key,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  })  : variant = TypographyVariant.large,
        super(key: key);

  /// Small text
  const GalaxyTypography.small(
    this.text, {
    Key? key,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  })  : variant = TypographyVariant.small,
        super(key: key);

  /// Muted text - Lower opacity
  const GalaxyTypography.muted(
    this.text, {
    Key? key,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  })  : variant = TypographyVariant.muted,
        super(key: key);

  /// Blockquote text
  const GalaxyTypography.blockquote(
    this.text, {
    Key? key,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  })  : variant = TypographyVariant.blockquote,
        super(key: key);

  /// Code text - Monospace
  const GalaxyTypography.code(
    this.text, {
    Key? key,
    this.weight,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
    this.softWrap,
  })  : variant = TypographyVariant.code,
        super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final textTheme = theme.textTheme;
    final colorScheme = theme.colorScheme;

    TextStyle? baseStyle;
    Color? defaultColor;

    // Get base style based on variant
    switch (variant) {
      case TypographyVariant.h1:
        baseStyle = textTheme.displayLarge;
        defaultColor = colorScheme.onSurface;
        break;
      case TypographyVariant.h2:
        baseStyle = textTheme.displayMedium;
        defaultColor = colorScheme.onSurface;
        break;
      case TypographyVariant.h3:
        baseStyle = textTheme.displaySmall;
        defaultColor = colorScheme.onSurface;
        break;
      case TypographyVariant.h4:
        baseStyle = textTheme.headlineMedium;
        defaultColor = colorScheme.onSurface;
        break;
      case TypographyVariant.p:
        baseStyle = textTheme.bodyLarge;
        defaultColor = colorScheme.onSurface;
        break;
      case TypographyVariant.lead:
        baseStyle = textTheme.bodyLarge?.copyWith(fontSize: 20);
        defaultColor = colorScheme.onSurface.withOpacity(0.8);
        break;
      case TypographyVariant.large:
        baseStyle = textTheme.titleLarge;
        defaultColor = colorScheme.onSurface;
        break;
      case TypographyVariant.small:
        baseStyle = textTheme.bodySmall;
        defaultColor = colorScheme.onSurface;
        break;
      case TypographyVariant.muted:
        baseStyle = textTheme.bodyMedium;
        defaultColor = colorScheme.onSurface.withOpacity(0.6);
        break;
      case TypographyVariant.blockquote:
        baseStyle = textTheme.bodyLarge;
        defaultColor = colorScheme.onSurface.withOpacity(0.8);
        break;
      case TypographyVariant.code:
        baseStyle = textTheme.bodyMedium?.copyWith(
          fontFamily: 'monospace',
          backgroundColor: colorScheme.surfaceVariant.withOpacity(0.5),
        );
        defaultColor = colorScheme.onSurface;
        break;
    }

    // Apply weight if specified
    FontWeight? fontWeight;
    if (weight != null) {
      switch (weight!) {
        case TypographyWeight.normal:
          fontWeight = FontWeight.w400;
          break;
        case TypographyWeight.medium:
          fontWeight = FontWeight.w500;
          break;
        case TypographyWeight.semiBold:
          fontWeight = FontWeight.w600;
          break;
        case TypographyWeight.bold:
          fontWeight = FontWeight.w700;
          break;
      }
    }

    final finalStyle = baseStyle?.copyWith(
      color: color ?? defaultColor,
      fontWeight: fontWeight ?? baseStyle?.fontWeight,
    );

    Widget textWidget = Text(
      text,
      style: finalStyle,
      textAlign: textAlign,
      maxLines: maxLines,
      overflow: overflow,
      softWrap: softWrap,
    );

    // Add border for blockquote
    if (variant == TypographyVariant.blockquote) {
      textWidget = Container(
        padding: const EdgeInsets.only(left: 16, top: 8, bottom: 8),
        decoration: BoxDecoration(
          border: Border(
            left: BorderSide(
              color: colorScheme.primary,
              width: 4,
            ),
          ),
        ),
        child: textWidget,
      );
    }

    // Add padding for code
    if (variant == TypographyVariant.code) {
      textWidget = Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        decoration: BoxDecoration(
          color: colorScheme.surfaceVariant.withOpacity(0.5),
          borderRadius: BorderRadius.circular(4),
        ),
        child: textWidget,
      );
    }

    return textWidget;
  }
}
