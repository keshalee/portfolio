<?php 
include $_SERVER['DOCUMENT_ROOT']."/admin/proc.php";

$lang = $_REQUEST['lang'];


$lst_sql = "SELECT img_{$lang} as img, title_{$lang} as title, cover_{$lang} as cover, idx, regdate FROM webtoon ORDER BY idx DESC";
$res = $db->get_results($lst_sql);	

$cnt = 0;

if($res){
	foreach($res as $data){
		$idx = $data->idx;
		$title = $data->title;
		$cover = $data->cover;
		$regdate = $data->regdate;
		$regdate = substr($regdate,0,10);
		$cnt++;
		
?>
<a href="#" class="layer_btn" data-num="<?=$idx?>"  data-type="webtoon">
    <li>
        <div class="picture">
            <img src="<?=$cover?>" id="webtoonImg" alt="webtoon image" />
        </div>
        <div class="text">
            <p class="date"><?=$regdate?></p>
            <p class="title"><?=$title?></p>
        </div>
    </li>
</a>


<?php

	}
}
?>
||<?=$cnt?>