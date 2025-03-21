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

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDJxuI9XkE-3Dfm7Ae6q-N1sFzWUWUKZcM",
    authDomain: "forumsamp-2f4d1.firebaseapp.com",
    databaseURL: "https://forumsamp-2f4d1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "forumsamp-2f4d1",
    storageBucket: "forumsamp-2f4d1.firebasestorage.app",
    messagingSenderId: "681453931659",
    appId: "1:681453931659:web:8c3563d72d08e070a6988e"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Fungsi untuk menyimpan forum ke Firebase
function submitForum() {
    let title = document.getElementById("forum-title").value;
    let text = document.getElementById("forum-text").value;
    let date = new Date().toLocaleDateString();

    if (title === "" || text === "") {
        alert("Judul dan isi forum harus diisi!");
        return;
    }

    let newForumRef = database.ref("forums").push();
    newForumRef.set({
        title: title,
        text: text,
        date: date
    }).then(() => {
        alert("Forum berhasil diunggah!");
        window.location.href = "forums.html";
    }).catch((error) => {
        console.error("Gagal menyimpan forum:", error);
    });
}

// Fungsi untuk menampilkan forum di forums.html
function loadForums() {
    const forumList = document.getElementById("forum-list");

    database.ref("forums").on("value", (snapshot) => {
        forumList.innerHTML = "";
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                let forum = childSnapshot.val();
                let forumItem = document.createElement("div");
                forumItem.classList.add("forum-item");
                forumItem.innerHTML = `
                    <h2>${forum.title}</h2>
                    <p><small>${forum.date}</small></p>
                    <p>${forum.text}</p>
                `;
                forumList.appendChild(forumItem);
            });
        } else {
            forumList.innerHTML = "<p>Tidak ada forum yang tersedia.</p>";
        }
    });
}

// Jalankan loadForums() jika halaman adalah forums.html
if (document.body.contains(document.getElementById("forum-list"))) {
    loadForums();
            }
            
const OPENAI_API_KEY = "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"; // Ganti dengan API Key OpenAI

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    // Tambahkan pesan pengguna ke chat box
    let chatBox = document.getElementById("chat-box");
    let userMessage = `<div><strong>Anda:</strong> ${userInput}</div>`;
    chatBox.innerHTML += userMessage;

    // Panggil API OpenAI
    fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userInput}]
        })
    })
    .then(response => response.json())
    .then(data => {
        let botResponse = `<div><strong>AI:</strong> ${data.choices[0].message.content}</div>`;
        chatBox.innerHTML += botResponse;
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
        console.error("Error:", error);
    });

    // Bersihkan input
    document.getElementById("user-input").value = "";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    let chatBtn = document.getElementById("chat-ai-btn");

    chatBtn.addEventListener("mouseenter", function() {
        chatBtn.textContent = "🚀 Ngobrol Sekarang!";
    });

    chatBtn.addEventListener("mouseleave", function() {
        chatBtn.textContent = "💬 Chat AI";
    });
});
    
