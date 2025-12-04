<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validation
if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and message are required']);
    exit;
}

$name = htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8');
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? htmlspecialchars($data['phone'], ENT_QUOTES, 'UTF-8') : 'Not provided';
$message = htmlspecialchars($data['message'], ENT_QUOTES, 'UTF-8');

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Email configuration
$to = 'muhammadsubhan222333@gmail.com';
$subject = "New Contact Form Submission from {$name}";

// Email body (HTML)
$emailBody = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        h2 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        p { margin: 10px 0; }
        strong { color: #2c3e50; }
        .message-box { background: #f4f4f4; padding: 15px; border-left: 4px solid #3498db; margin: 15px 0; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Message:</strong></p>
        <div class='message-box'>" . nl2br($message) . "</div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: {$name} <{$email}>" . "\r\n";
$headers .= "Reply-To: {$email}" . "\r\n";

// Send email
$mailSent = @mail($to, $subject, $emailBody, $headers);

// On localhost, mail() might fail due to no mail server, but we still return success for testing
// On Hostinger production, mail() will work properly
$isLocalhost = in_array($_SERVER['HTTP_HOST'], ['localhost', '127.0.0.1', 'localhost:8000', '127.0.0.1:8000']);

if ($mailSent || $isLocalhost) {
    http_response_code(200);
    $message = $isLocalhost && !$mailSent 
        ? 'Email would be sent in production (localhost testing mode)' 
        : 'Email sent successfully';
    echo json_encode(['success' => true, 'message' => $message]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>

