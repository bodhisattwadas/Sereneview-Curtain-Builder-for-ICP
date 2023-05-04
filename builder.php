<?php
session_start();
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
}elseif(isset($_POST['create']) && isset($_POST['email'])){
    $mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8',
    'format' => 'A4',
    'margin_left' => 5,
    'margin_right' => 5,
    'margin_top' => 5,
    'margin_bottom' => 5]);
    $url = $_POST['path'] .'template.php?var='.json_encode($_SESSION['mArray']);
    $html = file_get_contents($url);
    $mpdf->WriteHTML($html);
    $mpdf->SetDisplayMode('fullpage');
    $mpdf->list_indent_first_level = 0; 
    
    //output in browser
    $op = "random.pdf";
    // $op = "random_".rand().".pdf";
    $mpdf->Output("icp/".$op);
}
?>