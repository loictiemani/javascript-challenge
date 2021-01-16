// UFO Sightings - Javascript

// Variable Declaration
var tbody = d3.select("tbody");
// from data.js
console.log(data);

var tableData = data;

// YOUR CODE HERE!

// Function to build the table
data.forEach(function(tableBuilder) {
    console.log(tableBuilder);
//Using d3 to append one table row `tr` for each data object
    var row =tbody.append("tr");
    
    Object.entries(tableBuilder).forEach(function([key, value]) {
        console.log(key, value);

// Use d3 to append 1 cell per report value (date/time, city, state, country, shape, and comment )
// Append a cell to the row for each value in the report object
    var cell = row.append("td");
    cell.text(value);

    });     
});

// Event that Triggers a Function When the Button is Clicked

var button =d3.select("#filter-btn#");
var input =d3.select(".form-control");

