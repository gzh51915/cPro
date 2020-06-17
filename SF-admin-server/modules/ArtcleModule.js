//文章
const mongoose=require('mongoose')
const artcleSchema = new mongoose.Schema({
    title:String,
    author:String,
    read:Number,
    collect:Number,
    good:Number,
    userid:Number,
    label:String,
    content:String,
    crea_time:{type:Number,default:Date.now},
})

const ArtcleModule =mongoose.model('artcles',artcleSchema)



module.exports =ArtcleModule