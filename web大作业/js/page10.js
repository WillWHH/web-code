function saveStorage(id) {
            //获取textarea的value值
            var data = document.getElementById(id).value;
            //获取当前时间戳
            var time = new Date().getTime();
            //将时间戳作为键值，textarea的value值作为键值的内容保存在本地数据库
            localStorage.setItem(time,data);
            //保存成功后提示成功
            console.log("数据已保存");
            //设置loadStorage函数的传参（ID值）
            loadStorage('msg');
        }

        function loadStorage(id) {
            var result = '<li class="mes-content">';
            //遍历本地数据所有内容
             for(var i = 0; i < localStorage.length; i++) {
                //获取每一条新增的键值
                var kes = localStorage.key(i);
                //获取新增键值的内容
                var value = localStorage.getItem(kes);
                //获取时间对象
                var date = new Date();
                //将时间戳转化为正常时间 Mon Jun 19 1972 11:12:44 GMT+0800 (中国标准时间) 的格式
                date.setTime(kes);
                //将转化后的内容变成字符串
                var datestr = date.toGMTString();
                //将所有新增内容添加到result变量中
                result += '<h3>匿名用户:</h3>' +'<p style="margin-left: 120px;">'+ value + '</p>'+'<small style="margin-left: 65%;">' + datestr + '</small><hr>'
            }
            result += '</li>';
            var target = document.getElementById(id);
            //将所有内容添加到元素中显示
            target.innerHTML = result;

        }

        function clearStorage() {
            //清除本地储存所有内容
            localStorage.clear();
            document.getElementById('msg').innerHTML="";
            console.log("清除完毕");
        }
//读取本地储存中的内容
window.onload=function(){
    loadStorage('msg');
   }
