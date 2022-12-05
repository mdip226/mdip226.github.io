import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:google_fonts/google_fonts.dart';

class HomeTheme {
  static const textColor0 = Colors.blue;
  static const font = Colors.blue;
  // static const textColor0 = Colors.blue;
  // static const textColor0 = Colors.blue;
}

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;
    log('00000000000000000000000000000000000000000000000000000000000000000000000');
    log('width = $width');
    log('height = $height');
    log('00000000000000000000000000000000000000000000000000000000000000000000000');
    return Column(
      children: [
        Container(
          width: width,
          height: height * .2,
          color: Colors.blueAccent,
          child: Row(
            children: [
              Container(
                width: 150,
                height: 50,
                color: Colors.blue,
              ),
              Text(
                'Home Page',
                style: GoogleFonts.aBeeZee(
                  color: HomeTheme.textColor0,
                ),
              ),
            ],
          ),
        ),
        Container(
          width: width,
          height: height * .8,
          color: Colors.black54,
        ),
      ],
    );
  }
}
