<?php
/**
 * upload.php
 * Handles file uploads from the Next.js frontend and returns public URLs.
 * Place this file on your Hostinger server (e.g. inside an "api" or "uploads" folder).
 */

header("Access-Control-Allow-Origin: *"); // For testing; restrict to your Vercel domain in production
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

// Configuration
$appId = isset($_POST['appId']) ? preg_replace('/[^a-zA-Z0-9_-]/', '', $_POST['appId']) : uniqid();
$uploadBaseDir = __DIR__ . '/uploads/admissions/' . $appId;

// Determine the base URL of this script so we can return absolute URLs
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
$host = $_SERVER['HTTP_HOST'];
$scriptDir = dirname($_SERVER['SCRIPT_NAME']);
$baseUrl = $protocol . "://" . $host . rtrim($scriptDir, '/') . '/uploads/admissions/' . $appId . '/';

if (!is_dir($uploadBaseDir)) {
    if (!mkdir($uploadBaseDir, 0755, true)) {
        http_response_code(500);
        echo json_encode(["error" => "Failed to create upload directory"]);
        exit();
    }
}

$uploadedUrls = [];
$errors = [];

$allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
$maxSize = 10 * 1024 * 1024; // 10MB

foreach ($_FILES as $key => $file) {
    if ($file['error'] !== UPLOAD_ERR_OK) {
        if ($file['error'] !== UPLOAD_ERR_NO_FILE) {
            $errors[$key] = "Upload error code: " . $file['error'];
        }
        continue;
    }

    if (!in_array($file['type'], $allowedTypes)) {
        $errors[$key] = "Invalid file type. Only JPG, PNG, and PDF allowed.";
        continue;
    }

    if ($file['size'] > $maxSize) {
        $errors[$key] = "File exceeds maximum size of 10MB.";
        continue;
    }

    $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = $key . '.' . $ext; // e.g. docPhoto.jpg
    $targetPath = $uploadBaseDir . '/' . $filename;

    if (move_uploaded_file($file['tmp_name'], $targetPath)) {
        $uploadedUrls[$key] = $baseUrl . $filename;
    } else {
        $errors[$key] = "Failed to move uploaded file.";
    }
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "errors" => $errors,
        "partialUploads" => $uploadedUrls // Return any successful ones so frontend knows
    ]);
} else {
    echo json_encode([
        "success" => true,
        "appId" => $appId,
        "urls" => $uploadedUrls
    ]);
}
?>
