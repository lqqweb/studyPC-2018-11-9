$(function(){
	//页面一加载就执行此函数
	setError();
})


function setError(){
	
	 var str=location.href;//获取地址栏里的参数
	 var num=str.indexOf("=");
	 str=str.substr(num+1,1);//截取第一个等号后面的值,进行判断
	 // alert(str);
	if(str==1){
		document.getElementById("userInfoTip").style.color="red";
		document.getElementById("userInfoTip").innerHTML="用户名为空";
		return false;
	}
	if(str==2){
		document.getElementById("pwdInfoTip").style.color="red";
		document.getElementById("pwdInfoTip").innerHTML="密码不正确，请重新输入";
		return false;
	}
	
}






