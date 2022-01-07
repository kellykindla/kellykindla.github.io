// import the data from data.js
// declare const tableData variable since we dont want it reassigned/reused
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// create a new function to create a table from our data 
function buildTable(data){
    //clear existing data 
    tbody.html("");

    //add a forEach function to loop through each object in the data array 
    //and add rows of data to table 
    data.forEach((dataRow) => {
        //create a variable that will append a row to table body
        let row = tbody.append("tr");

        //loop through each field in dataRow so they can become table data (<td>)
        //object.values tells JS to reference one object from the array and add it to dataRow
        // tells JS to put each sighting into its own row of data 
        Object.values(dataRow).forEach((val) => {
            //append data to a table 
            let cell = row.append("td");
            //add the values 
            cell.text(val);

        });
    });
}
// create a function to filter the table with D3
function handleClick(){
    //create a variable to hold date data 
    let date = d3.select("#datetime").property("value");
    //create a default filter variable of the original table data 
    let filteredData = tableData;
    //filter data with an if statement for user selected date 
    //show only the rows where the date is equal to the date filter 
    if(date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //build a table based on filtered date- if no date was entered, OG table is given
    buildTable(filteredData);
}

//use D3 to listen for button click and apply filter 
d3.selectAll("#filter-btn").on("click", handleClick);

//call the original table so it loads when user opens webpage 
buildTable(tableData);