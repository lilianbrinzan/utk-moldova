import 'package:flutter/material.dart';

class InventoryScreen extends StatelessWidget {
  const InventoryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('EQUIPMENT INVENTORY'),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          _buildInventoryHeader('Primary Edged Tools'),
          _buildGearItem('UTK Prototype Alpha', 'High-carbon leaf blade, 6.5"', 'Field Tested', Colors.blueAccent),
          _buildGearItem('UTK Stealth Dagger', 'DLC coating, slim profile', 'Available', Colors.greenAccent),
          const SizedBox(height: 30),
          _buildInventoryHeader('Tactical Gear'),
          _buildGearItem('Kydex Custom Sheath', 'MOLLE compatible, multi-mount', 'In Stock', Colors.blueAccent),
          _buildGearItem('Carbon Fiber Grip Kit', 'Matte finish, ergonomic ribbing', 'Limited', Colors.orangeAccent),
          _buildGearItem('Paracord Lanyard Set', '550-spec, reflective strand', 'In Stock', Colors.blueAccent),
        ],
      ),
    );
  }

  Widget _buildInventoryHeader(String title) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Text(
        title.toUpperCase(),
        style: const TextStyle(
          color: Colors.white38,
          fontSize: 12,
          fontWeight: FontWeight.bold,
          letterSpacing: 2,
        ),
      ),
    );
  }

  Widget _buildGearItem(String name, String desc, String status, Color statusColor) {
    return Container(
      margin: const EdgeInsets.only(bottom: 15),
      padding: const EdgeInsets.all(15),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(15),
        border: Border.all(color: Colors.white.withOpacity(0.05)),
      ),
      child: Row(
        children: [
          Container(
            width: 50,
            height: 50,
            decoration: BoxDecoration(
              color: Colors.black26,
              borderRadius: BorderRadius.circular(10),
            ),
            child: const Icon(Icons.architecture, color: Colors.white24),
          ),
          const SizedBox(width: 15),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                Text(desc, style: const TextStyle(fontSize: 12, color: Colors.white54)),
              ],
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                status.toUpperCase(),
                style: TextStyle(
                  fontSize: 10,
                  color: statusColor,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 1,
                ),
              ),
              const Icon(Icons.chevron_right, color: Colors.white24),
            ],
          ),
        ],
      ),
    );
  }
}
