<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
    // $name = $_POST['message_name'];
    // $email = $_POST['message_email'];
    // $message = $_POST['message_text'];
    
    $name = 'bodhisattwa';
    // $to = 'bodhisattwa@bodhisattwa.in';
    $to = 'bodhi.developer@gmail.com';
    $message = 'hello world';
    
    //php mailer variables
    //$email = get_option('admin_email');
    $email = 'loren@sereneview.com';
    $subject = "Some text in subject...";
    $headers = 'From: '. $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n";
    
    //Here put your Validation and send mail
    $sent = wp_mail($to, $subject, strip_tags($message), $headers);
        
    if($sent) {
      echo 'message sent';
    }
    else  {
        echo 'message not sent'; 
    }