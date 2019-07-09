window.onload=function(){
    var map = new BMap.Map("allmap"); //创建地图实例 
    map.centerAndZoom(new BMap.Point(116.18 , 23.30), 18); //定位
    map.addControl(new BMap.NavigationControl());
    map.enableKeyboard();//允许键盘操作
    var point = new BMap.Point(116.18 , 23.30); //将标注点转化成地图上的点
    var marker = new BMap.Marker(point); //将点转化成标注点
    map.addOverlay(marker); //添加标记
    document.onkeydown= function (e) {
        var theEvent = window.event || e; 
        var code = theEvent.keyCode || theEvent.which; 
        if(code ==8||27){
            map.panTo(point);
        }
    }//热键绑定
    /*添加地图标签*/
    var label = new BMap.Label("普宁市", {
    offset: new BMap.Size(-82, -45)
    });
    label.setStyle({
    width: "200px",
    color: '#fff',
    background: '#ff8355',
    border: '1px solid "#ff8355"',
    borderRadius: "5px",
    textAlign: "center",
    height: "40px",
    lineHeight: "41px",
    fontSize: "16px",
    });
    marker.setLabel(label);
    window.onbeforeunload=function(){
    localStorage.clear();
   }
}
