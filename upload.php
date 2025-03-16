<?php
// Pastikan folder "share" ada
$uploadDir = 'share/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// Cek apakah file diunggah
if (isset($_FILES['fileUpload'])) {
    $file = $_FILES['fileUpload'];
    $fileName = basename($file['name']);
    $fileSize = $file['size'];
    $fileTmp = $file['tmp_name'];
    $maxSize = 100 * 1024 * 1024; // 100MB

    // Validasi ukuran
    if ($fileSize > $maxSize) {
        echo "Ukuran file terlalu besar! Maksimal 100MB.";
        exit;
    }

    // Simpan file ke folder "share"
    $fileDestination = $uploadDir . $fileName;
    if (move_uploaded_file($fileTmp, $fileDestination)) {
        echo "File berhasil diunggah ke folder share!";
    } else {
        echo "Gagal mengunggah file.";
    }
} else {
    echo "Tidak ada file yang diunggah.";
}
?>
