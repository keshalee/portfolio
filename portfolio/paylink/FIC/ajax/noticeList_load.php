<?php 
include $_SERVER['DOCUMENT_ROOT']."/admin/proc.php";

$page_now = $_REQUEST['page'];
$page_row = $_REQUEST['page_size'];


$lst_sql = "SELECT * FROM notice ORDER BY idx DESC LIMIT ".($page_now * $page_row).", ".$page_row;
$res = $db->get_results($lst_sql);	

$cnt = 0;

if($res){
	foreach($res as $data){
		$idx = $data->idx;
		$title = $data->title;
		$content = $data->content;
		
		
?>
<li data-scroll="toggle(.fromTopIn, .fromTopOut)">
    <p class="title"><?=$title?></p>
    <p class="content"><?=$content?></p>
    <div class="view_btn">
        <a class="button layer_btn" data-scroll="toggle(.fromTopIn, .fromTopOut)" data-num="<?=$idx?>" href="javascript:void(0)" >View</a>
    </div>
</li>

<?php

	}
}
?>
