// import ky from "https://cdn.jsdelivr.net/npm/ky@1.14.1/distribution/index.min.js";

const [txtButtonKy, xmlButtonKy] = [
  document.getElementById("txtButtonKy"),
  document.getElementById("xmlButtonKy"),
];

txtButtonKy.addEventListener("click", () => {
  const txtUrl = "ajax_info.txt";
  window.fetchTextViaKy(txtUrl).then((textData) => {
    const txtPlaceholder = document.getElementById("txtPlaceholder");
    txtPlaceholder.textContent = textData;
  });
});

xmlButtonKy.addEventListener("click", () => {
  const studentSelectionElement = document.getElementById("studentSelection");
  const selectedStudent = studentSelectionElement.value;
  const studentID = selectedStudent[selectedStudent.length - 1];

  window.fetchXmlViaKy("student_info.xml").then((xmlDoc) => {
    const xmlName = document.getElementById("xmlName");
    const xmlScoreHeader = document.getElementById("xmlScoreHeader");
    const xmlScores = document.getElementById("xmlScores");

    const studentData = xmlDoc.getElementById(studentID);

    const studentName = `
      ${studentData.children[0].textContent}
      ${studentData.children[1].textContent}`;

    const scores = Array.from(studentData.children[2].children).map(
      (scoreElem) => scoreElem.textContent
    );

    xmlName.textContent = studentName;
    xmlScoreHeader.textContent = "Scores:";
    xmlScores.textContent = scores.join(", ");
  });
});
