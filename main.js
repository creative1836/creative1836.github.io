var onePathData = "M242.95,413.237c-3.938-1.969-6.682-4.79-7.928-8.468c-1.25-3.674-2.021-12.996-2.021-27.962V151h-6.224l-64.983,31.872l2.954,6.188c8.665-4.067,15.424-6.062,20.283-6.062c3.412,0,6.332,1.005,8.763,2.975c2.428,1.969,4.21,5.066,5.13,9.266c1.311,5.514,2.078,17.998,2.078,37.425v144.145c0,16.018-0.832,25.633-2.275,28.849c-1.446,3.218-3.82,5.778-7.494,7.68c-3.677,1.904-12.231,2.987-24.231,3.249V424h100v-7.415C255,416.323,246.888,415.207,242.95,413.237z"
var eightPathData = "M422.364,285.991c18.76-13.91,30.932-36.211,30.932-61.338c0-42.123-34.198-76.321-76.321-76.321s-76.322,34.198-76.322,76.321c0,25.126,12.172,47.428,30.933,61.338c-18.76,13.911-30.933,36.212-30.933,61.338c0,42.124,34.199,76.322,76.322,76.322s76.321-34.198,76.321-76.322C453.296,322.203,441.124,299.902,422.364,285.991z"
var threePathData = "M505.657,285.42c37.886-0.229,68.573-31.048,68.573-68.985c0-38.079-30.916-68.996-68.997-68.996c28.561,5.749,51.747,34.685,51.747,68.996c0,34.275-23.141,63.187-51.662,68.976c-0.028,0-0.057-0.002-0.085-0.002c0.016,0.003,0.031,0.008,0.047,0.011c-0.016,0.003-0.031,0.008-0.047,0.011c0.028,0,0.057-0.002,0.085-0.002c28.521,5.792,51.662,34.701,51.662,68.977c0,34.311-23.187,63.247-51.747,68.997c38.081,0,68.997-30.917,68.997-68.997C574.23,316.469,543.543,285.649,505.657,285.42z"
var sixPathData = "M756.783,277.839c-9.709-11.86-27.51-25.574-57.608-25.574c-13.269,0-25.891,2.965-36.571,8.895c3.561-12.602,8.415-24.462,14.888-34.84c7.768-12.602,16.853-21.868,26.886-27.427c10.68-6.3,22.623-8.524,35.623-6.3v-43.365c-18-1.854-36.271,1.853-52.453,11.119c-15.857,8.896-29.462,22.98-40.789,41.141c-30.746,50.407-37.549,124.535-15.541,173.088c14.24,31.875,39.157,49.295,70.227,49.295c21.684,0,41.424-10.378,55.342-28.91c12.297-16.308,19.094-38.176,19.094-60.043C775.879,312.68,769.081,292.665,756.783,277.839z M728.303,367.163c-4.854,6.301-13.27,13.714-26.862,13.714c-16.829,0-29.127-8.524-36.895-25.944c-3.236-7.042-5.502-15.196-6.797-24.092c0.647-3.335,2.913-10.007,6.797-16.679c7.768-12.602,19.095-18.902,34.629-18.902c13.593,0,23.626,4.076,30.423,12.231c5.825,6.671,8.738,16.307,8.738,27.427C738.336,346.778,734.775,358.269,728.303,367.163z"

var one = new Path(onePathData);
var eight = new Path(eightPathData);
var three = new Path(threePathData);
var six = new Path(sixPathData);


one.fillColor = 'blue';
eight.fillColor = 'blue';
three.fillColor = 'gold';
six.fillColor = 'gold';

one.scale(1);
eight.scale(1);
three.scale(1);
six.scale(1);

var hitOptions = {
	segments: true,
	stroke: true,
	fill: true,
	tolerance: 15
};

settings.handleSize = 8;

var segment, path;
var movePath = false;
function onMouseDown(event) {
	segment = path = null;
	var hitResult = project.hitTest(event.point, hitOptions);
	if (!hitResult)
		return;

	if (event.modifiers.shift) {
		if (hitResult.type == 'segment') {
			hitResult.segment.remove();
		};
		return;
	}

	if (hitResult) {
		path = hitResult.item;
		if (hitResult.type == 'segment') {
			segment = hitResult.segment;
		} else if (hitResult.type == 'stroke') {
			var location = hitResult.location;
			segment = path.insert(location.index + 1, event.point);
			path.smooth();
		}
	}
	movePath = hitResult.type == 'fill';
	if (movePath)
		project.activeLayer.addChild(hitResult.item);
}

function onMouseMove(event) {
	project.activeLayer.selected = false;
	if (event.item)
		event.item.selected = true;
}

function onMouseDrag(event) {
	if (segment) {
		segment.point += event.delta;
	} else if (path) {
		path.position += event.delta;
	}
}

