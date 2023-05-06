<?php
session_start();
use PHPMailer\PHPMailer\PHPMailer;
require_once __DIR__ . '/vendor/autoload.php';
require_once($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');

if(isset($_POST['create']) && isset($_POST['email'])){
    global $wpdb;
    $adminMail = 'loren@sereneview.com';
    if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        echo json_encode(array("Please enter a valid email value",'error'));
    }else{
        $mpdf = new \Mpdf\Mpdf([
            'mode' => 'utf-8',
            'format' => 'A4',
            'margin_left' => 5,
            'margin_right' => 5,
            'margin_top' => 10,
            'margin_bottom' => 10
         ]);
        $url = $_POST['path'] .'template.php?var='.json_encode($_SESSION['mArray']);
        $html = file_get_contents($url);
        $mpdf->WriteHTML($html);
        $mpdf->SetDisplayMode('fullpage');
        $mpdf->list_indent_first_level = 0; 
        
        $op = "Preview_".rand().".pdf";
        $mpdf->Output("icp/".$op);
        $url = siteURL().'wp-content/plugins/build-curtain/icp/'.$op;

        $tableName = $wpdb->prefix . 'icp_curtain_builder';
        $wpdb->insert($tableName, array(
            'email' => $_POST['email'],
            'url' => $url,
            'time' => date('Y-m-d H:i:s')
        ));
        
        /** Mailer client created */
        $adminMail = 'loren@sereneview.com';
        $body = "Requested by: ".$_POST['email'];
        $body .= '<h2><a href="'.$url.'">Click Here to download your curtain preview file.</a><h2>';
        $mail = new PHPMailer(true);
        $mail->setFrom($adminMail, 'Sereneview');
        $mail->addReplyTo($adminMail, 'Loren Price');
        $mail->addAddress($_POST['email'], 'Loren Price');
        $mail->addBCC($adminMail,'Loren Price');
        $mail->Subject = 'Curtain Preview Sent - details in email';
        $mail->Body = $body;
        $mail->isHTML(true);
        echo json_encode(array($url,'success'));
        // if (!$mail->send()) {
        //         echo json_encode(array($mail->ErrorInfo,'error'));
        //     } else {
        //         echo json_encode(array($url,'success'));
        // }
    }
    
}
function siteURL()
{
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $domainName = $_SERVER['HTTP_HOST'].'/';
    return $protocol.$domainName;
}
