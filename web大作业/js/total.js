/*自动打字功能的实现*/
$(document).ready(function(){
  types = ["你好，我是开发者小王。   ","欢迎来到我的网页。   ","请问你想了解我家乡的什么呢？"];
  words = $("#first-words");
  stopType = false;     //用于停止自动打字的
  index = 0;//索引
  tempWords = "";
  isNext = false;
  time = 300;//打字间隔
  initAutoType();//初始化自动打字
  $(".div_welcome").click(function(){
    if(types[index+1]!=null){
    words.html("");
    tempWords = "";
    index++;
    }
    else if(tempWords.length === types[index].length){
      clearInterval(startType);
      $(".div_welcome").fadeToggle(2000);
      setTimeout('$("#choice").fadeToggle("slow")',2000);//淡出淡入效果
    }
  });
});
  
var initAutoType = function(){
   startType = setInterval(function(){
    if(tempWords.length === types[index].length && types[index+1]!=null){
      words.html('');
      tempWords = "";
      index++;
    }
    tempWords = types[index].substring(0,tempWords.length+1);
    words.html("&nbsp;"+tempWords);
  },time);
};