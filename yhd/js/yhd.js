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




//导航列表
$(function(){
	$("nav ul li").hover(function(){
		$(this).find("a").css({"background-color":"white","color":"#c91b2b"});
		$(this).siblings().find("a").css({"background-color":"#c91b2b","color":"white"});
		var i =$(this).index();
		$(".li-list").show();
		$(".li-"+i).show();
		$(".li-"+i).siblings().hide();
		$(".li-"+i).hover(function(){
			$(".li-list").show();
			$(this).show();
			$(this).siblings().hide();
		},function(){
			$(this).hide();
			$("nav ul li").eq(i).find("a").css({"background-color":"#c91b2b","color":"white"});
		})
	},function(){
		$(this).find("a").css({"background-color":"#c91b2b","color":"white"});
		//$(".li-list").hide();
	})
})


//鼠标移到时图片会挪动
$(function(){
	$(".fresh-goods a").hover(function(){
		$(this).find("img").animate({
			marginLeft: 20 + 'px'
		},200);
	},function(){
		$(this).find("img").animate({
			marginLeft: 30 + 'px'
		},200);
	})
})


//显示轮播图的左右箭头
$(function(){
	$("#slideBox").hover(function(){
		$(".pic-left").show();
		$(".pic-right").show();
	},function(){
		$(".pic-left").hide();
		$(".pic-right").hide();
	})
})
//轮播图
var i = 0 ;
var timer;

$(document).ready(function(){
    //调用showTime()函数（轮播函数）
    showTime();

    //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
    $('.spot ul li').hover(function(){
        //获取当前i的值，并显示，同时还要清除定时器
        i = $(this).index();
        $(".pics ul li").eq(i).show().siblings().hide();
        $(this).addClass("hot").siblings().removeClass("hot");
        clearInterval(timer);
    },function(){
        showTime();
    });
    
	//鼠标放上去时停止轮播
	$(".pics").hover(function(){
		clearInterval(timer);
	},function(){
		showTime();
	})
	
    //鼠标点击左侧的箭头
    $('.pic-left').click(function(){
        clearInterval(timer);
        if(i == 0){
            i = 3;//注意此时i的值
        }
        i--;
         $(".pics ul li").eq(i).show().siblings().hide();
         $('.spot ul li').eq(i).addClass("hot").siblings().removeClass("hot");
        showTime();
    });

    //鼠标点击右侧的箭头
    $('.pic-right').click(function(){
        clearInterval(timer);
        if(i == 3){
            i = -1;//注意此时i的值
        }
        i++;
        $(".pics ul li").eq(i).show().siblings().hide();
        $('.spot ul li').eq(i).addClass("hot").siblings().removeClass("hot");
        showTime();
    });


});


//创建一个showTime函数
function showTime(){
    //定时器
     timer = setInterval(function(){
        //调用一个Show()函数
        $(".pics ul li").eq(i).show().siblings().hide();
        $('.spot ul li').eq(i).addClass("hot").siblings().removeClass("hot");
        i++;
        //当图片是最后一张的后面时，设置图片为第一张
        if(i==3){ i=0;}
    },1000);
}



//123F更换图
$(function(){
	var num = 0;
	var timer;
	timer =setInterval(imgs,1000);
	//自动轮播
	function imgs(){
		if(num==2){			
			num=0;			
			$("#fresh-imgs1 img").eq(num).show().siblings().hide();
			$("#fresh-imgs2 img").eq(num).show().siblings().hide();
			$("#fresh-imgs3 img").eq(num).show().siblings().hide();
		}else{
			num=num+1;
			$("#fresh-imgs1 img").eq(num).show().siblings().hide();
			$("#fresh-imgs2 img").eq(num).show().siblings().hide();
			$("#fresh-imgs3 img").eq(num).show().siblings().hide();
		}		
	}
	//鼠标在时停止轮播
	$("#fresh-imgs1 img").hover(function(){
		clearInterval(timer);
	},function(){
		timer =setInterval(imgs,1000);
	})
	$("#fresh-imgs2 img").hover(function(){
		clearInterval(timer);
	},function(){
		timer =setInterval(imgs,1000);
	})
	$("#fresh-imgs3 img").hover(function(){
		clearInterval(timer);
	},function(){
		timer =setInterval(imgs,1000);
	})
	
	//点击左箭头
	$("#img-left1").click(function(){
		clearInterval(timer);
		if(num==0){
			num=2;
			$("#fresh-imgs1 img").eq(num).show().siblings().hide();
		}else{
			num=num-1;
			$("#fresh-imgs1 img").eq(num).show().siblings().hide();
		}
		timer =setInterval(imgs,1000);
	})
	$("#img-left2").click(function(){
		clearInterval(timer);
		if(num==0){
			num=2;
			$("#fresh-imgs2 img").eq(num).show().siblings().hide();
		}else{
			num=num-1;
			$("#fresh-imgs2 img").eq(num).show().siblings().hide();
		}
		timer =setInterval(imgs,1000);
	})
	$("#img-left3").click(function(){
		clearInterval(timer);
		if(num==0){
			num=2;
			$("#fresh-imgs3 img").eq(num).show().siblings().hide();
		}else{
			num=num-1;
			$("#fresh-imgs3 img").eq(num).show().siblings().hide();
		}
		timer =setInterval(imgs,1000);
	})
	//点击右箭头
	$("#img-right1").click(function(){
		clearInterval(timer);
		if(num==2){
			num=0;
			$("#fresh-imgs1 img").eq(num).show().siblings().hide();
		}else{
			num=num+1;
			$("#fresh-imgs1 img").eq(num).show().siblings().hide();
		}
		timer =setInterval(imgs,1000);
	})
	$("#img-right2").click(function(){
		clearInterval(timer);
		if(num==2){
			num=0;
			$("#fresh-imgs2 img").eq(num).show().siblings().hide();
		}else{
			num=num+1;
			$("#fresh-imgs2 img").eq(num).show().siblings().hide();
		}
		timer =setInterval(imgs,1000);
	})
	$("#img-right3").click(function(){
		clearInterval(timer);
		if(num==2){
			num=0;
			$("#fresh-imgs3 img").eq(num).show().siblings().hide();
		}else{
			num=num+1;
			$("#fresh-imgs3 img").eq(num).show().siblings().hide();
		}
		timer =setInterval(imgs,1000);
	})
})
	