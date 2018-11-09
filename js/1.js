//平台运营数据--总课程数
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

var worldMapContainer = document.getElementById('barContainer');

//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
var resizeWorldMapContainer = function () {
    worldMapContainer.style.width =( window.innerWidth-600)+'px';
    worldMapContainer.style.height = (window.innerHeight-300)+'px';
    // alert(worldMapContainer.style.width);
    // alert(worldMapContainer.style.height);
};
//设置容器高宽
resizeWorldMapContainer();
// 基于准备好的dom，初始化echarts实例
var myBarChart = echarts.init(worldMapContainer);

// 指定图表的配置项和数据

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
							  data:['总课程数'],
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
										    name:'总课程数',
										    type:'bar',
										    barWidth: '50%',
										    data:[500, 490, 520, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 720, 850],
										    itemStyle:{
										            	normal:{
										            		color:'#5b9bd5'
										            	}
										            }
										          
										  }
										  
									  ]
				  };
	myBarChart.setOption(option);



//用于使chart自适应高度和宽度
window.onresize = function () {
    //重置容器高宽
    resizeWorldMapContainer();
    myBarChart.resize();
};

//$('.barContainer').resize(function () {
   // myBarChart.resize();
//});



}
// window.onresize = myBarChart.resize;
//平台运营数据--总课时
$(function(){
	$("#courseTimeSelectDate").jeDate({
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

	 var myBarCourseTimeChart = echarts.init($("#barCourseTimeContainer")[0]);

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
							  data:['总课时'],
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
										    name:'总课时',
										    type:'bar',
										    barWidth: '50%',
										    data:[500, 490, 520, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 720, 850],
										    itemStyle:{
										            	normal:{
										            		color:'#5b9bd5'
										            	}
										            }
										          
										  }
										  
									  ]
				  };

	myBarCourseTimeChart.setOption(option);
})

//总课程数和总课时切换
$(function(){
	$(".courseAllNum").click(function(){
		$(".courseAllNum").addClass('allSelectedColor');
		$(".courseAllTime").removeClass('allSelectedColor');
		$(".courseAllNumContent").css("display","block");
		$(".courseAllTimeContent").css("display","none");
	})

	$(".courseAllTime").click(function(){
		$(".courseAllTime").addClass('allSelectedColor');
		$(".courseAllNum").removeClass('allSelectedColor');
		$(".courseAllTimeContent").css("display","block");
		$(".courseAllNumContent").css("display","none");
	})


})