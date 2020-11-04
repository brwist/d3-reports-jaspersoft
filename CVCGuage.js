define('cvcguage',['d3', 'jquery', 'liquidFillGuage'], function (d3) {

	 return function (instanceData) {	
		
	 	var w = instanceData.width,
                    h = instanceData.height;

                var margin = 20;
                var diameter = Math.min(w,h) - margin;

		var svg = d3.select("#" + instanceData.id).insert("svg")
		    .attr("id", instanceData.id + "_fillgauge")
		    .attr("width", w)
		    .attr("height", h);
		    
		    
		var configLarge = liquidFillGaugeDefaultSettings();
		configLarge.circleColor = "#006699";
		configLarge.textColor = "045681";
		configLarge.waveTextColor = "#A4DBF8";
		configLarge.circleThickness = 0.07;
		configLarge.circleFillGap = 0.16;
		configLarge.textVertPosition = 0.75;
		configLarge.waveAnimateTime = 1;
		configLarge.waveHeight = 0.09;
		configLarge.waveCount = 1;
		configLarge.displayPercent = false;
		configLarge.valueCountUp = false;
		configLarge.waveAnimate = false;
		configLarge.waveRise = false;

		var mySeries = instanceData.series[0];
		var mySum = 0;

		for (var i = 0; i < mySeries.length; i++) {
			var element = mySeries[i].questionCount;
			mySum += element;
		}


		console.log(instanceData);
		console.log(mySeries);
		console.log(mySum);

		var gauge1 = loadLiquidFillGauge(instanceData.id + "_fillgauge", Number((mySum).toFixed(1)), configLarge);
		console.log('loaded');
		
	};
		
});

