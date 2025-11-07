import 'package:flutter/material.dart';
import '../components/alert/alert.dart';

/// Showcase page for GalaxyUalert component
class UalertPage extends StatelessWidget {
  const UalertPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Ualert'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header
            Text(
              'Ualert Component',
              style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Showcase of GalaxyUalert component variants and features.',
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                color: Colors.grey[600],
              ),
            ),
            const SizedBox(height: 32),

            // Basic Example
            Text(
              'Basic Example',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 16),
            _buildBasicExample(),

            const SizedBox(height: 32),

            // Variants (if applicable)
            Text(
              'Variants',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 16),
            _buildVariants(),
          ],
        ),
      ),
    );
  }

  Widget _buildBasicExample() {
    // TODO: Implement basic example
    return const Placeholder(fallbackHeight: 100);
  }

  Widget _buildVariants() {
    // TODO: Implement variants showcase
    return const Placeholder(fallbackHeight: 200);
  }
}
