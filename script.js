function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Disable Right-Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable Common Developer Tools Shortcuts
document.addEventListener("keydown", (event) => {
  if (
    event.key === "F12" || 
    (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C")) ||
    (event.ctrlKey && event.key === "U")
  ) {
    event.preventDefault();
  }
});

// Detect DevTools Opened
const detectDevTools = () => {
  if (window.outerHeight - window.innerHeight > 160 || window.outerWidth - window.innerWidth > 160) {
    alert("Developer tools are disabled on this website.");
    window.location.href = "about:blank"; // Redirect user
  }
};

// Run DevTools Detection Every Second
setInterval(detectDevTools, 1000);

// Prevent Console Access Using a Bait Element
setInterval(() => {
  const element = new Image();
  element.__defineGetter__("id", () => {
    alert("Developer tools are disabled!");
    window.location.href = "about:blank";
  });
  console.log("%c", element);
}, 1000);

