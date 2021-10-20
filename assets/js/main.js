const offlinebox = document.getElementById("offline");

window.addEventListener("offline", () => {
  offlinebox.style.display = "block";
});

window.addEventListener("online", () => {
  offlinebox.style.display = "none";
});
