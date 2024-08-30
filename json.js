window.addEventListener("DOMContentLoaded", init);
// Dette gør, at alt loades og er klar, især hvis det er data der kommer udefra

const teacherURI = "uha.json";

let teacherList;
let teacherTemplate;

function init() {
  teacherList = document.querySelector("#teacher_list");
  console.log("teacherList", teacherList);

  teacherTemplate = document.querySelector("template").content;
  console.log("teacherTemplate", teacherTemplate);

  fetch(teacherURI)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then(logJSON);
}
function logJSON(json) {
  console.log("json", json);
  json.forEach(showTeacher);
}
//forEach tager en function som argument, tager hvert element i array, så det burde være ligegyldigt hvor mange der er

function showTeacher(teacher) {
  const clone = teacherTemplate.cloneNode(true);
  clone.querySelector("h3").textContent = teacher.name + " " + teacher.surname;
  clone.querySelector("p").textContent = teacher.subject[0];
  teacherList.appendChild(clone);
}
