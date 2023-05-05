<?php
session_start();
use PHPMailer\PHPMailer\PHPMailer;
require_once __DIR__ . '/vendor/autoload.php';
if(isset($_POST) && isset($_POST['save'])){
    if(!array_key_exists('mArray',$_SESSION) || is_null($_SESSION['mArray'])) {
        session_destroy();
        session_start();
        $_SESSION['mArray'] = Array();
    }
    $newCurtain = [$_POST['scene'],$_POST['pattern'],$_POST['number']];
    try{array_push($_SESSION['mArray'],$newCurtain);}
    catch(Exception $e){
        echo 'Message: ' .$e->getMessage();
    }
    //echo "success";
}elseif(isset($_POST) && isset($_POST['delete'])){
    unset($_SESSION['mArray'][$_POST['key']]);
    echo "success";
}elseif(isset($_POST) && isset($_POST['deleteall'])){
    session_destroy();
    session_start();
}
elseif(isset($_POST['create']) && isset($_POST['email'])){
    $adminMail = 'loren@sereneview.com';
    if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        echo "Please enter a valid email value";
    }else{
        $mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8',
        'format' => 'A4',
        'margin_left' => 5,
        'margin_right' => 5,
        'margin_top' => 10,
        'margin_bottom' => 10]);
        $url = $_POST['path'] .'template.php?var='.json_encode($_SESSION['mArray']);
        $html = file_get_contents($url);
        $mpdf->WriteHTML($html);
        $mpdf->SetDisplayMode('fullpage');
        $mpdf->list_indent_first_level = 0; 
        
        //output in browser
        // $op = "random.pdf";
        $op = "Preview_".rand().".pdf";
        $mpdf->Output("icp/".$op);
        /** Mailer client created */
        $mail = new PHPMailer(true);
        $mail->setFrom('loren@sereneview.com', 'Sereneview');
        $mail->addReplyTo('loren@sereneview.com', 'Loren Price');
        $mail->addAddress($_POST['email'], 'Loren Price');
        $mail->addAddress($adminMail, 'Loren Price');
        $mail->addBCC($adminMail,'Loren Price');
        $mail->Subject = 'Curtain Preview Sent - details in email';
        $mail->Body = "Requested by: ".$_POST['email'];
       // $mail->addAttachment('icp/'.$op);
        if (!$mail->send()) {
            echo json_encode("Mailer Error: " . $mail->ErrorInfo);
        } else {
            echo json_encode("PDF created and mailed successfully.");
        }
    }
    
}
?>