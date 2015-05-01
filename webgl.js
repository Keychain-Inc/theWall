var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xffffff, 1);

var geometry = new THREE.Geometry();

function computeShellGeometry(noOfVerticesChanged) {
	//Recomputes the geometry of the shell. Needed after e.g. changing parameters.
    // TODO - do this in the GPU, which is the "proper" graphics way of doing things.
    // TODO - learn GLSL...
    
    var c = shell.getCartCoords();
    
    if (noOfVerticesChanged) {
     geometry = new THREE.Geometry();   
    }
    
	// Allocate the seashell coordinates to the geometry's vertex array
	var k = 0;
    for (i in c) {
        for (j in c[i] ){
			geometry.vertices[k] = new THREE.Vector3(c[i][j].x, c[i][j].y, c[i][j].z) 
            k++;
        }
	}
    
	// Define faces using the allocated vertices
    for (i = 0; i < geometry.vertices.length - (shell.bezres + 1) ; i++) { // we look ahead in the index, so we stop i before the end
        /* TODO - there is a bug in here which does not render the first and last face */
        geometry.faces[2*i] = new THREE.Face3( i+1, i, i+shell.bezres );
        geometry.faces[2*i+1] = new THREE.Face3( i+1, i+shell.bezres, i+shell.bezres + 1);
    }
    
    geometry.verticesNeedUpdate = true;
    geometry.normalsNeedUpdate = true;
    
    geometry.computeFaceNormals();
	geometry.computeVertexNormals();
    
    return geometry;
}

var scene = new THREE.Scene();

var material = new THREE.MeshPhongMaterial( {color: 0xffffff,
                                             shininess: 0,
                                             shading: THREE.SmoothShading,
                                             side:THREE.DoubleSide } )

// Create the mesh, add it to the scene

var shellMesh = new THREE.Mesh( computeShellGeometry(true), material );
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
	if (needsUpdate) {
        
        // Check if the vector length has changed
        var verticesOnShell = shell.bezres * shell.tstep * (shell.tmax - shell.t0);
        var verticesInMesh = geometry.vertices.length;
        
        if (verticesOnShell != verticesInMesh) { // We must recompute the mesh
            
            var oldX = shellMesh.rotation.x;
            var oldY = shellMesh.rotation.y;
            var oldZ = shellMesh.rotation.z;
            
            scene.remove(shellMesh);
            shellMesh = new THREE.Mesh( computeShellGeometry(true), material ); //Recompute shell
            
            shellMesh.rotation.x = oldX;
            shellMesh.rotation.y = oldY;
            shellMesh.rotation.z = oldZ;
            
            scene.add(shellMesh);            
        } else { // else we just recompute the vertices
         computeShellGeometry(false)   
        }
        
		needsUpdate = false;
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
		camera.position.z -= 0.5
		return false;
	} else if (code === 109) { //minus key
		camera.position.z += 0.5
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