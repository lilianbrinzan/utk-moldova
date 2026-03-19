import 'package:flutter_test/flutter_test.dart';
import 'package:utk_app/main.dart';

void main() {
  testWidgets('UTK App smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const UTKApp());

    // Verify that the dashboard shows the title.
    expect(find.text('UTK MOLDOVA'), findsOneWidget);
    expect(find.text('Interactive Portal'), findsOneWidget);
  });
}
