<?php


use PHPMailer\PHPMailer\PHPMailer;


require 'vendor_mailer/autoload.php';


$mail = new PHPMailer;
$mail->setFrom('loren@sereneview.com', 'Sereneview');
$mail->addReplyTo('loren@sereneview.com', 'Loren Price');
$mail->addAddress($_POST['mMail'], 'Loren Price');
$mail->addBCC('loren@sereneview.com','Loren Price');
$mail->Subject = 'Curtain Preview Sent - details in email';
$mail->Body = "Requested by: ".$_POST['mMail'];
$mail->addAttachment('savedpreviews/'.$_POST['mOutput']);
if (!$mail->send()) {
   echo json_encode("Mailer Error: " . $mail->ErrorInfo);
} else {
    echo json_encode("Message sent!");
}