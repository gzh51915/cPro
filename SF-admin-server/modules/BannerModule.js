//用户
const mongoose=require('mongoose')

const iconSchema = new mongoose.Schema({
    address:{type:Array,default:[]},
    introduce:String,
})

const BannerModule =mongoose.model('banners',iconSchema)


module.exports =BannerModule