/*清空按钮*/
function empty_button(){
  document.getElementById("tt").value = "";
  document.getElementById("ct").value = "";
}
/*保存按钮*/
function save_button(){
  document.getElementById("note_ul").innerHTML += "<li class='note'><input type='checkbox' class='check_box' name='items'><a class='note_a'>" + document.getElementById('tt').value + "</a>" + "<a class='note_content'>"+ document.getElementById('ct').value +"</a></li>";
$(function(){
	$("#note_ul #add").click(function(){
		$(this).siblings('li').removeClass('selected');
		$("#note_ul #add a").removeClass('Add')
		$(this).addClass('selected_add'); 
		$("#tt").val("");
  		$("#ct").val("");
  		$(".change").hide();
		$(".delete").hide();
		$(".save").show();
		$(".empty").show();
		$(".check_box").prop("checked","");
	});
});
$(function(){
	$("#note_ul .note").click(function(){
		$(this).siblings('li').removeClass('selected_add');
		$(this).siblings('li').removeClass('selected');
		$("#note_ul #add a").addClass('Add')
		$(this).addClass('selected'); 
		$("#tt").val($(".selected .note_a").html());
		$("#ct").val($(".selected .note_content").html());
		$(".change").show();
		$(".delete").show();
		$(".save").hide();
		$(".empty").hide();
	});
});
}
/*修改按钮*/
function change_button(){
	$(".selected .note_a").html($("#tt").val())
	$(".selected .note_content").html($("#ct").val())
}
/*删除按钮*/
function delete_button(){
	$(".selected").remove();
}
/*侧边栏添加按钮选中特效*/
$(function(){
	$("#note_ul #add").click(function(){
		$(this).siblings('li').removeClass('selected');
		$("#note_ul #add a").removeClass('Add')
		$(this).addClass('selected_add'); 
		$("#tt").val("");
  		$("#ct").val("");
  		$(".change").hide();
		$(".delete").hide();
		$(".save").show();
		$(".empty").show();
		$(".check_box").prop("checked","");
	});
});
/*顶部栏添加按钮*/
$(function(){
	$(".navigation_a1").click(function(){
		$("#note_ul #add").siblings('li').removeClass('selected');
		$("#note_ul #add a").removeClass('Add')
		$("#note_ul #add").addClass('selected_add'); 
		$("#tt").val("");
  		$("#ct").val("");
  		$(".change").hide();
		$(".delete").hide();
		$(".save").show();
		$(".empty").show();
	});
});
/*顶部栏按钮实现复选框的显示和隐藏*/
$(function(){
	$(".navigation_a2").click(function(){
		$(".check_box").toggle();
		$(".menu_all").toggle();
		$(".menu_delete").toggle();
	});
});
/*待办事项清单被选中时*/
$(function(){
	$("#note_ul .note").click(function(){
		$(this).siblings('li').removeClass('selected_add');
		$(this).siblings('li').removeClass('selected');
		$("#note_ul #add a").addClass('Add')
		$(this).addClass('selected'); 
		$("#tt").val($(".selected .note_a").html());
		$("#ct").val($(".selected .note_content").html());
		$(".change").show();
		$(".delete").show();
		$(".save").hide();
		$(".empty").hide();
	});
});
/*全选按钮*/
function select_all(){
	if($(".check_box").prop("checked"))
		$(".check_box").prop("checked","");
	else 
		$(".check_box").prop("checked","checked");
}
/*删除按钮*/
function select_delete(){
	 $(".check_box").each(function(){    
     if($(this).prop("checked"))
    	$(this).parent().remove();
    });		
}

/*热键设置*/
document.onkeydown= function (e) {
var theEvent = window.event || e; 
var code = theEvent.keyCode || theEvent.which; 
if (code == 27) { 
	$("#note_ul #add").click();
}
if(code ==13){
	if($(".selected .check_box").prop("checked"))
		$(".selected .check_box").prop("checked","");
	else
		$(".selected .check_box").prop("checked","checked");
}
if(code ==38){
    $("#note_ul").siblings('li').removeClass('selected_add');
	$("#note_ul").siblings('li').removeClass('selected');
	$(".selected").prev().addClass('selected'); 
	$(".selected").next().removeClass("selected");
	$("#tt").val($(".selected .note_a").html());
	$("#ct").val($(".selected .note_content").html());
	$(".change").show();
	$(".delete").show();
	$(".save").hide();
	$(".empty").hide();	
}
if(code ==40){
	$("#note_ul").siblings('li').removeClass('selected_add');
	$("#note_ul").siblings('li').removeClass('selected');
	$(".selected").next().addClass('selected'); 
	$(".selected").prev().removeClass("selected");
	$("#tt").val($(".selected .note_a").html());
	$("#ct").val($(".selected .note_content").html());
	$(".change").show();
	$(".delete").show();
	$(".save").hide();
	$(".empty").hide();	
}
}




