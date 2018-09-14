//商品的其他图片
$(function(){
	$(".main-pics ul li").hover(function(){
		$(this).addClass("main-pic-h").siblings().removeClass("main-pic-h");
	},function(){
		$(this).removeClass("main-pic-h");
	})
})
//商品属性
$(function(){
	//选择尺寸和颜色
	$(".by-size span").click(function(){
		$($(this)).addClass("by-check").siblings().removeClass("by-check");
	})
	//关注商品
	var index =0;
	$(".by-like").click(function(){
		if(index ==0){
			index =1;
			$(this).css("background","url(images/heart_h.png) no-repeat left");
		}else{
			index =0;
			$(this).css("background","url(images/heart.png) no-repeat left");
		}
	})
	var num =$(".by-num").html();
	//更改商品数量
	$(".by-plus").click(function(){
		num++;
		$(".by-num").html(num);
	})
	$(".by-minus").click(function(){
		if(num==1){
			num=1;
			$(".by-num").html(num);
		}else{
			num--;
			$(".by-num").html(num);
		}
	})
})
//页数
$(function(){
	$(".pg-num").click(function(){
		$(this).addClass("pg-check").siblings().removeClass("pg-check");
	})
})
//商品详情
$(function(){
	$(".tl-span").click(function(){
		$(this).addClass("tl-span-check").siblings().removeClass("tl-span-check");
	})
	$(".tl-span-com").click(function(){
		$(".details").hide();
	})
	$(".tl-span-de").click(function(){
		$(".details").show();
	})
})
//套餐价格
$(function(){
	 $(".cl-goods input").click(function(){
	 	var check = $(this).is(":checked");
	 	var i =$(this).next().html();	 	
	 	if(check){	 		
	 		var oldprice =$(".cl-price").html();
	 		var newprice =parseInt(i)+parseInt(oldprice);
	 		$(".cl-price").html(newprice);
	 	}else{
	 		var oldprice =$(".cl-price").html();
	 		var newprice =parseInt(oldprice)-parseInt(i);
	 		$(".cl-price").html(newprice);
	 	}
	 })
})
