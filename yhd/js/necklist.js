//显示客户服务下拉菜单
$(function(){
	$(".tb-li-service").hover(function(){
		$(".tb-ul-second").show();
		$(".tb-li-service a:first").attr("class","li-service-h");		
	},function(){
		$(".tb-ul-second").hide();
		$(".tb-li-service a:first").attr("class","li-service");
	})
})
//显示手机版的二维码
$(function(){
	$(".tb-li-mob").hover(function(){
		$(".app-code").show();
	},function(){
		$(".app-code").hide();
	})
})

//购物车
$(function(){
	//显示购物车
	$(".hd-right").hover(function(){
		$(".buycar").show();
	},function(){
		$(".buycar").hide();
	})
	//删除
	$(".buycar-delect").click(function(){
		$(this).parent().parent().parent().parent().hide();
	})
	//更改购物车里的商品数量
	$(".buycar-plus").click(function(){
		var num =$(".buycar-num").html();
		num++;
		$(this).parent().find(".buycar-num").html(num);
	})
	$(".buycar-minus").click(function(){
		var num =$(".buycar-num").html();
		if(num==1){
			num=1;
			$(this).parent().find(".buycar-num").html(num);
		}else{
			num--;
			$(this).parent().find(".buycar-num").html(num);
		}		
	})
	//更改购物车商品的总价
})


//显示导航栏
$(function(){
	$(".allgoods").hover(function(){
		$("nav ul").show();
		$("nav ul li").hover(function(){
			$("nav ul").show();
			$(this).find("a").css({"background-color":"white","color":"#ff4040"});
			$(this).siblings().find("a").css({"background-color":"#C91B2B","color":"white"});
			var i= $(this).index()+1;
			$(".li-list").show();
			$(".li-"+i).show();	
			$(".li-list").hover(function(){
				$("nav ul").show();
				$(this).show();
			},function(){
				$("nav ul").hide();
				$(this).hide();
			})
		},function(){
			$(this).find("a").css({"background-color":"white","color":"#C91B2B"});
			$("nav ul").hide();
			$(".li-list").hide();
		},function(){
			$(this).find("a").css({"background-color":"#C91B2B","color":"white"});
		})
	},function(){
		$("nav ul").hide();
	})
})


//商品列表标题
$(function(){
//	标题
	$(".goods-title ul li").hover(function(){
		$(this).addClass("li-hover");
	},function(){
		$(this).removeClass("li-hover");
	})
	$(".arrow").hover(function(){
		$(this).addClass("arrow-hover").removeClass("arrow");
	},function(){	
		$(this).addClass("arrow").removeClass("arrow-hover");
	})
	//显示
	$(".gm-goods").hover(function(){
		$(this).css({"border":"1px solid #666","box-shadow":"#666 0px 0px 10px"})
	},function(){
		$(this).css({"border":"1px solid #fff","box-shadow":"none"})
	})
})

//清空浏览记录
$(function(){
	$(".hy-delect").click(function(){
		$(".hy-main").hide();
	})
})
