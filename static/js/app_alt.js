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

// if (inputvalue1!) {
// var filteredData1 = tableData.filter(table => table.datetime == inputValue1);
// var filteredData2 = filteredData1.filter(table => table.city == inputValue2);
// var filteredData3 = filteredData2.filter(table => table.state == inputValue3);
// var filteredData4 = filteredData3.filter(table => table.country == inputValue4);
// var filteredData5 = filteredData4.filter(table => table.shape == inputValue5);

if (inputValue1&&inputValue2&&inputValue3&&inputValue4&&inputValue5!="") {
var filteredData1 = tableData
.filter(table => table.datetime == inputValue1)
.filter(table =>table.city == inputValue2)
.filter(table =>table.state == inputValue3)
.filter(table => table.country == inputValue4)
.filter(table => table.shape == inputValue5);
}

else if (inputValue2&&inputValue3&&inputValue4&&inputValue5!="") {
  var filteredData1 = tableData
  // .filter(table => table.datetime == inputValue1)
  .filter(table =>table.city == inputValue2)
  .filter(table =>table.state == inputValue3)
  .filter(table => table.country == inputValue4)
  .filter(table => table.shape == inputValue5);
  }
  
else if (inputValue1&&inputValue3&&inputValue4&&inputValue5!="") {
  var filteredData1 = tableData
  .filter(table => table.datetime == inputValue1)
  // .filter(table =>table.city == inputValue2)
  .filter(table =>table.state == inputValue3)
  .filter(table => table.country == inputValue4)
  .filter(table => table.shape == inputValue5);
  }
  
else if (inputValue1&&inputValue2&&inputValue4&&inputValue5!="") {
  var filteredData1 = tableData
  .filter(table => table.datetime == inputValue1)
  .filter(table =>table.city == inputValue2)
  // .filter(table =>table.state == inputValue3)
  .filter(table => table.country == inputValue4)
  .filter(table => table.shape == inputValue5);
}

else if (inputValue1&&inputValue2&&inputValue3&&inputValue5!="") {
  var filteredData1 = tableData
  .filter(table => table.datetime == inputValue1)
  .filter(table =>table.city == inputValue2)
  .filter(table =>table.state == inputValue3)
  // .filter(table => table.country == inputValue4)
  .filter(table => table.shape == inputValue5);
}
      
else if (inputValue1&&inputValue2&&inputValue3&&inputValue4!="") {
  var filteredData1 = tableData
  .filter(table => table.datetime == inputValue1)
  .filter(table =>table.city == inputValue2)
  .filter(table =>table.state == inputValue3)
  .filter(table => table.country == inputValue4);
  // .filter(table => table.shape == inputValue5);
}

console.log(filteredData1);

filteredData1.forEach((item) => {
  
  //Step2. Use d3 to append one table row 'tr' for each UFO sighting object
  var row = tbody.append('tr');
  //Step3. Use 'Object.entries' to console.log each UFO sighting value
  Object.entries(item).forEach(([key, value]) => {
      console.log(key, value);
      //Step4. Use d3 to append one cell per UFO sighting value
      //(datetime, city, state, country, shape, durationMinutes, comments)
      var cell = row.append('td');
      
      //Step5. Use d3 to update each cell's text with UFO sighting values
      cell.text(value);
  })
})
});