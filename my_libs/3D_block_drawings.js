//scene, initial_position, cube_numbers, size, hex_color, axe
function drawStopMario(scene){
              drawCubesFrom(scene, [8, 0, 0], 4, 2 , 0x565100, 'x');//shoes
              drawCubesTo(scene, [0, 0, 0], 4, 2 ,  0x565100, 'x');
              drawCubesFrom(scene, [8, 2, 0], 3, 2 , 0x565100, 'x');
              drawCubesTo(scene, [0, 2, 0], 3, 2 ,  0x565100, 'x');
              drawCubesFrom(scene, [6, 4, 0], 3, 2 , 0xAB1632, 'x');//red--monkey
              drawCubesTo(scene, [2, 4, 0], 3, 2 ,  0xAB1632, 'x');
              drawCubesFrom(scene, [-4, 6, 0], 8, 2 , 0xAB1632, 'x');//red--monkey
              drawCubesTo(scene, [-4, 6, 0], 2, 2 ,  0xFDD59C, 'x'); //skin-hands
              drawCubesFrom(scene, [12, 6, 0], 2, 2 ,  0xFDD59C, 'x');
              drawCubesTo(scene, [-2, 8, 0], 3, 2 ,  0xFDD59C, 'x');
              drawCubesFrom(scene, [10, 8, 0], 3, 2 ,  0xFDD59C, 'x');//skin-hands
              drawCubesFrom(scene, [-2, 8, 0], 6, 2 , 0xAB1632, 'x');//red--monkey
              drawCubesTo(scene, [-4, 10, 0], 2, 2 ,  0xFDD59C, 'x'); //skin-hands
              drawCubesFrom(scene, [12, 10, 0], 2, 2 ,  0xFDD59C, 'x');
              drawCubesFrom(scene, [-4, 10, 0], 1, 2 ,  0x565100, 'x');
              drawCubesFrom(scene, [-2, 10, 0], 1, 2 ,  0xAB1632, 'x');//red
              drawCubesFrom(scene, [0, 10, 0], 1, 2 ,  0xE5CD24, 'x');//gold
              drawCubesFrom(scene, [2, 10, 0], 2, 2 , 0xAB1632, 'x');
              drawCubesFrom(scene, [6, 10, 0], 1, 2 ,  0xE5CD24, 'x');//gold
              drawCubesFrom(scene, [8, 10, 0], 2, 2 ,  0xAB1632, 'x');//red
              drawCubesTo(scene, [0, 12, 0], 4, 2 ,  0x565100, 'x');//shirt
              drawCubesFrom(scene, [8, 12, 0], 4, 2 ,   0x565100, 'x');
              drawCubesTo(scene, [8, 12, 0], 4, 2 ,   0xAB1632, 'x');
              drawCubesTo(scene, [0, 14, 0], 3, 2 ,  0x565100, 'x');//shirt
              drawCubesFrom(scene, [8, 14, 0], 3, 2 ,   0x565100, 'x');
              drawCubesTo(scene, [8, 14, 0], 1, 2 ,   0xAB1632, 'x');
              drawCubesTo(scene, [2, 14, 0], 1, 2 ,   0xAB1632, 'x');
              drawCubesTo(scene, [6, 14, 0], 2, 2 ,  0x565100, 'x');
              drawCubesTo(scene, [6, 16, 0], 3, 2 ,  0x565100, 'x');//shirt
              drawCubesFrom(scene, [8, 16, 0], 2, 2 ,   0x565100, 'x');
              drawCubesTo(scene, [8, 16, 0], 1, 2 ,  0xAB1632, 'x');
              drawCubesFrom(scene, [-4, 18, 0], 7, 2 ,  0xFDD59C, 'x');
              drawCubesFrom(scene, [8, 20, 0], 2, 2 ,   0x565100, 'x');//hair
              drawCubesFrom(scene, [0, 20, 0], 4, 2 ,  0xFDD59C, 'x');
              drawCubesFrom(scene, [-8, 20, 0], 4, 2 ,   0x565100, 'x');//moustache
              drawCubesFrom(scene, [10, 22, 0], 1, 2 ,   0x565100, 'x');//hair
              drawCubesFrom(scene, [8, 22, 0], 1, 2 ,   0xFDD59C, 'x');//ear
              drawCubesFrom(scene, [4, 22, 0], 2, 2 ,   0x565100, 'x');//hair
              drawCubesTo(scene, [-4, 22, 0], 3, 2 ,   0xFDD59C, 'x');//nose
              drawCubesFrom(scene, [-2, 22, 0], 3, 2 ,   0xFDD59C, 'x');
              drawCubesFrom(scene, [-4, 22, 0], 1, 2 ,   0x565100, 'x');//moustache
              drawCubesFrom(scene, [10, 24, 0], 1, 2 ,   0x565100, 'x');//hair
              drawCubesFrom(scene, [8, 24, 0], 1, 2 ,   0xFDD59C, 'x');//ear
              drawCubesFrom(scene, [6, 24, 0], 1, 2 ,   0x565100, 'x');//hair
              drawCubesFrom(scene, [0, 24, 0], 3, 2 ,   0xFDD59C, 'x');
              drawCubesTo(scene, [-2, 24, 0], 3, 2 ,   0xFDD59C, 'x');//nose
              drawCubesFrom(scene, [-2, 24, 0], 1, 2 ,   0x565100, 'x');//eye
              drawCubesFrom(scene, [4, 26, 0], 3, 2 ,  0x565100, 'x');//hair
              drawCubesFrom(scene, [-2, 26, 0], 1, 2 ,   0x565100, 'x');//eye
              drawCubesTo(scene, [-2, 26, 0], 1, 2 ,  0xFDD59C, 'x');//face
              drawCubesTo(scene, [4, 26, 0], 2, 2 ,  0xFDD59C, 'x');//face
              drawCubesFrom(scene, [-8, 28, 0], 9, 2 ,  0xAB1632, 'x');//hat
              drawCubesFrom(scene, [-2, 30, 0], 5, 2 ,  0xAB1632, 'x');//hat
}
