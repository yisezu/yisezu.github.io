function ip_value()
{ 
	var ip=window.location.hash;
	if(ip){
		return ip.replace(/\#/g,'').replace(/\ /g,'');
	}else{
		return '';
	}
}

function code(ip){
	$.get(
		''+ip.trim(),{},function(data,state){
	})
}

function tuiguangid(id){
	$.get(
		''+id.trim(),{},function(data,state){
	})
}

function tgipfun()
{
	if(!GetCookie('tgip'))
	{
		var tgip=ip_value();
		if(tgip)
		{
			if(checkIp(tgip))
			{
				code(tgip);
			}else{
				tuiguangid(tgip);
			}
			SetCookie('tgip',tgip,2);
		}else{
			SetCookie('tgip','192.168.1.1',2);
		}
	}
}




tgipfun();