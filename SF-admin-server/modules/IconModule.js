//用户
const mongoose=require('mongoose')

const iconSchema = new mongoose.Schema({
    name:{type: String, required: true},
    iconUrl:String,
    slug:String,
    url:String
})

const IconModule =mongoose.model('icons',iconSchema)


module.exports =IconModule