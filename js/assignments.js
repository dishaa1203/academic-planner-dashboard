function addAssignment() {
  const name = document.getElementById("assignmentName");
  const date = document.getElementById("assignmentDate");
  const time = document.getElementById("assignmentTime");

  if (!name || !name.value.trim()) return;

  const data = get("assignments", []);
  data.push({
    name: name.value,
    date: date.value,
    time: time.value,
    done: false
  });

  set("assignments", data);
  name.value = "";
  renderAssignments();
}

function toggleAssignment(i) {
  const data = get("assignments", []);
  data[i].done = !data[i].done;
  set("assignments", data);
  renderAssignments();
}

function removeAssignment(i) {
  const data = get("assignments", []);
  data.splice(i, 1);
  set("assignments", data);
  renderAssignments();
}

function renderAssignments() {
  const list = document.getElementById("assignmentList");
  if (!list) return;

  list.innerHTML = "";
  get("assignments", []).forEach((a, i) => {
    list.innerHTML += `
      <div class="list-item">
        <label>
          <input type="checkbox" ${a.done ? "checked" : ""} 
                 onchange="toggleAssignment(${i})">
          ${a.name}
        </label>
        <span>${a.date || ""} ${a.time || ""}</span>
        <button onclick="removeAssignment(${i})">✕</button>
      </div>
    `;
  });
}
