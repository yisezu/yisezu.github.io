var tishi_reg='';
function fugaitishi_f(fi)
{
	if(cmail||fi!=0||tishi_reg)
	{
	}else{
		tishi_reg='yes';
		$("#fugaitishi").css('display','block');
		$("#fugaitishi").css('height',$(document).height()+'px');
		$("#fugaitishi").css('width',$(document).width()+'px');
		$("#fugaitishi").html('<div class="fugaitishipiao"></div>');
	}
	
}
