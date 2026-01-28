function today() {
  return new Date().toDateString();
}

function weekKey() {
  const d = new Date();
  d.setDate(d.getDate() - d.getDay());
  return d.toDateString();
}

/* DAILY */
function saveDaily() {
  set("daily", { date: today(), text: dailyInput.value });
}

function loadDaily() {
  const d = get("daily", null);
  if (!d || d.date !== today()) {
    dailyInput.value = "";
    set("daily", null);
  } else dailyInput.value = d.text;
}

/* WEEKLY */
function saveWeek() {
  set("week", { week: weekKey(), text: weekInput.value });
}

function loadWeek() {
  const w = get("week", null);
  if (!w || w.week !== weekKey()) {
    weekInput.value = "";
    set("week", null);
  } else weekInput.value = w.text;
}

function saveWeekCalendar() {
  const rows = document.querySelectorAll("#weekCalendar tr");
  if (!rows.length) return;

  const data = [];
  rows.forEach((r, i) => {
    if (i === 0) return;
    data.push({
      day: r.cells[0].innerText,
      plan: r.cells[1].innerText
    });
  });

  set("weekCalendar", {
    week: new Date().toDateString(),
    data
  });
}

function loadWeekCalendar() {
  const saved = get("weekCalendar", null);
  const rows = document.querySelectorAll("#weekCalendar tr");
  if (!saved || !rows.length) return;

  saved.data.forEach((d, i) => {
    rows[i + 1].cells[1].innerText = d.plan;
  });
}

function addDailyTask() {
  const input = document.getElementById("dailyTask");
  if (!input.value.trim()) return;

  const data = get("dailyTasks", []);
  data.push({ text: input.value, done: false });
  set("dailyTasks", data);
  input.value = "";
  renderDaily();
}

function toggleDaily(i) {
  const data = get("dailyTasks", []);
  data[i].done = !data[i].done;
  set("dailyTasks", data);
  renderDaily();
}

function removeDaily(i) {
  const data = get("dailyTasks", []);
  data.splice(i, 1);
  set("dailyTasks", data);
  renderDaily();
}

function renderDaily() {
  const table = document.getElementById("dailyTable");
  if (!table) return;

  table.innerHTML = `<tr><th>Done</th><th>Task</th><th></th></tr>`;

  get("dailyTasks", []).forEach((t, i) => {
    table.innerHTML += `
      <tr>
        <td><input type="checkbox" ${t.done ? "checked" : ""} onchange="toggleDaily(${i})"></td>
        <td>${t.text}</td>
        <td><button onclick="removeDaily(${i})">✕</button></td>
      </tr>
    `;
  });
}
