// from data.js - small Data set
var tableData = data;

// Saving references to our html elements
var inputType = d3.select("#typeInput");
var inputYear = d3.select("#yearInput");
var inputGenre = d3.select("#genreInput");
var inputDirector = d3.select("#directorInput");
var inputCountry = d3.select("#countryInput");
var inputRating = d3.select("#ratingInput");
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Clear anything in the table
  tbody.html("");
  
// Read user input and save it as variable
  var yearValue = inputYear.property("value");
  var genreValue = inputGenre.property("value");
  var directorValue = inputDirector.property("value");
  var countryValue = inputCountry.property("value");
  var typeValue = inputType.property("value");
  var ratingValue = inputRating.property("value");  

// If a user has entered a value in the field this will filter our data based on user input
  var filteredData = tableData.filter((userinput) => {

  // By default set the match to false
    var matchesYear = false;
    var matchesGenre = false;
    var matchesDirector = false;
    var matchesCountry = false;
    var matchesType = false;
    var matchesRating = false;
  
    // If a user has entered a value into this field ensure that it match our dataset
    if (yearValue != "" && userinput.year.includes(yearValue)) {
      matchesYear = true;
      }
      
    // If the user didn't enter anything in this field, we will set match to true by default
    if (yearValue == "") {
        matchesYear = true;
    }

    // If a user has entered a value into this field ensure that it match our dataset
    if (genreValue != "" && userinput.genre.includes(genreValue)) {
        matchesGenre = true;
      }

       // If the user didn't enter anything in this field, we will set match to true by default
    if (genreValue == "") {
        matchesGenre = true;
    }

    // If a user has entered a value into this field ensure that it match our dataset
    if (directorValue != "" && userinput.director.includes(directorValue)) {
      matchesDirector = true;
    }

    // If the user didn't enter anything in this field, we will set match to true by default
    if (directorValue == "") {
      matchesDirector = true;
    }

    // If a user has entered a value into this field ensure that it match our dataset
    if (countryValue != "" && userinput.country === countryValue) {
      matchesCountry = true;
    }

    // If the user didn't enter anything in this field, we will set match to true by default
    if (countryValue == "") {
      matchesCountry = true;
    }

    // If a user has entered a value into this field ensure that it match our dataset
    if (typeValue != "" && userinput.type.includes(typeValue)) {
      matchesType = true;
    }

    // If the user didn't enter anything in this field, we will set match to true by default
    if (typeValue == "") {
      matchesType = true;
    }
 

    // If a user has entered a value into this field ensure that it match our dataset
    if (ratingValue != "" && userinput.rating === ratingValue) {
      matchesRating = true;
    }

    // If the user didn't enter anything in this field, we will set match to true by default
    if (ratingValue == "") {
      matchesRating = true;
    }

    // Will return true if all fields are matched or is true
    return matchesYear && matchesGenre && matchesDirector && matchesCountry && matchesType && matchesRating; 

  });
  
  // Display the filtered sitings
  filteredData.forEach(function(filteredData) {
    console.log(filteredData);
    var row = tbody.append("tr");

    // Iterate through the object and add the values to the table
    Object.entries(filteredData).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

runEnter();

// Attach the function to the keyup event so that it runs everytime a key is pressed it auto filters
inputYear.on("keyup", runEnter);
inputGenre.on("keyup", runEnter);
inputDirector.on("keyup", runEnter);
inputCountry.on("keyup", runEnter);
inputType.on("keyup", runEnter);
inputRating.on("keyup", runEnter);
