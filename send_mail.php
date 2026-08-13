<?php
header("Content-Type: application/json");
$configuredOrigin = trim((string)getenv('TCONGS_ALLOWED_ORIGIN'));
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = array_filter(array_unique([
    'https://tcongsmarketplacesolutions.in',
    'https://www.tcongsmarketplacesolutions.in',
    'http://localhost',
    'http://127.0.0.1',
    $configuredOrigin
]));
if ($origin !== '' && !in_array($origin, $allowedOrigins, true)) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Origin not allowed."]);
    exit;
}
if ($origin !== '') {
    header("Access-Control-Allow-Origin: " . $origin);
    header("Vary: Origin");
}
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once 'vendor/phpmailer/phpmailer/src/Exception.php';
require_once 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require_once 'vendor/phpmailer/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $input = file_get_contents("php://input");
    $data  = json_decode($input, true);

    if (!$data) {
        echo json_encode(["success" => false, "message" => "No form data received."]);
        exit;
    }

    // ── Sanitize inputs ────────────────────────────────────────────
    $name         = strip_tags(trim($data["name"]         ?? ''));
    $phone        = strip_tags(trim($data["phone"]        ?? ''));
    $service      = strip_tags(trim($data["service"]      ?? 'General Enquiry'));
    $message      = strip_tags(trim($data["message"]      ?? ''));
    $userEmail    = strip_tags(trim($data["email"]        ?? ''));
    $businessName = strip_tags(trim($data["businessName"] ?? ''));
    $website      = strip_tags(trim($data["website"]      ?? ''));
    $source       = strip_tags(trim($data["source"]       ?? 'website'));
    $sourceCapitalized = ucfirst($source);

    $marketplaces = isset($data["marketplaces"]) && is_array($data["marketplaces"])
        ? implode(', ', array_map('strip_tags', $data["marketplaces"]))
        : '';
    $services = isset($data["services"]) && is_array($data["services"])
        ? implode(', ', array_map('strip_tags', $data["services"]))
        : '';

    // ── SMTP helper ────────────────────────────────────────────────
    function makeSMTP() {
        $m = new PHPMailer(true);
        $m->CharSet    = 'UTF-8';
        $m->isSMTP();
        $m->Host       = 'smtp.gmail.com';
        $m->SMTPAuth   = true;
        $m->Username   = getenv('TCONGS_SMTP_USER') ?: '';
        $m->Password   = getenv('TCONGS_SMTP_PASS') ?: '';
        $m->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $m->Port       = (int)(getenv('TCONGS_SMTP_PORT') ?: 587);
        if ($m->Username === '' || $m->Password === '') {
            throw new Exception('SMTP credentials are not configured on the server.');
        }
        $m->SMTPOptions = ['ssl' => [
            'verify_peer'       => true,
            'verify_peer_name'  => true,
            'allow_self_signed' => false
        ]];
        $m->setFrom('development.tcongsinfotech@gmail.com', 'TCONGS Marketplace Solutions');
        $m->isHTML(true);
        return $m;
    }

    // ── Build admin notification HTML ──────────────────────────────
    $adminBody = "
        <div style='font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:640px;margin:0 auto;border:1px solid #e1e8ed;border-radius:8px;overflow:hidden;'>
            <div style='background:#28558A;color:#ffffff;padding:24px;text-align:center;'>
                <h2 style='margin:0;font-size:22px;'>&#128640; New Lead — {$sourceCapitalized}</h2>
            </div>
            <div style='padding:28px;background:#ffffff;'>
                <table width='100%' cellpadding='0' cellspacing='0'>
                    <tr><td style='padding:6px 0;color:#555;width:140px;'><strong>Full Name:</strong></td><td style='padding:6px 0;color:#222;'>{$name}</td></tr>
                    <tr><td style='padding:6px 0;color:#555;'><strong>Phone:</strong></td><td style='padding:6px 0;color:#222;'>{$phone}</td></tr>
                    " . ($userEmail    ? "<tr><td style='padding:6px 0;color:#555;'><strong>Email:</strong></td><td style='padding:6px 0;color:#222;'>{$userEmail}</td></tr>" : "") . "
                    " . ($businessName ? "<tr><td style='padding:6px 0;color:#555;'><strong>Business Name:</strong></td><td style='padding:6px 0;color:#222;'>{$businessName}</td></tr>" : "") . "
                    " . ($website      ? "<tr><td style='padding:6px 0;color:#555;'><strong>Website:</strong></td><td style='padding:6px 0;color:#222;'><a href='{$website}'>{$website}</a></td></tr>" : "") . "
                    " . ($marketplaces ? "<tr><td style='padding:6px 0;color:#555;'><strong>Marketplaces:</strong></td><td style='padding:6px 0;color:#222;'>{$marketplaces}</td></tr>" : "") . "
                    " . ($service      ? "<tr><td style='padding:6px 0;color:#555;'><strong>Service:</strong></td><td style='padding:6px 0;color:#222;'>{$service}</td></tr>" : "") . "
                    " . ($services     ? "<tr><td style='padding:6px 0;color:#555;'><strong>Services:</strong></td><td style='padding:6px 0;color:#222;'>{$services}</td></tr>" : "") . "
                    <tr><td style='padding:6px 0;color:#555;'><strong>Source:</strong></td><td style='padding:6px 0;color:#222;'>{$sourceCapitalized}</td></tr>
                </table>
                " . ($message ? "
                <div style='margin-top:20px;padding:16px;background:#f8f9fa;border-left:4px solid #28558A;border-radius:4px;'>
                    <strong style='color:#28558A;'>Business Details / Message:</strong><br>
                    <p style='margin:8px 0 0;white-space:pre-wrap;color:#444;'>{$message}</p>
                </div>" : "") . "
            </div>
            <div style='background:#f1f3f5;padding:12px;text-align:center;font-size:12px;color:#6c757d;'>
                Submitted via TCONGS Marketplace Solutions — {$sourceCapitalized}
            </div>
        </div>
    ";

    // ── Thank-you email to user ────────────────────────────────────
    $firstName = explode(' ', $name)[0];
    $thankYouHtml = "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width,initial-scale=1.0'>
      <title>Thank You – TCONGS Marketplace Solutions</title>
    </head>
    <body style='margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;'>
      <table width='100%' cellpadding='0' cellspacing='0' style='background:#f4f4f4;padding:30px 0;'>
        <tr>
          <td align='center'>
            <table width='600' cellpadding='0' cellspacing='0' style='max-width:600px;width:100%;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);'>
              <tr>
                <td style='background:#28558A;padding:32px 40px;text-align:center;'>
                  <h1 style='margin:0;color:#ffffff;font-size:22px;font-weight:800;letter-spacing:1px;text-transform:uppercase;'>
                    THANK YOU, " . strtoupper($firstName) . "!
                  </h1>
                </td>
              </tr>
              <tr>
                <td style='padding:36px 40px 24px;color:#333333;'>
                  <p style='margin:0 0 20px;font-size:15px;line-height:1.7;color:#555;'>
                    We've received your enquiry from our website. Our expert team is reviewing your requirements and will get back to you within <strong>24 hours</strong>.
                  </p>
                  <table width='100%' cellpadding='0' cellspacing='0' style='border-left:4px solid #28558A;margin-bottom:24px;'>
                    <tr>
                      <td style='padding:16px 20px;background:#f4f8fc;border-radius:0 6px 6px 0;'>
                        <p style='margin:0 0 10px;font-size:12px;font-weight:800;letter-spacing:1px;color:#28558A;text-transform:uppercase;'>Your Enquiry Details</p>
                        <table cellpadding='0' cellspacing='0'>
                          " . ($service      ? "<tr><td style='font-size:13px;color:#777;padding:3px 16px 3px 0;font-weight:600;'>Service:</td><td style='font-size:13px;color:#222;padding:3px 0;'>{$service}</td></tr>" : "") . "
                          <tr><td style='font-size:13px;color:#777;padding:3px 16px 3px 0;font-weight:600;'>Phone:</td><td style='font-size:13px;color:#222;padding:3px 0;'>{$phone}</td></tr>
                          " . ($businessName ? "<tr><td style='font-size:13px;color:#777;padding:3px 16px 3px 0;font-weight:600;'>Business:</td><td style='font-size:13px;color:#222;padding:3px 0;'>{$businessName}</td></tr>" : "") . "
                        </table>
                      </td>
                    </tr>
                  </table>
                  <p style='margin:0 0 28px;font-size:14px;color:#666;line-height:1.6;'>
                    For urgent queries, feel free to WhatsApp or call us directly.
                  </p>
                  <table width='100%' cellpadding='0' cellspacing='0'>
                    <tr>
                      <td align='center'>
                        <a href='https://wa.me/919321087099'
                           style='display:inline-block;background:#25d366;color:#ffffff;font-size:13px;font-weight:700;
                                  letter-spacing:1px;text-transform:uppercase;padding:14px 36px;
                                  border-radius:4px;text-decoration:none;'>
                          CHAT ON WHATSAPP
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style='background:#090d13;padding:24px 40px;text-align:center;'>
                  <p style='margin:0 0 4px;color:#ffffff;font-size:14px;font-weight:800;letter-spacing:1px;text-transform:uppercase;'>TCONGS MARKETPLACE SOLUTIONS</p>
                  <p style='margin:0 0 4px;color:#888;font-size:12px;'>Your Trusted eCommerce Growth Partner</p>
                  <p style='margin:0 0 4px;color:#666;font-size:11px;'>Andheri West, Mumbai | +91 93210 87099</p>
                  <p style='margin:0;color:#555;font-size:11px;'>&copy; 2026 TCONGS Marketplace Solutions. All rights reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    ";

    try {
        // ── 1. Send to tcongsmarketplacesolutions@gmail.com (primary) ──
        $adminMail = makeSMTP();
        $adminMail->addAddress('tcongsmarketplacesolutions@gmail.com', 'TCONGS Marketplace Solutions');
        $adminMail->Subject = "🚀 New Lead: " . $service . " — " . $name;
        $adminMail->Body    = $adminBody;
        $adminMail->AltBody = "New Lead\nName: {$name}\nPhone: {$phone}\nEmail: {$userEmail}\nService: {$service}\nMessage: {$message}";
        $adminMail->send();

        // ── 2. Send thank-you to user if email provided ──────────────
        if (!empty($userEmail) && filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
            $userMail = makeSMTP();
            $userMail->addAddress($userEmail, $name);
            $userMail->Subject = "Thank You for Reaching Out – TCONGS Marketplace Solutions";
            $userMail->Body    = $thankYouHtml;
            $userMail->AltBody = "Thank You, {$firstName}! We have received your enquiry and will get back to you within 24 hours. – TCONGS Marketplace Solutions";
            $userMail->send();
        }

        echo json_encode(["success" => true, "message" => "Inquiry successfully sent!"]);

    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Mailer Error: " . $e->getMessage()]);
    }

} else {
    echo json_encode(["success" => false, "message" => "Invalid Request."]);
}
?>
