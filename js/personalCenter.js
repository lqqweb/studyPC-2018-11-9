$(function(){
	//当点击左侧页面的公司排名时，显示公司排名信息
	//修改密码信息隐藏,积分明细内容隐藏
	//我的评论信息隐藏，积分商城隐藏,兑换记录隐藏
	$(".myCompanyRank").click(function(){
		$(".companyRank").css("display","block");
		$('.changePwd').css("display","none");
		$(".commentContent").css("display","none");
		$(".integralDetailContent").css("display","none");
		$(".studyPortfolioContent").css("display","none");
		$(".myInfoAndStudyInfoAndSafeSet").css("display","block");
		$(".integralShopContent").css("display","none");
		$(".recordContent").css("display","none");

	})
	//当点击左侧页面的密码修改时，隐藏公司排名信息
	//显示密码修改信息，,积分明细内容隐藏
	//我的评论信息隐藏，积分商城隐藏,兑换记录隐藏
	$(".passwordChange").click(function(){
		$(".companyRank").css("display","none");
		$('.changePwd').css("display","block");
		$(".commentContent").css("display","none");
		$(".integralDetailContent").css("display","none");
		$(".studyPortfolioContent").css("display","none");
		$(".myInfoAndStudyInfoAndSafeSet").css("display","block");
		$(".integralShopContent").css("display","none");
		$(".recordContent").css("display","none");
	})
    //
    //当点击左侧页面的我的评论时，隐藏公司排名信息
	//密码信息隐藏，,积分明细内容隐藏
	//显示我的评论信息，积分商城隐藏,兑换记录隐藏
	$(".myComment").click(function(){
		$(".companyRank").css("display","none");
		$('.changePwd').css("display","none");
		$(".integralDetailContent").css("display","none");
		$(".commentContent").css("display","block");
		$(".studyPortfolioContent").css("display","none");
		$(".myInfoAndStudyInfoAndSafeSet").css("display","block");
		$(".integralShopContent").css("display","none");
		$(".recordContent").css("display","none");
	})

	//当点击左侧页面的积分明细时，隐藏公司排名信息
	//密码信息隐藏，,积分明细内容显示
	//隐藏我的评论信息，积分商城隐藏,兑换记录隐藏
	$(".integralDetail").click(function(){
		$(".companyRank").css("display","none");
		$('.changePwd').css("display","none");
		$(".commentContent").css("display","none");
		$(".integralDetailContent").css("display","block");
		$(".studyPortfolioContent").css("display","none");
		$(".myInfoAndStudyInfoAndSafeSet").css("display","block");
		$(".integralShopContent").css("display","none");
		$(".recordContent").css("display","none");
	})


	//当两次输入新密码不一样时，出现提示错误内容
	//当两次输入新密码一样时，出现提示成功内容
	$(".btn-1").click(function(){
		var newPwd = $("#inputPwd1").val();
		var newPwd2 = $("#inputPassword2").val();
		if($("#inputPwd1").val() == $("#inputPassword2").val()){
			// $(".newpwdIsTrue").css("display","block");
			$(".newpwdIsFalse").css("display","block");
			
		}else{
			$(".newpwdIsTrue").css("display","block");
		}
		// if($("#inputPwd1").val() != $("#inputPassword2").val()){
		// 	$(".newpwdIsFalse").css("display","block");
		// 	return;
		// }
	})
	

	//出现提示框，点击确定，关闭提示框
	$(".btnSure").click(function(){
		$(".newpwdIsTrue").css("display","none");
		$(".newpwdIsFalse").css("display","none");
	})


})
//判断我的评论是否为0
$(function(){
	var myComment=$(".myCommentSpan").html();
	if(myComment==0){
		$(".myCommentSpan").css("display","none");
		return;
	}
})

//查看月度情况和总情况
$(function(){
	// 月度学时学分积分
	$(".monthState").click(function(){
		$(".studyDetailInfo").css("display","block");
		$(".monthState").addClass('allSelectedColor');
		$(".studyAllDetailInfo").css("display","none");
		$(".allState").removeClass('allSelectedColor');
		


	})
	// 总学时学分积分
	$(".allState").click(function(){
		$(".studyDetailInfo").css("display","none");
		$(".monthState").removeClass('allSelectedColor');
		$(".studyAllDetailInfo").css("display","block");
		$(".allState").addClass('allSelectedColor');

	

	})
})

// 积分明细里的选择年月
$(function(){
	$("#selectDate").jeDate({
    isinitVal:true,
    festival:true,
    ishmsVal:false,
    // minDate: '2011-06-16 23:59:59',
    maxDate: $.nowDate(0),
    format:"YYYY-MM",
    zIndex:3000,
})
})

// 学习档案里的选择年份
$(function(){
	$("#selectYear").jeDate({
    isinitVal:true,
    festival:true,
    ishmsVal:false,
    // minDate: '2011-06-16 23:59:59',
    maxDate: $.nowDate(0),
    format:"YYYY",
    zIndex:3000,
})
})


//点击学习档案，显示学习档案的内容，其他内容隐藏
$(function(){
	$(".studyPortfolio").click(function(){
		$(".studyPortfolioContent").css("display","block");
		$(".myInfoAndStudyInfoAndSafeSet").css("display","none");
		$(".integralShopContent").css("display","none");
		$(".recordContent").css("display","none");
	})
})
//点击积分商城，显示积分商城的内容，其他内容隐藏
$(function(){
	$(".integralShop").click(function(){
		$(".integralShopContent").css("display","block");
		$(".studyPortfolioContent").css("display","none");
		$(".myInfoAndStudyInfoAndSafeSet").css("display","none");
		$(".recordContent").css("display","none");
	})
})

// 积分商城选择查看内容

$(function(){
	$(".allGoods").click(function(){
		$(this).addClass('allSelectedColor');
		$(".moreRecord").removeClass('allSelectedColor');
		$(".newPublic").removeClass('allSelectedColor');
		$(".myAttention").removeClass('allSelectedColor');
		$(".moreRecordGood").css("display","none");
		$(".newRecordShop").css("display","none");
		$(".myAttentionRecord").css("display","none");
		$(".goodsAll").css("display","block");

	})

	$(".moreRecord").click(function(){
		$(this).addClass('allSelectedColor');
		$(".allGoods").removeClass('allSelectedColor');
		$(".newPublic").removeClass('allSelectedColor');
		$(".myAttention").removeClass('allSelectedColor');
		$(".goodsAll").css("display","none");
		$(".newRecordShop").css("display","none");
		$(".myAttentionRecord").css("display","none");
		$(".moreRecordGood").css("display","block");

	})

	$(".newPublic").click(function(){
		$(this).addClass('allSelectedColor');
		$(".moreRecord").removeClass('allSelectedColor');
		$(".allGoods").removeClass('allSelectedColor');
		$(".myAttention").removeClass('allSelectedColor');
		$(".moreRecordGood").css("display","none");
		$(".goodsAll").css("display","none");
		$(".myAttentionRecord").css("display","none");
		$(".newRecordShop").css("display","block");
	})

	$(".myAttention").click(function(){
		$(this).addClass('allSelectedColor');
		$(".moreRecord").removeClass('allSelectedColor');
		$(".newPublic").removeClass('allSelectedColor');
		$(".allGoods").removeClass('allSelectedColor');
		$(".moreRecordGood").css("display","none");
		$(".newRecordShop").css("display","none");
		$(".goodsAll").css("display","none");
		$(".myAttentionRecord").css("display","block");

	})
})


//点击关注状态
$(function(){
	$(".attention").each(function(){
		$(this).bind("click",function(){
			var thisHtml = $(this).html();
			if(thisHtml=="关注"){
				$(this).html("已关注");
				return;
			}

			if(thisHtml!="关注"){
				$(this).html("关注");
				return;
			}
		})
	})
})

//点击兑换按钮，显示积分情况
$(function(){
	$(".record").click(function(){
		$(".nowRecord").css("display","block");
	});

	$(".bgs").click(function(){
		$(".nowRecord").css("display","none");
	})
	$(".recordOrIntegralLow").click(function(){
		$(".nowRecord").css("display","none");
	})


})


//点击兑换记录，显示兑换记录的内容，其他内容隐藏

$(function(){
	$(".exchangeRecord").click(function(){
		$(".studyPortfolioContent").css("display","none");
		$(".myInfoAndStudyInfoAndSafeSet").css("display","none");
		$(".integralShopContent").css("display","none");
		$(".recordContent").css("display","block");
	})

})



$(function(){
	//饼状图
 var myPieChart = echarts.init($("#pieContainer")[0]);

 	var x="类型1,4*类型2,1*类型3,1*";
	y=x.split("*");
	f=y.splice(0,y.length-1);
	var aaaa=[];
	for(var i=0;i<f.length;i++){
	    aaaa.push(f[i].split(","));
	}
	var dddd=[];
	for(var i=0;i<aaaa.length;i++){
	   
	      dddd.push({name: aaaa[i][0], value: aaaa[i][1]});

	}
	      console.log(dddd);

 //var aa=[{value:4,name:'类型1'}, {value:1,name:'类型2'}, {value:1,name:'类型3'}];

		option = {
			title : {
					text: '学习课程类别',
					// subtext: '纯属虚构',
					x:'center'
					},
			tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
						},
						
			series : [
						{
						name: '',
						type: 'pie',
						radius : '55%',
						center: ['50%', '60%'],
						data:dddd,
							   itemStyle: {
								            emphasis: {
								            shadowBlur: 10,
								            shadowOffsetX: 0,
								            shadowColor: 'rgba(0, 0, 0, 0.5)'
								                }
								            }
						}
					]
				 };


	myPieChart.setOption(option);
})

window.onload=function(){
//柱状图

 var myBarChart = echarts.init(document.getElementById('barContainer'));

		option = {
					title : {
								text: '个人档案',
								subtext: '',
								x:'center'
							},
					tooltip : {
								trigger: 'axis'
							   },
					legend: {
							  data:['获得学时','授课时间'],
							  bottom:'3%'
							},
							calculable : true,
							xAxis : [
									  {
										type : 'category',
										data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
									   }
									],
							yAxis : [
										{
										    type : 'value'
										 }
									],
							series : [
										{
										    name:'获得学时',
										    type:'bar',
										    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
										    itemStyle:{
										            	normal:{
										            		color:'#5b9bd5'
										            	}
										            }
										          
										  },
										   {
										      name:'授课时间',
										      type:'bar',
										      data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
										      itemStyle:{
										            	normal:{
										            		color:'#ed7d31'
										            	}
										            }
										  
										     }
									  ]
				  };


	myBarChart.setOption(option);

}

// 选择月份查看积分明细内容
$(function(){
	$(".btnMonth").click(function(){
		var monthVal = $("#selectDate").val();
		alert(monthVal);
	})
})

// 选择年份查看学习档案内容
$(function(){
	$(".btnYear").click(function(){
		var YearVal = $("#selectYear").val();
		alert(YearVal);
	})
})




