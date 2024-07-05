function updateTimeAndDay() {
  const now = new Date();
  const options = { weekday: "long" };
  const currentTimeUTC = now.toUTCString().split(" ")[4];
  const currentDay = now.toLocaleDateString("en-US", options);

  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    currentTimeUTC;
  document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

// Update the time and day every second
setInterval(updateTimeAndDay, 1000);

// Initial call to set the values immediately on load
updateTimeAndDay();
