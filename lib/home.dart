import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';

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
              const Text('Home Page'),
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
