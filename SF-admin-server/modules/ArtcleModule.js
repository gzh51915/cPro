//文章
const mongoose=require('mongoose')
const artcleSchema = new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    read:{type:Number,default:0},
    collect:{type:Number,default:0},
    good:{type:Number,default:0},
    label:{type:String,required:true},
    content:{type:String,required:true},
    create_time:{type:Number,default:Date.now},
})

const ArtcleModule =mongoose.model('artcles',artcleSchema)



module.exports =ArtcleModule