//问题
const mongoose=require('mongoose')
const questionSchema = new mongoose.Schema({
    username:{type:String,required:true},
    questions:{type:String,required:true},
    read:{type:Number,default:0},
    bad:{type:Number,default:0},
    good:{type:Number,default:0},
    label:{type:String,required:true},
    desc:String,
    create_time:{type:Number,default:Date.now},
})

const QuestionsModule =mongoose.model('questions',questionSchema)



module.exports =QuestionsModule