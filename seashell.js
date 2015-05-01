//Create a Cartesian coordinate with some methods, accepts 2D or 3D coordinates
function cartesian() {
	var c = {};
	c.x = arguments[0]
	c.y = arguments[1]
	c.z = arguments[2] ? arguments[2] : 0 // if a z-coordinate is passed, use it, otherwise set to 0
	
	//add one cartesian coordinate to another, returns a new coordinate object
	c.add = function(c2) {
		return cartesian (c.x+c2.x, c.y+c2.y, c.z+c2.z);
	}
	
	// subtraction - uses addition function
	c.subtract = function(cart) {
		for (i in cart) {
			cart[i] = cart[i]*(-1)
		}
		return c.add(cart)
	}
	
	// multiplication - returns new coordinate
	c.multiply = function(f) {
		return cartesian(c.x*f, c.y*f, c.z*f)
	}
	
	//return our coordinate object:
	return c;
}

//cylinder coordinates:
function cylindrical(r, a, z) {
	// "a" for "angle"
	var c = {"r":r ,"a":a, "z":z}
	
	//get the cartesian coordinate from this cylindrical (needed for rendering):
	c.cartesian = function() {
		var crt = cartesian (c.r*Math.cos(c.a),
							 c.r*Math.sin(c.a),
							 c.z)
		return crt
	}
	
	c.multiply = function(f) {
		return cylindrical(c.r*f, c.a*f, (c.z ? c.z*f : 0))
	}
	return c
}


// Eventually replace this by something tapping into the SVG directly
// Currently unused
function Bezier(startPt, endPt, startCtrlPt, endCtrlPt) {
	var b;
	b.startPoint=startPt;
	b.endPoint=endPt;
	b.startControlPoint = startCtrlPt;
	b.endControlPoint = endCtrlPt;
	b.getCartesianAt = new function(t) {
		if (t > 1 || t < 0) { /* TODO error handler */}
		var x = Math.pow((1 - t),3) * b.startPoint.x +
		3*t*Math.pow((1-t),2) * b.startControlPoint.x +
		3*Math.pow(t,2)*(1-t) * b.endControlPoint.x +
		pow(t,3) * b.endPoint.x;
		
		var y = Math.pow((1 - t),3) * b.startPoint.y +
		3*t*Math.pow((1-t),2) * b.startControlPoint.y +
		3*Math.pow(t,2)*(1-t) * b.endControlPoint.y +
		Math.pow(t,3) * b.endPoint.y;
		
		return [x,y];
	}
	return b;
}

/*
 //closed Bezier curve class
 
 ClosedBezier::ClosedBezier() {
 }
 
 //Composed of several Beziers 
 ClosedBezier::ClosedBezier(const std::vector<Cartesian> &curvePoints,
 const std::vector<Cartesian> &controlPoints) {
 
 // First bezier, made from supplied points:
 
 bezierVector.push_back(Bezier(curvePoints[0], curvePoints[1],
 controlPoints[0], controlPoints[1]));
 
 // Intermediate beziers, some control points are calculated:
 for (unsigned int i = 2; i < curvePoints.size(); ++i) {
 // Make a new, mirrored control point for the first curve point of
 // each new bezier curve:
 // (mirror ctrlpt = new curvept - (previous ctrlpt - previous curvept))
 
 Cartesian mirrorCtrlPt = (curvePoints[i-1] - (controlPoints[i-1] - curvePoints[i-1]));
 
 bezierVector.push_back(Bezier(curvePoints[i-1], curvePoints[i],
 mirrorCtrlPt, controlPoints[i]));
 }
 
 //Final bezier, links together first and final curve point:
 
 Cartesian mirrorCtrlPt1 = (curvePoints[curvePoints.size()-1] - (controlPoints[controlPoints.size()-1] - curvePoints[curvePoints.size()-1]));
 
 Cartesian mirrorCtrlPt2 = (curvePoints[0] - (controlPoints[0] - curvePoints[0]));
 
 bezierVector.push_back(Bezier(curvePoints[curvePoints.size()-1], 
 curvePoints[0],
 mirrorCtrlPt1,
 mirrorCtrlPt2
 ));
 }
 
 
 const Cartesian ClosedBezier::getCartesianAt(const double& t) {
 //Returns the coordinates from one of the bezier components
 int i(t); // done on purpose! Used to index components.
 // (each component has t going from 0 to 1)
 return bezierVector[i].getCartesianAt(t-i);
 }
 
 
 void ClosedBezier::getCoordVector(const double& n, std::vector<Cartesian>& v) {
 
 for (double d = 0.0; d <= bezierVector.size(); d += bezierVector.size()/n) {
 v.push_back(getCartesianAt(d)); 
 }
 }
 */

// Closed bezier object
//Takes 2 arrays, one for the points on the curve, one for the associated control points

//TODO - maybe make this work, or do something that taps straight into the SVG

/*
 function closedBezier = new function(curvePoints, controlPoints) {
 var b;
 b.bezierVector = [];
 
 // First bezier, made from supplied points:
 
 b.bezierVector.push(Bezier(this.curvePoints[0], this.curvePoints[1],
 this.controlPoints[0], this.controlPoints[1]) );
 
 // Intermediate beziers, some control points are calculated:
 for (i = 2; i < curvePoints.length; i++) {
 // Make a new, mirrored control point for the first curve point of
 // each new bezier curve:
 // (mirror ctrlpt = new curvept - (previous ctrlpt - previous curvept))
 
 // TODO - this is the trouble, there is no minus operator for the Coordinate arrays
 var mirrorCtrlPt = (this.curvePoints[i-1] - (this.controlPoints[i-1] - this.curvePoints[i-1]));
 
 b.bezierVector.push(Bezier(this.curvePoints[i-1], this.curvePoints[i],
 mirrorCtrlPt, this.controlPoints[i]));
 }
 
 //Final bezier, links together first and final curve point:
 // TODO - clean up this mess
 Cartesian mirrorCtrlPt1 = (curvePoints[curvePoints.size()-1] - (controlPoints[controlPoints.size()-1] - curvePoints[curvePoints.size()-1]));
 
 Cartesian mirrorCtrlPt2 = (curvePoints[0] - (controlPoints[0] - curvePoints[0]));
 
 bezierVector.push_back(Bezier(curvePoints[curvePoints.size()-1], 
 curvePoints[0],
 mirrorCtrlPt1,
 mirrorCtrlPt2
 ));
 
 
 
 
 return b;
 }*/

//------------

//placeholder function for the generating curve:
function getGeneratingCurveCoordinates(resolution) {
	var vec = []
	
	for (i = 0; i < resolution; i++) {
		vec.push( cartesian(	Math.cos(3.1415*2*(i/resolution)),
							Math.sin(3.1415*2*(i/resolution))) )
	}

    // Square test curve
    /*vec.push(cartesian(1, 1))
    vec.push(cartesian(1, -1))
    vec.push(cartesian(-1, -1))
    vec.push(cartesian(-1, 1))*/
    
	return vec;
}

//Create a shell object holding the parameters and methods:
var shell = {
	r0 : 0.1,
	z0 : 0.1,
	chir : 1.16,
	chiz : 1.16,
	t0 : 0,    /* start value of parameter t in complete revolutions (angle given by t*2π) */
	tmax : 5, /* end value of parameter t in complete revolutions (angle given by t*2π) */
	tstep : 30, /* steps per revolution */
	
	C0 : 0.1, /* Initial scaling of the generating curve C */
	Cscale : 1.15, /* Subsequent scaling of C in each step */
	bezres : 30, /* No. of points on C */
		
	getCylVector : function() {
		var cv = []
		
		var Delta_a = (2*Math.PI)/this.tstep
		var lambda_r = Math.pow(this.chir, Delta_a)
		var lambda_z = Math.pow(this.chiz, Delta_a)
		
		var loop_t = (this.t0 + Delta_a)
		var init = cylindrical(this.r0, this.t0, this.z0)
		
		cv.push(init)
		
		while (loop_t < this.tmax*2*Math.PI) {
			var v = cv[cv.length-1]
			var tmp = cylindrical(v.r*lambda_r, v.a+Delta_a,v.z*lambda_z)
			cv.push(tmp)
			loop_t += Delta_a;
		}
		return cv;
	},
	
	getCartCoords : function() {
		var spiralPoints = this.getCylVector()
		var returnVector = [];
		var coordvec = [];
		
        var C = getGeneratingCurveCoordinates(this.bezres)
		//scale down C to initial size
		for (c in C) {
			coordvec[c] = C[c].multiply(this.C0)
		}
		
		//start from the beginning
		for (i in spiralPoints) {
			//get the spiral coordinate we are working at
			var c = spiralPoints[i]
			var cv2 = [];
			
			for (ii in coordvec) {
				//scale up the generating curve - previously used exponential scaling but this messes up when increasing the spiral curve resolution
				var k = coordvec[ii].multiply(Math.pow(this.Cscale, (i*2*Math.PI)/this.tstep));  // k contains a scaled C coordinate
				//console.log(k)
				//console.log(c)
				//(TODO: allow for other scaling functions)
				
				//and add it to the point c at the spiral
				k = cylindrical(c.r + k.x, c.a, c.z+k.y) // translate k to c
				//then convert it all to cartesian coordinates
				k = k.cartesian()
				cv2.push(k);
			}
			returnVector.push(cv2)
		}
		return returnVector;
	}
	
}

//shell.C = getGeneratingCurveCoordinates();
//shell.bezres = C.length;

/*
// Set up parameters for the helicospiral
function helicospiral() {
	var h = {};
	h.r0 = 0.1;
	h.z0 = 0.1;
	h.chir = 1.2;
	h.chiz = 1.1;
	h.t0 = 0;    //start angle of parameter in radians
	h.tmax = 4*2*3.14; //end angle of parameter in radians
	h.tstep = 0.1;
	
	h.getCylVector = function() {
		var cv = []

		var Delta_a = h.tstep
		var lambda_r = Math.pow(h.chir, Delta_a)
		var lambda_z = Math.pow(h.chiz, Delta_a)
		
		var loop_t = (h.t0 + Delta_a)
		var init = cylindrical(h.r0,h.t0,h.z0)

		cv.push(init)

		while (loop_t < h.tmax) {
			var v = cv[cv.length-1]
			var tmp = cylindrical(v.r*lambda_r, v.a+Delta_a,v.z*lambda_z)
			cv.push(tmp)
			loop_t += Delta_a;
		}
		return cv;
	}
	return h;
}
	

//Set up parameters for the shell
var shellParameters = {};
shellParameters.c0 = 0.1;
shellParameters.Cscale = 1.105;
shellParameters.bezres = 3;


*/


/*
// Create a seashell object
var seashell = {}

seashell.h = helicospiral()
seashell.s = shellParameters
seashell.C = getGeneratingCurveCoordinates()

seashell.getCartCoords = function() {
	var spiralPoints = seashell.h.getCylVector()
	var returnVector = [];
	var noOfCoords = shellParameters.bezres
	var coordvec = [];

	//scale down C to initial size
	for (c in seashell.C) {
			coordvec[c] = seashell.C[c].multiply(seashell.s.c0)
		}
	
	//start from the beginning
	for (i in spiralPoints) {
		//get the spiral coordinate we are working at
		var c = spiralPoints[i]
		var cv2 = [];
		
		for (ii in coordvec) {
			//scale up the generating curve - previously used exponential scaling but this messes up when increasing the spiral curve resolution
			var k = coordvec[ii].multiply(Math.pow(shellParameters.Cscale, (i*seashell.h.tstep)/2*3,1415));  // k contains a scaled C coordinate
			//(TODO: allow for other scaling functions)

			//and add it to the point c at the spiral
			k = cylindrical(c.r + k.x, c.a, c.z+k.y) // translate k to c
			//then convert it all to cartesian coordinates
			k = k.cartesian()
			cv2.push(k);
		}
		returnVector.push(cv2)
	}
	return returnVector;
}
*/
/* Set up listeners to the input fields */

// Set to true whenever we change something 
var needsUpdate = false;

/* Anonymous function to bind UI control "input" to the variable v */
// TODO - fix this so it works - closures mean that a snapshot of v is stored,
// and the actual v is not manipulated!
// (or something to that effect)
function makeListener(input, v) {
	var n = document.getElementById(input)
	n.oninput = function() { v = this.value; needsUpdate = true;  } 
}

function setupControls() {

	document.getElementById("r0").appendChild(makeSlider("r0", 0, 1))
	document.getElementById("z0").appendChild(makeSlider("z0", 0, 1))
	document.getElementById("chir").appendChild(makeSlider("chir", 1, 1.5))
	document.getElementById("chiz").appendChild(makeSlider("chiz", 1, 1.5))
	document.getElementById("C0").appendChild(makeSlider("C0", 0.01, 1))
	document.getElementById("Cscale").appendChild(makeSlider("Cscale", 1, 1.5))
	
	//Sync values to the data model:
	document.getElementById("r0widget").set(shell.r0)
	document.getElementById("z0widget").set(shell.z0)
	document.getElementById("chirwidget").set(shell.chir)
	document.getElementById("chizwidget").set(shell.chiz)
	document.getElementById("t0").value = shell.t0
	document.getElementById("tmax").value = shell.tmax
	document.getElementById("C0widget").set(shell.C0)
	document.getElementById("Cscalewidget").set(shell.Cscale)
	document.getElementById("tstep").value = shell.tstep
	document.getElementById("bezres").value = shell.bezres
	
	// Add event listeners:
	document.getElementById("r0slider").oninput = function() { shell.r0 = this.value; needsUpdate = true;  }
	document.getElementById("z0slider").oninput = function() { shell.z0 = this.value; needsUpdate = true;  }
	document.getElementById("chirslider").oninput = function() { shell.chir = this.value; needsUpdate = true;  }
	document.getElementById("chizslider").oninput = function() { shell.chiz = this.value; needsUpdate = true;  }
	document.getElementById("t0").oninput = function() { shell.t0 = this.value; needsUpdate = true;  }
	document.getElementById("tmax").oninput = function() { shell.tmax = this.value; needsUpdate = true;  }
	document.getElementById("C0slider").oninput = function() { shell.C0 = this.value; needsUpdate = true;  }
	document.getElementById("Cscaleslider").oninput = function() { shell.Cscale = this.value; needsUpdate = true;  }
	document.getElementById("tstep").oninput = function() { shell.tstep = this.value; needsUpdate = true;  }
	document.getElementById("bezres").oninput = function() { shell.bezres = this.value; needsUpdate = true;  }
	
/*	
	makeListener("r0", seashell.h.r0)
	makeListener("z0", seashell.h.z0)
	makeListener("chir", seashell.h.chir)
	makeListener("chiz", seashell.h.chiz)
	makeListener("t0", seashell.h.t0)
	makeListener("tmax", seashell.h.tmax)
	makeListener("Cscale", shellParameters.Cscale)
	makeListener("tstep", seashell.h.tstep)
	makeListener("bezres", shellParameters.bezres)*/
}
