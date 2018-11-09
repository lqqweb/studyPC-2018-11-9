$(function(){
	//点击导航条中的搜索图标时，出现搜索框
	$(".searchImg").click(function(){
		$(".navSearch_hidden").css("display","block");
		$(".selectedDiv").css("display","none");
	})

//点击页面搜索图标出现搜索框，不想搜索了，
//点击导航条下方任意区域，隐藏搜索框
	 function stopPropagation(e) {
                if (e.stopPropagation) 
                    e.stopPropagation();
                else 
                    e.cancelBubble = true;
            }

            $(".bodyContent").bind('click',function(){
                if($(".selectedDiv").is(":hidden")){
					$(".navSearch_hidden").hide();
					$(".selectedDiv").show();
				}
            });

      		$('.selectedDiv').bind('click',function(e){
                stopPropagation(e);
            });

})

$(function(){
	//顶部导航条跳转
	$(".firstPage").click(function(){
		window.location.href="#";
		$(this).addClass('selectedColor');
		$('.newPeople').removeClass('selectedColor');
		$('.newPublicCourse').removeClass('selectedColor');
		$('.selectedCourse').removeClass('selectedColor');
		$(".onlineTest").removeClass('selectedColor');
		$(".studyMap").removeClass('selectedColor');
		$(".peraonalCenter").removeClass('selectedColor');
	})
	$(".newPeople").click(function(){
		window.location.href="#";
		$(this).addClass('selectedColor');
		$('.firstPage').removeClass('selectedColor');
		$('.newPublicCourse').removeClass('selectedColor');
		$('.selectedCourse').removeClass('selectedColor');
		$(".onlineTest").removeClass('selectedColor');
		$(".studyMap").removeClass('selectedColor');
		$(".peraonalCenter").removeClass('selectedColor');
	})

	$(".newPublicCourse").click(function(){
		window.location.href="#";
		$(this).addClass('selectedColor');
		$('.firstPage').removeClass('selectedColor');
		$('.newPeople').removeClass('selectedColor');
		$('.selectedCourse').removeClass('selectedColor');
		$(".onlineTest").removeClass('selectedColor');
		$(".studyMap").removeClass('selectedColor');
		$(".peraonalCenter").removeClass('selectedColor');
	})

	$(".selectedCourse").click(function(){
		window.location.href="#";
		$(this).addClass('selectedColor');
		$('.firstPage').removeClass('selectedColor');
		$('.newPeople').removeClass('selectedColor');
		$('.newPublicCourse').removeClass('selectedColor');
		$(".onlineTest").removeClass('selectedColor');
		$(".studyMap").removeClass('selectedColor');
		$(".peraonalCenter").removeClass('selectedColor');
	})
	$(".onlineTest").click(function(){
		window.location.href="#";
		$(this).addClass('selectedColor');
		$('.firstPage').removeClass('selectedColor');
		$('.newPeople').removeClass('selectedColor');
		$('.newPublicCourse').removeClass('selectedColor');
		$(".selectedCourse").removeClass('selectedColor');
		$(".studyMap").removeClass('selectedColor');
		$(".peraonalCenter").removeClass('selectedColor');
	})
	$(".courseContribute").click(function(){
		window.location.href="#";
	})
	$(".studyMap").click(function(){
		window.location.href="#";
		$(this).addClass('selectedColor');
		$('.selectedCourse').removeClass('selectedColor');
		$(".onlineTest").removeClass('selectedColor');
		$(".firstPage").removeClass('selectedColor');
		$('.newPeople').removeClass('selectedColor');
		$('.newPublicCourse').removeClass('selectedColor');
		$(".peraonalCenter").removeClass('selectedColor');
	})
	$(".mobileLogin").click(function(){
		window.location.href="#";
	})
	$(".personalCenter").click(function(){
		window.location.href="#";
		$(this).addClass('selectedColor');
		$('.selectedCourse').removeClass('selectedColor');
		$(".onlineTest").removeClass('selectedColor');
		$(".firstPage").removeClass('selectedColor');
		$('.newPeople').removeClass('selectedColor');
		$('.newPublicCourse').removeClass('selectedColor');
		$(".studyMap").removeClass('selectedColor');
	})

})