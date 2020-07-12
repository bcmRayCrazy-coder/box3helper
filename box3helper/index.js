//element导入
layui.use('element', function(){
    var element = layui.element;
    
    //…
});
//轮播导入
layui.use('carousel', function(){
  var carousel = layui.carousel;
  //建造实例
  carousel.render({
    elem: '#test1'
    ,width: '100%' //设置容器宽度
    ,arrow: 'always' //始终显示箭头
    ,anim: 'default' //切换动画方式
    ,interval: 3000 //切换间隔时间
  });
});
//消息框导入
layui.use('layer',function(){})
function msg(word){
  layer.msg(word);
}
//滑块导入
layui.use('slider', function(){
  var slider = layui.slider;
  
  //渲染
  slider.render({
    elem: '#slideTime'  //绑定元素
    ,max: 25
    ,tips: false
  });
});

function goTo(link){
  window.location.href = link;
}