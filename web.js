/*ABOUT页面的延时淡出淡入特效 */
$(document).ready(function(){
	$("#introduce").click(function(){
		$("#introduce").fadeOut(2000);
		setTimeout(function(){
 			$("#div1").fadeIn(2000);
		},2000);
 		setTimeout(function(){
 			$("#div1").fadeOut(2000);
		},4000);
		setTimeout(function(){
 			$("#div2").fadeIn(2000);
		},6000);
		setTimeout(function(){
 			$("#p2").fadeIn(2000);
		},8000);
		setTimeout(function(){
 			$("#div2").fadeOut(2000);
		},11000);
		setTimeout(function(){
 			$("#div3").fadeIn(2000);
		},13000);
	});
});
/*KNOW MORE按钮的出现以及隐藏效果*/
$(document).ready(function(){
	$("#div3").click(function(){
		if($("#div3-1").is(':hidden')){
		$("#div3-1").fadeIn(2000);
		$("#div3-2").fadeIn(2000);
	}else{
		$("#div3-1").fadeOut(2000);
		$("#div3-2").fadeOut(2000);
        }
	});
});
/*返回顶部按钮*/
$(document).ready(function() {
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });
});
/*导航栏的滚动跳转*/
$(document).ready(function() {
    $('#home').click(function(){
        $('html, body').animate({scrollTop:$('#HOME').offset().top}, 'slow');
    });
});
$(document).ready(function() {
    $('#about').click(function(){
        $('html, body').animate({scrollTop:$('#ABOUT').offset().top}, 'slow');
    });
});
$(document).ready(function() {
    $('#hobby').click(function(){
        $('html, body').animate({scrollTop:$('#HOBBY').offset().top}, 'slow');
    });
});
$(document).ready(function() {
    $('#class').click(function(){
        $('html, body').animate({scrollTop:$('#CLASS').offset().top}, 'slow');
    });
});
/*导航栏样式的改变*/
$(document).ready(function() {
	$(window).scroll(function(){
		if($(document).scrollTop()<$('#ABOUT').offset().top)
    {
    	$('#home').attr("class","li_cssfix");
    	$('#home').children("a").attr("class","a_cssfix");
    	$('#about').attr("class","li_css");
    	$('#about').children("a").attr("class","a_css");
    	$('#hobby').attr("class","li_css");
    	$('#hobby').children("a").attr("class","a_css");
    	$('#class').attr("class","li_css");
    	$('#class').children("a").attr("class","a_css");
    }
		 if($(document).scrollTop()+1>=$('#ABOUT').offset().top&&$(document).scrollTop()<$('#HOBBY').offset().top)
    {
    	$('#home').attr("class","li_css");
    	$('#home').children("a").attr("class","a_css");
    	$('#about').attr("class","li_cssfix");
    	$('#about').children("a").attr("class","a_cssfix");
    	$('#hobby').attr("class","li_css");
    	$('#hobby').children("a").attr("class","a_css");
    	$('#class').attr("class","li_css");
    	$('#class').children("a").attr("class","a_css");
    }
    	if($(document).scrollTop()+1>=$('#HOBBY').offset().top&&$(document).scrollTop()<$('#CLASS').offset().top)
    {
    	$('#home').attr("class","li_css");
    	$('#home').children("a").attr("class","a_css");
    	$('#about').attr("class","li_css");
    	$('#about').children("a").attr("class","a_css");
    	$('#hobby').attr("class","li_cssfix");
    	$('#hobby').children("a").attr("class","a_cssfix");
    	$('#class').attr("class","li_css");
    	$('#class').children("a").attr("class","a_css");
    }
    	if($(document).scrollTop()+1>=$('#CLASS').offset().top)
    {
    	$('#home').attr("class","li_css");
    	$('#home').children("a").attr("class","a_css");
    	$('#about').attr("class","li_css");
    	$('#about').children("a").attr("class","a_css");
    	$('#hobby').attr("class","li_css");
    	$('#hobby').children("a").attr("class","a_css");
    	$('#class').attr("class","li_cssfix");
    	$('#class').children("a").attr("class","a_cssfix");
    }
	})
});
