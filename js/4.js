// 初始化图表
        const chart1 = echarts.init(document.getElementById('chart1'));
        const chart2 = echarts.init(document.getElementById('chart2'));
        const chart3 = echarts.init(document.getElementById('chart3'));
        
        // 图标定义
     
const catIcon = 'image://cat.png'; // 注意三个斜杠
        const dogIcon = 'image://dog.png';
        const boneIcon = 'image://bone.png';

        //总数
        const totalFeed=23.54;
        const totalSupplement=4.71;

        // 图表1：口粮来源偏好
        const option4 = {
            title: {
                // text: '宠物口粮来源偏好',
                // with:'30px',
                // height:'40px'
                left:'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                max: 100,
                splitLine: { show: false },
                offset: 10,
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLabel: {
                    margin: 10,
                    formatter: '{value}%',
                }
            },
            yAxis: {
                type: 'category',
                data: ['无所谓', '进口', '国产'],
                inverse: true,
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: {
                    margin: 10,
                    color: '#999',
                    fontSize: 16
                }
            },
            grid: {
                top: '3%',
                height:  300,
                left: 70,
                right: 100
            },
            series: [
                {
                    type: 'pictorialBar',
                    symbol: catIcon,
                    symbolRepeat: 'fixed',
                    symbolMargin: '10%',
                    symbolClip: true,
                    symbolSize: 30,
                    symbolBoundingData: 100,
                    data: [24.6, 17.7, 57.7],
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{c}%',
                        offset: [10, 0],
                        color: 'green',
                        fontSize: 18
                    },
                    z: 10
                },
                {
                    type: 'pictorialBar',
                    itemStyle: {
                        opacity: 0.2
                    },
                    animationDuration: 0,
                    symbolRepeat: 'fixed',
                    symbolMargin: '10%',
                    symbol: catIcon,
                    symbolSize: 30,
                    symbolBoundingData: 100,
                    data: [24.6 * totalFeed/100, 17.7 * totalFeed/100, 57.7 * totalFeed/100].map(value => parseFloat(value.toFixed(2))),
                    z: 5
                }
            ]
        };

        // 图表2：口粮品类偏好
        const option5 = {
            title: {
                 text: '宠物口粮品类偏好',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                max: 100,
                splitLine: { show: false },
                offset: 10,
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLabel: {
                    margin: 10,
                    formatter: '{value}%'
                }
            },
            yAxis: {
                type: 'category',
                data: ['无所谓', '处方粮', '商品粮', '冻干粮', '罐头', '天然粮'],
                inverse: true,
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: {
                    margin: 10,
                    color: '#999',
                    fontSize: 16
                }
            },
            grid: {
                top: '10%',
                height: 300,
                left: 70,
                right: 100
            },
            series: [
                {
                    type: 'pictorialBar',
                    symbol: dogIcon,
                    symbolRepeat: 'fixed',
                    symbolMargin: '5%',
                    symbolClip: true,
                    symbolSize: 30,
                    symbolBoundingData: 100,
                    data: [2.7, 7.8, 18.6, 22.0, 23.4, 25.5],
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{c}%',
                        offset: [10, 0],
                        color: 'green',
                        fontSize: 18
                    },
                    z: 10
                },
                {
                    type: 'pictorialBar',
                    itemStyle: {
                        opacity: 0.2
                    },
                    label: {
                        show: false
                    },
                    animationDuration: 0,
                    symbolRepeat: 'fixed',
                    symbolMargin: '5%',
                    symbol: dogIcon,
                    symbolSize: 30,
                    symbolBoundingData: 100,
                    data: [2.7* totalFeed/100, 7.8* totalFeed/100, 18.6* totalFeed/100, 22.0* totalFeed/100, 23.4* totalFeed/100, 25.5* totalFeed/100].map(value => parseFloat(value.toFixed(2))),
                    z: 5
                }
            ]
        };

        // 图表3：保健品品类偏好
        const option6 = {
            title: {
                text: '宠物保健品品类偏好',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                max: 100,
                splitLine: { show: false },
                offset: 10,
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLabel: {
                    margin: 10,
                    formatter: '{value}%'
                }
            },
            yAxis: {
                type: 'category',
                data: ['补血肝精', '心脏保护', '免疫蛋白', '钙片', '维生素', '益生菌'],
                inverse: true,
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: {
                    margin: 10,
                    color: '#999',
                    fontSize: 14
                }
            },
            grid: {
                top: '10%',
                height: 300,
                left: 70,
                right: 100
            },
            series: [
                {
                    type: 'pictorialBar',
                    symbol: boneIcon,
                    symbolRepeat: 'fixed',
                    symbolMargin: '5%',
                    symbolClip: true,
                    symbolSize: 30,
                    symbolBoundingData: 100,
                    data: [37.4, 42.6, 48.8, 59.5, 66.7, 66.5],
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{c}%',
                        offset: [10, 0],
                        color: 'green',
                        fontSize: 18
                    },
                    z: 10
                },
                {
                    type: 'pictorialBar',
                    itemStyle: {
                        opacity: 0.2
                    },
                    label: {
                        show: false
                    },
                    animationDuration: 0,
                    symbolRepeat: 'fixed',
                    symbolMargin: '5%',
                    symbol: boneIcon,
                    symbolSize: 30,
                    symbolBoundingData: 100,
                    data: [37.4*totalSupplement/100, 42.6*totalSupplement/100, 48.8*totalSupplement/100, 59.5*totalSupplement/100, 66.7*totalSupplement/100, 66.5*totalSupplement/100].map(value => parseFloat(value.toFixed(2))),
                    z: 5
                }
            ]
        };

        // 设置图表选项
        chart1.setOption(option4);
        chart2.setOption(option5);
        chart3.setOption(option6);

        // 响应式调整
        window.addEventListener('resize', function() {
            chart1.resize();
            chart2.resize();
            chart3.resize();
        });