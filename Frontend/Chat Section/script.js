function openMenu() {
    // Target the actual mobile menu div
    document.getElementById("mobileMenu").classList.add("active");
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("active");
}

function openPage(id) {
    closeMenu(); // Close the menu first
    document.getElementById(id).classList.add("active");
}

function closePage() {
    // Remove active class from all boxes to hide them
    document.querySelectorAll(".box").forEach(p => {
        p.classList.remove("active");
    });
}