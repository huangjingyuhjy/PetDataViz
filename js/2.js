      // 等待DOM加载完成
      document.addEventListener('DOMContentLoaded', function() {
        // 1. 初始化桑基图
        var sankeyChart = echarts.init(document.getElementById('chart-container'));
        
        // 桑基图数据
        var sankeyData = {
            nodes: [
                {name: '男性'},
                {name: '女性'},
                {name: '一线城市'},
                {name: '二线城市'},
                {name: '三线城市'},
                {name: '四线城市'},
                {name: '五线城市'},
                {name: '18岁-24岁'},
                {name: '25岁-35岁'},
                {name: '35岁-45岁'},
                {name: '46岁以上'},
                {name: '公务员'},
                {name: '专业人士'},
                {name: '企业职员'},
                {name: '自由职业者'},
                {name: '其他'},
            ],
            links: [
                {source: '18岁-24岁',target:'男性',value:58},
                {source: '25岁-35岁',target:'男性',value:251},
                {source: '35岁-45岁',target:'男性',value:81},
                {source: '46岁以上',target:'男性',value:17},
                {source: '18岁-24岁',target:'女性',value:85},
                {source: '25岁-35岁',target:'女性',value:360},
                {source: '35岁-45岁',target:'女性',value:110},
                {source: '46岁以上',target:'女性',value:18},
                {source: '男性', target: '一线城市', value: 90},
                {source: '男性', target: '二线城市', value: 104},
                {source: '男性', target: '三线城市', value: 142},
                {source: '男性', target: '四线城市', value: 58},
                {source: '男性', target: '五线城市', value: 13},
                {source: '女性', target: '一线城市', value: 130},
                {source: '女性', target: '二线城市', value: 124},
                {source: '女性', target: '三线城市', value: 172},
                {source: '女性', target: '四线城市', value: 102},
                {source: '女性', target: '五线城市', value: 65},
                {source: '三线城市', target: '公务员', value: 18},
                {source: '三线城市', target: '专业人士', value: 43},
                {source: '三线城市', target: '企业职员', value: 175},
                {source: '三线城市', target: '自由职业者', value: 60},
                {source: '三线城市', target: '其他', value: 18},
                {source: '二线城市', target: '公务员', value: 13},
                {source: '二线城市', target: '专业人士', value: 31},
                {source: '二线城市', target: '企业职员', value: 127},
                {source: '二线城市', target: '自由职业者', value: 43},
                {source: '二线城市', target: '其他', value: 14},
                {source: '一线城市', target: '公务员', value: 13},
                {source: '一线城市', target: '专业人士', value: 30},
                {source: '一线城市', target: '企业职员', value: 123},
                {source: '一线城市', target: '自由职业者', value: 42},
                {source: '一线城市', target: '其他', value: 12},
                {source: '四线城市', target: '公务员', value: 9},
                {source: '四线城市', target: '专业人士', value: 22},
                {source: '四线城市', target: '企业职员', value: 89},
                {source: '四线城市', target: '自由职业者', value: 30},
                {source: '四线城市', target: '其他', value: 19},
                {source: '五线城市', target: '公务员', value: 5},
                {source: '五线城市', target: '专业人士', value: 11},
                {source: '五线城市', target: '企业职员', value: 43},
                {source: '五线城市', target: '自由职业者', value: 14},
                {source: '五线城市', target: '其他', value: 5},
            ]
        };
    
        // 桑基图配置
        sankeyChart.setOption({
            title: {
                text: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            }, 
            series: [
                {
                    type: 'sankey',
                    data: sankeyData.nodes,
                    links: sankeyData.links,
                    emphasis: {
                        focus: 'adjacency'
                    },
                    levels: [
                        {
                            depth: 0,
                            itemStyle: {
                                color: '#d7af83'
                            },
                            lineStyle:{
                                color: '#d7af83'
                            }
                        },
                        {
                            depth: 1,
                            itemStyle: {
                                color: '#9d8063'
                            },
                            lineStyle:{
                                color: '#9d8063'
                            }
                        },
                        {
                            depth: 2,
                            itemStyle: {
                                color: '#d0c8bb'
                            },
                            lineStyle:{
                                color: '#doc8bb'
                            }
                        },
                        {
                            depth: 3,
                            itemStyle: {
                                color: '#c4a27f'
                            },
                            lineStyle:{
                                color: '#c4a27f'
                            }
                        }
                    ],
                    lineStyle: {
                        curveness: 0.5
                    }
                }
            ]
        });
       
// 初始化图表
    var xuchart = echarts.init(document.getElementById('xu-chart'));
    
    const colors = ['#f4f2ec', '#f3ddc3', '#f2d58c', '#f2c54e', '#c4a27f'];
    const bgColor = '#ffb347';
    
    const itemStyle = {
      
        star5: {
            color: colors[3]
        },
        star4: {
            color: colors[2]
        },
        star3: {
            color: colors[1]
        },
        star2: {
            color: colors[0]
        }
    };
    // 目录相关内容推荐（可根据实际情况扩充）
const recommendationMap = {
    '年度体检': '定期体检可以早期发现宠物潜在健康问题，建议每年至少一次全面体检。',
    '紧急救治': '宠物突发疾病或受伤时，应立即联系24小时宠物医院进行救治。',
    '驱虫计划': '根据宠物年龄和生活方式制定驱虫计划，通常每月一次体外驱虫，每季度一次体内驱虫。',
    '牙齿护理': '定期刷牙和专业洗牙可预防牙结石和牙龈疾病，建议每周刷牙2-3次。',
    '核心疫苗': '犬核心疫苗包括犬瘟热、细小病毒等；猫核心疫苗包括猫瘟、猫杯状病毒等。',
    '狂犬疫苗': '法律要求的疫苗，首次免疫后需要定期加强，通常每1-3年一次。',
    '绝育手术': '绝育可减少生殖系统疾病风险和行为问题，建议在宠物性成熟前进行。',
    '非核心疫苗': '根据宠物生活方式和地区流行病情况选择，如犬窝咳、猫白血病等疫苗。',
    '优质主粮': '选择符合AAFCO标准的主粮，根据宠物年龄、体型和健康状况选择合适配方。',
    '清洁饮水': '每天更换新鲜饮用水，保持水碗清洁，多饮水有助于泌尿系统健康。',
    '定时定量': '成年宠物一般每日2餐，幼犬幼猫需要3-4餐，避免自由采食导致肥胖。',
    '营养添加剂': '如鱼油、关节保健品等，应在兽医指导下补充，不可过量。',
    '功能性零食': '如洁牙零食、益生菌零食等，可作为训练奖励或特殊需求补充。',
    '节日特餐': '特殊日子的加餐，注意控制分量和食材安全性，避免人类高糖高盐食物。',
    '如厕训练': '幼犬到家后应立即开始训练，建立固定排泄地点和规律，使用正向强化方法。',
    '社交训练': '在疫苗完全后开始，让宠物接触不同人、动物和环境，培养良好社交能力。',
    '基本指令': '如坐下、等待、召回等基础指令训练，建议每天短时间多次练习。',
    '分离焦虑': '逐步延长独处时间，提供益智玩具，严重情况需专业行为矫正或药物辅助。',
    '吠叫控制': '找出吠叫原因，通过训练减少不必要的吠叫，避免惩罚性方法。',
    '安全围栏': '室内外安全围栏可防止宠物走失或进入危险区域，高度应根据宠物跳跃能力选择。',
    '危险品收纳': '将电线、清洁剂、药品等收纳在宠物无法触及的地方，避免误食中毒。',
    '舒适窝垫': '提供安静舒适的休息区域，定期清洗，老年宠物可能需要 orthopedic 床垫。',
    '牵引绳': '外出必备，根据宠物体型选择合适的款式和长度，确保控制力和舒适性。',
    '宠物推车': '适合老年、伤病或小型宠物，提供遮阳和通风，选择稳固易操控的款式。'
};

    
    const petcaredata = [
      
        {
          name: '医疗护理',
          
          children: [
            {
              name: '基础医疗',
              children: [
                {
                  name: '5☆',
                  children: [
                    { name: '年度体检' },
                    { name: '紧急救治' }
                  ]
                },
                {
                  name: '4☆',
                  children: [
                    { name: '驱虫计划' },
                    { name: '牙齿护理' }
                  ]
                }
              ]
            },
            {
              name: '预防措施',
              children: [
                {
                  name: '5☆',
                  children: [
                    { name: '核心疫苗' },
                    { name: '狂犬疫苗' }
                  ]
                },
                {
                  name: '4☆',
                  children: [
                    { name: '绝育手术' }
                  ]
                },
                {
                  name: '3☆',
                  children: [
                    { name: '非核心疫苗' }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: '饮食营养',
         
          children: [
            {
              name: '基础饮食',
              children: [
                {
                  name: '5☆',
                  children: [
                    { name: '优质主粮' },
                    { name: '清洁饮水' }
                  ]
                },
                {
                  name: '4☆',
                  children: [
                    { name: '定时定量' }
                  ]
                }
              ]
            },
            {
              name: '健康补充',
              children: [
                {
                  name: '4☆',
                  children: [
                    { name: '营养添加剂' }
                  ]
                },
                {
                  name: '3☆',
                  children: [
                    { name: '功能性零食' }
                  ]
                },
                {
                  name: '2☆',
                  children: [
                    { name: '节日特餐' }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: '行为训练',
         
          children: [
            {
              name: '基础训练',
              children: [
                {
                  name: '5☆',
                  children: [
                    { name: '如厕训练' },
                    { name: '社交训练' }
                  ]
                },
                {
                  name: '4☆',
                  children: [
                    { name: '基本指令' }
                  ]
                }
              ]
            },
            {
              name: '行为矫正',
              children: [
                {
                  name: '4☆',
                  children: [
                    { name: '分离焦虑' }
                  ]
                },
                {
                  name: '3☆',
                  children: [
                    { name: '吠叫控制' }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: '生活环境',
          
          children: [
            {
              name: '居住安全',
              children: [
                {
                  name: '5☆',
                  children: [
                    { name: '安全围栏' },
                    { name: '危险品收纳' }
                  ]
                },
                {
                  name: '4☆',
                  children: [
                    { name: '舒适窝垫' }
                  ]
                }
              ]
            },
            {
              name: '外出装备',
              children: [
                {
                  name: '4☆',
                  children: [
                    { name: '牵引绳' }
                  ]
                },
                {
                  name: '3☆',
                  children: [
                    { name: '宠物推车' }
                  ]
                }
              ]
            }
          ]
        }
      ];
      const scoreMap = {
    '5☆': { color: colors[3], name: '5星', desc: '极为重要，优先保障' },
    '4☆': { color: colors[2], name: '4星', desc: '很重要，建议保证' },
    '3☆': { color: colors[1], name: '3星', desc: '有益，视情况提供' },
    '2☆': { color: colors[0], name: '2星', desc: '可选，提升体验' }
};
    
    // 处理数据
    for (let j = 0; j < petcaredata.length; ++j) {
        let level1 = petcaredata[j].children;
        for (let i = 0; i < level1.length; ++i) {
            let block = level1[i].children;
            let bookScore = [];
            let bookScoreId;
            for (let star = 0; star < block.length; ++star) {
                let style = (function (name) {
                    switch (name) {
                        case '5☆':
                            bookScoreId = 0;
                            return itemStyle.star5;
                        case '4☆':
                            bookScoreId = 1;
                            return itemStyle.star4;
                        case '3☆':
                            bookScoreId = 2;
                            return itemStyle.star3;
                        case '2☆':
                            bookScoreId = 3;
                            return itemStyle.star2;
                    }
                })(block[star].name);
                
                block[star].label = {
                    color: style.color,
                    downplay: {
                        // opacity: 0.5
                    }
                };
                
                if (block[star].children) {
                    style = {
                        opacity: 1,
                        color: style.color
                    };
                    block[star].children.forEach(function (book) {
                        book.value = 1;
                        book.itemStyle = style;
                        book.label = {
                            color: style.color
                        };
                        let value = 1;
                        if (bookScoreId === 0 || bookScoreId === 3) {
                            value = 5;
                        }
                        if (bookScore[bookScoreId]) {
                            bookScore[bookScoreId].value += value;
                        } else {
                            bookScore[bookScoreId] = {
                                color: colors[bookScoreId],
                                value: value
                            };
                        }
                    });
                }
            }
            // level1[i].itemStyle = {
            //     color: petcaredata[j].itemStyle.color
            // };
        }
    }
    
    // 配置项
    var option = {
        // backgroundColor: bgColor,
        color: colors,
        series: [
            {
                type: 'sunburst',
                center: ['50%', '50%'],
                data: petcaredata,
                sort: function (a, b) {
                    if (a.depth === 1) {
                        return b.getValue() - a.getValue();
                    } else {
                        return a.dataIndex - b.dataIndex;
                    }
                },
                label: {
            rotate: 'radial',
            color: '#000000', // 强制设置为黑色
            textShadowBlur: 0,
            textShadowColor: 'transparent',
            opacity: 1,
            fontSize: 12, // 可选：调整字体大小
            fontWeight: 'normal' // 可选：调整字体粗细
        },
                levels: [
                    {},
                    {
                        r0: 0,
                        r: 50,
                        label: {
                            rotate: 0,
                            textShadowBlur: 0,  // 去除文字阴影模糊
                            color: '#000000',
                        opacity: 1  // 确保完全不透明
                        }
                    },
                    {
                        r0: 50,
                        r: 100
                    },
                    {
                        r0: 100,
                        r: 150,
                        itemStyle: {
                            shadowBlur: 2,
                            shadowColor: colors[2],
                            color: 'transparent'
                        },
                        label: {
                            rotate: 'tangential',
                            color: '#000000',
                            fontSize: 10,
                            color: colors[0]
                        }
                    },
                    {
                        r0: 150,
                        r: 200,
                        itemStyle: {
                            shadowBlur: 80,
                            shadowColor: colors[0]
                        },
                        label: {
                            position: 'outside',
                            textShadowBlur: 5,
                            color: '#000000',
                            //textShadowColor: '#333'
                        },
                        downplay: {
                            label: {
                                opacity: 0.5
                            }
                        }
                    }
                ]
            }
        ]
    };
    
    // 使用配置项显示图表
    xuchart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        xuchart.resize();
    })

// ================== 联动部分 ==================

// 渲染评分颜色标签
function renderScoreTags() {
    const xuBox = document.getElementById('xu-neirong');
    if (!xuBox) return;
    let html = '<div style="margin-bottom:15px;padding:10px;border-radius:5px;">';
    html += '<div style="font-weight:bold;margin-bottom:8px;color= #f2d58c;">Tips:点击旭日图内容可以获取推荐</div>';
    html += '<div style="font-weight:bold;margin-bottom:8px;">星级说明：</div>';
    Object.keys(scoreMap).forEach(key => {
        html += `<div style="display:inline-block;margin-right:15px;margin-bottom:5px;">
            <span style="display:inline-block;width:12px;height:12px;border-radius:2px;background:${scoreMap[key].color};margin-right:5px;"></span>
            <span>${scoreMap[key].name} - ${scoreMap[key].desc}</span>
        </div>`;
    });
    html += '</div>';
    xuBox.innerHTML = html;
}
renderScoreTags();

function renderRecommendation(params) {
    const xuBox = document.getElementById('xu-neirong');
    if (!xuBox) return;

    const node = params?.data;
    if (!node) return;

    // 获取treePathInfo，判断层级（第一级无名，第二级treePathInfo.length==1）
    const path = params.treePathInfo || [];
    let html = '';
    // ========== 3级目录：展示本级下所有星级和项目 ==========
    if (path.length === 3) {
        html += `<div style="font-size:16px;font-weight:bold;margin-bottom:8px;">${node.name}</div>`;
        if (node.children) {
            node.children.forEach(starNode => {
                // 星级标志
                let starHtml = '';
                if (scoreMap[starNode.name]) {
                    starHtml = `<span style="display:inline-block;margin-left:8px;padding:1px 6px;border-radius:10px;color:#fff;background:${scoreMap[starNode.name].color};font-size:12px;">
                        ${starNode.name}
                    </span>`;
                }
                html += `<div style="margin:8px 0 2px 0;padding-left:4px;"><b>${starNode.name}</b> ${starHtml}</div>`;
                if (starNode.children) {
                    html += `<ul style="padding-left:18px;margin:0;">`;
                    starNode.children.forEach(leaf => {
                        let rec = recommendationMap[leaf.name] || '暂无内容推荐';
                        html += `<li><b>${leaf.name}</b>：${rec}</li>`;
                    });
                    html += `</ul>`;
                }
            });
        }
        xuBox.innerHTML = html;
        return;
    }

    // ========== 4级目录（星级）：展示所有项目 ==========
    if (scoreMap[node.name]) {
        html += `<div style="font-size:16px;font-weight:bold;margin-bottom:8px;">
            <span style="color:${scoreMap[node.name].color};">${node.name}</span>
        </div>`;
        if (node.children) {
            html += `<ul style="padding-left:20px;">`;
            node.children.forEach(leaf => {
                let rec = recommendationMap[leaf.name] || '暂无内容推荐';
                html += `<li><b>${leaf.name}</b>：${rec}</li>`;
            });
            html += `</ul>`;
        }
        xuBox.innerHTML = html;
        return;
    }

    // ========== 5级目录（项目/叶子）：只展示自己 ==========
    if (!node.children) {
        // 找到父级星级
        let parentScore = '', scoreColor = '';
        if (path.length > 0) {
            for (const nodeInfo of path) {
                if (scoreMap[nodeInfo.name]) {
                    parentScore = nodeInfo.name;
                    scoreColor = scoreMap[parentScore].color;
                    break;
                }
            }
        }
        html += `<div style="margin-bottom:12px;">
            <span style="font-size:16px;font-weight:bold;">${node.name}</span>
            ${parentScore ? `<span style="display:inline-block;margin-left:12px;padding:2px 8px;border-radius:12px;background:${scoreColor};color:#fff;">${parentScore}</span>` : ''}
        </div>`;
        html += `<div style="color:#333;font-size:14px;">${recommendationMap[node.name] || '暂无内容推荐'}</div>`;
        xuBox.innerHTML = html;
        return;
    }
}
// 图表点击事件
xuchart.on('click', function(params) {
    renderRecommendation(params);
});

// 可选：鼠标移出图表时还原
xuchart.getZr().on('click', function(event) {
    // 检查点击是否在图表外
    const pointInPixel = xuchart.convertFromPixel({ seriesIndex: 0 }, [event.offsetX, event.offsetY]);
    if (!pointInPixel || isNaN(pointInPixel[0])) {
        renderScoreTags();
    }
});

    });