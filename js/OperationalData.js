// 平台运营数据-实时数据
// 人均学时柱状图
$(function(){

	 var myBarPersonStudyTimeChart = echarts.init($("#personStudyTimeBar")[0]);

		option = {
					title : {
								text: '',
								subtext: '',
								x:'center'
							},
					tooltip : {
								trigger: 'axis'
							   },
					legend: {
							  data:[''],
							  bottom:'0'
							},
					grid:{
                	     	x:42,
                	     	y:50,
                	     	x2:5,
                	     	y2:50
                	     },
							calculable : true,
							xAxis : [
									  {
										type : 'category',
										data : ['2017-12','2018-01','2018-03','2018-04','2018-05','2018-06'],
										axisLabel: {  
												   interval:0,  
												   rotate:40  
												}  
									   }
									],

							yAxis : [
										{
										    type : 'value',
										    axisLabel: {  
									                  show: true,  
									                  interval: 'auto',  
									                  formatter: '{value} %'  
									                },  
									         show: true  
										 }
									],
							series : [
										{
										    name:'',
										    type:'bar',
										    barWidth: '50%',
										    label: {
									                normal: {
									                    show: true,
									                    position: 'top'
									                }
									            },
										    data:[10.5, 35.6, 63.8, 23.2, 15.6, 76.7],
										    itemStyle:{
										            	normal:{
										            		color:'#5b9bd5',
										            		label: {  
											                        //show: true,  
											                        position: 'top',  
											                        formatter: '{b}\n{c}%'  
											                    }  
										            	}
										            }
										          
										  }
										  
									  ]
				  };

	myBarPersonStudyTimeChart.setOption(option);
})

// 课程数量柱状图

$(function(){

	 var myBarCourseNumListChart = echarts.init($("#courseNumListBar")[0]);

		option = {
					title : {
								text: '',
								subtext: '',
								x:'center'
							},
					tooltip : {
								trigger: 'axis'
							   },
					legend: {
							  data:[''],
							  bottom:'0'
							},
					grid:{
                	     	x:42,
                	     	y:50,
                	     	x2:5,
                	     	y2:50
                	     },
							calculable : true,
							xAxis : [
									  {
										type : 'category',
										data : ['2017-12','2018-01','2018-02','2018-04','2018-05','2018-06'],
										axisLabel: {  
												   interval:0,  
												   rotate:40  
												}  
									   }
									],

							yAxis : [
										{
										    type : 'value',
										    axisLabel: {  
									                  show: true,  
									                  interval: 'auto',  
									                  //formatter: '{value} %'  
									                },  
									         show: true  
										 }
									],
							series : [
										{
										    name:'',
										    type:'bar',
										    barWidth: '50%',
										    label: {
									                normal: {
									                    show: true,
									                    position: 'top'
									                }
									            },
										    data:[10.5, 85.6, 63.8, 23.2, 25.6, 76.7],
										    itemStyle:{
										            	normal:{
										            		color:'#5b9bd5',
										            		label: {  
											                        //show: true,  
											                        position: 'top',  
											                        //formatter: '{b}\n{c}%'  
											                    }  
										            	}
										            }
										          
										  }
										  
									  ]
				  };

	myBarCourseNumListChart.setOption(option);
})





//平台课程统计--总课程数/总课时
$(function(){
	$("#selectDate").jeDate({
    isinitVal:true,
    festival:true,
    ishmsVal:false,
    // minDate: '2011-06-16 23:59:59',
    maxDate: $.nowDate(0),
    format:"YYYY",
    zIndex:3000,

	})
})

window.onload=function(){
//柱状图
 var myBarChart = echarts.init(document.getElementById('barContainer'));
		option = {
					title : {
								text: '',
								subtext: '',
								x:'center'
							},
					tooltip : {
								trigger: 'axis'
							   },
					legend: {
							  data:['总课程数','总课时'],
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
										    type : 'value',
										    
										 }
									],
							series : [
										{
										    name:'总课程数',
										    type:'bar',
										    label: {
									                normal: {
									                    show: true,
									                    position: 'top'
									                }
									            },
										    data:[500, 490, 520, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 720, 850],
										    itemStyle:{
										            	normal:{
										            		color:'#5b9bd5'
										            	}
										            }
										          
										  },
										  {
										    name:'总课时',
										    type:'bar',
										    label: {
									                normal: {
									                    show: true,
									                    position: 'top'
									                }
									            },
										    data:[50, 49, 52, 230, 2, 7, 13, 16, 320, 200, 72, 85],
										    itemStyle:{
										            	normal:{
										            		color:'#ed7d31'
										            	}
										            }
										          
										  },
										  
									  ]
				  };
	myBarChart.setOption(option);

}




//平台运营数据--月度专业课程数量和时长


$(function(){
	$("#professionalSelectDate").jeDate({
    isinitVal:true,
    festival:true,
    ishmsVal:false,
    maxDate: '2011-06-16 23:59:59',
    maxDate: $.nowDate(0),
    format:"YYYY-MM",
    zIndex:3000,
	})


})



//平台活跃度--部门活跃度

$(function(){
	$("#userActiveSelectDate").jeDate({
    isinitVal:true,
    festival:true,
    ishmsVal:false,
    // minDate: '2011-06-16 23:59:59',
    maxDate: $.nowDate(0),
    format:"YYYY",
    zIndex:3000,
	})
})

$(function(){

	 var myBarUserActiveChart = echarts.init($("#barUserActiveContainer")[0]);

		option = {
					title : {
								text: '',
								subtext: '',
								x:'center'
							},
					tooltip : {
								trigger: 'axis'
							   },
					legend: {
							  data:['活跃度'],
							  bottom:'0'
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
										    type : 'value',
										    axisLabel: {  
									                  show: true,  
									                  interval: 'auto',  
									                  formatter: '{value} %'  
									                },  
									         show: true  
										 }
									],
							series : [
										{
										    name:'活跃度',
										    type:'bar',
										    barWidth: '50%',
										    label: {
									                normal: {
									                    show: true,
									                    position: 'top'
									                }
									            },
										    data:[10.5, 85.6, 63.8, 23.2, 25.6, 76.7, 25, 58.2, 32.6, 20.0, 21.9, 39.4],
										    itemStyle:{
										            	normal:{
										            		color:'#5b9bd5',
										            		label: {  
											                        //show: true,  
											                        position: 'top',  
											                        formatter: '{b}\n{c}%'  
											                    }  
										            	}
										            }
										          
										  }
										  
									  ]
				  };

	myBarUserActiveChart.setOption(option);
})


//部门活跃度-月排名

$(function(){
	$("#sectionActiveSelectDate").jeDate({
    isinitVal:true,
    festival:true,
    ishmsVal:false,
    // minDate: '2011-06-16 23:59:59',
    maxDate: $.nowDate(0),
    format:"YYYY-MM",
    zIndex:3000,
	})
})



// 学习时长-月排名
$(function(){
	$("#studyTimeSelectDate").jeDate({
    isinitVal:true,
    festival:true,
    ishmsVal:false,
    // minDate: '2011-06-16 23:59:59',
    maxDate: $.nowDate(0),
    format:"YYYY-MM",
    zIndex:3000,
	})
})



// 学分榜-月排名
$(function(){
	$("#scoreListSelectDate").jeDate({
    isinitVal:true,
    festival:true,
    ishmsVal:false,
    // minDate: '2011-06-16 23:59:59',
    maxDate: $.nowDate(0),
    format:"YYYY-MM",
    zIndex:3000,
	})
})

// 部门学习情况--人均学习时长和总时长
     // 人均学习时长和总时长-月排名
    $(function(){
		$("#personStudyTimeSelectDate").jeDate({
	    isinitVal:true,
	    festival:true,
	    ishmsVal:false,
	    // minDate: '2011-06-16 23:59:59',
	    maxDate: $.nowDate(0),
	    format:"YYYY-MM",
	    zIndex:3000,
		})
	}) 

    // 部门总时长-月排名
 //     $(function(){
	// 	$("#sectionAllTimeSelectDate").jeDate({
	//     isinitVal:true,
	//     festival:true,
	//     ishmsVal:false,
	//     // minDate: '2011-06-16 23:59:59',
	//     maxDate: $.nowDate(0),
	//     format:"YYYY-MM",
	//     zIndex:3000,
	// 	})
	// }) 


// $(function(){
// 	$(".personStudyTime").click(function(){
// 		$(".personStudyTime").addClass('allSelectedColor');
// 		$(".sectionAllTime").removeClass('allSelectedColor');
// 		$(".personStudyTimeContent").css("display","block");
// 		$(".sectionAllTimeContent").css("display","none");
// 	})

// 	$(".sectionAllTime").click(function(){
// 		$(".sectionAllTime").addClass('allSelectedColor');
// 		$(".personStudyTime").removeClass('allSelectedColor');
// 		$(".sectionAllTimeContent").css("display","block");
// 		$(".personStudyTimeContent").css("display","none");
// 	})


// })
//部门学习情况--总学时-年度数据

  $(function(){
		$("#yearDataSelectDate").jeDate({
	    isinitVal:true,
	    festival:true,
	    ishmsVal:false,
	    // minDate: '2011-06-16 23:59:59',
	    maxDate: $.nowDate(0),
	    format:"YYYY",
	    zIndex:3000,
		})
	}) 
$(function(){

	 var myBarYearDataChart = echarts.init($("#barYearDataContainer")[0]);

		option = {
					title : {
								text: '',
								subtext: '',
								x:'center'
							},
					tooltip : {
								trigger: 'axis'
							   },
					legend: {
							  data:['总学时'],
							  bottom:'0'
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
										    name:'总学时',
										    type:'bar',
										    barWidth: '50%',
										    label: {
									                normal: {
									                    show: true,
									                    position: 'top'
									                }
									            },
										    data:[500, 490, 520, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 720, 850],
										    itemStyle:{
										            	normal:{
										            		color:'#5b9bd5'
										            	}
										            }
										          
										  }
										  
									  ]
				  };

	myBarYearDataChart.setOption(option);
})


//各个模块之间的切换
$(function(){
	$(".real-time_Data").click(function(){
		$(".real-time_DataContent").css("display","block");
		$(".data_Num").css("display","none");
		$(".professionalNumContent").css("display","none");
		$(".userActiveContent").css("display","none");
		$(".sectionActiveContent").css("display","none");
		$(".studyTimeContent").css("display","none");
		$(".scoreListContent").css("display","none");
		$(".monthDataContent").css("display","none");
		$(".yearDataContent").css("display","none");
	})
	$(".courseNum").click(function(){
		$(".data_Num").css("display","block");
		$(".real-time_DataContent").css("display","none");
		$(".professionalNumContent").css("display","none");
		$(".userActiveContent").css("display","none");
		$(".sectionActiveContent").css("display","none");
		$(".studyTimeContent").css("display","none");
		$(".scoreListContent").css("display","none");
		$(".monthDataContent").css("display","none");
		$(".yearDataContent").css("display","none");
	})

	$(".professionalNum").click(function(){
		$(".professionalNumContent").css("display","block");
		$(".real-time_DataContent").css("display","none");
		$(".data_Num").css("display","none");
		$(".userActiveContent").css("display","none");
		$(".sectionActiveContent").css("display","none");
		$(".studyTimeContent").css("display","none");
		$(".scoreListContent").css("display","none");
		$(".monthDataContent").css("display","none");
		$(".yearDataContent").css("display","none");
	})
	$(".userActive").click(function(){
		$(".userActiveContent").css("display","block");
		$(".real-time_DataContent").css("display","none");
		$(".data_Num").css("display","none");
		$(".professionalNumContent").css("display","none");
		$(".sectionActiveContent").css("display","none");
		$(".studyTimeContent").css("display","none");
		$(".scoreListContent").css("display","none");
		$(".monthDataContent").css("display","none");
		$(".yearDataContent").css("display","none");
	})
	$(".sectionActive").click(function(){
		$(".sectionActiveContent").css("display","block");
		$(".real-time_DataContent").css("display","none");
		$(".data_Num").css("display","none");
		$(".professionalNumContent").css("display","none");
		$(".userActiveContent").css("display","none");
		$(".studyTimeContent").css("display","none");
		$(".scoreListContent").css("display","none");
		$(".monthDataContent").css("display","none");
		$(".yearDataContent").css("display","none");
	})
	$(".studyTime").click(function(){
		$(".studyTimeContent").css("display","block");
		$(".real-time_DataContent").css("display","none");
		$(".data_Num").css("display","none");
		$(".professionalNumContent").css("display","none");
		$(".userActiveContent").css("display","none");
		$(".sectionActiveContent").css("display","none");
		$(".scoreListContent").css("display","none");
		$(".monthDataContent").css("display","none");
		$(".yearDataContent").css("display","none");
	})
	$(".scoreList").click(function(){
		$(".scoreListContent").css("display","block");
		$(".real-time_DataContent").css("display","none");
		$(".data_Num").css("display","none");
		$(".professionalNumContent").css("display","none");
		$(".userActiveContent").css("display","none");
		$(".sectionActiveContent").css("display","none");
		$(".studyTimeContent").css("display","none");
		$(".monthDataContent").css("display","none");
		$(".yearDataContent").css("display","none");
	})

	$(".monthData").click(function(){
		$(".monthDataContent").css("display","block");
		$(".real-time_DataContent").css("display","none");
		$(".data_Num").css("display","none");
		$(".professionalNumContent").css("display","none");
		$(".userActiveContent").css("display","none");
		$(".sectionActiveContent").css("display","none");
		$(".studyTimeContent").css("display","none");
		$(".scoreListContent").css("display","none");
		$(".yearDataContent").css("display","none");
	})

	$(".yearData").click(function(){
		$(".yearDataContent").css("display","block");
		$(".real-time_DataContent").css("display","none");
		$(".data_Num").css("display","none");
		$(".professionalNumContent").css("display","none");
		$(".userActiveContent").css("display","none");
		$(".sectionActiveContent").css("display","none");
		$(".studyTimeContent").css("display","none");
		$(".scoreListContent").css("display","none");
		$(".monthDataContent").css("display","none");
	})
})


