<?php
header('Content-Type: text/html; charset=UTF-8');
define("ROOT_PATH", $_SERVER['DOCUMENT_ROOT']."/");
require_once(ROOT_PATH."admin/session.php");
require_once(ROOT_PATH."lib/DB.php");
require_once(ROOT_PATH."lib/function.php");


$user_id = $_POST['user_id'];
$user_pw = $_POST['user_pw'];



$sql = "SELECT * FROM admin WHERE id = '{$user_id}'";
$row = $db->get_row($sql);


if ($user_id!=$row->id)
{
    error("아이디가 없습니다.","");
    exit;
}
else 
{
	$sql = "SELECT * FROM admin WHERE id = '{$user_id}' AND pwd = '{$user_pw}' ";
	$row = $db->get_row($sql);
	if ($user_id!=$row->id){
		error("비밀번호를 잘못 입력하셨습니다.","");
    	exit;	
	} else {
		
		$sql = "UPDATE admin SET 
		last_login = now()
		WHERE id = '$user_id'";
		
		$res = $db->query($sql);
		
		$user_idx = $row->idx;
		$user_lev = $row->level;
		$user_id = $row->id;
		//$url = $row->url;
				
		$_SESSION['sess_idx']     = $user_idx;
		$_SESSION['sess_id']      = $user_id;
		$_SESSION['sess_lev']		= $user_lev;
		//$_SESSION['sess_url']		= $url;
		
		if($user_lev == 9){
			error("", $url);
		} else {
			error("", "/admin/notice/");	
		}
		
		
	}
	
}
?>