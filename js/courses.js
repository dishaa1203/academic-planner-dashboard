function addCourse() {
  const name = document.getElementById("courseName");
  const time = document.getElementById("courseTime");

  if (!name || !name.value.trim()) return;

  const courses = get("courses", []);
  courses.push({
    name: name.value,
    time: time.value
  });

  set("courses", courses);
  name.value = "";
  time.value = "";
  renderCourses();
}

function removeCourse(i) {
  const courses = get("courses", []);
  courses.splice(i, 1);
  set("courses", courses);
  renderCourses();
}

function renderCourses() {
  const grid = document.getElementById("courseGrid");
  if (!grid) return;

  grid.innerHTML = "";
  get("courses", []).forEach((c, i) => {
    grid.innerHTML += `
      <div class="card">
        <strong>${c.name}</strong>
        <p>${c.time}</p>
        <button onclick="removeCourse(${i})">Remove</button>
      </div>
    `;
  });
}
