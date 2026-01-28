function get(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
