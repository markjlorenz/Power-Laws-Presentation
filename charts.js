function charts(){
var chart;
jQuery(function($){

	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'container',
			defaultSeriesType: 'column'
		},
		title: {
			text: 'Historic World Population by Region'
		},
		subtitle: {
			text: 'Source: Wikipedia.org'
		},
		xAxis: {
			min: 1,
			title: {
				text: 'Ranking'
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Count',
				align: 'high'
			}
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		series: [{
			name: 'Data',
			data: [445,189,185,174,163,162,144,144,142,134,134,131,126,121,119,113,111,109,106,101,100,97,96,95,95,94,91,91,91,89,87,86,83,82,81,81,81,81,80,77,77,76,75,75,74,73,72,71,71,71,68,66,65,63,63,63,62,62,61,61,61,59,59,58,57,56,56,55,54,53,52,51,51]
		}]
	});
	
	
});
}
