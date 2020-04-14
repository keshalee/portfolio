
var AreaCodeListAdd = new Array();

function AreaCodeSelect(stage, eName, auto, optTopText, area, country) {

    AreaCodeListAdd[0] = stage; //stage : 시도/시구군
    this.eNameArry = eName.split('|');
    AreaCodeListAdd[1] = this.eNameArry; //select name
    AreaCodeListAdd[2] = null; //xmldoc
    AreaCodeListAdd[3] = auto; //xml result true/false
    this.optTopTextArry = optTopText.split('|');
    AreaCodeListAdd[4] = this.optTopTextArry; //text : select option 첫번째
    AreaCodeListAdd[5] = ""; //조회지역
    AreaCodeListAdd[6] = area; //area : 현재 지역
    AreaCodeListAdd[7] = country; //country : 국내외

    AreaCodeListSend();
}

function AreaCodeListSend() {
    if (AreaCodeListAdd[0] == null || AreaCodeListAdd[0] == "" || AreaCodeListAdd[0] == "null") AreaCodeListAdd[0] = 0;
    //new ajax.xhr.Request("/common/inc/getAreaListTrans.aspx", "tp=" + AreaCodeListAdd[7] + "&acd=" + AreaCodeListAdd[5], "xml", AreaCodeListSetXml, 'POST');

    $.ajax({
        url: '/common/inc/getAreaListTrans.aspx',
        data: "tp=" + AreaCodeListAdd[7] + "&acd=" + AreaCodeListAdd[5],
        type: 'post',
        dataType: "xml",
        error: function (xhr, ajaxOptions, thrownError) {
            //console.log(xhr.responseText);
            //console.log(thrownError);
        },
        success: function (data, state) {
            //Callback_checkUsable(data, state);
            AreaCodeListSetXml(data);
        }

    });


}

function AreaCodeListGetCode(area, cnt) {
    if (area != "") {
        switch (cnt) {
            case 0: return area.substr(0, 3); break;
            case 1: return area.substr(0, 6); break;
            case 2: return area.substr(0, 9); break;
            default: return area.substr(0, 3); break;
        }
    } else return "";
}

function AreaCodeListSetXml(xmlDoc) {
    if (AreaCodeListAdd[3] == true) {
        AreaCodeListSetList(AreaCodeListAdd[0], xmlDoc);
    }
}

function AreaCodeListSetList(enameNum, result) {
    if (enameNum == null || enameNum == "" || enameNum == "null") enameNum = 0;

    var code = getNodeValue(result.getElementsByTagName('code'));

    if (code == 'success') {
        var loaddata = eval("(" + getNodeValue(result.getElementsByTagName('data')) + ")");

        AreaCodeListMakeSelectBox(enameNum, AreaCodeListAdd[1][enameNum], loaddata);
    }
    else {
        alert(AreaCodeListAdd[0] + " 카테고리 리스트를 생성할수 없습니다.");
    }
}

function AreaCodeListMakeSelectBox(elementNum, elementId, loaddata) {

    var obj = document.getElementById(elementId);

    if (obj != null) {

        SelectBoxChildNodesDel(elementId);

        if ((elementNum + 1) < AreaCodeListAdd[1].length) {
            obj.setAttribute("onchange", "AreaCodeListChange(this)");
            //obj.onchange = function () {
                //AreaCodeListChange(this);
            //};
        }

        if (AreaCodeListAdd[4][elementNum] != null && AreaCodeListAdd[4][elementNum] != "" && AreaCodeListAdd[4][elementNum] != "null") {
            var option = document.createElement("option");
            var text = document.createTextNode(AreaCodeListAdd[4][elementNum]);

            option.appendChild(text);
            option.setAttribute("value", "");

            try { obj.appendChild(option); } catch (e) { }
        }

        var runAutoState = false;

        var seldata = AreaCodeListGetCode(AreaCodeListAdd[6], elementNum);

        for (var i = 0; i < loaddata.length; i++) {
            var option = document.createElement("option");
            var text = document.createTextNode(loaddata[i].AreaName);

            option.appendChild(text);
            option.setAttribute("value", loaddata[i].AreaCode);

            if (seldata == loaddata[i].AreaCode) {
                //console.log(loaddata[i].AreaCode);
                option.setAttribute("selected", true);
                AreaCodeListAdd[5] = loaddata[i].AreaCode;
                runAutoState = true;
            }

            try { obj.appendChild(option); } catch (e) { }
        }

        if (runAutoState) {
            AreaCodeListChange(obj);
            runAutoState = false;
        } else AreaCodeListSetSelectBox(elementNum + 1);

    }

}

function AreaCodeListChange(area) {
    AreaCodeSetValue(area.id, area.value);
    if (area.value == "") AreaCodeListSetSelectBox(AreaCodeListAdd[0])
    else AreaCodeListSend();
}

function AreaCodeSetValue(id, Val) {
    for (var i = 0; i < AreaCodeListAdd[1].length; i++) {
        if (AreaCodeListAdd[1][i] == id) {
            AreaCodeListAdd[0] = i + 1;
            break;
        } 
    }
    AreaCodeListAdd[5] = Val;
}

function AreaCodeListSetSelectBox(elementNum) {
    for (var i = elementNum; i < AreaCodeListAdd[1].length; i++) {
        SelectBoxChildNodesDel(AreaCodeListAdd[1][i]);
        var obj = document.getElementById(AreaCodeListAdd[1][i]);
        if (obj != null) {
            var option = document.createElement("option");
            var text = document.createTextNode(AreaCodeListAdd[4][i]);
            option.appendChild(text);
            option.setAttribute("value", "");
            try { obj.appendChild(option); } catch (e) { }
        }
    }
}
