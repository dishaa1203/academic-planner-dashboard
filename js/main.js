document.addEventListener("DOMContentLoaded", () => {
  if (typeof renderSemester === "function") renderSemester();
  if (typeof renderGoals === "function") renderGoals();
  if (typeof renderSchedule === "function") renderSchedule();
  if (typeof renderAssignments === "function") renderAssignments();
  if (typeof loadDaily === "function") loadDaily();
  if (typeof loadWeek === "function") loadWeek();
  if (typeof renderPath === "function") renderPath();
  if (typeof renderCourses === "function") renderCourses();
  if (typeof loadWeekCalendar === "function") loadWeekCalendar();
  if (typeof renderDaily === "function") renderDaily();

});
