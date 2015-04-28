var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xffffff, 1);

function computeShellGeometry() {
	var geometry = new THREE.Geometry();
	
	// Auxiliary function to push a Cartesian coordinate onto the three.js geometry
	function pushCart(c) {
		geometry.vertices.push( new THREE.Vector3(c.x, c.y, c.z) )
	}
	
	
	//TODO: Add a Bool "dirty" when changing the UI, and call this whenever the bool is dirty
	//Look into using the three.js variable MeshNeedsUpdating
	var c = shell.getCartCoords()

	// Push the seashell coordinates onto the geometry's vertex array
	for (i in c) {
		for (j in c[i] ){
			pushCart(c[i][j])
		}
	}

	// Define faces using the pushed vertices
	for (i = 0; i < geometry.vertices.length - (shell.bezres+1) ; i++) { // we look ahead in the index, so we stop i before the end
		geometry.faces.push( new THREE.Face3( i+1, i, i+shell.bezres ) );	
		geometry.faces.push( new THREE.Face3( i+1, i+shell.bezres, i+shell.bezres+1 ) );
	}
	geometry.computeFaceNormals();
	geometry.computeVertexNormals();
	return geometry;
}

var scene = new THREE.Scene();

// Create a material for our mesh
var material = new THREE.MeshPhongMaterial( { color: 0xffffff, shininess: 0, shading: THREE.SmoothShading, side:THREE.DoubleSide } )

// Create the mesh, add it to the scene
var shellMesh = new THREE.Mesh( computeShellGeometry(), material );
shellMesh.rotation.y -=3.14
scene.add(shellMesh);

// Lights...
var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set( 10, 10, 10 );
scene.add( directionalLight );

var light = new THREE.AmbientLight( 0x101010 );
scene.add( light );

//...camera...
var camera = new THREE.PerspectiveCamera( 75, 1, 0.001, 1000 );
camera.position.z = 15;

//...action!
function render() {
	if (dirty) {
		scene = new THREE.Scene();
		
		// Store the old mesh rotation variables:
		
		var oldX = shellMesh.rotation.x;
		var oldY = shellMesh.rotation.y;
		var oldZ = shellMesh.rotation.z;
		
		// Create a new mesh, add it to the scene
		shellMesh = new THREE.Mesh( computeShellGeometry(), material );
		shellMesh.rotation.x = oldX;
		shellMesh.rotation.y = oldY;
		shellMesh.rotation.z = oldZ;
		scene.add(shellMesh);
		scene.add( directionalLight );
		
		dirty = false;
	}
	// Function callback for the browser to request the render function repeatedly
	window.requestAnimationFrame(render)
	renderer.render(scene, camera );
}

render();

// Simple functions for rotating the geometry
// Code taken from https://stackoverflow.com/questions/17015019/keylistener-in-javascript :
document.onkeydown = function (e) {
	var code = e.keyCode ? e.keyCode : e.which;
	if (code === 37) { //left key
		shellMesh.rotation.y -=0.1
		return false;
	} else if (code === 38) { //up key
		shellMesh.rotation.x -=0.1
		return false;
	} else if (code === 39) { //right key
		shellMesh.rotation.y +=0.1
		return false;
	} else if (code === 40) { //down key
		shellMesh.rotation.x +=0.1
		return false;
	} else if (code === 107) { //plus key
		camera.position.z -= 0.1
		return false;
	} else if (code === 109) { //minus key
		camera.position.z += 0.1
		return false;
	}
};

function setupGraphics() {
	
	
	//Get our display element:
	var container = document.getElementById( "graphicsDiv" )
	var width = container.offsetWidth;
	var height = container.offsetHeight;
	
	renderer.setSize(width, height);
	camera.aspect=(width/height)
	camera.updateProjectionMatrix()
	
	container.appendChild(renderer.domElement);
	
	// Sync UI to the camera
	document.getElementById("camera").value = camera.position.z
	
	// Add event listeners:
	document.getElementById("camera").oninput = function() { camera.position.z = this.value; }
	
	
}