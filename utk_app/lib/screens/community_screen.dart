import 'package:flutter/material.dart';

class CommunityScreen extends StatelessWidget {
  const CommunityScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('COMMUNITY FEED'),
        backgroundColor: Colors.transparent,
        elevation: 0,
        centerTitle: true,
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          _buildPostCard(
            category: 'Promotion',
            date: 'March 18, 2026',
            title: 'New Level 4 Instructor: Andrei V.',
            content: 'Andrei has successfully completed the Master Instructor verification and will lead the next Advanced Disarming workshop.',
            icon: Icons.workspace_premium,
            accent: Colors.orangeAccent,
          ),
          _buildPostCard(
            category: 'Announcement',
            date: 'March 15, 2026',
            title: 'Spring Blade Workshop Recap',
            content: 'Last weekend’s outdoor training in Chisinau saw record attendance. 45 students successfully mastered the saber grip foundations.',
            icon: Icons.campaign,
            accent: Colors.blueAccent,
          ),
          _buildPostCard(
            category: 'Gear News',
            date: 'March 12, 2026',
            title: 'New Gear Drop: Carbon-V Prototype',
            content: 'Limited production of the Carbon Fiber reinforced field blade is now available for UTK Members in the Inventory section.',
            icon: Icons.inventory_2,
            accent: Colors.greenAccent,
          ),
          _buildPostCard(
            category: 'Safety',
            date: 'March 10, 2026',
            title: 'Safety Protocol Update v2.1',
            content: 'New guidelines for live-blade proximity training are now mandatory for all Level 2 sessions and above.',
            icon: Icons.gpp_good,
            accent: Colors.grey,
          ),
        ],
      ),
    );
  }

  Widget _buildPostCard({required String category, required String date, required String title, required String content, required IconData icon, required Color accent}) {
    return Container(
      margin: const EdgeInsets.only(bottom: 20),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.white.withOpacity(0.05)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                   Icon(icon, size: 16, color: accent),
                   const SizedBox(width: 8),
                   Text(
                     category.toUpperCase(),
                     style: TextStyle(color: accent, fontSize: 10, fontWeight: FontWeight.bold, letterSpacing: 1.2),
                   ),
                ],
              ),
              Text(
                date,
                style: const TextStyle(color: Colors.white24, fontSize: 10),
              ),
            ],
          ),
          const SizedBox(height: 15),
          Text(
            title,
            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 10),
          Text(
            content,
            style: const TextStyle(fontSize: 14, color: Colors.white60, height: 1.5),
          ),
          const SizedBox(height: 20),
          Row(
            children: [
              const Text('READ MORE', style: TextStyle(color: Colors.blueAccent, fontSize: 12, fontWeight: FontWeight.bold, letterSpacing: 0.5)),
              const SizedBox(width: 5),
              Icon(Icons.arrow_forward_ios, size: 10, color: Colors.blueAccent.withOpacity(0.6)),
            ],
          ),
        ],
      ),
    );
  }
}
