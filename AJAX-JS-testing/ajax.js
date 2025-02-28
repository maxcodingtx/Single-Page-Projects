const textFileButton = document.getElementById("txtButton");
textFileButton.addEventListener("click", function () {
    // Initializing HTTP request
    const xhttp = new XMLHttpRequest();
    // When XMLHttpRequest completes, execute this
    xhttp.onload = function () {
        // assigning file content to txtDoc variable
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
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
});
