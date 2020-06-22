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
export default getMonth