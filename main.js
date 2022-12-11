function main(){
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  var tringles = [
    // balok bawah
    -0.7,-1.6,0.3, // titik 1
    0.7,-1.6,0.3, // titik 2
    0.7,-1.6,-0.3, // titik 3
    -0.7,-1.6,-0.3, // titik 4

    -0.7,-1.6,-0.3, // titik 4
    -0.7,-1.6,0.3, // titik 1
    -0.7,-1.45,0.3, // titik 5
    -0.7,-1.45,-0.3, // titik 8

    0.7,-1.6,-0.3, // titik 3
    0.7,-1.6,0.3, // titik 2
    0.7,-1.45,0.3, // titik 6
    0.7,-1.45,-0.3, // titik 7

    -0.7,-1.45,0.3, // titik 5
    0.7,-1.45,0.3, // titik 6
    0.7,-1.45,-0.3, // titik 7
    -0.7,-1.45,-0.3, // titik 8

    -0.7,-1.6,0.3, // titik 1
    0.7,-1.6,0.3, // titik 2
    0.7,-1.45,0.3, // titik 6
    -0.7,-1.45,0.3, // titik 5

    -0.7,-1.6,-0.3, // titik 4
    0.7,-1.6,-0.3, // titik 3
    0.7,-1.45,-0.3, // titik 7
    -0.7,-1.45,-0.3, // titik 8

    // balok atas
    -0.55,-1.45,-0.2, // titik 12
    -0.55,-1.45,0.2, // titik 9
    -0.55,-1.35,0.2, // titik 13
    -0.55,-1.35,-0.2, // titik 16

    0.55,-1.45,-0.2, // titik 11
    0.55,-1.45,0.2, // titik 10
    0.55,-1.35,0.2, // titik 14
    0.55,-1.35,-0.2, // titik 15

    -0.55,-1.35,0.2, // titik 13
    0.55,-1.35,0.2, // titik 14
    0.55,-1.35,-0.2, // titik 15
    -0.55,-1.35,-0.2, // titik 16

    -0.55,-1.45,0.2, // titik 9
    0.55,-1.45,0.2, // titik 10
    0.55,-1.35,0.2, // titik 14
    -0.55,-1.35,0.2, // titik 13

    -0.55,-1.45,-0.2, // titik 12
    0.55,-1.45,-0.2, // titik 11
    0.55,-1.35,-0.2, // titik 15
    -0.55,-1.35,-0.2, // titik 16

    // bagian belakang
    -0.4,-1.35,-0.1, // titik 17
    0.4,-1.35,-0.1, // titik 18
    0.5,-0.7,-0.1, // titik 19
    0.55,0.6,-0.1, // titik 20
    -0.3,1.9,-0.1, // titik 21
    -0.52,1.6,-0.1, // titik 22
    -0.5,-0.7,-0.1, // titik 23

    -0.5,-0.7,-0.1, // titik 23
    -0.4,-1.35,-0.1, // titik 17
    -0.4,-1.35,0.0, // titik 24
    -0.5,-0.7,0.0, // titik 30

    0.5,-0.7,-0.1, // titik 19
    0.4,-1.35,-0.1, // titik 18
    0.4,-1.35,0.0, // titik 25
    0.5,-0.7,0.0, // titik 26

    0.55,0.6,-0.1, // titik 20
    0.5,-0.7,-0.1, // titik 19
    0.5,-0.7,0.0, // titik 26
    0.55,0.6,0.0, // titik 27

    -0.3,1.9,-0.1, // titik 21
    0.55,0.6,-0.1, // titik 20
    0.55,0.6,0.0, // titik 27
    -0.3,1.9,0.0, // titik 28

    -0.52,1.6,-0.1, // titik 22
    -0.3,1.9,-0.1, // titik 21
    -0.3,1.9,0.0, // titik 28
    -0.52,1.6,0.0, // titik 29

    -0.5,-0.7,-0.1, // titik 23
    -0.52,1.6,-0.1, // titik 22
    -0.52,1.6,0.0, // titik 29
    -0.5,-0.7,0.0, // titik 30

    -0.4,-1.35,0.0, // titik 24
    0.4,-1.35,0.0, // titik 25
    0.5,-0.7,0.0, // titik 26
    0.55,0.6,0.0, // titik 27
    -0.3,1.9,0.0, // titik 28
    -0.52,1.6,0.0, // titik 29
    -0.5,-0.7,0.0, // titik 30

    // bagian depan
    -0.4,-1.35,0.0, // titik 31
    0.4,-1.35,0.0, // titik 32
    0.5,-0.7,0.0, // titik 33
    0.58,0.98,0.0, // titik 34
    0.4,1.2,0.0, // titik 35
    -0.4,0.4,0.0, // titik 36
    -0.48,-0.8,0.0, // titik 37

    -0.48,-0.8,0.0, // titik 37
    -0.4,-1.35,0.0, // titik 31
    -0.4,-1.35,0.1, // titik 38
    -0.48,-0.8,0.1, // titik 44

    0.5,-0.7,0.0, // titik 33
    0.4,-1.35,0.0, // titik 32
    0.4,-1.35,0.1, // titik 39
    0.5,-0.7,0.1, // titik 40

    0.58,0.98,0.0, // titik 34
    0.5,-0.7,0.0, // titik 33
    0.5,-0.7,0.1, // titik 40
    0.58,0.98,0.1, // titik 41

    0.4,1.2,0.0, // titik 35
    0.58,0.98,0.0, // titik 34
    0.58,0.98,0.1, // titik 41
    0.4,1.2,0.1, // titik 42

    -0.4,0.4,0.0, // titik 36
    0.4,1.2,0.0, // titik 35
    0.4,1.2,0.1, // titik 42
    -0.4,0.4,0.1, // titik 43

    -0.48,-0.8,0.0, // titik 37
    -0.4,0.4,0.0, // titik 36
    -0.4,0.4,0.1, // titik 43
    -0.48,-0.8,0.1, // titik 44

    -0.4,-1.35,0.1, // titik 38
    0.4,-1.35,0.1, // titik 39
    0.5,-0.7,0.1, // titik 40
    0.58,0.98,0.1, // titik 41
    0.4,1.2,0.1, // titik 42
    -0.4,0.4,0.1, // titik 43
    -0.48,-0.8,0.1, // titik 44
  ];
  
  var colors = [
    // balok bawah (hitam)
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,

    // balok atas (transparan)
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,

    // bagian belakang (merah)
    0,0,1, 0,0,1, 0,0,1, 0,0,1,
    0,0,1, 0,0,1, 0,0,1,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1,

    // bagian depan (kuning)
    1,1,0, 1,1,0, 1,1,0, 1,1,0,
    1,1,0, 1,1,0, 1,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
    0,1,1, 0,1,1, 0,1,1, 0,1,1,
    0,1,1, 0,1,1, 0,1,1,
  ];

  var indices = [
    0,1,2, 0,2,3,
    4,5,6, 4,6,7,
    8,9,10, 8,10,11,
    12,13,14, 12,14,15,
    16,17,18, 16,18,19,
    
    20,21,22, 20,22,23,
    24,25,26, 24,26,27,
    28,29,30, 28,30,31,
    32,33,34, 32,34,35,
    36,37,38, 36,38,39,
    40,41,42, 40,42,43,
    
    44,45,46, 44,46,47,
    44,47,48, 44,48,49,
    44,49,50,
    51,52,53, 51,53,54,
    55,56,57, 55,57,58,
    59,60,61, 59,61,62,
    63,64,65, 63,65,66,
    67,68,69, 67,69,70,
    71,72,73, 71,73,74,
    75,76,77, 75,77,78,
    75,78,79, 75,79,80,
    75,80,81,

    82,83,84, 82,84,85,
    82,85,86, 82,86,87,
    82,87,88,
    89,90,91, 89,91,92,
    93,94,95, 93,95,96,
    97,98,99, 97,99,100,
    101,102,103, 101,103,104,
    105,106,107, 105,107,108,
    109,110,111, 109,111,112,
    113,114,115, 113,115,116,
    113,116,117, 113,117,118,
    113,118,119,
  ];

  //vertex buffer
  var vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tringles), gl.STATIC_DRAW);
  
  //color buffer
  var colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  //index buffer
  var indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


  //mengambil dan menyimpan informasi vertex dari html dg document getElementById
  var vertexShaderCode = document.getElementById("vertexShaderCode").text;
  //membuat vertex shader
  var vertexShader = gl.createShader( gl.VERTEX_SHADER );
  gl.shaderSource(vertexShader, vertexShaderCode);
  gl.compileShader(vertexShader);

  //mengambil dan menyimpan informasi fragment dari html dg document getElementByID
  var fragmentShaderCode = document.getElementById("fragmentShaderCode").text;
  //membuat fragment shader
  var fragmentShader = gl.createShader( gl.FRAGMENT_SHADER );
  gl.shaderSource(fragmentShader, fragmentShaderCode);
  gl.compileShader(fragmentShader);

  //menambahkan info shader ke package agar bisa dicompile
  var program = gl.createProgram();  
  gl.attachShader(program, vertexShader);   
  gl.attachShader(program, fragmentShader);   
  gl.linkProgram(program);
  gl.useProgram(program);

  //menambahkan vertices ke dalam aPosition dan aColor untuk digambar
  //position
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  var aPosition = gl.getAttribLocation(program, "aPosition");
  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aPosition);

  //color
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  var aColor = gl.getAttribLocation(program, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aColor);
  
  var Pmatrix = gl.getUniformLocation(program, "uProj");
  var Vmatrix = gl.getUniformLocation(program, "uView");
  var Mmatrix = gl.getUniformLocation(program, "uModel");
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  
  var projmatrix = glMatrix.mat4.create();
  glMatrix.mat4.perspective(
      projmatrix,
      glMatrix.glMatrix.toRadian(90),     //sudut fov
      1.0,    //aspect ratio
      0.5,    //zmin
      10.0    //zmax
  );
  var modmatrix = glMatrix.mat4.create();
  var viewmatrix = glMatrix.mat4.create();
  glMatrix.mat4.lookAt(
      viewmatrix,
      [0.0, 0.0, 2.0],    //posisi kamera positif z 2
      [0.0, 0.0, -2.0],   //kemana kamera menghadap
      [0.0, 1.0, 0.0]     //arah atas kamera
  );

  var freeze = false;
  function onMouseClick(event){
      if(freeze) freeze = false;
      else freeze = true;
  }
  document.addEventListener('click', onMouseClick, false);

  function onKeyDown(event){
      if(event.keyCode == 32) freeze = true;
  }
  function onKeyUp(event){
      if(event.keyCode == 32) freeze = false;
  }
  document.addEventListener('keydown', onKeyDown, false);
  document.addEventListener('keyup', onKeyUp, false);

  var theta = glMatrix.glMatrix.toRadian(1);    
  var animate = function(){
      // if(!freeze){
      //     glMatrix.mat4.rotate(modmatrix, modmatrix, theta, [1,1,1]);
      // }
      
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);

      gl.clearColor(1.0, 1.0, 1.0, 1.0);
      gl.clearDepth(1.0);

      gl.viewport(0.0, 0.0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      gl.uniformMatrix4fv(Pmatrix, false, projmatrix);
      gl.uniformMatrix4fv(Vmatrix, false, viewmatrix);
      gl.uniformMatrix4fv(Mmatrix, false, modmatrix);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

      window.requestAnimationFrame(animate);
  }    
  animate(0);    
}
