function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".feature-card");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;

        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat halaman dimuat
});
// Fungsi untuk membuka halaman dengan suara klik
function openPage(page) {
    playClickSound();
    setTimeout(() => {
        window.location.href = page;
    }, 300); // Tunggu efek suara
}

// Fungsi untuk memainkan suara klik
function playClickSound() {
    let clickSound = new Audio("click.mp3");
    clickSound.play();
}
// Mode Gelap/Terang
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Cek jika user sebelumnya memilih mode terang
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleButton.textContent = "☀️ Mode Terang";
}

// Event untuk mengganti mode
toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const mode = body.classList.contains("light-mode") ? "light" : "dark";
    toggleButton.textContent = mode === "light" ? "☀️ Mode Terang" : "🌙 Mode Gelap";
    
    // Simpan preferensi pengguna
    localStorage.setItem("theme", mode);
});
// Fungsi untuk membuka pop-up otomatis
window.onload = function() {
    document.getElementById("popupModal").style.display = "block";
};

// Fungsi untuk menutup pop-up
function closePopup() {
    document.getElementById("popupModal").style.display = "none";
}

// Menutup pop-up jika klik di luar area pop-up
window.onclick = function(event) {
    let modal = document.getElementById("popupModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
