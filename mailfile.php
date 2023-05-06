<?php
use PHPMailer\PHPMailer\PHPMailer;
require_once __DIR__ . '/vendor/autoload.php';
$receiver = $_POST['email'];
// $adminMail = 'loren@sereneview.com';
// $receiver = 'bodhisattwa@bodhisattwa.in';
$op = "Preview_259702676.pdf";
$url = 'https://sereneview.com/wp-content/plugins/build-curtain/icp/'.$op;
/** Mailer client created */
$body = "Requested by: ".$receiver;
$body .= '<h2><a href="'.$url.'">Click Here to download your curtain preview file.</a><h2>';
$mail = new PHPMailer(true);
$mail->addAddress($receiver, 'Loren Price');
$mail->addBCC($adminMail,'Loren Price');
$mail->Subject = 'Curtain Preview Sent - details in email';
$mail->Body = $body;
$mail->isHTML(true);
if (!$mail->send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
} else {
        echo "PDF created and mailed successfully.";
}
?>