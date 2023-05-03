<?php
require_once __DIR__ . '/vendor_bd/autoload.php';

$mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8',
                        'format' => 'A4',
                        'margin_left' => 5,
                        'margin_right' => 5,
                        'margin_top' => 5,
                        'margin_bottom' => 5]);
//echo json_encode(array($_GET['fName']));
//$url = "https://sereneview.com/imagelibrary_pdf_backup.php?img=img/imagelibrary/original/120/120-1BigSur.jpg&name=Big%20SurBig%20Sur,%20California&fcolor=moss&fpadding=12&clength=120&cheight=96&outputFile=CurtainPreview_120-1BigSur.jpg_21.pdf";
//echo json_encode(array($url));
$imageArray = explode("/",$_GET['img']);
$title = $imageArray[sizeof($imageArray)-1];
$mTitle = $_GET['fName'];

$url = "https://sereneview.com/imagelibrary_pdf_backup.php?fName=".preg_replace('/\s+/', '%20', $_GET['fName']).
                    "&fCaption=".preg_replace('/\s+/', '%20', $_GET['fCaption']).
                    "&img=".preg_replace('/\s+/', '%20', $_GET['img']).
                    "&fcolor=".$_GET['fcolor'].
                    "&fpadding=".$_GET['fpadding']."&clength=".$_GET['clength'].
                    "&cheight=".$_GET['cheight']."&outputFile=".$_GET['outputFile'];


$html = file_get_contents($url);

$mpdf->setBasePath($url);
$mpdf->WriteHTML($html);

$mpdf->Output('savedpreviews/'.$_GET['outputFile']);
echo json_encode(array('savedpreviews/'.$_GET['outputFile'],$_GET['fName'],$url,$_GET));