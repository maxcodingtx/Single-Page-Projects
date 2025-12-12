const xmlDataPlaceholder = document.getElementById("xmlDataPlaceholderFXP");
const xmlButtonFxp = document.getElementById("xmlButtonFXP");

async function loadXMLDataFxp() {
  try {
    const data = await window.FXP.fetchXmlAsJson("student_info.xml");
    const studentsNode = data?.studentsList?.student;
    const students = Array.isArray(studentsNode)
      ? studentsNode
      : [studentsNode].filter(Boolean);

    const lines = students.map((s) => {
      const first = s.firstName ?? "";
      const last = s.lastName ?? "";
      const sc = s.scores ?? {};
      const exams = [sc.exam1, sc.exam2, sc.exam3].filter(Boolean).join(", ");
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
