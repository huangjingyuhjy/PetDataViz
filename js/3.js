 // 原始数据
        const marketData = [
            { "text": "宠物主粮", "value": 23.54, "rate": 55.58 },
            { "text": "宠物零食", "value": 15.95, "rate": 81.29 },
            { "text": "猫狗美容清洁用品", "value": 9.77, "rate": -25.12 },
            { "text": "猫砂", "value": 9.36, "rate": 48.33 },
            { "text": "猫狗日用品", "value": 5.94, "rate": 27.90 },
            { "text": "宠物活体", "value": 8.46, "rate": 20.75 },
            { "text": "猫狗保健品", "value": 4.71, "rate": 35.52 },
            { "text": "驱虫药物", "value": 2.11, "rate": 12.69 },
            { "text": "宠物医疗", "value": 12.32, "rate": 73.91 },
            { "text": "宠物体检", "value": 4.55, "rate": 41.35 },
            { "text": "宠物寄养", "value": 3.32, "rate": 61.46 },
            { "text": "智能宠物用品", "value": 1.22, "rate": 9.15 }
        ];

        // 网购率数据
        const onlinePurchaseData = {
            "宠物主粮": 83.9,
            "宠物零食": 73.6,
            "猫狗美容清洁用品": 49.4,
            "猫砂": 63.6,
            "猫狗日用品": 41.8,
            "宠物活体": 2.1,
            "猫狗保健品": 39.2,
            "驱虫药物": 62.2,
            "宠物医疗": 26.7,
            "宠物体检": 21.3,
            "宠物寄养": 12.2,
            "智能宠物用品": 27.9
        };

        // 计算总value值用于确定气泡大小比例
        const totalValue = marketData.reduce((sum, item) => sum + item.value, 0);

        // 准备ECharts数据格式
        const seriesData = marketData.map(item => ({
            name: item.text,
            value: [item.value, item.rate, item.value],
            // 调整气泡大小计算方式，使用对数缩放使大小差异更合理
            symbolSize: 20 + Math.sqrt(item.value / totalValue * 2500),
            onlineRate: onlinePurchaseData[item.text] || 0
        }));

        // 初始化图表
        const chartDom = document.getElementById('chart-container3');
        const myChart = echarts.init(chartDom);
        
        // 初始化仪表盘图表
        const gaugeDom = document.getElementById('gauge-container');
        const gaugeChart = echarts.init(gaugeDom);
        
        // 默认显示第一个产品的仪表盘
        updateGaugeChart(seriesData[0].name, seriesData[0].onlineRate);

        const option = {
         
            title: {
                text: '宠物产品市场分析',
                subtext: '气泡大小表示市场份额占比',
                left: 'center',
                top: 10
            },
            tooltip: {
                formatter: function(params) {
                    return `
                        <strong>${params.name}</strong><br/>
                        市场规模: ${params.value[0]}亿元<br/>
                        增长率: ${params.value[1]}%<br/>
                        网购率: ${params.data.onlineRate}%<br/>
                        占比: ${(params.value[0] / totalValue * 100).toFixed(2)}%
                    `;
                }
            },
            legend: {
                data: ['宠物产品'],
                right: 10,
                top: 20
            },
            grid: {
                left: '15%',  // 增加左边距
                right: '15%', // 增加右边距
                bottom: '15%',
                top: '20%'
            },
            xAxis: {
                name: '市场规模(亿元)',
                nameLocation: 'middle',
                nameGap: 30,
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#666'
                    }
                },
                min: 0,  // 设置x轴最小值
                max: 25   // 设置x轴最大值
            },
            yAxis: {
                name: '增长率(%)',
                nameLocation: 'middle',
                nameGap: 30,
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#666'
                    }
                },
                min: -30, // 设置y轴最小值
                max: 90   // 设置y轴最大值
            },
            series: [{
                name: '宠物产品',
                type: 'scatter',
                data: seriesData,
                symbolSize: function(data) {
                    return data.symbolSize;
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    color:'#EB531A',
                    shadowBlur: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowOffsetY: 2
                },
                label: {
                    show: true,
                    formatter: function(params) {
                        return params.name;
                    },
                    position: 'right',
                    fontSize: 12
                }
            }],
            visualMap: {
                show: false,
                dimension: 1, // 映射到增长率
                min: -30,
                max: 90,
                inRange: {
                    color: ['#f2d58c', '#f2c54e', '#c4a27f'] // 气泡变色
                }
            }
        };

        myChart.setOption(option);
        
        // 点击事件处理
        myChart.on('click', function(params) {
            updateGaugeChart(params.name, params.data.onlineRate);
        });
        
        // 更新仪表盘图表
        function updateGaugeChart(name, rate) {
            const gaugeOption = {
                title: {
                    text: `${name}网购率`,
                    left: 'center',
                    top: 20
                },
                tooltip: {
                    formatter: '{a} <br/>{b} : {c}%'
                },
                series: [
                    {
                        name: '网购率',
                        type: 'gauge',
                        min: 0,
                        max: 100,
                        radius: '80%',
                        progress: {
                            show: true,
                            width: 12,
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#f2d58c' // 0% 处的颜色
                                    }, {
                                        offset: 0.5,
                                        color: '#f2c54e' // 50% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#c4a27f' // 100% 处的颜色
                                    }]
                                }
                            }
                        },
                        detail: {
                            valueAnimation: true,
                            formatter: '{value}%',
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#333',
                            offsetCenter: [0, '70%']
                        },
                        axisLine: {
                            roundCap: true,
                            lineStyle: {
                                width: 12,
                                /*color: [
                                    [0.3, '#67e0e3'],
                                    [0.7, '#37a2da'],
                                    [1, '#fd666d']
                                ]*/
                            }
                        },
                        axisTick: {
                            distance: -12,
                            length: 6,
                            lineStyle: {
                                color: '#fff',
                                width: 1
                            }
                        },
                        splitLine: {
                            distance: -12,
                            length: 10,
                            lineStyle: {
                                color: '#fff',
                                width: 2
                            }
                        },
                        pointer: {
                            show: true,
                            length: '60%',
                            width: 4
                        },
                        anchor: {
                            show: true,
                            showAbove: true,
                            size: 14,
                            itemStyle: {
                                color: '#FAC858'
                            }
                        },
                        data: [
                            {
                                value: rate,
                                name: '网购率'
                            }
                        ]
                    }
                ]
            };
            
            gaugeChart.setOption(gaugeOption, true);
        }
        
        // 响应式调整
        window.addEventListener('resize', function() {
            myChart.resize();
            gaugeChart.resize();
        });