function addPath() {
  const input = document.getElementById("pathInput");
  if (!input.value.trim()) return;

  const data = get("path", []);
  data.push(input.value);
  set("path", data);
  input.value = "";
  renderPath();
}

function removePath(i) {
  const data = get("path", []);
  data.splice(i, 1);
  set("path", data);
  renderPath();
}

function renderPath() {
  const list = document.getElementById("pathList");
  if (!list) return;

  list.innerHTML = "";
  get("path", []).forEach((p, i) => {
    list.innerHTML += `
      <div class="list-item">
        ${p}
        <button onclick="removePath(${i})">✕</button>
      </div>`;
  });
}
