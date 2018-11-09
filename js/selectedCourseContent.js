$(function(){
	//点击哪个li，哪个li变色
	$("li").click(function(){
		$(this).addClass('selectedColor').siblings().removeClass('selectedColor');
	})

	

})