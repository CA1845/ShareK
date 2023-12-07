function showTime(){
    var t = new Date();
    document.querySelector('#div1 .time').innerHTML = t.toLocaleString()
}
showTime()
setInterval(showTime,1000)

function getData(){
    $.ajax({
        type:'get',
        url:'http://localhost:3000/echatY',
        success: function(res){
            console.log(res)
            Sells(res);
        }
    })
}
getData()
function Sells(data){
     // 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.getElementById('main'));

     // 指定图表的配置项和数据
     var option = {
       title: {
         text: 'ECharts Demo'
       },
       tooltip: {},
       legend: {
         data: ['销量']
       },
       xAxis: {
         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
       },
       yAxis: {},
       series: [
         {
           name: '销量',
           type: 'bar',
           data: data
         }
       ]
     };

     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
}