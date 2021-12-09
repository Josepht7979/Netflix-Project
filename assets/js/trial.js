d3.csv('assets/python/word_frequency30.csv').then((data)=>{
    console.log(data);
    var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    // function scrapemovie(){

    // }

    var display = d3.select('.display')
    .append("h1")
    .attr("font-family", "Lucida Console, Courier, monospace")
    .attr('font-size','40px')
    .attr('font-color','white')
    .attr("text-anchor", "start")
    .attr("alignment-baseline", "hanging")
    .attr("x", 10)
    .attr("y", 10);
    
    
    var svg = d3.select("#wordcloudchart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    colors=['#519259','#F0BB62','#95D1CC','#FFAFAF']

    function draw(words) {
        svg
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", function(d) { return d.size; })
        .style("fill", colors[Math.floor(Math.random() * colors.length)])
        .attr("text-anchor", "middle")
        .style("font-family", "Impact")
        .attr("transform", function(d) {
            return "translate(" + [d.x-10, d.y] + ")rotate(" + d.rotate + ")";
                })
        .text(function(d) { return d.text; })
        .on("click", function(d) {
            var e = d3.select(this);
            display.text(`selected keyword="${e.text()}"`);
        e.classed("word-selected", !e.classed("word-selected"));
        })
        .on('mouseover',function(d){
            d3.select(this)
            .classed("word-hovered", true)
            .transition(`mouseover-${d.text}`).duration(300).ease(d3.easeLinear)
            .attr("font-size", d.size + 2)
            .attr("font-weight", "bold");
              })
        .on('mouseout',function(d){
            d3.select(this)
            .classed("word-hovered", false)
            .interrupt(`mouseover-${d.text}`)
            .attr("font-size", d.size);
        })

        };

    // function handleMouseOver(d, i) {
        // d3.select(this)
        // .classed("word-hovered", true)
        // .transition(`mouseover-${text}`).duration(300).ease(d3.easeLinear)
        // .attr("font-size", size + 2)
        // .attr("font-weight", "bold");
        //   }
          
    // function handleMouseOut(d, i) {
    //     d3.select(this)
    //     .classed("word-hovered", false)
    //     .interrupt(`mouseover-${text}`)
    //     .attr("font-size", size);
    //       }
          
    // function handleClick(d, i) {
    //     var e = d3.select(this);
    //     displaySelection.text(`selection="${e.text()}"`);
    //     e.classed("word-selected", !e.classed("word-selected"));
    //       }

var layout = d3.layout.cloud()
  .size([width, height])
  .words(data.map(function(d) { return {text: d['word'], size:d['value']/5}; }))
  .padding(5)        //space between words
  .rotate(function() { return ~~(Math.random() * 2) * 90; })
  .fontSize(function(d) { return d.size; })      // font size of words
  .on("end", draw)
//   .on("mouseover", handleMouseOver)
//   .on("mouseout", handleMouseOut)
//   .on("click", handleClick);

layout.start();

});