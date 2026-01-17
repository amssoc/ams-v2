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
