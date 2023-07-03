



  

function SelecttextTest(obj) {
    var int_cursor;
    var int_start = 0;
    var int_end = 0;
    var arr_sign;
    var str_value;
    str_value = $("#" + obj.id).val();
    int_cursor = $("#" + obj.id).position();
    arr_sign = new Array();
    for (var i = 0; i < str_value.length; i++) {
        if (str_value[i] == "\n") {
            arr_sign.push(i)
        }
    }
    arr_sign.push(str_value.length);
    for (var j = 0; j < arr_sign.length; j++) {
        if (int_cursor <= arr_sign[j]) {
            int_start = arr_sign[j - 1] + 1;
            int_end = arr_sign[j];
            break
        }
    }
    selectText(obj, int_start, int_end)
}

function selectText(textBox, startIndex, endIndex) {
    textBox.setSelectionRange(startIndex, endIndex);
    textBox.focus();
    selectNeirong()
}

function get(textarea) {
    var rangeData = {
        text: "",
        start: 0,
        end: 0
    };
    if (textarea.setSelectionRange) {
        textarea.focus();
        rangeData.start = textarea.selectionStart;
        rangeData.end = textarea.selectionEnd;
        rangeData.text = (rangeData.start != rangeData.end) ? textarea.value.substring(rangeData.start, rangeData.end) : ""
    } else if (document.selection) {
        textarea.focus();
        var i, oS = document.selection.createRange(),
            oR = document.body.createTextRange();
        oR.moveToElementText(textarea);
        rangeData.text = oS.text;
        rangeData.bookmark = oS.getBookmark();
        for (i = 0; oR.compareEndPoints('StartToStart', oS) < 0 && oS.moveStart("character", -1) !== 0; i++) {
            if (textarea.value.charAt(i) == '\r') {
                i++
            }
        }
        rangeData.start = i;
        rangeData.end = rangeData.text.length + rangeData.start
    }
    return rangeData
}
// var domc = '';
// if (document.domain != 'w' + domc + 'w' + domc + 'w' + domc + '.' + domc + 'l' + domc + 'o' + domc + 'g' + domc + 'h' + domc + 'a' + domc + 'o' + domc + '.' + domc + 'c' + domc + 'o' + domc + 'm') {
//     location = 'h' + domc + 't' + domc + 't' + domc + 'p' + domc + ':' + domc + '/' + domc + '/w' + domc + 'w' + domc + 'w' + domc + '.' + domc + 'l' + domc + 'o' + domc + 'g' + domc + 'h' + domc + 'a' + domc + 'o' + domc + '.' + domc + 'c' + domc + 'o' + domc + 'm'
// }

function selectNeirong() {
    var txt = '';
    var pos = get(document.getElementById('logcode_n'));
    var selectfxst = !pos.text ? '' : pos.text;
    if (strlen(selectfxst) > 10) {
        fxhts = '';
        ipn = $("#ipn_n").val();
        time = $("#time_n").val();
        ztn = $("#ztn_n").val();
        ztn1 = $("#ztn1_n").val();
        ztn2 = $("#ztn2_n").val();
        url = $("#url_n").val();
        csn = $("#csn_n").val();
        uni = $("#uni_n").val();
        weburl = $("#weburl_n").val();
        ip = '';
        ur = '';
        cs = '';
        un = '';
        pi = 0;
        vall = '';
        val = '';
        if (ipn == 0 && time == 0 && ztn == 0 && url == 0 && csn == 0 && uni == 0) {
            alert('请先点击分析，系统初始化参数！')
        } else {
            $('#No1fenxi').html(fenxistr(selectfxst));
            $('#No1fenxi').css('display', 'block');
            $('#No1fenxi').css('width', $('#right').width() + 'px')
        }
    }
};