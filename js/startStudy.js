$(function(){

	// 选择课程目录或者评价
	$(".courseDetailInfo").click(function(){
		$(".courseDetailInfo").addClass('selectedItem');
		$(".courseComment").removeClass('selectedItem');
		$(".courseCatalogDetail").css("display","block");
		$(".commentPart").css("display","none");
	})
	$(".courseComment").click(function(){
		$(".courseComment").addClass('selectedItem');
		$(".courseDetailInfo").removeClass('selectedItem');
		$(".courseCatalogDetail").css("display","none");
		$(".commentPart").css("display","block");
	})

	//添加课程
	$(".addCourse").click(function(){
		window.location.href="selectedCourseContent.html";
	})


	// 选择播放视频或者播放音频或者下载pdf文档
	$(".moveImg").click(function(){
		$(".musicHidden").get(0).pause();
		if($(".videoPlay").is(":hidden")){
			$(".videoPlay").css("display","block");
			$(".musicHidden").css("display","none");
			$(".musicBg").css("display","none");
		}
	})
	$(".musicImg").click(function(){
		$(".videoPlay").get(0).pause();
		if($(".musicHidden").is(":hidden")){
			$(".musicHidden").css("display","block");
			$(".videoPlay").css("display","none");
			$(".musicBg").css("display","block");
		}
	})

})


//是否有人评论
$(function(){
	var commentNum = $(".commentNum").html();
	// 没有人评论
	if(commentNum == 0){
		$(".noComment").css("display","block");
		$(".haveComment").css("display","none");
		return;
	}
	if(commentNum !=0){
		$(".noComment").css("display","none");
		$(".haveComment").css("display","block");
		return;
	}
})

//删除自己的评论
$(function(){
	$(".del").click(function(){
		$(".deleteMyComment").css("display","block");

	})
	$(".deleteY").click(function(){
		$(".myC").remove();
		$(".deleteMyComment").css("display","none");
	})
	$(".cancleD").click(function(){
		$(".deleteMyComment").css("display","none");
	})
})

//点击回复，出现回复对话框
$(function(){
	$(".commenterBA").click(function(){
		$(".backBox").css("display","block");
	})

	$(".backBg").click(function(){
		$(".backBox").css("display","none");
	})
})

//点击回复对话框时，发送按钮变成绿色
$(function(){
	$(".commentComment").click(function(){
		$(".deliverComment").css("background","#5bc44d");
		// $(".sendImg").attr("src","images/comment/send.png");
	})
})
//发发送完成后，回复评论框消失
$(function(){
	$(".deliverComment").click(function(){
		$(".backBox").css("display","none");
	})
})

//查看全部回复内容
$(function(){
	$(".checkHC").click(function(){
		$(".hiddenComment").css("display","block");
	})
	$(".closeDetail").click(function(){
		$(".hiddenComment").css("display","none");
	})
})