
$(function(){
	//点击哪个li，哪个li变色
	$("li").click(function(){
		$(this).addClass('selectedColor').siblings().removeClass('selectedColor');
	})

	//二三级待选鼠标悬浮
	$(".content > .item").hover(function(){
		$(this).children('.serviceType_contentDetailItems').show();
	},function(){
				$(this).children('.serviceType_contentDetailItems').hide();
	})
	

})

