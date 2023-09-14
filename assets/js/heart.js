const toggles = document.querySelectorAll(".heart__svg");
const notification = document.querySelector(".notification");
const notificationText = notification.querySelector(".notification__text");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const wasActive = toggle.classList.contains("active");
    if (wasActive) {
      notificationText.textContent = "Removed from favorites";
    } else {
      notificationText.textContent = "Added to favorites";
    }
    toggle.classList.toggle("active");

    notification.classList.add("notification--active");
    setTimeout(() => {
      notification.classList.remove("notification--active");
    }, 2000);
  });
});
