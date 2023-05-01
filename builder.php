<?php
session_start();
//$curtainArray = Array();
if(isset($_POST) && isset($_POST['save'])){
    if(!array_key_exists('mArray',$_SESSION)) $_SESSION['mArray'] = Array();
    $newCurtain = [$_POST['scene'],$_POST['pattern'],$_POST['number']];
    array_push($_SESSION['mArray'],$newCurtain);
   // $_SESSION['mArray'] = $curtainArray;
    echo "success";
}elseif(isset($_POST) && isset($_POST['delete'])){
    unset($_SESSION['mArray'][$_POST['key']]);
    // array_values($_SESSION['mArray']);
    // array_push($_SESSION['mArray'],$newCurtain);
    echo "success";
}
?>