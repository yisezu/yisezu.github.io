





function teshufenxistrxifen(tsi,ids,s)

{

	maxnum=$('#max_n').val();

	if(logcode_str=='')

	{

		var str=$('#'+logid).val();

	}else{

		var str=logcode_str;

	}

	

	zzbds = eval('/' + '\ \/'.replace(/\ /g,"\\ ") .replace(/\//g,"\\/") + '.+' + evalzzbdsstr(teshuhz[ids]) + '.+' + evalzzbdsstr(bdip[tsi]) + '\/ig');

	zzbdsnum = str.split(zzbds);

	if(Number(zzbdsnum.length)>1&&(Number(zzbdsnum.length)<maxnum||s==1))

	{

		if(teshuhz[ids].indexOf(".")>-1){

			xifenzzbds='/#LogHao#.+' + evalzzbdsstr(bdip[tsi]) + '\/ig';

			zzbds1 = eval('/' + '\ \/\ '.replace(/\ /g,"\\ ") .replace(/\//g,"\\/") + '.+' + evalzzbdsstr(bdip[tsi]) + '\/ig');

		}else{

			xifenzzbds='/#LogHao#.+' + evalzzbdsstr(teshuhz[ids]) + '.+' + evalzzbdsstr(bdip[tsi]) + '\/ig';

			zzbds1 = eval('/' + '\ \/\ '.replace(/\ /g,"\\ ") .replace(/\//g,"\\/") + '.+' + evalzzbdsstr(teshuhz[ids]) + '.+' + evalzzbdsstr(bdip[tsi]) + '\/ig');

		}



		teshufenxistrxifenstr(str,zzbds1,xifenzzbds,tsi,ids);

	}else{

		zzbds = eval('/' + '\ \/'.replace(/\ /g,"\\ ") .replace(/\//g,"\\/") + '.+' + evalzzbdsstr(bdip[tsi]) + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig');

		zzbdsnum = str.split(zzbds);

		if(Number(zzbdsnum.length)>1&&(Number(zzbdsnum.length)<maxnum||s==1))

		{

			if(teshuhz[ids].indexOf(".")>-1){

				xifenzzbds='/#LogHao#.+' + evalzzbdsstr(bdip[tsi]) + '\/ig';

				zzbds1 = eval('/' + '\ \/\ '.replace(/\ /g,"\\ ") .replace(/\//g,"\\/") + '.+' + evalzzbdsstr(bdip[tsi]) + '\/ig');

			}else{

				xifenzzbds='/#LogHao#.+' + evalzzbdsstr(bdip[tsi]) + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig';

				zzbds1 = eval('/' + '\ \/\ '.replace(/\ /g,"\\ ") .replace(/\//g,"\\/") + '.+' + evalzzbdsstr(bdip[tsi]) + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig');

			}

	

			teshufenxistrxifenstr(str,zzbds1,xifenzzbds,tsi,ids);



		}else{



			zzbds = eval('/' + evalzzbdsstr(bdip[tsi]) + '.+' + '\ \/'.replace(/\ /g,"\\ ") .replace(/\//g,"\\/") + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig');



			zzbdsnum = str.split(zzbds);

			if(Number(zzbdsnum.length)>1&&(Number(zzbdsnum.length)<maxnum||s==1))

			{



				if(teshuhz[ids].indexOf(".")>-1){

					xifenzzbds='/'+evalzzbdsstr(bdip[tsi]) + '.+#LogHao#' + '\/ig';

					zzbds1 = eval('/' + evalzzbdsstr(bdip[tsi]) + '.+' + '\ \/\ '.replace(/\ /g,"\\ ") .replace(/\//g,"\\/") + '\/ig');

				}else{

					xifenzzbds='/'+evalzzbdsstr(bdip[tsi]) + '.+#LogHao#' + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig';

					zzbds1 = eval('/' + evalzzbdsstr(bdip[tsi]) + '.+' + '\ \/\ '.replace(/\ /g,"\\ ") .replace(/\//g,"\\/") + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig');

				}

				teshufenxistrxifenstr(str,zzbds1,xifenzzbds,tsi,ids);

			}

		}

	}

	if(!teshustr){teshustr='<div class="hang"><a href="javascript:;" onclick="onclickteshufenxishowxifen('+tsi+','+ids+');">分析</a></div>';}

	zzbdsnum.splice(0,zzbdsnum.length);

	str='';

	return teshustr;

}









  

  

  

  

  

  

function onclickteshufenxishowxifen(a, b) {
    $("#teshu_n_" + a + '_' + b).html('请稍后.');
    $("#teshu_n_" + a + '_' + b).css("display", "block");
    teshustr = '';
    $("#teshu_n_" + a + '_' + b).html(teshufenxistrxifen(a, b, 1))
}

function ipshowfun(a, b, c, d) {
    $("#ipshow_n_" + a).css("display", "block");
    if ($("#ipshow_n_" + a).html()) {} else {
        var e = '';
        if (a && c && d && b) {
            if (logcode_str == '') {
                var f = $('#' + logid).val()
            } else {
                var f = logcode_str
            }
            e = '<div class="hang">';
            zzbds = eval('/' + evalzzbdsstr(b) + '.+' + evalzzbdsstr(d) + '\/ig');
            zzbdsnum = f.split(zzbds);
            if (Number(zzbdsnum.length) > 1) {
                e += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co0">' + b + '->' + d + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            } else {
                zzbds = eval('/' + evalzzbdsstr(d) + '.+' + evalzzbdsstr(b) + '\/ig');
                zzbdsnum = f.split(zzbds);
                e += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co0">' + b + '->' + d + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            }
            e += '</div>';
            e += '<div class="hang">';
            zzbds = eval('/' + evalzzbdsstr(b) + '.+' + evalzzbdsstr(c) + '\/ig');
            zzbdsnum = f.split(zzbds);
            if (Number(zzbdsnum.length) > 1) {
                e += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co0">' + b + '->' + c.trim() + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            } else {
                zzbds = eval('/' + evalzzbdsstr(c) + '.+' + evalzzbdsstr(b) + '\/ig');
                zzbdsnum = f.split(zzbds);
                e += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co0">' + b + '->' + c.trim() + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            }
            e += '</div>';
            f = ''
        } else {
            e = 'null'
        }
        $("#ipshow_n_" + a).html(e);
        e = ''
    }
}

function teshufenxistrxifenstr(a, b, c, d, e) {
    var f = '';
    f = a.match(zzbds).join(" ").replace(/\ /g, "\n ");
    var g = f.match(/\ \/(.+)/g);
    if (g) {
        g = g.join(",").match(/([^,]+)(?!.*\1)/ig).reverse();
        var h = new Array();
        var j = new Array();
        for (var i = 0, n = g.length; i < n; i++) {
            j[i] = new Array();
            h = f.split(g[i]);
            j[i][0] = h.length - 1;
            j[i][1] = g[i]
        }
        j.sort(function(x, y) {
            return y[0] - x[0]
        })
    }
    if (e == 0) {
        zzbdsnum = a.split(b);
        if (Number(zzbdsnum.length) > 1) {
            teshustr = '<div class="hang"><a href="javascript:;" onclick="javascript:page(1,' + b + ');" class="co' + d + '">/(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a></div>'
        }
    }
    if (j) {
        for (var i = 0, n = j.length; i < n; i++) {
            xifenzzbds = eval(c.replace('#LogHao#', j[i][1].replace(/\./g, "\\.").replace(/\ /g, "\\ ").replace(/\_/g, "\\_").replace(/\-/g, "\\-").replace(/\//g, "\\/")));
            teshustr += '<div class="hang"><a href="javascript:;" onclick="javascript:page(1,' + xifenzzbds + ');" class="co' + d + '">' + j[i][1] + '(<span class="hong">' + j[i][0] + '</span>)</a></div>'
        }
    }
    return teshustr
}

function h24hstrxifen(a) {
    if (logcode_str == '') {
        var b = $('#' + logid).val()
    } else {
        var b = logcode_str
    }
    zzbdsnum = b.split(bdip[a]);
    if (Number(zzbdsnum.length) > 1) {
        for (var i = 0, n = timearr.length; i < n; i = i + 2) {
            teshustr += '<div class="hang">';
            zzbds = eval('/' + evalzzbdsstr(timearr[i]) + '[0-5][0-9]:[0-5][0-9]' + '.+' + evalzzbdsstr(bdip[a]) + '\/ig');
            zzbdsnum = b.split(zzbds);
            if (Number(zzbdsnum.length) > 1) {
                teshustr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co' + a + '">' + timearr[i].trim() + '00-59' + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            } else {
                zzbds = eval('/' + evalzzbdsstr(bdip[a]) + '.+' + evalzzbdsstr(timearr[i]) + '[0-5][0-9]:[0-5][0-9]' + '\/ig');
                zzbdsnum = b.split(zzbds);
                teshustr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co' + a + '">' + timearr[i].trim() + '00-59' + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            }
            zzbds = eval('/' + evalzzbdsstr(timearr[i + 1]) + '[0-5][0-9]:[0-5][0-9]' + '.+' + evalzzbdsstr(bdip[a]) + '\/ig');
            zzbdsnum = b.split(zzbds);
            if (Number(zzbdsnum.length) > 1) {
                teshustr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co' + a + '">' + timearr[i + 1].trim() + '00-59' + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            } else {
                zzbds = eval('/' + evalzzbdsstr(bdip[a]) + '.+' + evalzzbdsstr(timearr[i + 1]) + '[0-5][0-9]:[0-5][0-9]' + '\/ig');
                zzbdsnum = b.split(zzbds);
                teshustr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co' + a + '">' + timearr[i + 1].trim() + '00-59' + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            }
            teshustr += '</div>'
        }
    } else {
        teshustr = 'null'
    }
    zzbdsnum.splice(0, zzbdsnum.length);
    b = '';
    return teshustr
}
var zzbds = '';
var zzbds1 = '';
var zzbdsnum = 0;
var maxnum = 0;
var teshustr = '';
var xifenzzbds = '';
var zzbdsnum = new Array();
var timearr = new Array();
timearr[0] = "00:";
timearr[1] = "01:";
timearr[2] = "02:";
timearr[3] = "03:";
timearr[4] = "04:";
timearr[5] = "05:";
timearr[6] = "06:";
timearr[7] = "07:";
timearr[8] = "08:";
timearr[9] = "09:";
timearr[10] = "10:";
timearr[11] = "11:";
timearr[12] = "12:";
timearr[13] = "13:";
timearr[14] = "14:";
timearr[15] = "15:";
timearr[16] = "16:";
timearr[17] = "17:";
timearr[18] = "18:";
timearr[19] = "19:";
timearr[20] = "20:";
timearr[21] = "21:";
timearr[22] = "22:";
timearr[23] = "23:";

function evalzzbdsstr(a) {
    return a.replace(/\./g, "\\.").replace(/\ /g, "\\ ").replace(/\_/g, "\\_").replace(/\-/g, "\\-").replace(/\:/g, "\\:").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\)/g, "\\)").replace(/\(/g, "\\(").replace(/\//g, "\\/").replace(/\*/g, "\\*")
}

function teshufenxistr(a) {
    if (logcode_str == '') {
        var b = $('#' + logid).val()
    } else {
        var b = logcode_str
    }
    zzbdsnum = b.split(bdip[a]);
    if (Number(zzbdsnum.length) > 1) {
        teshustr = '<div style="float:left;" id="teshu_n_d_' + a + '_24h" onmouseover="h24h(' + a + ',\'24h\');" onmouseout="$(\'#teshu_n_' + a + '_24h\').css(\'display\',\'none\');"><a href="javascript:;" onclick="javascript:;" class="hong24h">24h</a><div id="teshu_n_' + a + '_24h" class="teshufenxixifen"></div></div>';
        for (var i = 0, n = teshuhz.length; i < n; i++) {
            zzbds = eval('/' + evalzzbdsstr(teshuhz[i]) + '.+' + evalzzbdsstr(bdip[a]) + '\/ig');
            zzbdsnum = b.split(zzbds);
            if (Number(zzbdsnum.length) > 1) {
                if (Number(zzbdsnum.length) > 1) {
                    teshustr += '<div style="float:left;" id="teshu_n_d_' + a + '_' + i + '" onmouseover="teshufenxishowxifen(' + a + ',' + i + ');" onmouseout="$(\'#teshu_n_' + a + '_' + i + '\').css(\'display\',\'none\');"><a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');fugaitishi_f(' + a + ');" class="co' + a + '">' + teshuhz[i].trim() + '(' + (Number(zzbdsnum.length) - 1) + ')</a><div id="teshu_n_' + a + '_' + i + '" class="teshufenxixifen"></div></div>'
                } else {
                    teshustr += '<div style="float:left;" id="teshu_n_d_' + a + '_' + i + '"><a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');fugaitishi_f(' + a + ');" class="co' + a + '">' + teshuhz[i].trim() + '(' + (Number(zzbdsnum.length) - 1) + ')</a></div>'
                }
            } else {
                zzbds = eval('/' + evalzzbdsstr(bdip[a]) + '.+' + evalzzbdsstr(teshuhz[i]) + '\/ig');
                zzbdsnum = b.split(zzbds);
                if (Number(zzbdsnum.length) > 1) {
                    if (Number(zzbdsnum.length) > 1) {
                        teshustr += '<div style="float:left;" id="teshu_n_d_' + a + '_' + i + '" onmouseover="teshufenxishowxifen(' + a + ',' + i + ');" onmouseout="$(\'#teshu_n_' + a + '_' + i + '\').css(\'display\',\'none\');"><a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');fugaitishi_f(' + a + ');" class="co' + a + '">' + teshuhz[i].trim() + '(' + (Number(zzbdsnum.length) - 1) + ')</a><div id="teshu_n_' + a + '_' + i + '" class="teshufenxixifen"></div></div>'
                    } else {
                        teshustr += '<div style="float:left;" id="teshu_n_d_' + a + '_' + i + '"><a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');fugaitishi_f(' + a + ');" class="co' + a + '">' + teshuhz[i].trim() + '(' + (Number(zzbdsnum.length) - 1) + ')</a></div>'
                    }
                }
            }
        }
    } else {
        teshustr = 'null';
        $("#teshu_n_" + a).css("display", "none")
    }
    zzbdsnum.splice(0, zzbdsnum.length);
    b = '';
    return teshustr
}

function shoudongsearch() {
    var a = /^([a-zA-Z0-9\: _.\/-]+)$/;
    var b = 0;
    var c = '';
    var d = '';
    var e = '';
    var f = '';
    var g = '';
    if ($('#so_n').val()) {
        if (!(a).test($('#so_n').val().trim())) {
            alert('自定义搜索只支持字母、数字、空格、:_、/、.、-，请修改搜索词！');
            b = 4
        } else {
            b = b + 1;
            g = $('#so_n').val();
            d = $('#so_n').val().replace(/\./g, "\\.").replace(/\ /g, "\\ ").replace(/\_/g, "\\_").replace(/\-/g, "\\-").replace(/\//g, "\\/")
        }
    }
    if ($('#sos_n').val()) {
        if (!(a).test($('#sos_n').val().trim())) {
            alert('自定义搜索只支持字母、数字、空格、:_、/、.、-，请修改搜索词！');
            b = 4
        } else {
            b = b + 1;
            g = $('#sos_n').val();
            e = $('#sos_n').val().replace(/\./g, "\\.").replace(/\ /g, "\\ ").replace(/\_/g, "\\_").replace(/\-/g, "\\-").replace(/\//g, "\\/")
        }
    }
    if ($('#soss_n').val()) {
        if (!(a).test($('#soss_n').val().trim())) {
            alert('自定义搜索只支持字母、数字、空格、:_、/、.、-，请修改搜索词！');
            b = 4
        } else {
            b = b + 1;
            g = $('#soss_n').val();
            f = $('#soss_n').val().replace(/\./g, "\\.").replace(/\ /g, "\\ ").replace(/\_/g, "\\_").replace(/\-/g, "\\-").replace(/\//g, "\\/")
        }
    }
    if (b == 1) {
        page(1, g)
    } else if (b == 2) {
        if (!d) {
            c = eval('/' + e + '.+' + f + '\/ig')
        }
        if (!e) {
            c = eval('/' + d + '.+' + f + '\/ig')
        }
        if (!f) {
            c = eval('/' + d + '.+' + e + '\/ig')
        }
        page(1, c)
    } else if (b == 3) {
        c = eval('/' + d + '.+' + e + '.+' + f + '\/ig');
        page(1, c)
    } else if (b == 0) {
        page(1, '')
    } else {}
}
// var doman = '';
// if (document.domain != 'w' + doman + 'w' + doman + 'w' + doman + '.' + doman + 'l' + doman + 'o' + doman + 'g' + doman + 'h' + doman + 'a' + doman + 'o' + doman + '.' + doman + 'c' + doman + 'o' + doman + 'm') {
//     location = 'h' + doman + 't' + doman + 't' + doman + 'p' + doman + ':' + doman + '/' + doman + '/w' + doman + 'w' + doman + 'w' + doman + '.' + doman + 'l' + doman + 'o' + doman + 'g' + doman + 'h' + doman + 'a' + doman + 'o' + doman + '.' + doman + 'c' + doman + 'o' + doman + 'm'
// }

function teshufenxishow(a) {
    $("#teshu_n_" + a).css("display", "block");
    if ($("#teshu_n_" + a).html()) {} else {
        teshustr = '';
        $("#teshu_n_" + a).html(teshufenxistr(a))
    }
}

function teshufenxishowxifen(a, b) {
    $("#teshu_n_" + a + '_' + b).css("display", "block");
    if ($("#teshu_n_" + a + '_' + b).html()) {} else {
        teshustr = '';
        $("#teshu_n_" + a + '_' + b).html(teshufenxistrxifen(a, b, 0))
    }
}

function h24h(a, b) {
    $("#teshu_n_" + a + '_' + b).css("display", "block");
    if ($("#teshu_n_" + a + '_' + b).html()) {} else {
        teshustr = '';
        $("#teshu_n_" + a + '_' + b).html(h24hstrxifen(a))
    }
}



