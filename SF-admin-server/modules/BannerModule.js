//用户
const mongoose=require('mongoose')

const iconSchema = new mongoose.Schema({
    imgs:String,
    introduce:String,
})

const BannerModule =mongoose.model('banners',iconSchema)


module.exports =BannerModule