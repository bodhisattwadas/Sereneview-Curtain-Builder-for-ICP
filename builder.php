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
?>