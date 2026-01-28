function addSchedule() {
  const d = document.getElementById("day");
  const t = document.getElementById("time");
  const a = document.getElementById("activity");
  if (!a || !a.value.trim()) return;

  const data = get("schedule", []);
  data.push({ day: d.value, time: t.value, activity: a.value });
  set("schedule", data);
  a.value = "";
  renderSchedule();
}

function removeSchedule(i) {
  const data = get("schedule", []);
  data.splice(i, 1);
  set("schedule", data);
  renderSchedule();
}

function renderSchedule() {
  const table = document.getElementById("scheduleTable");
  if (!table) return;

  table.innerHTML = `
    <tr><th>Day</th><th>Time</th><th>Activity</th><th></th></tr>
  `;

  get("schedule", []).forEach((s, i) => {
    table.innerHTML += `
      <tr>
        <td>${s.day}</td>
        <td>${s.time}</td>
        <td>${s.activity}</td>
        <td><button onclick="removeSchedule(${i})">✕</button></td>
      </tr>`;
  });
}
