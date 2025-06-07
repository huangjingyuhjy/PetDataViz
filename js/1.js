var dom1 = document.getElementById('container1');
var myChart1 = echarts.init(dom1, null, {
  renderer: 'canvas',
  useDirtyRect: false
});

// 初始饼图数据
var initialPieData = [
  { name: '猫', value: 42947 },
  { name: '狗', value: 37996 },
  { name: '小宠类', value: 8690 },
  { name: '鸟类', value: 3003 },
  { name: '冷血类', value: 1875 },
  { name: '水族类', value: 7943 },
  { name: '其他', value: 54 }
];

var option1 = {
  color: ['#f4f2ec', '#f3ddc3', '#f2d58c', '#f2c54e', '#c4a27f', '#e1c9a5', '#d7af83'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '分类占比',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: initialPieData,  // 使用更新后的初始数据
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                   
                }
            }
        }
    ]
};

myChart1.setOption(option1);

// 分类数据
const categoryData = {
  '猫': [
    { name: '中华田园猫', value: 22454 },
    { name: '英国短毛猫', value: 10215 },
    { name: '美国短毛猫', value: 5104 },
    { name: '布偶猫', value: 3062 },
    { name: '暹罗猫', value: 1021 },
    { name: '其他品种', value: 1019 }
  ],
  '狗': [
    { name: '中华田园犬', value: 14725 },
    { name: '金毛犬', value: 6908 },
    { name: '柯基犬', value: 4605 },
    { name: '哈士奇', value: 3454 },
    { name: '泰迪犬', value: 3001 },
    { name: '拉布拉多', value: 3000 },
    { name: '其他品种', value: 2303 }
  ],
  '小宠类': [
    { name: '仓鼠', value: 3563 },
    { name: '兔子', value: 2486 },
    { name: '龙猫', value: 1433 },
    { name: '豚鼠', value: 1208 }
  ],
  '鸟类': [
    { name: '鹦鹉', value: 2905 },
    { name: '其他', value: 98 }
  ],
  '冷血类': [
    { name: '蜥蜴', value: 1300 },
    { name: '蛇', value: 516 },
    { name: '龟', value: 59 }
  ],
  '水族类': [
    { name: '热带鱼', value: 5263 },
    { name: '金鱼', value: 1478 },
    { name: '其他', value: 1202 }
  ],
  '其他': [
    { name: '蜘蛛', value: 38 },
    { name: '蝎子', value: 12 },
    { name: '其他', value: 4 }
  ]
};


// 初始化第二个图表（柱状图/折线图)
var dom2 = document.getElementById('container2');
var myChart2 = echarts.init(dom2, null, {
  renderer: 'canvas',
  useDirtyRect: false
});

var option2 = {
  color:['#f2d58c','#f2c54e'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['2023年金额', '2024年金额', '占比']
  },
  xAxis: [
    {
      type: 'category',
      data: ['猫', '狗', '小宠类', '鸟类', '冷血类', '水族类', '其他'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '金额',
      min: 0,
      max: 1600,
      interval: 320,
      axisLabel: {
        formatter: '{value} 亿'
      }
    },
    {
      type: 'value',
      name: '占比',
      min: 0,
      max: 50,
      interval: 10,
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: '2023年金额',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 亿';
        }
      },
      data: [
        1305, 1488, 352, 198, 35, 342, 7
      ]
    },
    {
      name: '2024年金额',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 亿';
        }
      },
      data: [
        1445, 1557, 433, 203, 48, 414, 11
      ]
    },
    {
      name: '占比',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [41.9, 37.1, 8.5, 2.3, 1.8, 7.8, 0.6]
    }
  ]
};

myChart2.setOption(option2);

// 添加点击事件
myChart2.on('click', function (params) {
    const categoryName = params.name;
    const pieData = categoryData[categoryName]; // 获取对应的数据
    if (pieData) {
        // 更新饼图数据
        myChart1.setOption({
            series: [{
                data: pieData
            }]
        });
    }
});





// 窗口大小改变时重新调整两个图表
window.addEventListener('resize', function() {
  myChart1.resize();
  myChart2.resize();
});