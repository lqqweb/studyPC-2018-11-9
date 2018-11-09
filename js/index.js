// 轮播图
window.onload=function(){

	// var swiper=new Swiper(".swiper-container",{
	// 		pagination:".swiper-pagination",
	// 		paginationClickable:true,
	// 		loop:true,
	// 		autoplay:1500,
	// 		autoplayDisableOnInteraction:true,
			
	// 	});
	// var swiper=new Swiper(".swiper-container",{
	// 		pagination:".swiper-pagination",
	// 		paginationClickable:true,
	// 		loop:true,
	// 		autoplay:1500,
	// 		autoplayDisableOnInteraction:false,
			
	// 	});

}

// 点击哪个li，哪个li变色
$(function(){

		$("li").click(function(){
		$(this).addClass('selectedColor').siblings().removeClass('selectedColor');

	})
})





// 首页下拉，鼠标滑动到课程分类的时候，显示一个导航条，和首页顶部的导航条布局不一样
$(function(){
	$(window).bind("scroll",function(){
		var sTop=$(window).scrollTop();
		var sTop=parseInt(sTop);
		if(sTop >= 620){
			if($(".nav_hidden").is(":hidden")){
				$(".nav_hidden").css('display','block');
			}
		}

		if(sTop<620){
			$(".nav_hidden").css('display','none');
		}
	})




	//当点击搜索图标时，显示搜索框，且搜索图标隐藏
	$(".searchImg").click(function(){
		$(".selectedDiv").css("display","none");
		$(".navSearch_hidden").css("display","block");
	})

	// $(".courseItem1").click(function(){
	// 	window.location.href="huawei.html";
	// })

})


//最新课程信息提示


$(function(){

		var $bottomTools = $('.infoTip');
		
		$(window).scroll(function () {
			var scrollHeight = $(document).height();
			var scrollTop = $(window).scrollTop();
			var $windowHeight = $(window).innerHeight();
			$bottomTools.css("bottom", scrollHeight - scrollTop > $windowHeight ? 0 : $windowHeight + scrollTop + 0 - scrollHeight);
		});

		$(".close").click(function(){
			$(".infoTip").css("display","none");
		})

	});


window.onload=function(){
	function timeOut(){
		document.getElementById("infoTip").style.display="none";
	}
	 setTimeout(timeOut,3000);
}

