function makeSlider(id, min, max) {

	var mn = 0;
	var mx = 1;
	
	if (arguments.length == 3) {
		var mn = arguments[1];
		var mx = arguments[2];
	}
	
	var d = document.createElement("span");
	d.setAttribute("class", "widget");
	d.setAttribute("id", id + "widget");
	
	var min = document.createElement("input");
	min.setAttribute("type", "text")
	min.setAttribute("class", "slider limit")
	min.setAttribute("value", mn)
	min.setAttribute("id", id + "min")

	var r = document.createElement("input");
	r.setAttribute("type", "range")
	r.setAttribute("class", "slider")
	r.setAttribute("min", mn)
	r.setAttribute("value", (mx-mn)/2)
	r.setAttribute("max", mx)
	r.setAttribute("step", 1/10000)
	r.setAttribute("id", id + "slider")

	var max = document.createElement("input");
	max.setAttribute("type", "text")
	max.setAttribute("class", "slider limit")
	max.setAttribute("value", mx)
	max.setAttribute("id", id + "max")

	d.appendChild(min);
	d.appendChild(r);
	d.appendChild(max);
	
	d.setMax = function(v) {
		max.value = v;
		r.max = v;
	}
	
	d.setMin = function(v) {
		min.value = v;
		r.min = v;
	}
	
	d.set = function(v) {
		if (v >= min.value && v <= max.value) {
			r.value = v;	
		}
	}
	
	return d;
}
	
