<?php include $_SERVER['DOCUMENT_ROOT']."/admin/header.php";?>
<?php
$table = $_REQUEST['table'];

$idx = $_REQUEST['idx'];
$page_now = $_REQUEST['page_now'];
$search_text = $_REQUEST['search_text'];
$search_type = $_REQUEST['search_type'];

$mode = "write";
$mode_txt = "등록";

if($idx){
	$mode = "edit";	
	$mode_txt = "수정";
	$sql = "SELECT * FROM {$table} WHERE idx = {$idx}";
	$row = $db->get_row($sql);
	
	$title = $row->title;
	$content = $row->content;
	$img1 = $row->img1;
	$img2 = $row->img2;
	$img3 = $row->img3;
	
	if(!$row) error("삭제되거나 존재하지 않는 게시물입니다.");
	
}

	

?>
<script>
function del_img(table, param){
	if(confirm("이미지를 삭제하시겠습니까?")){
		var FormObj = document.frm;
		$("#func_type").val('del_img');
		$("#param").val(param);
		FormObj.target = "func" ; // 팝업윈도우 객체
		FormObj.action = "proc.php"; //
		FormObj.submit();

		FormObj.target = "_self" ; // 팝업윈도우 객체
	}
}

</script>
<h1>Notice <?=$mode_txt?></h1>

<form action="proc.php" name="frm" id="frm" method="post" enctype="multipart/form-data" onsubmit="submitContents(this);">
<input type="hidden" name="func_type" id="func_type" value="<?=$mode?>" />
<input type="hidden" name="idx" id="idx" value="<?=$idx?>" />
<input type="hidden" name="page_now" value="<?=$page_now?>" />
<input type="hidden" name="param" id="param" value="<?=$param?>" />
<input type="hidden" name="search_text" value="<?=$search_text?>" />
<input type="hidden" name="search_type" value="<?=$search_type?>" />
<input type="hidden" name="table" value="<?=$table?>" />
<table class="tbl_wrt" cellpadding="0" cellspacing="0">
	<thead>
	<colgroup>
    	<col width="200" />
        <col width="" />
    </colgroup>
	</thead>
    <tbody>
    
   <tr>
        <th>제목</th>
        <td>
            <input type="text" class="tbl_wrt_text" style="width:95%;" name="title" id="title" value="<?=$title?>" />
            
        </td>
    </tr>
   
    <tr>
        <th>내용</th>
        <td>
        	<textarea class="textarea" style="width:95%; height:350px;" name="content"><?=$content?></textarea>
        </td>
    </tr>
	
	<tr  class="img_type">
        <th>이미지 (1)</th>
        <td>
        <?php 
		if($img1) { 
		?>
        <img src="<?=$img1?>" style="max-width:600px;"/>
        <br /><span class="button red"><input type="button" onclick="del_img('<?=$table?>','img1')" value="삭제" /></span><br /><br />
        <?php } else {?>
        
        <input type="file" class="input_text" style="width:600px; padding:2px;" name="img1" id="img1" />
        <?php } ?>
     	</td>
    </tr>
    
    <tr  class="img_type">
        <th>이미지 (2)</th>
        <td>
        <?php 
		if($img2) { 
		?>
        <img src="<?=$img2?>" style="max-width:600px;"/>
        <br /><span class="button red"><input type="button" onclick="del_img('<?=$table?>','img2')" value="삭제" /></span><br /><br />
        <?php } else {?>
        
        <input type="file" class="input_text" style="width:600px; padding:2px;" name="img2" id="img2" />
        <?php } ?>
     	</td>
    </tr>
    
    <tr  class="img_type">
        <th>이미지 (3)</th>
        <td>
        <?php 
		if($img3) { 
		?>
        <img src="<?=$img3?>" style="max-width:600px;"/>
        <br /><span class="button red"><input type="button" onclick="del_img('<?=$table?>','img3')" value="삭제" /></span><br /><br />
        <?php } else {?>
        
        <input type="file" class="input_text" style="width:600px; padding:2px;" name="img3" id="img3" />
        <?php } ?>
     	</td>
    </tr>
        
    </tbody>
</table>
<div class="btn_center">
	<span class="button large"><input type="button" onClick="history.back();" value="목록" /></span>
	<span class="button red2 large"><input type="submit" value="저장하기" /></span>
</div>
</form>
<?php include $_SERVER['DOCUMENT_ROOT']."/admin/footer.php";?>