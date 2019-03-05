// from data.js
var tableData = data;
var tbody=d3.select('tbody')

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

// Prevent the page from refreshing
d3.event.preventDefault();

// clear table table body if it already exists - 2 ways
if (!tbody.empty()){
    tbody.html('');
}

// tbody.html("");

// Select the input element and get the raw HTML node
var inputElement1 = d3.select("#datetime");
var inputElement2 = d3.select("#city");
var inputElement3 = d3.select("#state");
var inputElement4 = d3.select("#country");
var inputElement5 = d3.select("#shape");

// Get the value property of the input element

var inputValue1 = inputElement1.property("value");
var inputValue2 = inputElement2.property("value");
var inputValue3 = inputElement3.property("value");
var inputValue4 = inputElement4.property("value");
var inputValue5 = inputElement5.property("value");

console.log(inputValue1);
console.log(inputValue2);
console.log(inputValue3);
console.log(inputValue4);
console.log(inputValue5);

if (inputValue1!="") {
    var filteredData1 = tableData.filter(table => table.datetime == inputValue1);
}

if (inputValue2!="") {
    var filteredData2 = tableData.filter(table => table.city == inputValue2);
}

if (inputValue3!="") {
    var filteredData3 = tableData.filter(table => table.state == inputValue3);
}

if (inputValue4!="") {
    var filteredData4 = tableData.filter(table => table.country == inputValue4);
}

if (inputValue5!="") {
    var filteredData5 = tableData.filter(table => table.shape == inputValue5);
}

console.log(filteredData1);
console.log(filteredData2);
console.log(filteredData3);
console.log(filteredData4);
console.log(filteredData5);

let intersection = append.filteredData1
.filteredData2
.filteredData3
.filteredData4
.filteredData5;

intersection.forEach((item) => {
  
  //Use d3 to append one table row 'tr' for each UFO sighting object
  var row = tbody.append('tr');
  //Use 'Object.entries' to console.log each UFO sighting value
  Object.entries(item).forEach(([key, value]) => {
      console.log(key, value);
      //Use d3 to append one cell per UFO sighting value
      var cell = row.append('td');
      
      //Use d3 to update each cell's text with UFO sighting values
      cell.text(value);
  })
})
});