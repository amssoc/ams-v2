document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("explore-btn");
    const eventsSection = document.getElementById("events");

    if (exploreBtn && eventsSection) {
        exploreBtn.addEventListener("click", function (e) {
            e.preventDefault(); // stop default jump
            eventsSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});
// AMS v2 main JavaScript
// ===== FIXED DATE & TIME WIDGET =====
// ===== FIXED DATE & TIME WIDGET =====
function startTimeWidget() {
    const timeEl = document.getElementById("timeValue");
    const dateEl = document.getElementById("dateValue");

    if (!timeEl || !dateEl) return;

    function updateDateTime() {
        const now = new Date();

        timeEl.innerText = now.toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        dateEl.innerText = now.toLocaleDateString("en-IN", {
            timeZone: "Asia/Kolkata",
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
}

document.addEventListener("DOMContentLoaded", startTimeWidget);

// ===== DARK / LIGHT MODE TOGGLE =====
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");

    if (!toggleBtn) return;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    }

    toggleBtn.addEventListener("click", function () {
        const currentTheme =
            document.documentElement.getAttribute("data-theme") === "dark"
                ? "light"
                : "dark";

        document.documentElement.setAttribute("data-theme", currentTheme);
        localStorage.setItem("theme", currentTheme);
        toggleBtn.textContent = currentTheme === "dark" ? "☀️" : "🌙";
    });
});



