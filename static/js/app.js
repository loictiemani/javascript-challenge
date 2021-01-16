// UFO Sightings - Javascript

// Variable Declaration
var tbody = d3.select("tbody");
// from data.js
console.log(data);

var tableData = data;

// YOUR CODE HERE!

// Function to build the table
data.forEach(function(tableBuilder){
    console.log(tableBuilder);
});

//Using d3 to append one table row `tr` for each data object