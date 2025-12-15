const textFileButton = document.getElementById("txtButton");
textFileButton.addEventListener("click", function () {
  // Initializing HTTP request
  const xhttp = new XMLHttpRequest();
  // When XMLHttpRequest completes, execute the following function
  xhttp.onload = function () {
    // Assigning file content to txtDoc variable
    const txtDoc = xhttp.response;

    // If txtDoc is falsy, throw an error and exit the function
    if (!txtDoc) {
      console.error("Text File Loading Failed");
      return;
    }

    // Put txt document inside txtPlaceholder
    const textPlaceholder = document.getElementById("txtPlaceholder");
    textPlaceholder.innerHTML = txtDoc;
  };

  // Sending request
  xhttp.open("GET", "./data/ajax_info.txt");
  xhttp.send();
});

const xmlFileButton = document.getElementById("xmlButton");
xmlFileButton.addEventListener("click", function () {
  // Initializing HTTP request
  const xhttp = new XMLHttpRequest();

  // When HMLHttpRequest completes, execute the following function
  xhttp.onload = function () {
    // Assigning file content to xmlDoc variable
    const xmlDoc = xhttp.responseXML;

    // If xmlDoc is falsy, throw an error and exit the function
    if (!xmlDoc) {
      console.error("XML File Loading Failed");
      return;
    }

    // Selecting studentSelection element
    const studentSelection = document.getElementById("studentSelection");
    // Assigning value from studentSelection to variable
    const studentSelected = studentSelection.value;
    // Get the student ID from the last character of the selected value
    const studentID = studentSelected[studentSelected.length - 1];
    // Selecting student in xml document from studentID
    const studentData = xmlDoc.getElementById(studentID);

    // Check if data was properly fetched or not
    if (studentData) {
      // If student data not falsy, insert data into appropriate HTML elements

      document.getElementById("xmlName").innerHTML =
        studentData.children[0].innerHTML +
        " " +
        studentData.children[1].innerHTML;
      document.getElementById("xmlScoreHeader").innerHTML = "Scores:"; // 'Scores:' is inserted manually
      document.getElementById("xmlScores").innerHTML =
        studentData.children[2].innerHTML;
    } else {
      // If student data is falsy, throw an error
      console.error("Student Data Not Found");
    }
  };

  // Sending request
  xhttp.open("GET", "./data/student_info.xml");
  xhttp.send();
});
