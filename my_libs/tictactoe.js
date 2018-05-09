

function drawCubesFrom(scene, initial_position, cube_numbers, size, hex_color, axe='x'){
  var positionx = initial_position[0];
  var positiony = initial_position[1];
  var positionz = initial_position[2];

  for(var i =0; i<cube_numbers; i++){
    // create a cube
    var cubeGeometry = new THREE.BoxGeometry(size, size, size);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: hex_color});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.receiveShadow = true;
  //  if(!axe){axe='x'}

  // position the cube
  cube.position.x = positionx;
  cube.position.y = positiony;
  cube.position.z = positionz;

      if(axe=='x'){
        //actualize the cube position
        positionx+=size;
      }
      if(axe=='y'){
        //actualize the cube position
        positiony+=size;
      }
      if(axe=='z'){
        //actualize the cube position
        positionz+=size;
      }

      // add the cube to the scene
      scene.add(cube);
  }
}

function drawCubesTo(scene, coordinates, cube_numbers, size, hex_color, axe='x'){
  if(axe=='x'){
    var positionx = coordinates[0] - (size*cube_numbers+size);
    var positiony = coordinates[1];
    var positionz = coordinates[2];
  }

  if(axe=='y'){
    var positionx = coordinates[0];
    var positiony = coordinates[1] - (size*cube_numbers+size);
    var positionz = coordinates[2];

  }

  if(axe=='z'){
    var positionx = coordinates[0];
    var positiony = coordinates[1];
    var positionz = coordinates[2] - (size*cube_numbers +size);

  }


  for(var i =0; i<cube_numbers; i++){
    // create a cube
    var cubeGeometry = new THREE.BoxGeometry(size, size, size);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: hex_color});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.receiveShadow = true;


      if(axe=='x'){

        //actualize the cube position
        positionx+=size;
      }
      if(axe=='y'){

        //actualize the cube position
        positiony+=size;
      }
      if(axe=='z'){

        //actualize the cube position
        positionz+=size;
      }
      // position the cube
      cube.position.x = positionx;
      cube.position.y = positiony;
      cube.position.z = positionz;

      // add the cube to the scene
      scene.add(cube);
  }
}
