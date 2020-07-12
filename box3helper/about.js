layui.use('rate', function(){
    var rate = layui.rate;
   
    //渲染
    var ins1 = rate.render({
      elem: '#rateDiv' //绑定元素
      ,setText: function(value){
        var arrs = {
          '1': '极差'
          ,'2': '差'
          ,'3': '中等'
          ,'4': '好'
        };
      }
    });
  });

function tabShow(tab){
  var t = document.getElementById(tab);
  t.style.display = 'block';
}