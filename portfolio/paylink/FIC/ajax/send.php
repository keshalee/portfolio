<?php 
header('Content-Type: text/html; charset=UTF-8');
include $_SERVER['DOCUMENT_ROOT']."/admin/proc.php";

//insert_query("contact");

$type = $_REQUEST['type'];
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];
$ip = $_SERVER['REMOTE_ADDR'];

$sql = "INSERT INTO contact
(
    type
    , name
    , email
    , message
    , ip
)
VALUES
(
    '$type'
    ,'$name'
    ,'$email'
    ,'$message'
    ,'$ip'
)";

$res = $db->query($sql);

if($res){

	echo "Send Message success";

} else {
	echo "DB insert Error";	
}


?>
