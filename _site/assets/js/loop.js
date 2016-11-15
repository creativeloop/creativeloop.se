jQuery(window).on("load", function(){
	$('body').fadeIn(600, function(){
		$('.logo-text').addClass('active');
	});
});

jQuery(document).ready(function($){
	animateLine = function(canvas, colorNumber, pathString) {
		var line = canvas.path(pathString).attr({
			stroke: colorNumber
		});

		var length = line.getTotalLength();

		$('path[fill*="none"]').animate({
			'to': 1
		}, {
			duration: 3000,
			step: function(pos, fx) {
				var offset = length * fx.pos;
				var subpath = line.getSubpath(0, offset);
				canvas.clear();
				canvas.path(subpath).attr({
					stroke: colorNumber,
					"stroke-dasharray":"",
					"stroke-width": '10'
				});
			}
		});
	};

	// Animate line on stop 1
	var canvas = Raphael('draw', 1120, 420);
	canvas.setViewBox(-15,-15,1120,420,true);
	canvas.setSize('100%', '100%');
	var pathString = "M1096,199 C1096,308.89775 1006.77564,398 896.727273,398 C772.181818,398 647.636364,298.5 548,199 C448.363636,99.5 323.818182,0 199.272727,0 C89.2243636,0 0,89.10225 0,199 C0,308.89775 89.2243636,398 199.272727,398 C323.818182,398 448.363636,298.5 548,199 C647.636364,99.5 772.181818,0 896.727273,0 C1006.77564,0 1096,89.10225 1096,199 L1096,199 L1096,199 Z";
	animateLine(canvas, "#FFF", pathString);
});