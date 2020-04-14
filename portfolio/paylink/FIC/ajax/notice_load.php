<?php 
include $_SERVER['DOCUMENT_ROOT']."/admin/proc.php";

$idx = $_REQUEST['idx'];

$sql = "SELECT content, img1, img2, img3, title, regdate FROM notice WHERE idx = {$idx}";

$row = $db->get_row($sql);

$title = $row->title;
$regdate = $row->regdate;
$content = nl2br($row->content);
$img1 = $row->img1;
$img2 = $row->img2;
$img3 = $row->img3;

$regdate = substr($regdate,0,10);

if($img1){
	$content = "<img src='{$img1}' /><br><br>".$content;
		
}

if($img2){
	$content = "<img src='{$img2}' /><br><br>".$content;
		
}

if($img3){
	$content = "<img src='{$img3}' /><br><br>".$content;
		
}

$content_add = "<div class='content_bottom'></div>";

echo $regdate."||".$title."||".$content.$content_add;


exit();


?>
