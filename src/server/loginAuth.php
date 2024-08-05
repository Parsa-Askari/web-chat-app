<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$postData = file_get_contents("php://input");
$data = json_decode($postData, true);
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
}   

// echo json_encode([
//                 "r_type"=>"s",
//                 "alert_type"=>"success_toast",
//                 "title"=>"success",
//                 "desc"=>"login was successfull"]);
