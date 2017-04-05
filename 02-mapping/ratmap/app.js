//  Initialize data for Rat Map
let ratData = [400, 900, 300, 600];

//  Example:
d3.selectAll('rect')                //  Select all rectangle SVG elements
  .data(ratData)                    //  Bind ratData to selected elements
  .attr('height', function(d) {     //  Set the rectangle height attribute based on data, 'd'
    return d/10 * 1.5;                  //  Returned value will be set to height attribute
  })
  .attr('y', function(d) {          //  Moves all rectangles DOWN on the y axis by subtracting the height by 150
    return 150 - d/10 * 1.5;            //  Now all rectangles appear to start from the same level as in a standard bar graph
  });
