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
document.addEventListener("DOMContentLoaded", function () {
    let dropZone = document.getElementById("dropZone");
    let fileInput = document.getElementById("fileUpload");
    let previewImage = document.getElementById("previewImage");
    let uploadForm = document.getElementById("uploadForm");
    let uploadStatus = document.getElementById("uploadStatus");
    let progressBar = document.getElementById("progressBar");

    // Klik drop zone untuk membuka file picker
    dropZone.addEventListener("click", function () {
        fileInput.click();
    });

    // Drag & Drop File
    dropZone.addEventListener("dragover", function (event) {
        event.preventDefault();
        dropZone.style.background = "rgba(255, 255, 255, 0.2)";
    });

    dropZone.addEventListener("dragleave", function () {
        dropZone.style.background = "transparent";
    });

    dropZone.addEventListener("drop", function (event) {
        event.preventDefault();
        dropZone.style.background = "transparent";
        fileInput.files = event.dataTransfer.files;
        showPreview(fileInput.files[0]);
    });

    // Tampilkan preview gambar
    fileInput.addEventListener("change", function () {
        showPreview(this.files[0]);
    });

    function showPreview(file) {
        if (file && file.type.startsWith("image/")) {
            let reader = new FileReader();
            reader.onload = function (e) {
                previewImage.src = e.target.result;
                previewImage.style.display = "block";
            };
            reader.readAsDataURL(file);
        } else {
            previewImage.style.display = "none";
        }
    }

    // Simulasi Upload dengan Progress Bar
    uploadForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (fileInput.files.length === 0) {
            uploadStatus.innerHTML = "Silakan pilih file untuk diunggah.";
            uploadStatus.style.color = "red";
            return;
        }

        let fileSize = fileInput.files[0].size / 1024 / 1024; // Konversi ke MB
        if (fileSize > 100) {
            uploadStatus.innerHTML = "Ukuran file terlalu besar! Maksimal 100MB.";
            uploadStatus.style.color = "red";
            return;
        }

        uploadStatus.innerHTML = "Mengunggah...";
        uploadStatus.style.color = "yellow";
        progressBar.style.display = "block";

        let progress = 0;
        let uploadInterval = setInterval(function () {
            progress += 10;
            progressBar.value = progress;

            if (progress >= 100) {
                clearInterval(uploadInterval);
                uploadStatus.innerHTML = "File berhasil diunggah!";
                uploadStatus.style.color = "green";
            }
        }, 300);
    });
});
    
function openUploadModal() {
    document.getElementById("uploadModal").style.display = "block";
}

function closeUploadModal() {
    document.getElementById("uploadModal").style.display = "none";
}

// Tutup modal jika klik di luar area modal
window.onclick = function(event) {
    let modal = document.getElementById("uploadModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
