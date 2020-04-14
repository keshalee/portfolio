
var CategoryCodeListAdd = new Array();
var CategoryCodeCurrent = new Array();

function CategoryCodeSelect(stage, eName, auto, optTopText, cate, gubun) {

    CategoryCodeListAdd[0] = stage; //stage : 1/2차
    this.eNameArry = eName.split('|');
    CategoryCodeListAdd[1] = this.eNameArry; //select name
    CategoryCodeListAdd[2] = null; //xmldoc
    CategoryCodeListAdd[3] = auto; //xml result true/false
    this.optTopTextArry = optTopText.split('|');
    CategoryCodeListAdd[4] = this.optTopTextArry; //text : select option 첫번째
    CategoryCodeListAdd[5] = ""; //조회
    CategoryCodeListAdd[6] = cate; // 현재 카테고리
    CategoryCodeListAdd[7] = gubun; // 카테고리 구분

    //CategoryCodeListSend();
    CategoryCodeListInit();
}

function CategoryCodeListInit() {
    if (CategoryCodeListAdd[6] == null || CategoryCodeListAdd[6] == "" || CategoryCodeListAdd[6] == "null") CategoryCodeListSend();
    else {
        $.ajax({
            url: '/common/inc/getCategoryListTrans.aspx',
            data: "tp=high&ctgb=" + CategoryCodeListAdd[7] + "&ctid=" + CategoryCodeListAdd[6],
            type: 'post',
            dataType: "xml",
            error: function (xhr, ajaxOptions, thrownError) {
                //console.log(xhr.responseText);
                //console.log(thrownError);
            },
            success: function (data, state) {
                //Callback_checkUsable(data, state);
                CategoryCodeCurrentSetXml(data);
            }

        });

    }



}

function CategoryCodeCurrentSetXml(result) {
    
    var code = getNodeValue(result.getElementsByTagName('code'));

    if (code == 'success') {
        CategoryCodeCurrent = eval("(" + getNodeValue(result.getElementsByTagName('data')) + ")");
        CategoryCodeListSend();
    }
    else {
        alert("카테고리 리스트를 생성할수 없습니다.2");
    }

}



function CategoryCodeListSend() {
    if (CategoryCodeListAdd[0] == null || CategoryCodeListAdd[0] == "" || CategoryCodeListAdd[0] == "null") CategoryCodeListAdd[0] = 0;

    $.ajax({
        url: '/common/inc/getCategoryListTrans.aspx',
        data: "ctgb=" + CategoryCodeListAdd[7] + "&ctid=" + CategoryCodeListAdd[5],
        type: 'post',
        dataType: "xml",
        error: function (xhr, ajaxOptions, thrownError) {
            //console.log(xhr.responseText);
            //console.log(thrownError);
        },
        success: function (data, state) {
            //Callback_checkUsable(data, state);
            CategoryCodeListSetXml(data);
        }

    });


}

function CategoryCodeListSetXml(xmlDoc) {
    if (CategoryCodeListAdd[3] == true) {
        CategoryCodeListSetList(CategoryCodeListAdd[0], xmlDoc);
    }
}

function CategoryCodeListSetList(enameNum, result) {
    if (enameNum == null || enameNum == "" || enameNum == "null") enameNum = 0;

    var code = getNodeValue(result.getElementsByTagName('code'));

    if (code == 'success') {
        var loaddata = eval("(" + getNodeValue(result.getElementsByTagName('data')) + ")");

        CategoryCodeListMakeSelectBox(enameNum, CategoryCodeListAdd[1][enameNum], loaddata);
    }
    else {
        alert(CategoryCodeListAdd[0] + " 카테고리 리스트를 생성할수 없습니다.");
    }
}

function CategoryCodeListMakeSelectBox(elementNum, elementId, loaddata) {

    var obj = document.getElementById(elementId);

    if (obj != null) {

        SelectBoxChildNodesDel(elementId);

        if ((elementNum + 1) < CategoryCodeListAdd[1].length) {
            obj.setAttribute("onchange", "CategoryCodeListChange(this)");
            //obj.onchange = function () {
            //CategoryCodeListChange(this);
            //};
        }

        if (CategoryCodeListAdd[4][elementNum] != null && CategoryCodeListAdd[4][elementNum] != "" && CategoryCodeListAdd[4][elementNum] != "null") {
            var option = document.createElement("option");
            var text = document.createTextNode(CategoryCodeListAdd[4][elementNum]);

            option.appendChild(text);
            option.setAttribute("value", "");

            try { obj.appendChild(option); } catch (e) { }
        }

        var runAutoState = false;

        var seldata = "";
        if (CategoryCodeCurrent.length > 0)
            seldata = CategoryCodeCurrent[elementNum].CategoryCode;

        for (var i = 0; i < loaddata.length; i++) {
            var option = document.createElement("option");
            var text = document.createTextNode(loaddata[i].CategoryCodeName);

            option.appendChild(text);
            option.setAttribute("value", loaddata[i].CategoryCode);

            if (seldata == loaddata[i].CategoryCode) {
                //console.log(loaddata[i].CategoryCode);
                option.setAttribute("selected", true);
                CategoryCodeListAdd[5] = loaddata[i].CategoryCode;
                runAutoState = true;
            }

            try { obj.appendChild(option); } catch (e) { }
        }

        if (runAutoState) {
            CategoryCodeListChange(obj);
            runAutoState = false;
        } else CategoryCodeListSetSelectBox(elementNum + 1);

    }

}

function CategoryCodeListChange(cate) {
    CategoryCodeSetValue(cate.id, cate.value);
    if (cate.value == "") CategoryCodeListSetSelectBox(CategoryCodeListAdd[0])
    else CategoryCodeListSend();
}

function CategoryCodeSetValue(id, Val) {
    for (var i = 0; i < CategoryCodeListAdd[1].length; i++) {
        if (CategoryCodeListAdd[1][i] == id) {
            CategoryCodeListAdd[0] = i + 1;
            break;
        }
    }
    CategoryCodeListAdd[5] = Val;
}

function CategoryCodeListSetSelectBox(elementNum) {
    for (var i = elementNum; i < CategoryCodeListAdd[1].length; i++) {
        SelectBoxChildNodesDel(CategoryCodeListAdd[1][i]);
        var obj = document.getElementById(CategoryCodeListAdd[1][i]);
        if (obj != null) {
            var option = document.createElement("option");
            var text = document.createTextNode(CategoryCodeListAdd[4][i]);
            option.appendChild(text);
            option.setAttribute("value", "");
            try { obj.appendChild(option); } catch (e) { }
        }
    }
}
