<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $forumTitle = trim($_POST["forumTitle"]);
    $forumText = trim($_POST["forumText"]);

    if (!empty($forumTitle) && !empty($forumText)) {
        $file = "forum_posts.txt"; // Simpan ke file teks (bisa diganti dengan database)
        $data = date("Y-m-d H:i:s") . " | " . $forumTitle . " | " . $forumText . "\n";
        file_put_contents($file, $data, FILE_APPEND);

        echo "<script>alert('Forum berhasil dikirim!'); window.location.href='forums.html';</script>";
    } else {
        echo "<script>alert('Judul dan isi forum tidak boleh kosong!'); window.history.back();</script>";
    }
} else {
    echo "Akses tidak valid.";
}
?>
