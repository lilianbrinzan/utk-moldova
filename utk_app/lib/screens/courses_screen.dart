import 'package:flutter/material.dart';

class CoursesScreen extends StatelessWidget {
  const CoursesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('TRAINING SCHEDULE'),
        backgroundColor: Colors.transparent,
        elevation: 0,
        centerTitle: true,
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          _buildDayHeader('Tuesday, March 25'),
          _buildCourseItem('Fundamentals of UTK', '18:00 - 20:00', 'Instructor: Andrei V.', 'Available', Colors.blueAccent),
          _buildCourseItem('Advanced Disarming', '20:30 - 22:00', 'Instructor: Lilian B.', 'Waitlist', Colors.orangeAccent),
          const SizedBox(height: 20),
          _buildDayHeader('Thursday, March 27'),
          _buildCourseItem('Blade Maintenance & Safety', '17:00 - 18:30', 'Instructor: Igor P.', 'Available', Colors.blueAccent),
          _buildCourseItem('Speed & Precision Drills', '19:00 - 21:00', 'Instructor: Andrei V.', 'Limited', Colors.greenAccent),
          const SizedBox(height: 20),
          _buildDayHeader('Saturday, March 29'),
          _buildCourseItem('Tactical Night Operative', '22:00 - 01:00', 'Instructor: Lilian B.', 'Available', Colors.blueAccent),
        ],
      ),
    );
  }

  Widget _buildDayHeader(String day) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Text(
        day.toUpperCase(),
        style: const TextStyle(
          color: Colors.white24,
          fontSize: 10,
          fontWeight: FontWeight.bold,
          letterSpacing: 2,
        ),
      ),
    );
  }

  Widget _buildCourseItem(String title, String time, String instructor, String status, Color statusColor) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white.withOpacity(0.05)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                time,
                style: const TextStyle(color: Colors.blueAccent, fontSize: 12, fontWeight: FontWeight.bold),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: statusColor.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(6),
                ),
                child: Text(
                  status.toUpperCase(),
                  style: TextStyle(color: statusColor, fontSize: 8, fontWeight: FontWeight.bold),
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          Text(
            title,
            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, letterSpacing: 0.5),
          ),
          const SizedBox(height: 4),
          Text(
            instructor,
            style: const TextStyle(fontSize: 13, color: Colors.white38),
          ),
          const Divider(height: 30, color: Colors.white12),
          SizedBox(
            width: double.infinity,
            height: 40,
            child: ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.blueAccent.withOpacity(0.05),
                foregroundColor: Colors.blueAccent,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                side: const BorderSide(color: Colors.blueAccent, width: 1),
              ),
              child: const Text('RESERVE SPOT', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, letterSpacing: 1.5)),
            ),
          ),
        ],
      ),
    );
  }
}
