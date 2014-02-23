function max(){
	if(arguments.length === 0) {
		return undefined
	} else if(arguments.length === 1) {
		if(Array.isArray(arguments[0])){
			return Math.max.apply(null, arguments[0]);
		} else {
			return arguments[0];
		}
	} else {
		return Math.max.apply(null, arguments);
	}
}

function min(){
	if(arguments.length === 0) {
		return undefined
	} else if(arguments.length === 1) {
		if(Array.isArray(arguments[0])){
			return Math.min.apply(null, arguments[0]);
		} else {
			return arguments[0];
		}
	} else {
		return Math.min.apply(null, arguments);
	}
}

function avg(){
	if(arguments.length === 0) {
		return undefined
	} else if(arguments.length === 1) {
		if(Array.isArray(arguments[0])){
			return arguments[0].reduce(
				function(prev, current){
					return (prev + current);
				}
			) / arguments[0].length ;
		} else {
			return arguments[0];
		}
	} else {
		var sum = 0;
		for(var i = 0 ; i < arguments.length ; i++){
			sum += arguments[i];
		}
		return (sum/arguments.length);
	}
}

function xyVal(){
	if(arguments.length === 0) {
		return points;
	} else if(arguments.length === 1){
		return points[arguments[0]];
	} else {
		var result = [];
		for(var i = 0 ; i < arguments.length ; i++){
			result.push(points[arguments[i]]);
		};
		return result;
	}
}

function yVal(){
	if(arguments.length === 0) {
		return points.map(function(item){return item[1];});
	} else if(arguments.length === 1){
		return points[arguments[0]][1];
	} else {
		var result = [];
		for(var i = 0 ; i < arguments.length ; i++){
			result.push(points[arguments[i]][1]);
		};
		return result;
	}
}

function xVal(){
	if(arguments.length === 0) {
		return points.map(function(item){return item[0];});
	} else if(arguments.length === 1){
		return points[arguments[0]][0];
	} else {
		var result = [];
		for(var i = 0 ; i < arguments.length ; i++){
			result.push(points[arguments[i]][0]);
		};
		return result;
	}
}
