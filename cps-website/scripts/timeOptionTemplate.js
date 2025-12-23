
const template = document.getElementById("time-option-template")
const timeOptionsContainer = document.getElementById("time-options-list")

const timeOptionData = [
  { title: "1 Second", id: "1s" },
  { title: "5 Seconds", id: "5s" },
  { title: "15 Seconds", id: "15s" },
  { title: "30 Seconds", id: "30s" },
  { title: "45 Seconds", id: "45s" },
  { title: "60 Seconds", id: "60s" }
]

function createTimeOptions(data) {
  const clone = template.content.cloneNode(true)
  const timeOptionTitle = clone.querySelector(".time__option")

  timeOptionTitle.textContent = data.title 
  timeOptionTitle.id = data.id
  timeOptionsContainer.appendChild(clone)
  timeOptionTitle.addEventListener("click", activeClassHandling)
}

timeOptionData.forEach(createTimeOptions)
