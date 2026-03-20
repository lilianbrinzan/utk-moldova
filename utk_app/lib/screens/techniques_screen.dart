import 'package:flutter/material.dart';

class TechniquesScreen extends StatelessWidget {
  const TechniquesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('TACTICAL EXECUTION'),
        backgroundColor: Colors.transparent,
        elevation: 0,
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildSectionHeader('Standard Grips'),
            _buildTechniqueCard('Saber Grip', 'Maximum reach, precise tip control.', 'Level: Core', Icons.swipe),
            _buildTechniqueCard('Reverse (Ice) Grip', 'High power, defensive shielding.', 'Level: Advanced', Icons.security),
            const SizedBox(height: 25),
            _buildSectionHeader('Combat Stances'),
            _buildTechniqueCard('Neutral Crouch', 'Low center of gravity, mobility.', 'Level: Core', Icons.accessibility_new),
            _buildTechniqueCard('Lead Leg Shield', 'Protecting the vitals with leg lead.', 'Level: Intermediate', Icons.shield),
            const SizedBox(height: 25),
            _buildSectionHeader('Defensive Maneuvers'),
            _buildTechniqueCard('Circle Step Out', 'Evading the direct line of attack.', 'Level: Expert', Icons.autorenew),
            _buildTechniqueCard('Check & Wrap', 'Neutralizing the opponent’s weapon arm.', 'Level: Master', Icons.handshake),
          ],
        ),
      ),
    );
  }

  Widget _buildSectionHeader(String title) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 15),
      child: Row(
        children: [
          Container(
            width: 4,
            height: 20,
            color: Colors.blueAccent,
          ),
          const SizedBox(width: 10),
          Text(
            title.toUpperCase(),
            style: const TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.bold,
              letterSpacing: 1.5,
              color: Colors.white70,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTechniqueCard(String name, String desc, String level, IconData icon) {
    return Container(
      margin: const EdgeInsets.only(bottom: 15),
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white10),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.blueAccent.withOpacity(0.1),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Icon(icon, color: Colors.blueAccent, size: 28),
          ),
          const SizedBox(width: 20),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                const SizedBox(height: 4),
                Text(desc, style: const TextStyle(fontSize: 13, color: Colors.white38)),
                const SizedBox(height: 8),
                Text(
                  level.toUpperCase(),
                  style: const TextStyle(
                    fontSize: 10,
                    color: Colors.blueAccent,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1.1,
                  ),
                ),
              ],
            ),
          ),
          const Icon(Icons.play_circle_outline, color: Colors.white24, size: 20),
        ],
      ),
    );
  }
}
