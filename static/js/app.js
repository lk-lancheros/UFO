// from data.js
var tableData = data;
var tbody=d3.select('tbody')

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
//city state country shape durationMinutes comments
var inputValue = inputElement.property("value");

console.log(inputValue);
//   console.log(tableData);

var filteredData = tableData.filter(table => table.datetime == inputValue);

console.log(filteredData);

filteredData.forEach((item) => {
  
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