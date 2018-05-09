//scene, initial_position, cube_numbers, size, hex_color, axe
function drawStopMario(scene){
            //  drawCubesFrom(scene, [8, 0, 0], 4, 2 , 0x565100, 'x');//shoes
            //  drawCubesTo(scene, [0, 0, 0], 4, 2 ,  0x565100, 'x');
            //  drawCubesFrom(scene, [8, 2, 0], 3, 2 , 0x565100, 'x');
            //  drawCubesTo(scene, [0, 2, 0], 3, 2 ,  0x565100, 'x');
            //  drawCubesFrom(scene, [6, 4, 0], 3, 2 , 0xAB1632, 'x');//red--monkey
            //  drawCubesTo(scene, [2, 4, 0], 3, 2 ,  0xAB1632, 'x');
            //  drawCubesFrom(scene, [-4, 6, 0], 8, 2 , 0xAB1632, 'x');//red--monkey
            //  drawCubesTo(scene, [-4, 6, 0], 2, 2 ,  skin_color, 'x'); //skin-hands
            //  drawCubesFrom(scene, [12, 6, 0], 2, 2 ,  skin_color, 'x');
            //  drawCubesTo(scene, [-2, 8, 0], 3, 2 ,  skin_color, 'x');
            //  drawCubesFrom(scene, [10, 8, 0], 3, 2 ,  skin_color, 'x');//skin-hands
            //  drawCubesFrom(scene, [-2, 8, 0], 6, 2 , 0xAB1632, 'x');//red--monkey
          //    drawCubesTo(scene, [-4, 10, 0], 2, 2 ,  skin_color, 'x'); //skin-hands
          //    drawCubesFrom(scene, [12, 10, 0], 2, 2 ,  skin_color, 'x');
          //    drawCubesFrom(scene, [-4, 10, 0], 1, 2 ,  0x565100, 'x');
          //    drawCubesFrom(scene, [-2, 10, 0], 1, 2 ,  0xAB1632, 'x');//red
            //  drawCubesFrom(scene, [0, 10, 0], 1, 2 ,  buttons_color, 'x');//gold
            //  drawCubesFrom(scene, [2, 10, 0], 2, 2 , 0xAB1632, 'x');
            //  drawCubesFrom(scene, [6, 10, 0], 1, 2 ,  buttons_color, 'x');//gold
            //  drawCubesFrom(scene, [8, 10, 0], 2, 2 ,  0xAB1632, 'x');//red
            //  drawCubesTo(scene, [0, 12, 0], 4, 2 ,  0x565100, 'x');//shirt
            //  drawCubesFrom(scene, [8, 12, 0], 4, 2 ,   0x565100, 'x');
            //  drawCubesTo(scene, [8, 12, 0], 4, 2 ,   0xAB1632, 'x');
          //    drawCubesTo(scene, [0, 14, 0], 3, 2 ,  0x565100, 'x');//shirt
          //    drawCubesFrom(scene, [8, 14, 0], 3, 2 ,   0x565100, 'x');
            //  drawCubesTo(scene, [8, 14, 0], 1, 2 ,   0xAB1632, 'x');
          //    drawCubesTo(scene, [2, 14, 0], 1, 2 ,   0xAB1632, 'x');
            //  drawCubesTo(scene, [6, 14, 0], 2, 2 ,  0x565100, 'x');
            //  drawCubesTo(scene, [6, 16, 0], 3, 2 ,  0x565100, 'x');//shirt
            //  drawCubesFrom(scene, [8, 16, 0], 2, 2 ,   0x565100, 'x');
            //  drawCubesTo(scene, [8, 16, 0], 1, 2 ,  0xAB1632, 'x');
            //  drawCubesFrom(scene, [-4, 18, 0], 7, 2 ,  skin_color, 'x');
            //  drawCubesFrom(scene, [8, 20, 0], 2, 2 ,   0x565100, 'x');//hair
            //  drawCubesFrom(scene, [0, 20, 0], 4, 2 ,  skin_color, 'x');
            //  drawCubesFrom(scene, [-8, 20, 0], 4, 2 ,   moustache_color, 'x');//moustache
              //sdrawCubesFrom(scene, [10, 22, 0], 1, 2 ,   0x565100, 'x');//hair
            //  drawCubesFrom(scene, [8, 22, 0], 1, 2 ,   skin_color, 'x');//ear
              //drawCubesFrom(scene, [4, 22, 0], 2, 2 ,   0x565100, 'x');//hair
            //  drawCubesTo(scene, [-4, 22, 0], 3, 2 ,   skin_color, 'x');//nose
            //  drawCubesFrom(scene, [-2, 22, 0], 3, 2 ,   skin_color, 'x');
            //  drawCubesFrom(scene, [-4, 22, 0], 1, 2 ,   moustache_color, 'x');//moustache
            //  drawCubesFrom(scene, [10, 24, 0], 1, 2 ,   0x565100, 'x');//hair
            //  drawCubesFrom(scene, [8, 24, 0], 1, 2 ,   skin_color, 'x');//ear
            //  drawCubesFrom(scene, [6, 24, 0], 1, 2 ,   0x565100, 'x');//hair
            //  drawCubesFrom(scene, [0, 24, 0], 3, 2 ,   skin_color, 'x'); //face
            //  drawCubesTo(scene, [-2, 24, 0], 3, 2 ,   skin_color, 'x');//nose
            //  drawCubesFrom(scene, [-2, 24, 0], 1, 2 ,   eyes_color, 'x');//eye
            //  drawCubesFrom(scene, [4, 26, 0], 3, 2 ,  0x565100, 'x');//hair
            //  drawCubesFrom(scene, [-2, 26, 0], 1, 2 ,   eyes_color, 'x');//eye
            //  drawCubesTo(scene, [-2, 26, 0], 1, 2 ,  skin_color, 'x');//face
            //  drawCubesTo(scene, [4, 26, 0], 2, 2 ,  skin_color, 'x');//face
            //  drawCubesFrom(scene, [-8, 28, 0], 9, 2 ,  0xAB1632, 'x');//hat
            //  drawCubesFrom(scene, [-2, 30, 0], 5, 2 ,  0xAB1632, 'x');//hat

            drawCubesTo(scene, [8, 0, 2], 5, 2 ,  shoe_color, 'z');//shoe
            drawCubesTo(scene, [10, 0, 2], 5, 2 ,  shoe_color, 'z');//shoe
            drawCubesTo(scene, [12, 0, 2], 5, 2 ,  shoe_color, 'z');//shoe
            drawCubesTo(scene, [14, 0, 2], 5, 2 ,  shoe_color, 'z');//shoe

            drawCubesTo(scene, [-10, 0, 2], 5, 2 ,   shoe_color, 'z');//shoe
            drawCubesTo(scene, [-8, 0, 2], 5, 2 ,   shoe_color, 'z');//shoe
            drawCubesTo(scene, [-6, 0, 2], 5, 2 ,   shoe_color, 'z');//shoe
            drawCubesTo(scene, [-4, 0, 2], 5, 2 ,   shoe_color, 'z');//shoe


            drawCubesTo(scene, [-8, 2, 0], 3, 2 ,   shoe_color, 'z');//shoe
            drawCubesTo(scene, [-6, 2, 2], 5, 2 ,   shoe_color, 'z');//shoe
            drawCubesTo(scene, [-4, 2, 2], 5, 2 ,   shoe_color, 'z');//shoe

            drawCubesTo(scene, [8, 2, 2], 5, 2 ,  shoe_color, 'z');//shoe
            drawCubesTo(scene, [10, 2, 2], 5, 2 ,  shoe_color, 'z');//shoe
            drawCubesTo(scene, [12, 2, 0], 3, 2 ,  shoe_color, 'z');//shoe

            drawCubesTo(scene, [-4, 4, 0], 3, 2 ,  overalls_color, 'z');//peto //leg
            drawCubesTo(scene, [-2, 4, 0], 3, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [0, 4, 2], 7, 2 ,  overalls_color, 'z');//peto

            drawCubesTo(scene, [6, 4, 2], 7, 2 ,  overalls_color, 'z');//peto //leg
            drawCubesTo(scene, [8, 4, -4], 3, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [10, 4, -4], 3, 2 ,  overalls_color, 'z');//peto

            drawCubesTo(scene, [12, 6, -4], 3, 2 ,   skin_color, 'z');//hand
            drawCubesTo(scene, [14, 6, -4], 3, 2 ,   skin_color, 'z');//hand

            drawCubesTo(scene, [-6, 6, 2], 4, 2 ,   skin_color, 'z');//hand //CHANGE HAND POSITION
            drawCubesTo(scene, [-8, 6, 2], 4, 2 ,   skin_color, 'z');//hand

            drawCubesTo(scene, [10, 8, -4], 3, 2 ,   skin_color, 'z');//hand
            drawCubesTo(scene, [12, 8, -4], 3, 2 ,   skin_color, 'z');//hand
            drawCubesTo(scene, [14, 8, -4], 3, 2 ,   skin_color, 'z');//hand

            drawCubesTo(scene, [-4, 8, 0], 3, 2 ,   skin_color, 'z');//hand //CHANGE HAND POSITION
            drawCubesTo(scene, [-6, 8, 0], 3, 2 ,   skin_color, 'z');//hand
            drawCubesTo(scene, [-8, 8, 0], 3, 2 ,   skin_color, 'z');//hand

            drawCubesTo(scene, [-4, 6, 0], 5, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [-2, 6, 0], 5, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [0, 6, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [2, 6, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [4, 6, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [6, 6, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [8, 6, 0], 5, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [10, 6, 0], 5, 2 ,  overalls_color, 'z');//peto

            drawCubesTo(scene, [-2, 8, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [0, 8, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [2, 8, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [4, 8, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [6, 8, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [8, 8, 2], 7, 2 ,  overalls_color, 'z');//peto

            drawCubesTo(scene, [-4, 10, 0], 3, 2 ,   shirt_color, 'z');//shirt
            drawCubesTo(scene, [-6, 10, 0], 3, 2 ,   skin_color, 'z');//hand
            drawCubesTo(scene, [-8, 10, 0], 3, 2 ,   skin_color, 'z');//hand

            drawCubesTo(scene, [-2, 10, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [0, 10, 0], 6, 2 ,  buttons_color, 'z');//peto //gold
            drawCubesTo(scene, [0, 10, 2], 1, 2 , overalls_color, 'z');//peto //backgold
            drawCubesTo(scene, [2, 10, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [4, 10, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [6, 10, 0], 6, 2 ,  buttons_color, 'z');//peto //gold
            drawCubesTo(scene, [6, 10, 2], 1, 2 ,  overalls_color, 'z');//peto //backgold
            drawCubesTo(scene, [8, 10, 2], 7, 2 ,  overalls_color, 'z');//peto

            drawCubesTo(scene, [10, 10, 0], 5, 2 ,   shirt_color, 'z');//shirt
            drawCubesTo(scene, [12, 10, -4], 3, 2 ,   skin_color, 'z');//hand
            drawCubesTo(scene, [14, 10, -4], 3, 2 ,   skin_color, 'z');//hand

            drawCubesTo(scene, [-8, 12, 0], 3, 2 ,   shirt_color, 'z');//arm
            drawCubesTo(scene, [-2, 12, 0], 3, 2 ,   shirt_color, 'z');//arm
            drawCubesTo(scene, [-4, 12, 0], 3, 2 ,   shirt_color, 'z');//arm
            drawCubesTo(scene, [-6, 12, 0], 3, 2 ,  shirt_color, 'z');//arm

            drawCubesTo(scene, [0, 12, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [2, 12, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [4, 12, 2], 7, 2 ,  overalls_color, 'z');//peto
            drawCubesTo(scene, [6, 12, 2], 7, 2 ,  overalls_color, 'z');//peto

            drawCubesFrom(scene, [8, 12, -10], 2, 2 ,   shirt_color, 'x');//shirt
            drawCubesFrom(scene, [8, 12, -2], 2, 2 ,   shirt_color, 'x');//shirt
            drawCubesFrom(scene, [10, 12, -10], 5, 2 ,   shirt_color, 'z');//shirt

            drawCubesTo(scene, [12, 12, -4], 3, 2 ,   shirt_color, 'z');//arm
            drawCubesTo(scene, [14, 12, -4], 3, 2 ,   shirt_color, 'z');//arm

            drawCubesTo(scene, [-2, 14, 0], 3, 2 ,   shirt_color, 'z');//arm
            drawCubesTo(scene, [-4, 14, 0], 3, 2 ,   shirt_color, 'z');//arm
            drawCubesTo(scene, [-6, 14, 0], 3, 2 ,  shirt_color, 'z');//arm

            drawCubesTo(scene, [0, 14, 0], 5, 2 ,  overalls_color, 'z');//tirant
            drawCubesTo(scene, [8, 14, -10], 1, 2 ,  overalls_color, 'x');//tirant
            drawCubesTo(scene, [8, 14, -2], 1, 2 ,  overalls_color, 'x');//tirant

            drawCubesFrom(scene, [10, 14, -10], 5, 2 ,   shirt_color, 'z');//shirt
            drawCubesFrom(scene, [2, 14, -10], 5, 2 ,   shirt_color, 'z');//shirt
            drawCubesTo(scene, [6, 14, -2], 2, 2 ,  shirt_color, 'x');//shirt
            drawCubesFrom(scene, [8, 14, -2], 2, 2 ,   shirt_color, 'x');//shirt
            drawCubesTo(scene, [6, 14, -10], 2, 2 ,  shirt_color, 'x');//shirt
            drawCubesFrom(scene, [8, 14, -10], 1, 2 ,   shirt_color, 'x');//shirt

            drawCubesTo(scene, [12, 14, -4], 3, 2 ,   shirt_color, 'z');//arm


            drawCubesFrom(scene, [10, 16, -10], 5, 2 ,   shirt_color, 'z');//shirt
            drawCubesFrom(scene, [0, 16, -10], 5, 2 ,   shirt_color, 'z');//shirt
            drawCubesTo(scene, [6, 16, -2], 3, 2 ,  shirt_color, 'x');//shirt
            drawCubesFrom(scene, [8, 16, -2], 2, 2 ,   shirt_color, 'x');//shirt
            drawCubesTo(scene, [8, 16, -2], 1, 2 ,  overalls_color, 'x');//tirant
            drawCubesTo(scene, [6, 16, -10], 3, 2 ,  shirt_color, 'x');//shirt
            drawCubesFrom(scene, [8, 16, -10], 2, 2 ,   shirt_color, 'x');//shirt
            drawCubesTo(scene, [8, 16, -10], 1, 2 ,  overalls_color, 'x');//tirant

            drawCubesTo(scene, [-4, 18, -2], 3, 2 ,   skin_color, 'z');//face
            drawCubesTo(scene, [-2, 18, -2], 3, 2 ,   skin_color, 'z');//face
            drawCubesTo(scene, [8, 18, -2], 3, 2 ,   skin_color, 'z');//face
            drawCubesTo(scene, [-6, 18, -2], 3, 2 ,   skin_color, 'z');//face
            drawCubesFrom(scene, [-4, 18, -2], 6, 2 ,  skin_color, 'x');
            drawCubesFrom(scene, [-4, 18, -10], 6, 2 ,  skin_color, 'x');

            drawCubesTo(scene, [-8, 20, 0], 5, 2 ,   moustache_color, 'z');//moustache
            drawCubesTo(scene, [-6, 20, 2], 7, 2 ,   moustache_color, 'z');//moustache
            drawCubesTo(scene, [-4, 20, 2], 7, 2 ,   moustache_color, 'z');//moustache
            drawCubesTo(scene, [-2, 20, 2], 7, 2 ,   moustache_color, 'z');//moustache

            drawCubesFrom(scene, [0, 20, -2], 4, 2 ,   skin_color, 'x');//face
            drawCubesFrom(scene, [0, 20, -10], 4, 2 ,   skin_color, 'x');//face

            drawCubesFrom(scene, [10, 20, -12], 7 , 2 ,  hair_color, 'z');//hair POSSIBLE 5
            drawCubesFrom(scene, [8, 20, -12], 7 , 2 ,  hair_color, 'z');//hair POSSIBLE 5

            drawCubesTo(scene, [-10, 22, -2], 3, 2 ,   skin_color, 'z');//nose
            drawCubesTo(scene, [-8, 22, 0], 5, 2 ,   skin_color, 'z');//nose
            drawCubesTo(scene, [-6, 22, 0], 5, 2 ,   skin_color, 'z');//nose

            drawCubesTo(scene, [-4, 22, 2], 7, 2 ,   moustache_color, 'z');//moustache

            drawCubesFrom(scene, [-2, 22, -2], 3, 2 ,   skin_color, 'x'); //face
            drawCubesFrom(scene, [-2, 22, -10], 3, 2 ,   skin_color, 'x'); //face

            drawCubesFrom(scene, [4, 22, -2], 2, 2 ,   hair_color, 'x');//patilla
            drawCubesFrom(scene, [4, 22, -10], 2, 2 ,   hair_color, 'x');//patilla

            drawCubesFrom(scene, [8, 22, -12], 7, 2 ,   skin_color, 'z');//ear

          //  drawCubesFrom(scene, [8, 22, 0], 1, 2 ,   hair_color, 'x');//hair
            drawCubesFrom(scene, [10, 22, -12], 7 , 2 ,  hair_color, 'z');//hair POSSIBLE 5


            drawCubesTo(scene, [-8, 24, -2], 3, 2 ,   skin_color, 'z');//nose
            drawCubesTo(scene, [-6, 24, -2], 3, 2 ,   skin_color, 'z');//nose
            drawCubesTo(scene, [-4, 24, -2], 3, 2 ,   skin_color, 'z');//nose

            drawCubesFrom(scene, [-2, 24, -4], 1, 2 ,   eyes_color, 'x');//eye
            drawCubesFrom(scene, [-2, 24, -8], 1, 2 ,   eyes_color, 'x');//eye

            drawCubesFrom(scene, [0, 24, -2], 3, 2 ,   skin_color, 'x'); //face
            drawCubesFrom(scene, [0, 24, -10], 3, 2 ,   skin_color, 'x'); //face

            drawCubesFrom(scene, [6, 24, -2], 1, 2 ,   hair_color, 'x');//patilla
            drawCubesFrom(scene, [6, 24, -10], 1, 2 ,   hair_color, 'x');//patilla

            drawCubesFrom(scene, [8, 24, -12], 7, 2 ,   skin_color, 'z');//ear

          //  drawCubesFrom(scene, [8, 24, 0], 1, 2 ,   0x565100, 'x');//hair
        //    drawCubesFrom(scene, [12, 24, -12], 7 , 2 ,  0x565100, 'z');//hair POSSIBLE 5
            drawCubesFrom(scene, [10, 24, -12], 7 , 2 ,  hair_color, 'z');//hair POSSIBLE 5

            drawCubesFrom(scene, [-2, 26, -4], 1, 2 ,   eyes_color, 'x');//eye
            drawCubesFrom(scene, [-2, 26, -8], 1, 2 ,   eyes_color, 'x');//eye

            drawCubesTo(scene, [-2, 26, -6], 1, 2 ,  skin_color, 'x');//face
            drawCubesTo(scene, [4, 26, -2], 2, 2 ,  skin_color, 'x');//face
            drawCubesTo(scene, [4, 26, -10], 2, 2 ,  skin_color, 'x');//face

            drawCubesFrom(scene, [4, 26, -12], 3, 2 ,  hair_color, 'x');//hair
            drawCubesFrom(scene, [4, 26, 0], 3, 2 ,  hair_color, 'x');//hair
            drawCubesFrom(scene, [8, 26, -10], 5, 2 ,  hair_color, 'z');//hair

            drawCubesFrom(scene, [0, 30, 0], 3, 2 ,  cap_color, 'x');//hat
            drawCubesFrom(scene, [0, 30, -12], 3, 2 ,  cap_color, 'x');//hat
            drawCubesFrom(scene, [6, 30, -10], 5, 2 ,  cap_color, 'z');//hat
            drawCubesFrom(scene, [4, 30, -10], 5, 2 ,  cap_color, 'z');//hat
            drawCubesFrom(scene, [2, 30, -10], 5, 2 ,  cap_color, 'z');//hat
            drawCubesFrom(scene, [0, 30, -10], 5, 2 ,  cap_color, 'z');//hat
            drawCubesFrom(scene, [-2, 30, -10], 5, 2 ,  cap_color, 'z');//hat

            drawCubesTo(scene, [-8, 28, 0], 5, 2 ,  cap_color, 'z');//hat
            drawCubesTo(scene, [-6, 28, 0], 5, 2 ,  cap_color, 'z');//hat
            drawCubesTo(scene, [-4, 28, 0], 5, 2 ,  cap_color, 'z');//hat
            drawCubesFrom(scene, [-6, 28, -12], 8, 2 ,  cap_color, 'x');//hat
            drawCubesFrom(scene, [-6, 28, 0], 8, 2 ,  cap_color, 'x');//hat
            drawCubesFrom(scene, [8, 28, -10], 5, 2 ,  cap_color, 'z');//hat
}

function drawQuestionBlock(scene){
            drawCubesFrom(scene, [2, -16, -4], 1, 30,  block_color,'y');
}
