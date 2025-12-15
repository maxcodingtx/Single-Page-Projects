const xmlDataPlaceholder = document.getElementById("xmlDataPlaceholderFXP");
const xmlButtonFxp = document.getElementById("xmlButtonFXP");

let XMLDataParseCount = 0;

async function loadXMLDataFxp() {
  try {
    XMLDataParseCount++;
    const data = await window.FXP.fetchXmlAsJson("./data/student_info.xml");
    const studentsNode = data?.studentsList?.student;
    const students = Array.isArray(studentsNode)
      ? studentsNode
      : [studentsNode].filter(Boolean);

    const lines = students.map((s) => {
      const first = s.firstName ?? "";
      const last = s.lastName ?? "";
      const sc = s.scores ?? {};
      const exams = [sc.exam1, sc.exam2, sc.exam3].filter(Boolean).join(", ");

      // to show the number of times the XML has been parsed
      if (students.length - 1 === students.indexOf(s)) {
        return `${first} ${last} — ${exams} (via FXP ${XMLDataParseCount} times)`;
      }

      return `${first} ${last} — ${exams}`;
    });

    const studentStatsPlaceholders = [
      document.getElementById("student1FXP"),
      document.getElementById("student2FXP"),
      document.getElementById("student3FXP"),
    ];
    studentStatsPlaceholders.map((s, i) => (s.textContent = lines[i] || "N/A"));
  } catch (err) {
    console.error(err);
    xmlDataPlaceholder.textContent = "Failed to load XML.";
  }
}

xmlButtonFxp.addEventListener("click", loadXMLDataFxp);
