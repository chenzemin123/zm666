//显示帮助中心
$(function(){
	$(".header-help").hover(function(){
		$(".help").addClass("a-help");
		$(this).find("ul").show();
	},function(){
		$(".help").removeClass("a-help");
		$(this).find("ul").hide();
	})
})

//点击输入框时边框变化
$(function(){
	$(".txtname input").click(function(){
		$(".txtname").css("border","1px solid #aaa");
		$(".txtpsd").css("border","1px solid #dedede");		
	})
	$(".txtpsd input").click(function(){
		$(".txtpsd").css("border","1px solid #aaa");
		$(".txtname").css("border","1px solid #dedede");		
	})
	$(".txtname input").hover(function(){
		$(this).val(" ");
	},function(){
		$(this).val("邮箱/手机/用户");

	})
})

//点击自动登录
$(function(){
	var index = 0;
	$(".check-agreement").click(function(){
		if(index == 0){
			index = 1;
			$(this).addClass("ag-check").removeClass("ag-normol");
		}else{
			index = 0;
			$(this).addClass("ag-normol").removeClass("ag-check");
		}
	})
})
//更多合作网站
$(function(){
	var index = 0;
	$(".more-web").click(function(){
		if(index==0){
			index=1;
			$(".more-web-link").show();
		}else{
			index=0;
			$(".more-web-link").hide();
		}
	})
})
