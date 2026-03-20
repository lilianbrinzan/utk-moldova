import 'package:flutter/material.dart';
import 'screens/inventory_screen.dart';
import 'screens/techniques_screen.dart';
import 'screens/courses_screen.dart';
import 'screens/community_screen.dart';

void main() {
  runApp(const UTKApp());
}

class UTKApp extends StatelessWidget {
  const UTKApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'UTK Moldova Mobile',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        primaryColor: Colors.blueAccent,
        scaffoldBackgroundColor: const Color(0xFF0F172A),
        colorScheme: const ColorScheme.dark(
          primary: Colors.blueAccent,
          secondary: Colors.blueAccent,
          surface: Color(0xFF1E293B),
        ),
        useMaterial3: true,
      ),
      home: const UTKDashboard(),
    );
  }
}

class UTKDashboard extends StatelessWidget {
  const UTKDashboard({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('UTK MOLDOVA', style: TextStyle(letterSpacing: 2, fontWeight: FontWeight.bold)),
        centerTitle: true,
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: Container(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Interactive Portal',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.w200),
            ),
            const SizedBox(height: 30),
            Expanded(
              child: GridView.count(
                crossAxisCount: 2,
                crossAxisSpacing: 15,
                mainAxisSpacing: 15,
                children: [
                   _buildTacticalCard(context, 'Courses', Icons.school, Colors.blueAccent, onTap: () {
                     Navigator.push(context, MaterialPageRoute(builder: (context) => const CoursesScreen()));
                   }),
                   _buildTacticalCard(context, 'Equipment', Icons.shield, Colors.grey, onTap: () {
                     Navigator.push(context, MaterialPageRoute(builder: (context) => const InventoryScreen()));
                   }),
                   _buildTacticalCard(context, 'Techniques', Icons.military_tech, Colors.orangeAccent, onTap: () {
                     Navigator.push(context, MaterialPageRoute(builder: (context) => const TechniquesScreen()));
                   }),
                    _buildTacticalCard(context, 'Community', Icons.groups, Colors.blueAccent, onTap: () {
                     Navigator.push(context, MaterialPageRoute(builder: (context) => const CommunityScreen()));
                   }),
                ],
              ),
            ),
            const Center(
              child: Padding(
                padding: EdgeInsets.symmetric(vertical: 20),
                child: Text(
                  'EXCELLENCE IN EVERY EDGE',
                  style: TextStyle(color: Colors.white24, fontSize: 10, letterSpacing: 4),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTacticalCard(BuildContext context, String title, IconData icon, Color accent, {VoidCallback? onTap}) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: const Color(0xFF1E293B),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: Colors.white10),
          boxShadow: [
            BoxShadow(
              color: accent.withOpacity(0.05),
              blurRadius: 10,
              spreadRadius: 2,
            )
          ],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 40, color: accent),
            const SizedBox(height: 15),
            Text(
              title.toUpperCase(),
              style: const TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.bold,
                letterSpacing: 1.2,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
