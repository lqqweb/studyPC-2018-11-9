$(function(){
	//点击哪个li，哪个li变色
	$("li").click(function(){
		$(this).addClass('selectedColor').siblings().removeClass('selectedColor');
	})
	//点击开始学习，跳转到视频播放页面
	$(".startStudy").click(function(){
		window.location.href="startStudy.html"
	})

})