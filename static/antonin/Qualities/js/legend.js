function legend(item){
	
	console.log("legend");
	var body=d3.select(item);
	var body=body.append("div");
	
	//Create SVG element
	let svg = body
	.append("svg")
	.attr("height", 70);

	// Handmade legend
	svg.append("circle").attr("cx",70).attr("cy",20).attr("r", 6).style("fill", "#6495ED");
	svg.append("circle").attr("cx",70).attr("cy",50).attr("r", 6).style("fill", "#FF69B4");
	svg.append("text").attr("x", 90).attr("y", 25).text("Men").style("font-size", "16px").attr("alignment-baseline","middle");
	svg.append("text").attr("x", 90).attr("y", 55).text("Women").style("font-size", "16px").attr("alignment-baseline","middle");

	
}

