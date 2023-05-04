<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//echo json_encode($_POST);
    $from_email         = 'loren@sereneview.com'; //from mail, sender email addrress 
    $recipient_email    = $_POST['mMail']; //recipient email addrress 
      
    //Load POST data from HTML form 
    $sender_name    = 'loren@sereneview.com'; //sender name 
    $reply_to_email = $from_email; //sender email, it will be used in "reply-to" header 
    $subject        = "sample subject"; //subject for the email 
    $message        = "sample message"; //body of the email 
      
  
    /*Always remember to validate the form fields like this 
    if(strlen($sender_name)<1) 
    { 
        die('Name is too short or empty!'); 
    }  
    */
      
    
    //validate form field for attaching the file 
    if($file_error > 0) 
    { 
        die('Upload error or No files uploaded'); 
    } 
  
    //read from the uploaded file & base64_encode content 
    $handle = fopen('savedpreviews/'.$_POST['mOutput'], "r");  // set the file handle only for reading the file 
    $content = fread($handle, $size); // reading the file 
    fclose($handle);                  // close upon completion 
  
    $encoded_content = chunk_split(base64_encode($content)); 
  
    $boundary = md5("random"); // define boundary with a md5 hashed value 
  
    //header 
    $headers = "MIME-Version: 1.0\r\n"; // Defining the MIME version 
    $headers .= "From:".$from_email."\r\n"; // Sender Email 
    $headers .= "Reply-To: ".$reply_to_email."\r\n"; // Email addrress to reach back 
    $headers .= "Content-Type: multipart/mixed;\r\n"; // Defining Content-Type 
    $headers .= "boundary = $boundary\r\n"; //Defining the Boundary 
          
    //plain text  
    $body = "--$boundary\r\n"; 
    $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n"; 
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";  
    $body .= chunk_split(base64_encode($message));  
          
    //attachment 
    $body .= "--$boundary\r\n"; 
    $body .="Content-Type: $file_type; name=".$file_name."\r\n"; 
    $body .="Content-Disposition: attachment; filename=".$file_name."\r\n"; 
    $body .="Content-Transfer-Encoding: base64\r\n"; 
    $body .="X-Attachment-Id: ".rand(1000, 99999)."\r\n\r\n";  
    $body .= $encoded_content; // Attaching the encoded file with email 
      
    $sentMailResult = mail($recipient_email, $subject, $body, $headers); 
  
    if($sentMailResult )  
    { 
       echo json_encode("File Sent Successfully."); 
       unlink($name); // delete the file after attachment sent. 
    } 
    else
    { 
       die("Sorry but the email could not be sent. 
                    Please go back and try again!"); 
    } 

