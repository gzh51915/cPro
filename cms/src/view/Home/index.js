import React, { Component ,createRef} from 'react'
import { Card } from 'antd';
import {UserOutlined,EyeOutlined,MessageOutlined,FormOutlined} from '@ant-design/icons'
import './index.scss'
import echarts from 'echarts'

// 计算截至目前的6个月（不包括当前月份）
function getMonth (){
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let maxMonth = year+'/'+month
    let minMonth = year+'/'+(month-6)
    let arrayMonth = []
    let monthCopy = month
    for(var i = 0 ; i < 6 ; i++){
        arrayMonth.push(monthCopy+'月')
        monthCopy--
    }
    if(month-6<0){
        minMonth=(year-1)+'/'+(12-(6-month-1))
        let min = 12-(6-month-1)
        arrayMonth=[]
        for(i = 0 ; i < 6 ; i++){
            arrayMonth.push(min+'月')
            if(min===12){
                min=0   
            }
            min++
        }
    }
    return {minMonth,maxMonth,arrayMonth}
}

function getOption(data){
    var option =  {
        title: {
            text: `${getMonth().minMonth}-${getMonth().maxMonth}${data.title}`
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: [`${data.title}`]
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: getMonth().arrayMonth
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: `${data.title}`,
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {},
                data: data.num
            }
        ]
    };
    return option
}

export default class Home extends Component {
    constructor(){
        super()
        this.articleAmountOne = createRef()
        this.articleAmountTwo = createRef()
        this.articleAmountThree = createRef()
        this.articleAmountFour = createRef()
    }

    initArticleChartOne=()=>{
            let data={
                title:"总用户量",
                num:[300056, 322222, 356864, 415195, 449153, 501122, 545123]
            }
            var option =  getOption(data)
            // 使用刚指定的配置项和数据显示图表。
            this.articleChartOne.setOption(option);
        // })
    }
    initArticleChartTwo=()=>{
            let data={
                title:"总访问量",
                num:[265541, 329262, 192542, 225541, 325541, 401122, 206549]
            }
            var option =  getOption(data)
            // 使用刚指定的配置项和数据显示图表。
            this.articleChartTwo.setOption(option);
        // })
    }
    initArticleChartThree=()=>{
            let data={
                title:"文章总量",
                num:[2567, 2654, 2865, 2955, 3066, 3153, 3252]
            }
            var option =  getOption(data)
            // 使用刚指定的配置项和数据显示图表。
            this.articleAmountThree.setOption(option);
        // })
    }
    initArticleChartFour=()=>{
            let data={
                title:"问答总量",
                num:[868, 954, 1154, 1234, 1352, 1532, 1666]
            }
            var option =  getOption(data)
            // 使用刚指定的配置项和数据显示图表。
            this.articleAmountFour.setOption(option);
        // })
    }

    componentDidMount(){
        this.articleChartOne = echarts.init(this.articleAmountOne.current)
        this.articleChartTwo = echarts.init(this.articleAmountTwo.current)
        this.articleAmountThree = echarts.init(this.articleAmountThree.current)
        this.articleAmountFour = echarts.init(this.articleAmountFour.current)
        this.initArticleChartOne()
        this.initArticleChartTwo()
        this.initArticleChartThree()
        this.initArticleChartFour()
    }
    render() {
        return (
            <>
                <Card title="概览" bordered={false} style={{ width: "100%" }} >
                    <div className="box">
                        <div className="box_usernum box_wrap">
                            <UserOutlined style={{fontSize:40,color:"rgba(0,0,0,0.1)"}} />
                            <div className="box_contnet">
                                <h3>总用户量</h3>
                                <p>545123</p>
                            </div>
                        </div>
                        <div className="box_visits box_wrap">
                            <EyeOutlined style={{fontSize:40,color:"rgba(0,0,0,0.1)"}} />
                            <div className="box_contnet">
                                <h3>总访问量</h3>
                                <p>206549</p>
                            </div>
                        </div>
                        <div className="box_article box_wrap">
                            <FormOutlined style={{fontSize:40,color:"rgba(0,0,0,0.1)"}} />
                            <div className="box_contnet">
                                <h3>文章总量</h3>
                                <p>3252</p>
                            </div>
                        </div>
                        <div className="box_answer box_wrap">
                            <MessageOutlined style={{fontSize:40,color:"rgba(0,0,0,0.1)"}} />
                            <div className="box_contnet">
                                <h3>问答总量</h3>
                                <p>1666</p>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card title="数据总览" bordered={false} style={{ width: "100%" }} >
                    <div className="Dashbord">
                        <div className="Dashbord_wrap">
                            <div ref={this.articleAmountOne} id="userDashbord"></div>
                            <div ref={this.articleAmountTwo} id="visitsDashbord"></div>
                        </div>
                        <div className="Dashbord_wrap">
                            <div ref={this.articleAmountThree} id="articleDashbord"></div>
                            <div ref={this.articleAmountFour} id="answerDashbord"></div>
                        </div>
                    </div>
                </Card>
            </>
        )
    }
}
