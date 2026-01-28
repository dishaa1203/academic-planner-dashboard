/* =====================
   SEMESTER SETTINGS
===================== */
function saveSemester() {
  const titleInput = document.getElementById("semTitle");
  const descInput  = document.getElementById("semDesc");
  if (!titleInput || !descInput) return;

  set("semester", {
    title: titleInput.value.trim(),
    desc: descInput.value.trim()
  });

  renderSemester();
}

function renderSemester() {
  const titleOut = document.getElementById("semesterTitle");
  const descOut  = document.getElementById("semesterDesc");
  if (!titleOut || !descOut) return;

  const sem = get("semester", {
    title: "Semester Two",
    desc: "Freshman Year"
  });

  titleOut.textContent = sem.title || "Semester Two";
  descOut.textContent  = sem.desc  || "Freshman Year";
}

/* =====================
   SEMESTER GOALS
===================== */
function addGoal() {
  const input = document.getElementById("goalInput");
  if (!input || !input.value.trim()) return;

  const goals = get("goals", []);
  goals.push(input.value.trim());
  set("goals", goals);

  input.value = "";
  renderGoals();
}

function removeGoal(index) {
  const goals = get("goals", []);
  goals.splice(index, 1);
  set("goals", goals);
  renderGoals();
}

function renderGoals() {
  const list = document.getElementById("goalList");
  if (!list) return;

  list.innerHTML = "";
  get("goals", []).forEach((goal, i) => {
    list.innerHTML += `
      <div class="list-item">
        ${goal}
        <button onclick="removeGoal(${i})">✕</button>
      </div>
    `;
  });
}
