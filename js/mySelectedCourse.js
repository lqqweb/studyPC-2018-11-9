$(function(){
	$("li").click(function(){
		$(this).addClass('selectedColor').siblings().removeClass('selectedColor');
	})

	$(".content > .item").hover(function(){
		$(this).children('.serviceType_contentDetailItems').show();
	},function(){
		$(this).children('.serviceType_contentDetailItems').hide();
	})

})