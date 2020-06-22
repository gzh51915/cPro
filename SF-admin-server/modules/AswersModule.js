//文章
const mongoose=require('mongoose')
const answerSchema = new mongoose.Schema({
    username:{type:String,required:true}, //回答的用户名
    question_id:{type:String,required:true}, //问题的id
    answers:{type:String,required:true}, //回答的内容
    bad:{type:Number,default:0},
    good:{type:Number,default:0},
    create_time:{type:Number,default:Date.now},
})

const AnswerModule =mongoose.model('answers',answerSchema)



module.exports =AnswerModule