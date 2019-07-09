/*快速排序(升序)*/
function quickSort_up(arr){
            if(arr.length<=1){return arr;}
            var index=Math.floor(arr.length/2);
            var pivot=arr.splice(index,1)[0];
            var left=[];
            var right=[];
            for(var i=0;i<arr.length;i++){
                if(parseFloat(arr[i])<=parseFloat(pivot)){
                    left.push(arr[i]);
                }
                else{
                    right.push(arr[i]);
                }
            }
            return quickSort_up(left).concat([pivot],quickSort_up(right));
}
/*快速排序(降序)*/
function quickSort_down(arr) {
            if(arr.length<=1){return arr;}
            var index=Math.floor(arr.length/2);
            var pivot=arr.splice(index,1)[0];
            var left=[];
            var right=[];
            for(var i=0;i<arr.length;i++){
                if(parseFloat(arr[i])>parseFloat(pivot)){
                    left.push(arr[i]);
                }
                else{
                    right.push(arr[i]);
                }
            }
            return quickSort_down(left).concat([pivot],quickSort_down(right));
}
/*升序按钮所调用的函数*/
function up_sort(){
var input = document.getElementById("input").value;
	var inputArr = new Array();
    inputArr = input.split(" ");
    var len = inputArr.length;
    for(var i = 0 ;i<len;i++) {  
        if(inputArr[i] == "") {  
            inputArr.splice(i,1);  
            i= i-1;  
        }  
     }
    var outputArr = quickSort_up(inputArr);
    alert(outputArr);
    document.getElementById("outtext").value = outputArr;
}
/*降序按钮所调用的函数*/
function down_sort() {
var input = document.getElementById("input").value;
	var inputArr = new Array();
    inputArr = input.split(" ");
    var len = inputArr.length;
    for(var i = 0 ;i<len;i++) {  
         if(inputArr[i] == "") {  
            inputArr.splice(i,1);  
            i= i-1;  
         }  
     }
    var outputArr = quickSort_down(inputArr);
    alert(outputArr);
    document.getElementById("outtext").value = outputArr;
}
/*获取并倒序输出电影名字*/
function down_name(){
	var name = new Array();
	name_1 = $("p1").innerHTML;
	name_2 = $("p2").innerHTML;
	name_3 = $("p3").innerHTML;
	name = name_1 +" "+ name_2 + " " + name_3;
	name = name.split(" ");
	name = name.reverse();
	alert(name);
}
/*定时自动改变字体颜色*/
var p_color = new Array("red","green","yellow","black");
var a=-1;
var b=-1;
var c=-1;
function changecolor_p1(){
	if(a==p_color.length){
		a=-1;
	}
	document.getElementById('p1').style.color=p_color[a];
	a++;
}
function changecolor_p2(){
	if(b==p_color.length){
		b=-1;
	}
	document.getElementById('p2').style.color=p_color[b];
	b++;
}
function changecolor_p3(){
	if(c==p_color.length){
		c=-1;
	}
	document.getElementById('p3').style.color=p_color[c];
	c++;
}
window.setInterval("changecolor_p1();",3000);
setTimeout("window.setInterval('changecolor_p2();',3000);",1000); 
setTimeout("window.setInterval('changecolor_p3();',3000);",2000); 