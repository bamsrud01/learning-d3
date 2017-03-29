// height and width of the svg
var height = 800,
     width = 500;

var padding = 50;

var viz = d3.select("#viz-wrapper")
                .append('svg')
                .attr('id', 'viz')
                .attr('height', height)
                .attr('width', width);

 d3.csv('climate_data.csv', function(data) {

    dots = viz.selectAll('circle')
                 .data(data)
                 .enter()
                .append('circle');

    dots.attr('r', function(d, i) {
      debugger;
      return Math.abs(d.TMAX) / 10})
      .attr('cx', function(d) {return Math.max(0 + padding, Math.random() * width - padding)})
      .attr('cy', function(d) {return Math.max(0 + padding, Math.random() * height - padding)})
        .style('stroke', 'red')
        .style('fill', function(d) {
            year = d.DATE.charAt(3)
            if (year === "3") {
                return "blue"
            }
            else {
                return "green"
            }
        });

 });