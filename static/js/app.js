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
    // Start By Clearing Existing Data
     tbody.html("");
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

function handleClick(){

    // Prevents the Page from Refreshing
     d3.event.preventDefault();

    // Select HTML Input Element & Get the Value Property of that Input Element

    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if (date) {

        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    };

    // Build Table with Filtered Data
    tableBuilder(filterData);
    };
};

// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click",handleClick);

// Build Table data.js

tableBuilder(tableData);

