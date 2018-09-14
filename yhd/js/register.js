//输入框文本移动
$(function(){
	$("input").click(function(){
		$(this).next().css("text-align","right");
		$(this).next().animate({
			left:'-100px'
		},300);
	})
})

//用户名输入提示
$(function(){
	$("#txtUsername").click(function(){
		var enull=$(".error-null").css("display");
		var e1=$(".error1").css("display");
		if(enull=="none"&&e1=="none"){
			$(this).parent().find(".tip1").fadeIn("slow");
		}else{
			$(this).parent().find(".tip1").hide();
		}
	});
	$("#txtUsername").blur(function(){
		var name =$(this).val();
		var patname = /^[\u4e00-\u9fa5A-Za-z0-9]{4,20}$/;
		if(name ==""){
			$(this).parent().css("border","1px solid #ff3c3c");
			$(this).parent().find(".tip1").hide();
			$(this).parent().find(".error-null").fadeIn("slow");
		}else if(patname.test(name)== false){
			$(this).parent().css("border","1px solid #ff3c3c");
			$(this).parent().find(".tip1,.error-null").hide();
			$(this).parent().find(".error1").fadeIn("slow");
		}else{
			$(this).parent().css("border","1px solid #dedede");
			$(this).parent().find(".tip1,.error-null,.error1").hide();
		}		
	})
})
//手机号输入提示
$(function(){
	$("#txtMobile").click(function(){
		var e1=$(".error1").css("display");
		if(e1=="none"){
			$(this).parent().find(".tip1").fadeIn("slow");
		}else{
			$(this).parent().find(".tip1").hide();
		}
	});
	$("#txtMobile").blur(function(){
		var mobile =$(this).val();
		var patmob = /^1(3|4|5|7|8)\d{9}$/;
		if(mobile ==""){
			$(this).parent().css("border","1px solid #ff3c3c");
			$(this).parent().find(".tip1").hide();
			$(this).parent().find(".error1").fadeIn("slow");
		}else if(patmob.test(mobile)== false){			
			$(this).parent().css("border","1px solid #ff3c3c");
			$(this).parent().find(".tip1").hide();
			$(this).parent().find(".error1").fadeIn("slow");
		}else{			
			$(this).parent().css("border","1px solid #dedede");
			$(this).parent().find(".tip1,.error1").hide();
		}		
	})
})
//密码输入提示
$(function(){
	$("#txtPassword").click(function(){
		var enull=$(this).parent().find(".error-null").css("display");
		var e1=$(this).parent().find(".error1").css("display");
		if(enull=="none"&&e1=="none"){
			$(this).parent().find(".tip1").fadeIn("slow");
		}else{
			$(this).parent().find(".tip1").hide();
		}
	});
	$("#txtPassword").blur(function(){
		var password =$(this).val();
		var patpsd = /^[\u4e00-\u9fa5A-Za-z0-9]{4,20}$/;
		if(password ==""){
			$(this).parent().css("border","1px solid #ff3c3c");
			$(this).parent().find(".tip1").hide();
			$(this).parent().find(".error-null").fadeIn("slow");
		}else if(patpsd.test(password)== false){
			$(this).parent().css("border","1px solid #ff3c3c");
			$(this).parent().find(".tip1,.error-null").hide();
			$(this).parent().find(".error1").fadeIn("slow");
		}else{
			$(this).parent().css("border","1px solid #dedede");
			$(this).parent().find(".tip1,.error-null,.error1").hide();
		}		
	})
})
//确认密码输入提示
$(function(){
	$("#txtPassword2").click(function(){
		var e1=$(this).parent().find(".error1").css("display");
		if(e1=="none"){
			$(this).parent().find(".tip1").fadeIn("slow");
		}else{
			$(this).parent().find(".tip1").hide();
		}
	});
	$("#txtPassword2").blur(function(){
		var password1 = $("#txtPassword").val();
		var password2 =$(this).val();
		if(password1 !=password2){
			$(this).parent().css("border","1px solid #ff3c3c");
			$(this).parent().find(".tip1").hide();
			$(this).parent().find(".error1").fadeIn("slow");
		}else{
			$(this).parent().css("border","1px solid #dedede");
			$(this).parent().find(".tip1,.error-null,.error1").hide();
		}		
	})
})